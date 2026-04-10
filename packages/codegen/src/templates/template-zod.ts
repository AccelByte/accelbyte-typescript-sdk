/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CodegenConfig } from '../CodegenConfig'
import { ParserUtils } from '../ParserUtils'
import { Definition } from '../Swagger'

// The expected output that we return from most of the functions below.
// Normally, we will mostly use `schemaString`. In some unique cases
// where there are recursive types, we cannot infer type. Hence, we need
// to store the TypeScript syntax so we can write them manually.
interface ResultType {
  schemaString: string
  typeString: string
}

export class TemplateZod {
  duplicates: Map<string, string>
  duplicateFound = false
  //
  private importClasses = new Set()

  // --
  render = (fileName: string, definition: Definition, duplicates: Map<string, string>) => {
    this.duplicates = duplicates

    const overrideAsAny = CodegenConfig.getOverrideAsAny()
    const override = overrideAsAny?.[fileName]
    if (override !== undefined) {
      const shouldOverride = typeof override === 'function' ? override(definition as Record<string, any>) : override
      if (shouldOverride) {
        const template = `import { z } from 'zod'\n\nexport const ${fileName} = z.any()\n\nexport interface ${fileName} extends z.TypeOf<typeof ${fileName}> {}\n  `
        return { buffer: template, duplicateFound: false }
      }
    }

    const content = this.parseToZodSchema(definition, definition.required || [])

    // Prevent self-importing and handle recursive types.
    const containsRecursiveType = this.importClasses.has(fileName)
    if (containsRecursiveType) {
      this.importClasses.delete(fileName)
    }

    let imports = ''
    for (const cl of Array.from(this.importClasses).sort()) {
      imports += `import { ${cl} } from './${cl}.js'\n`
    }

    // Modify export variable string, based on existence of recursive types.
    // Reference: https://github.com/colinhacks/zod#recursive-types.
    let exportedVariableString: string
    let exportedTypeString: string

    if (containsRecursiveType) {
      // If it contains recursive type, then we need to modify the exported variable in a way,
      // so that there are no TypeScript errors.
      exportedVariableString = `
export const ${fileName}: z.ZodType<${fileName}> = z.lazy(() =>
          ${content.schemaString}
        )
      `
      exportedTypeString = `
export interface ${fileName} {
          ${content.typeString}
}
`
    } else {
      // Export normally by writing the `z.ZodObject` and type inferring with `z.TypeOf`.
      exportedVariableString = `export const ${fileName} = ${content.schemaString}`
      exportedTypeString = `export interface ${fileName} extends z.TypeOf<typeof ${fileName}> {}`
    }

    const template = `import { z } from 'zod'
${imports}

${exportedVariableString}

${exportedTypeString}
  `
    return { buffer: template, duplicateFound: this.duplicateFound }
  }

  // --
  parseToZodSchema = (definition, requiredAttrs): ResultType => {
    if (definition.additionalProperties) {
      return this.parseToZodAttribute('', definition, [])
    }

    let properties: [string, any]
    if (definition.properties) {
      properties = Object.entries(definition.properties) as [string, any]
    } else if (definition.items?.properties) {
      properties = Object.entries(definition.items.properties) as [string, any]
    } else {
      return {
        schemaString: 'z.any()',
        typeString: 'any'
      }
    }

    const schemaFields: string[] = []
    const typeFields: string[] = []

    for (const property of properties) {
      const [name, definition] = property
      const result = this.parseToZodAttribute(name, definition, requiredAttrs)

      schemaFields.push(result.schemaString)
      typeFields.push(result.typeString)
    }

    if (definition?.type === 'array') {
      return {
        schemaString: `z.array(z.object({${schemaFields.join(',')}}))`,
        typeString: typeFields.join(';')
      }
    }

    return {
      schemaString: `z.object({${schemaFields.join(',')}})`,
      typeString: typeFields.join(';')
    }
  }

  // --
  parseToZodAttribute = (name, definition, requiredAttrs): ResultType => {
    // Required field syntax.
    // Empty name check is required for fields with type records.
    const isRequired = requiredAttrs.includes(name) || name === ''
    const schemaRequired = isRequired ? '' : '.nullish()'
    const typeRequired = isRequired ? '' : '?'
    const typeNullishability = isRequired ? '' : ' | null | undefined'
    // Field name syntax.
    const schemaAttribute = name ? `'${name}':` : ''
    const typeAttribute = name ? `'${name}'${typeRequired}:` : ''

    const type = definition?.type

    if (definition.properties) {
      const result = this.parseToZodSchema(definition, requiredAttrs)
      return {
        schemaString: `${schemaAttribute} ${result.schemaString}${schemaRequired}`,
        typeString: `${typeAttribute} ${result.typeString}${typeNullishability}`
      }
    } else if (type) {
      if (type === 'object' && definition.additionalProperties) {
        const additionalProps = definition.additionalProperties
        // Empty {} means "any type is valid" — avoid double-wrapping (z.record(z.record(z.any())))
        if (Object.keys(additionalProps).length === 0) {
          return {
            schemaString: `${schemaAttribute} z.record(z.any())${schemaRequired}`,
            typeString: `${typeAttribute} Record<string, any>${typeNullishability}`
          }
        }
        const zodAttribute = this.parseToZodAttribute('', additionalProps, [''])
        return {
          schemaString: `${schemaAttribute} z.record(${zodAttribute.schemaString})${schemaRequired}`,
          typeString: `${typeAttribute} Record<string, ${zodAttribute.typeString}>${typeNullishability}`
        }
      }

      if (type === 'object' && !definition.additionalProperties && !name) {
        return {
          schemaString: `z.any()`,
          typeString: 'any'
        }
      }

      if (type === 'object' && !definition.additionalProperties) {
        return {
          schemaString: `${schemaAttribute} z.record(z.any())${schemaRequired}`,
          typeString: `${typeAttribute} Record<string, any>${typeNullishability}`
        }
      }

      if (type === 'integer' || type === 'number') {
        const effectiveType = getZodNumberType(type)
        return {
          schemaString: `${schemaAttribute} z.${effectiveType.schemaString}()${schemaRequired}`,
          typeString: `${typeAttribute} ${effectiveType.typeString}${typeNullishability}`
        }
      }

      if (type === 'array') {
        const items = definition.items
        const ref = items?.$ref
        let model: ResultType
        if (ref) {
          const refType = ParserUtils.parseRefType(ref)
          this.importClasses.add(refType)

          model = {
            schemaString: refType,
            typeString: refType
          }
        } else if (items) {
          if (items.type === 'array') {
            const ref = items.items?.$ref
            if (ref) {
              const refType = ParserUtils.parseRefType(ref)
              this.importClasses.add(refType)

              model = {
                schemaString: refType,
                typeString: refType
              }
            } else if (items.items) {
              model = this.parseEnumItems(items.items)
            }
            return {
              schemaString: `${schemaAttribute} z.array(z.array(${model.schemaString}))${schemaRequired}`,
              typeString: `${typeAttribute} ${model.typeString}[]${typeNullishability}`
            }
          } else {
            model = this.parseEnumItems(items)
          }
        } else {
          return {
            schemaString: `${schemaAttribute} z.array(z.any())${schemaRequired}`,
            typeString: `${typeAttribute} any[]${typeNullishability}`
          }
        }
        return {
          schemaString: `${schemaAttribute} z.array(${model.schemaString})${schemaRequired}`,
          typeString: `${typeAttribute} ${model.typeString}[]${typeNullishability}`
        }
      }

      if (type !== 'object') {
        const result = extractEnumObject(type, isRequired, definition.enum)
        return {
          schemaString: `${schemaAttribute} ${result.schemaString}`,
          typeString: `${typeAttribute} ${result.typeString}`
        }
      }
    }

    const ref = definition.$ref
    let model = `z.record(z.any())`

    if (ref) {
      model = ParserUtils.parseRefType(ref)

      const fullModelName = ref.replace('#/definitions/', '')
      this.duplicateFound = this.duplicates.has(fullModelName)
      if (this.duplicateFound) {
        model = this.duplicates.get(fullModelName)
      }
      this.importClasses.add(model)
      model = `${model}`
    }

    return {
      schemaString: `${schemaAttribute} ${model}${schemaRequired}`,
      typeString: `${typeAttribute} ${model}${typeNullishability}`
    }
  }

  parseEnumItems = (items): ResultType => {
    if (items.enum) {
      const enumStr = items.enum.map(e => {
        return `"${e}"`
      })
      return {
        schemaString: `z.enum([${enumStr}])`,
        typeString: `(${enumStr.join(' | ')})`
      }
    }

    if (items.type === 'object') {
      return this.parseToZodSchema(items, items.required)
    }

    let effectiveType: ResultType
    if (items.type === 'integer' || items.type === 'number') {
      effectiveType = getZodNumberType(items.type)
    } else {
      effectiveType = { typeString: items.type, schemaString: items.type }
    }

    return {
      schemaString: `z.${effectiveType.schemaString}()`,
      typeString: effectiveType.typeString
    }
  }
}

export class TemplateZodArray {
  //
  render = name => {
    const cls = name.replace('Array', '')
    const template = `import { z } from 'zod'
import { ${cls} } from './${cls}.js'
  
export const ${name} = z.array(${cls})

export interface ${name} extends z.TypeOf<typeof ${name}> {}
  `
    return template
  }
}

const getZodNumberType = (type: string) => {
  // In Swagger, integer and number are different types.
  // As such, we need to map them separately.
  // Example how to use:
  //
  //    if (type === 'integer' || type === 'number') return getZodNumberType(type);
  //
  // Reference 1: https://swagger.io/docs/specification/data-models/data-types/.
  // Reference 2: https://github.com/colinhacks/zod#numbers.
  if (type === 'integer') {
    return {
      schemaString: 'number().int',
      typeString: 'number'
    }
  }

  return {
    schemaString: type,
    typeString: type
  }
}

const extractEnumObject = (type: string, isRequired: boolean, enumArr?: string[]): ResultType => {
  const schemaRequired = isRequired ? '' : '.nullish()'
  const typeNullishability = isRequired ? '' : ' | null | undefined'
  if (enumArr) {
    const enumStr = enumArr.map(e => {
      return `"${e}"`
    })
    return {
      schemaString: `z.enum([${enumStr}])${schemaRequired}`,
      typeString: `(${enumStr.join(' | ')}${typeNullishability})`
    }
  }
  return {
    schemaString: `z.${type}()${schemaRequired}`,
    typeString: `${type}${typeNullishability}`
  }
}
