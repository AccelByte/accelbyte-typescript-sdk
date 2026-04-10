/*
 * Copyright (c) 2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { afterEach, describe, expect, test } from 'vitest'
import { CodegenConfig } from '../CodegenConfig'
import { TemplateZod, TemplateZodArray } from './template-zod'

const render = (fileName: string, definition: Record<string, any>) => new TemplateZod().render(fileName, definition as any, new Map())

describe('TemplateZod', () => {
  afterEach(() => CodegenConfig.reset())

  // ── output structure ──────────────────────────────────────────────────────
  test('exports zod import, const, interface, and no duplicate flag', () => {
    const { buffer, duplicateFound } = render('Foo', { properties: { id: { type: 'string' } } })
    expect(buffer).toContain("import { z } from 'zod'")
    expect(buffer).toContain('export const Foo =')
    expect(buffer).toContain('export interface Foo extends z.TypeOf<typeof Foo> {}')
    expect(duplicateFound).toBe(false)
  })

  // ── overrideAsAny ────────────────────────────────────────────────
  describe('overrideAsAny', () => {
    test('emits z.any() when override is true', () => {
      CodegenConfig.setConfig({ overrideAsAny: { ProtobufAny: true } })
      const { buffer } = render('ProtobufAny', { properties: { typeUrl: { type: 'string' } } })
      expect(buffer).toContain('export const ProtobufAny = z.any()')
    })

    test('emits z.any() when override function returns true', () => {
      CodegenConfig.setConfig({ overrideAsAny: { ProtobufAny: def => !!def.properties?.['@type'] } })
      const { buffer } = render('ProtobufAny', { properties: { '@type': { type: 'string' } } })
      expect(buffer).toContain('export const ProtobufAny = z.any()')
    })

    test('does not override when function returns false', () => {
      CodegenConfig.setConfig({ overrideAsAny: { ProtobufAny: def => !!def.properties?.['@type'] } })
      const { buffer } = render('ProtobufAny', { properties: { id: { type: 'string' } } })
      expect(buffer).not.toContain('= z.any()')
    })

    test('does not affect unrelated models', () => {
      CodegenConfig.setConfig({ overrideAsAny: { ProtobufAny: true } })
      const { buffer } = render('UserModel', { properties: { id: { type: 'string' } } })
      expect(buffer).not.toContain('= z.any()')
    })
  })

  // ── primitive scalar types ────────────────────────────────────────────────
  test.each([
    ['string', 'name', 'z.string()'],
    ['boolean', 'active', 'z.boolean()'],
    ['integer', 'count', 'z.number().int()'],
    ['number', 'score', 'z.number()']
  ])('%s field emits correct zod type', (type, field, expected) => {
    const { buffer } = render('Model', { properties: { [field]: { type } } })
    expect(buffer).toContain(`'${field}': ${expected}`)
  })

  // ── required vs optional ──────────────────────────────────────────────────
  describe('required / optional', () => {
    test('required field omits .nullish()', () => {
      const { buffer } = render('Model', { required: ['name'], properties: { name: { type: 'string' } } })
      expect(buffer).toContain("'name': z.string()")
      expect(buffer).not.toContain('.nullish()')
    })

    test('optional field appends .nullish()', () => {
      const { buffer } = render('Model', { properties: { name: { type: 'string' } } })
      expect(buffer).toContain("'name': z.string().nullish()")
    })
  })

  // ── enum ──────────────────────────────────────────────────────────────────
  describe('enum', () => {
    test('required enum omits .nullish()', () => {
      const { buffer } = render('Model', {
        required: ['status'],
        properties: { status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] } }
      })
      expect(buffer).toContain('z.enum(["ACTIVE","INACTIVE"])')
      expect(buffer).not.toContain('.nullish()')
    })

    test('optional enum appends .nullish()', () => {
      const { buffer } = render('Model', {
        properties: { status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] } }
      })
      expect(buffer).toContain('z.enum(["ACTIVE","INACTIVE"]).nullish()')
    })
  })

  // ── additionalProperties ──────────────────────────────────────────────────
  describe('additionalProperties', () => {
    test('{} generates z.record(z.any()) without double-wrapping', () => {
      const { buffer } = render('Model', { type: 'object', additionalProperties: {} })
      expect(buffer).toContain('z.record(z.any())')
      expect(buffer).not.toContain('z.record(z.record(')
    })

    test.each([
      ['string', 'z.string()'],
      ['integer', 'z.number().int()']
    ])('{ type: %s } generates z.record with correct inner type', (type, expected) => {
      const { buffer } = render('Model', { type: 'object', additionalProperties: { type } })
      expect(buffer).toContain(`z.record( ${expected})`)
    })
  })

  // ── object / empty / top-level array ──────────────────────────────────────
  test('object field without additionalProperties generates z.record(z.any())', () => {
    const { buffer } = render('Model', { properties: { meta: { type: 'object' } } })
    expect(buffer).toContain("'meta': z.record(z.any())")
  })

  test('empty definition emits z.any()', () => {
    const { buffer } = render('Empty', {})
    expect(buffer).toContain('z.any()')
  })

  test('top-level array wraps in z.array(z.object(...))', () => {
    const { buffer } = render('Collection', {
      type: 'array',
      items: { properties: { id: { type: 'string' } } }
    })
    expect(buffer).toContain('z.array(z.object({')
  })

  // ── array fields ──────────────────────────────────────────────────────────
  describe('array fields', () => {
    test.each([
      ['strings', { type: 'string' }, 'z.array(z.string())'],
      ['integers', { type: 'integer' }, 'z.array(z.number().int())'],
      ['enums', { type: 'string', enum: ['A', 'B'] }, 'z.array(z.enum(["A","B"]))']
    ])('array of %s', (_label, items, expected) => {
      const { buffer } = render('Model', { properties: { data: { type: 'array', items } } })
      expect(buffer).toContain(expected)
    })

    test('array with no items generates z.array(z.any())', () => {
      const { buffer } = render('Model', { properties: { data: { type: 'array' } } })
      expect(buffer).toContain("'data': z.array(z.any())")
    })

    test('array of $ref imports and uses the ref type', () => {
      const { buffer } = render('Model', {
        properties: { friends: { type: 'array', items: { $ref: '#/definitions/UserModel' } } }
      })
      expect(buffer).toContain("import { UserModel } from './UserModel.js'")
      expect(buffer).toContain("'friends': z.array(UserModel)")
    })

    test('nested array of strings', () => {
      const { buffer } = render('Model', {
        properties: { matrix: { type: 'array', items: { type: 'array', items: { type: 'string' } } } }
      })
      expect(buffer).toContain('z.array(z.array(z.string()))')
    })

    test('nested array with inner $ref imports the ref type', () => {
      const { buffer } = render('Model', {
        properties: { groups: { type: 'array', items: { type: 'array', items: { $ref: '#/definitions/Point' } } } }
      })
      expect(buffer).toContain("import { Point } from './Point.js'")
      expect(buffer).toContain('z.array(z.array(Point))')
    })
  })

  // ── $ref fields ───────────────────────────────────────────────────────────
  describe('$ref fields', () => {
    test('imports and uses the ref type', () => {
      const { buffer } = render('Model', { properties: { address: { $ref: '#/definitions/Address' } } })
      expect(buffer).toContain("import { Address } from './Address.js'")
      expect(buffer).toContain("'address': Address")
    })

    test('duplicate $ref resolves to the mapped name', () => {
      const duplicates = new Map([['OldName', 'NewName']])
      const { buffer, duplicateFound } = new TemplateZod().render(
        'Model',
        { properties: { item: { $ref: '#/definitions/OldName' } } } as any,
        duplicates
      )
      expect(duplicateFound).toBe(true)
      expect(buffer).toContain("'item': NewName")
    })
  })

  // ── recursive types ───────────────────────────────────────────────────────
  test('self-referencing model uses z.lazy, standalone interface, and no self-import', () => {
    const { buffer } = render('TreeNode', {
      properties: { child: { $ref: '#/definitions/TreeNode' } }
    })
    expect(buffer).toContain('z.ZodType<TreeNode>')
    expect(buffer).toContain('z.lazy(')
    expect(buffer).toContain('export interface TreeNode {')
    expect(buffer).not.toContain("import { TreeNode } from './TreeNode.js'")
  })
})

// ── TemplateZodArray ──────────────────────────────────────────────────────────
describe('TemplateZodArray', () => {
  test('renders an array schema that imports and wraps the base class', () => {
    const template = new TemplateZodArray().render('UserModelArray')
    expect(template).toContain("import { UserModel } from './UserModel.js'")
    expect(template).toContain('export const UserModelArray = z.array(UserModel)')
    expect(template).toContain('export interface UserModelArray extends z.TypeOf<typeof UserModelArray> {}')
  })
})
