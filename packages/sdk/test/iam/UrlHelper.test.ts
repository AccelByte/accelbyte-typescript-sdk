/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { UrlHelper } from '@accelbyte/sdk'
import { describe, expect, test } from 'vitest'

describe('isCompleteURLString', () => {
  test('invalid cases', () => {
    expect(UrlHelper.isCompleteURLString('')).toBe(false)
    expect(UrlHelper.isCompleteURLString('hello.world')).toBe(false)
  })

  test('valid cases', () => {
    expect(UrlHelper.isCompleteURLString('https://hello.world')).toBe(true)
  })
})

test('trimSlashFromStringEnd', () => {
  expect(UrlHelper.trimSlashFromStringEnd('')).toBe('')
  expect(UrlHelper.trimSlashFromStringEnd('hello.world/')).toBe('hello.world')

  expect(UrlHelper.trimSlashFromStringEnd('https://hello.world/')).toBe('https://hello.world')

  expect(UrlHelper.trimSlashFromStringEnd('https://hello.world//')).toBe('https://hello.world')
  expect(UrlHelper.trimSlashFromStringEnd('https://hello.world//////')).toBe('https://hello.world')
})

test('trimSlashFromStringStart', () => {
  expect(UrlHelper.trimSlashFromStringStart('')).toBe('')
  expect(UrlHelper.trimSlashFromStringStart('/hello.world')).toBe('hello.world')

  expect(UrlHelper.trimSlashFromStringStart('/https://hello.world')).toBe('https://hello.world')

  expect(UrlHelper.trimSlashFromStringStart('//https://hello.world')).toBe('https://hello.world')
  expect(UrlHelper.trimSlashFromStringStart('/////https://hello.world')).toBe('https://hello.world')
})

test('trimSlashFromStringEdges', () => {
  expect(UrlHelper.trimSlashFromStringEdges('')).toBe('')
  expect(UrlHelper.trimSlashFromStringEdges('/hello.world/')).toBe('hello.world')

  expect(UrlHelper.trimSlashFromStringEdges('/https://hello.world/')).toBe('https://hello.world')

  expect(UrlHelper.trimSlashFromStringEdges('//https://hello.world//')).toBe('https://hello.world')
  expect(UrlHelper.trimSlashFromStringEdges('/////https://hello.world/////')).toBe('https://hello.world')
})

test('combinePaths', () => {
  expect(UrlHelper.combinePaths('')).toBe('')
  expect(UrlHelper.combinePaths('test', 'some', 'path')).toBe('test/some/path')
  expect(UrlHelper.combinePaths('test-path', 'one', 'two')).toBe('test-path/one/two')
  expect(UrlHelper.combinePaths('test-path', 'one', 'two/three')).toBe('test-path/one/two/three')
  // This is according to the behavior of Node's `path` module.
  // Try it here: https://npm.runkit.com/path.
  expect(UrlHelper.combinePaths('test-path', 'one', 'two///three')).toBe('test-path/one/two/three')
  expect(UrlHelper.combinePaths('/test-path', 'one', 'two')).toBe('/test-path/one/two')
  expect(UrlHelper.combinePaths('test-path', 'one', 'two/')).toBe('test-path/one/two/')
  expect(UrlHelper.combinePaths('/test-path', 'one', 'two/')).toBe('/test-path/one/two/')
})

describe('combineURLPaths', () => {
  test('invalid cases', () => {
    expect(() => UrlHelper.combineURLPaths('')).toThrow()
  })

  test('valid cases', () => {
    // Normal join.
    expect(UrlHelper.combineURLPaths('https://hello.world', 'test', 'path', '123')).toBe('https://hello.world/test/path/123')
    // Should trim trailing slashes.
    expect(UrlHelper.combineURLPaths('https://hello.world', 'test', 'path', '123/')).toBe('https://hello.world/test/path/123')
    // Should be able to join path with path separators.
    expect(UrlHelper.combineURLPaths('https://hello.world', 'test', 'path/extends', '123')).toBe(
      'https://hello.world/test/path/extends/123'
    )
    // Should be able to remove consecutive path separators and convert it to only one.
    expect(UrlHelper.combineURLPaths('https://hello.world', 'test', 'path///extends', '123')).toBe(
      'https://hello.world/test/path/extends/123'
    )
  })
})
