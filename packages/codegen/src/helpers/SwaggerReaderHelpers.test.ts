/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { describe, expect, test } from 'vitest'
import { Methods, SwaggerReaderHelpers } from './SwaggerReaderHelpers'

import json from './test-resources/swagger-iam-sample.json'

// Minimal swagger fixture covering __dictionary__ (map[string]interface{} / map[string]any) handling.
// Paths use /svc/ as the service prefix (first segment of all paths).
const dictionarySwagger = {
  swagger: '2.0',
  info: {
    title: 'test-service',
    version: '1.0.0',
    description: 'Test service for dictionary type handling',
    contact: { name: 'Test', url: 'https://accelbyte.io', email: 'test@accelbyte.io' }
  },
  basePath: '',
  definitions: {
    // __dictionary__ is the sentinel name SwaggerDownloader writes when it finds map[string]interface{}.
    // CodeGenerator must skip it to avoid generating a __dictionary__.ts definition file.
    __dictionary__: { properties: null }
  },
  paths: {
    // Endpoint whose response is map[string]interface{} → should generate Record<string, any> + z.record(...)
    '/svc/v1/public/namespaces/{namespace}/dict-response': {
      get: {
        operationId: 'getDictResponse',
        description: 'Returns a dictionary response',
        tags: ['Dictionary'],
        parameters: [{ name: 'namespace', in: 'path', required: true, type: 'string' }],
        responses: {
          '200': { description: 'OK', schema: { $ref: '#/definitions/__dictionary__' } }
        }
      }
    },
    // Endpoint whose body is map[string]interface{} → should generate data: Record<string, any> without __dictionary__ import
    '/svc/v1/public/namespaces/{namespace}/dict-body': {
      post: {
        operationId: 'postDictBody',
        description: 'Accepts a dictionary body',
        tags: ['Dictionary'],
        parameters: [
          { name: 'namespace', in: 'path', required: true, type: 'string' },
          { name: 'body', in: 'body', schema: { $ref: '#/definitions/__dictionary__' } }
        ],
        responses: { '204': { description: 'No Content' } }
      }
    },
    // /internal/ paths must be routed to the admin bucket, same as /admin/
    '/svc/v1/internal/namespaces/{namespace}/config': {
      get: {
        operationId: 'getInternalConfig',
        description: 'Internal config',
        tags: ['Config'],
        parameters: [{ name: 'namespace', in: 'path', required: true, type: 'string' }],
        responses: { '200': { description: 'OK' } }
      }
    }
  }
}


// Shared result — parsed once and reused across all assertions in this suite.
const getResult = () =>
  SwaggerReaderHelpers.parseAllEndpoints({ api: dictionarySwagger as any, sdkName: 'svc', serviceName: 'svc' })

// This is a test that we could use to test out the output of the codegen,
// so we don't accidentally break things.
describe('SwaggerReaderHelpers', () => {
  test('parseAllEndpoints', async () => {
    const result = await SwaggerReaderHelpers.parseAllEndpoints({
      api: json as any,
      sdkName: 'iam',
      serviceName: 'iam'
    })

    // Check admin endpoints.
    //
    for (const adminSnippetPath in result.admin.snippetMap) {
      const methodToSnippetRecord = result.admin.snippetMap[adminSnippetPath]

      for (const method in methodToSnippetRecord) {
        const snippet = methodToSnippetRecord[method as Methods]
        // Should also have `shell`, `web`, and `webGit` here.
        const keys = Object.keys(snippet)

        expect(keys).toEqual(['web', 'webUMD', 'webGit', 'shell'])
      }
    }

    // Snippets shouldn't contain deprecated endpoints, in this case, `/iam/bans` and `/iam/roles`.
    expect(result.admin.snippetMap['/iam/bans']).toBeUndefined()
    expect(result.admin.snippetMap['/iam/roles']).toBeUndefined()

    // Check the naming.
    expect(result.admin.tagToSdkFunctionNamesRecord.Bans).toBe('getBans_v3,')
    expect(result.admin.tagToSdkFunctionNamesRecord.Roles).toBe('getRoles_v3,createRole_v3,')
    expect(result.admin.tagToSdkFunctionNamesRecord.Users).toBe('getUsersMe_v3,getPlatformsJustice_ByUserId_v3,')
    expect(result.admin.tagToSdkFunctionNamesRecord.Clients).toBe('deletePermission_ByClientId_ByResource_ByAction_v3,')

    // Should have the mapping "GetUserMappingArray".
    expect(result.admin.arrayDefinitions).toEqual(['GetUserMappingArray'])

    // Check public endpoints.
    //
    for (const publicSnippetPath in result.public.snippetMap) {
      const methodToSnippetRecord = result.public.snippetMap[publicSnippetPath]

      for (const method in methodToSnippetRecord) {
        const snippet = methodToSnippetRecord[method as Methods]
        // Should have `shell`, `web`, and `webGit` here.
        const keys = Object.keys(snippet)

        expect(keys).toEqual(['web', 'webUMD', 'webGit', 'shell'])
      }
    }

    // Check the naming.
    // Note that `getUsersMe` also exist in the admin one, but considering that they're different SDKs (in a way),
    // then same name shouldn't matter.
    expect(result.public.tagToSdkFunctionNamesRecord.Users).toBe('getUsersMe_v3,')
  })
  test('response type becomes Record<string, any> and uses z.record() for Zod validation', async () => {
    const result = await getResult()
    const methodCode = result.public.tagToEndpointClassesRecord['Dictionary']
  
    expect(methodCode).toContain('Promise<Response<Record<string, any>>>')
    expect(methodCode).toContain('z.record(z.string(), z.any())')
    // The raw sentinel must not leak into the generated output
    expect(methodCode).not.toContain('__dictionary__')
  })
  
  test('body param becomes data: Record<string, any> and generates no __dictionary__ import', async () => {
    const result = await getResult()
    const methodCode = result.public.tagToEndpointClassesRecord['Dictionary']
  
    expect(methodCode).toContain('data: Record<string, any>')
  
    // No import statement for __dictionary__ should be emitted
    const sdkImports = result.public.tagToSdkImportsRecord['Dictionary'] ?? []
    expect(sdkImports.some(imp => imp.includes('__dictionary__'))).toBe(false)
  
    const classImports = result.public.tagToClassImportsRecord['Dictionary'] ?? {}
    expect(classImports).not.toHaveProperty('__dictionary__')
  })
})
