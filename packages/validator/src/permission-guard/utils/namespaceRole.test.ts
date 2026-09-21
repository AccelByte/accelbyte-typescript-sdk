/*
 * Copyright (c) 2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { describe, expect, it } from 'vitest'
import { NamespaceRole } from '../models/role'
import { getRoleIdsByNamespace } from './namespaceRole'

describe('getRoleIdsByNamespace', () => {
  it('matches a role assigned to the exact namespace', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: 'examplestudio-game' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'examplestudio-game')).toEqual(['role-1'])
  })

  it('matches a role assigned to the wildcard namespace', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: '*' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'examplestudio-game')).toEqual(['role-1'])
  })

  it('matches a studio-level role ("{studio}-") against a "{studio}-{game}" namespace beneath it', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: 'examplestudio-' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'examplestudio-game')).toEqual(['role-1'])
  })

  it('matches a studio-level role ("{studio}-") against the bare studio namespace', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: 'examplestudio-' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'examplestudio')).toEqual(['role-1'])
  })

  it('does not let a bare studio namespace (no trailing dash) cover a game namespace beneath it', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: 'examplestudio' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'examplestudio-game')).toEqual([])
  })

  it('does not match an unrelated namespace', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: 'examplestudio-' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'otherstudio-game')).toEqual([])
  })

  it('does not prefix-match a namespace with more than one dash', () => {
    const namespaceRoles: NamespaceRole[] = [{ roleId: 'role-1', namespace: 'examplestudio-' }]

    expect(getRoleIdsByNamespace(namespaceRoles, 'examplestudio-game-extra')).toEqual([])
  })

  it('returns every role id when no namespace is given', () => {
    const namespaceRoles: NamespaceRole[] = [
      { roleId: 'role-1', namespace: 'examplestudio-game' },
      { roleId: 'role-2', namespace: 'otherstudio-game' }
    ]

    expect(getRoleIdsByNamespace(namespaceRoles)).toEqual(['role-1', 'role-2'])
  })
})
