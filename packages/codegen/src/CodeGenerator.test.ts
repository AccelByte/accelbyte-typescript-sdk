import { describe, expect, test } from 'vitest'
import { CodeGenerator } from './CodeGenerator'
import swaggersConfig from './helpers/test-resources/swaggersConfig'
import { createTmpMock } from './helpers/test-utils'

describe('CodeGenerator', () => {
  test('should return set of paths', async () => {
    const result = await createTmpMock('sdk-iam', async () => await CodeGenerator.main(swaggersConfig['sdk-iam']))

    expect(result).toBeDefined()
  })
})

describe('CodeGenerator All', () => {
  test('should return set of paths', async () => {
    const result = await Promise.all(
      Object.keys(swaggersConfig)
        .filter(Boolean)
        .map(sdkName => createTmpMock(sdkName, async () => await CodeGenerator.main(swaggersConfig[sdkName])))
    )

    expect(result).toEqual(expect.arrayContaining([expect.any(Object)]))
  })
})
