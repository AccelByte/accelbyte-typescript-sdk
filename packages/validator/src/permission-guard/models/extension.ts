/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { RolePermission } from './role'

export interface ExtensionSubModule {
  id: string
  title: {
    [x: string]: string
  }
  isEnabled: boolean
  permission: RolePermission
  allowedNamespaces?: string[]
}

export interface ExtensionModule {
  id: string
  title: {
    [x: string]: string
  }
  icon: string
  isEnabled: boolean
  subModules: ExtensionSubModule[]
  permission?: RolePermission
}

export interface ExtensionManifest {
  name: string
  author: string
  modules: ExtensionModule[]
}

export class ExtensionManifestDecodeError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, ExtensionManifestDecodeError.prototype)
  }
}
