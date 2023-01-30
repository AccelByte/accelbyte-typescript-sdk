/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { NamespaceRole, NamespaceRoleWithPermission, RolePermission, RoleWithManager } from '../models/role'
import { WILDCARD_SIGN } from '../types'

// Get list of admin role id
export function getAdminRoles(roles: RoleWithManager[]): string[] {
  return roles.reduce((filtered: string[], role: RoleWithManager) => {
    if (role.adminRole === true) {
      filtered.push(role.roleId)
    }
    return filtered
  }, [])
}

// Get list of admin namespace role
export function getAdminNamespaceRoles(namespaceRoles: NamespaceRole[], roles: RoleWithManager[]): NamespaceRole[] {
  return namespaceRoles.filter(namespaceRole => {
    return roles.find(role => role.adminRole === true && role.roleId === namespaceRole.roleId)
  })
}

// Get list of role id based on selected namespace
export function getRoleIdsByNamespace(namespaceRoles: NamespaceRole[], namespace?: string): string[] {
  return namespaceRoles.reduce((filtered: string[], role: NamespaceRole) => {
    if (namespace) {
      if (role.namespace === namespace || role.namespace === WILDCARD_SIGN) {
        filtered.push(role.roleId)
      }
    } else {
      filtered.push(role.roleId)
    }
    return filtered
  }, [])
}

// Get list of roles owned by current user
export function getCurrentUserRoles(roles: RoleWithManager[], userRoleIds: string[]): RoleWithManager[] {
  return roles.filter(role => userRoleIds.includes(role.roleId) && Array.isArray(role.permissions) && role.permissions.length > 0)
}

// Get list of permission owned by current user
export function getCurrentUserPermissions(roles: RoleWithManager[]): RolePermission[] {
  return roles.reduce((acc: RolePermission[], role: RoleWithManager) => {
    return acc.concat(role.permissions)
  }, [])
}

// Get list of permission with namespace owned by current user
export function getCurrentUserNamespacedPermissions(namespaceRoleWithPermission: NamespaceRoleWithPermission[]): RolePermission[] {
  return namespaceRoleWithPermission.reduce((acc: RolePermission[], curr) => {
    return acc.concat(curr.permissions)
  }, [])
}

// Check whether current user has admin role
export function isUserHasAdminRole(userNamespaceRoles: string[], adminRoles: string[]) {
  return adminRoles.some(role => userNamespaceRoles.includes(role))
}

// Replace {namespace} string with real namespace value
export const replacePermissionNamespace = (permission: RolePermission, namespace: string): RolePermission => {
  return {
    resource: permission.resource.replace('{namespace}', namespace),
    action: permission.action
  }
}
