import { describe, expect, test } from 'vitest'
import { ParserUtils } from './ParserUtils'

describe('resolveConflicts (via generateNaturalLangMethod)', () => {
  const BASE_ARGS = { servicePrefix: 'platform', httpMethod: 'get', isForm: false, permissionType: undefined }

  test('returns the generated method name unchanged when there is no conflict', () => {
    const result = ParserUtils.generateNaturalLangMethod({
      ...BASE_ARGS,
      path: '/platform/users',
      existingMethods: {}
    })

    expect(result).toBe('getUsers')
  })

  test('appends _ByNS when path contains /namespaces/ and there is a conflict', () => {
    // /platform/public/namespaces/{namespace}/users generates 'getUsers'
    const result = ParserUtils.generateNaturalLangMethod({
      ...BASE_ARGS,
      path: '/platform/public/namespaces/{namespace}/users',
      existingMethods: { getUsers: '/platform/users' }
    })

    expect(result).toBe('getUsers_ByNS')
  })

  test('appends _admin when path contains /admin/ and there is a conflict', () => {
    // /platform/admin/users also generates 'getUsers'
    const result = ParserUtils.generateNaturalLangMethod({
      ...BASE_ARGS,
      path: '/platform/admin/users',
      existingMethods: { getUsers: '/platform/users' }
    })

    expect(result).toBe('getUsers_admin')
  })

  test('appends _ByNS_admin when both /namespaces/ and /admin/ are in path and _ByNS is already taken', () => {
    // /platform/admin/namespaces/{namespace}/users also generates 'getUsers'
    const result = ParserUtils.generateNaturalLangMethod({
      ...BASE_ARGS,
      path: '/platform/admin/namespaces/{namespace}/users',
      existingMethods: { getUsers: '/platform/users', getUsers_ByNS: '/platform/public/namespaces/{namespace}/users' }
    })

    expect(result).toBe('getUsers_ByNS_admin')
  })

  test('appends _By<ParentSegment> when the path has a disambiguating parent segment before a {param}', () => {
    // /platform/changes/{changeId}/systems generates 'getSystems_ByChangeId'.
    // When that conflicts, the parent segment 'changes' (the word before {changeId}) is used.
    const result = ParserUtils.generateNaturalLangMethod({
      ...BASE_ARGS,
      path: '/platform/changes/{changeId}/systems',
      existingMethods: { getSystems_ByChangeId: '/platform/releases/{releaseId}/systems' }
    })

    expect(result).toBe('getSystems_ByChangeId_ByChanges')
  })

  test('throws when all resolution strategies are exhausted and a conflict remains', () => {
    expect(() =>
      ParserUtils.generateNaturalLangMethod({
        ...BASE_ARGS,
        path: '/platform/changes/{changeId}/systems',
        existingMethods: {
          getSystems_ByChangeId: '/platform/releases/{releaseId}/systems',
          getSystems_ByChangeId_ByChanges: '/platform/changes/{changeId}/systems'
        }
      })
    ).toThrow()
  })
})
