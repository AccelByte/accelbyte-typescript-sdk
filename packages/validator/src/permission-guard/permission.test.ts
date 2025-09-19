/*
 * Copyright (c) 2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { RolePermission } from './models/role'
import { AdminUser } from './models/user'
import { PermissionGuard } from './permission'
import { CrudBitType, CrudType } from './types'

afterEach(() => {
  vi.resetModules()
  vi.resetAllMocks()
  vi.unstubAllEnvs()
})

describe('[Private Cloud] PermissionGuard', () => {
  it('should return false when user has empty permission', async () => {
    const user = createAdminUser({
      namespace: 'accelbyte',
      permissions: [] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'accelbyte' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:OTHER',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })

  it('should return false when user has insufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'accelbyte',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:accelbyte:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'accelbyte' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:OTHER',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })

  it('should return false when user has insufficient permission namespace', async () => {
    const user = createAdminUser({
      namespace: 'accelbyte',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:accelbyte:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'absharedcloud' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })

  it('should return true on sufficient permissions', async () => {
    const user = createAdminUser({
      namespace: 'accelbyte',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:accelbyte:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:accelbyte:READ',
          action: CrudBitType.Read
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'accelbyte' })
    const hasReadPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })
    const hasDeletePermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:READ',
      action: CrudType.READ
    })

    expect(hasReadPermission).toBe(true)
    expect(hasDeletePermission).toBe(true)
  })

  it('should return true on sufficient permissions (*)', async () => {
    const user = createAdminUser({
      namespace: 'accelbyte',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:*:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:*:READ',
          action: CrudBitType.Read
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'accelbyte' })
    const hasDeletePermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })
    const hasReadPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:READ',
      action: CrudType.READ
    })

    expect(hasReadPermission).toBe(true)
    expect(hasDeletePermission).toBe(true)
  })

  it('should return false on insufficient permissions', async () => {
    const user = createAdminUser({
      namespace: 'accelbyte',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:accelbyte:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'accelbyte' })
    const hasDeletePermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })
    const hasReadPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:READ',
      action: CrudType.READ
    })

    expect(hasReadPermission).toBe(false)
    expect(hasDeletePermission).toBe(true)
  })
})

describe('[Shared Cloud] PermissionGuard', () => {
  it('should return true on sufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'examplestudio',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(true)
  })

  it('should return true on sufficient permission action: exact game namespace', async () => {
    const user = createAdminUser({
      namespace: 'examplestudio',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-game:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(true)
  })

  it('should return false on insufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'examplestudio',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.READ
    })

    expect(hasPermission).toBe(false)
  })

  it('should return false on insufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'examplestudio',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-game:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game2' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })

  // Dev's note: this can't be done without requesting to AGS Basic service.
  // For reference, the IAM Go SDK will fetch first the game namespace and check its parent namespace.
  //
  // https://github.com/AccelByte/iam-go-sdk/blob/master/permission.go#L101-L112.
  it.skip('should return true on sufficient permission namespace using old studio namespace format', async () => {
    const user = createAdminUser({
      namespace: 'examplestudio',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(true)
  })

  // Same thing with above, we need to fetch Basic service to make this happen.
  // This test actually passes but it is not accurate and hence; not valuable.
  it.skip('should return false on insufficient permission namespace using old studio namespace format', async () => {
    const user = createAdminUser({
      namespace: 'examplestudio',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })
})

describe('[Shared Cloud] PermissionGuard for accounts with access to multiple studios', () => {
  it('should return true on sufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'helloworld',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(true)
  })

  it('should return true on sufficient permission action: exact game namespace', async () => {
    const user = createAdminUser({
      namespace: 'helloworld',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-game:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(true)
  })

  it('should return false on insufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'helloworld',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.READ
    })

    expect(hasPermission).toBe(false)
  })

  it('should return false on insufficient permission action', async () => {
    const user = createAdminUser({
      namespace: 'helloworld',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-game:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'examplestudio-game2' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })

  // Same thing with above, we need to fetch Basic service to make this happen.
  it.skip('should return true on sufficient permission namespace using old studio namespace format', async () => {
    const user = createAdminUser({
      namespace: 'helloworld',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(true)
  })

  // Same thing with above, we need to fetch Basic service to make this happen.
  // This test actually passes but it is not accurate and hence; not valuable.
  it.skip('should return false on insufficient permission namespace using old studio namespace format', async () => {
    const user = createAdminUser({
      namespace: 'helloworld',
      permissions: [
        {
          resource: 'ADMIN:NAMESPACE:examplestudio:SOMETHING',
          action: CrudBitType.Delete
        },
        {
          resource: 'ADMIN:NAMESPACE:examplestudio-:SOMETHING',
          action: CrudBitType.Delete
        }
      ] as RolePermission[]
    })
    const permissionGuard = new PermissionGuard({ user, currentNamespace: 'game' })
    const hasPermission = permissionGuard.hasPermission({
      resource: 'ADMIN:NAMESPACE:{namespace}:SOMETHING',
      action: CrudType.DELETE
    })

    expect(hasPermission).toBe(false)
  })
})

// Helper functions.
function createAdminUser(userFields: Partial<AdminUser>): AdminUser {
  return {
    namespace: '',
    namespaceRoles: [],
    permissions: [],
    authType: '',
    bans: [],
    country: '',
    createdAt: '',
    dateOfBirth: '',
    displayName: '',
    emailAddress: '',
    emailVerified: false,
    enabled: true,
    lastDateOfBirthChangedTime: '',
    lastEnabledChangedTime: '',
    oldEmailAddress: '',
    phoneVerified: false,
    roles: [],
    userId: '',
    deletionStatus: false,
    newEmailAddress: '',
    phoneNumber: '',
    platformId: '',
    platformUserId: '',
    userName: '',
    ...userFields
  }
}
