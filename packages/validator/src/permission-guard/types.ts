/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export const WILDCARD_SIGN = '*'

export enum CrudType {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export enum CrudBitType {
  // tslint:disable:no-bitwise
  Create = 1 << 0,
  Read = 1 << 1,
  Update = 1 << 2,
  Delete = 1 << 3
  // tslint:enable:no-bitwise
}

export interface CrudRolePermission {
  resource: string
  action: CrudType
}

export interface PermissionNamespaceSchema {
  namespace?: string
}

export interface PermissionNamespaceUserIdSchema extends PermissionNamespaceSchema {
  userId?: string
}

export interface PermissionNamespaceClientIdSchema extends PermissionNamespaceSchema {
  clientId?: string
}
