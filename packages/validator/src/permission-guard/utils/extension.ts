// It was commented out as this class introduces Reacts and couples os agnostic code with UI
// TODO copy and paste this class in Admin Portal

// /*
//  * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
//  * This is licensed software from AccelByte Inc, for limitations
//  * and restrictions contact your company contract manager.
//  */
//
// import React from 'react'
// import { ExtensionModule, ExtensionSubModule } from '../models/extension'
// import { AdminUser } from '../models/user'
// import { PermissionGuard } from '../permission'
// import { CrudType } from '../types'
//
// export const useExtensionPermissionGuard = (params: { user?: AdminUser | null; currentNamespace: string; clientId?: string }) => {
//   const { user, currentNamespace, clientId } = params
//   const [permission] = React.useState(() => {
//     return new PermissionGuard({ user, currentNamespace, clientId })
//   })
//
//   const isModuleShown = (module: ExtensionModule): boolean => {
//     if (module.subModules.length === 0) {
//       const hasPermission = module.permission
//         ? permission.hasPermission({ resource: module.permission.resource, action: CrudType.READ })
//         : true
//       return hasPermission && module.isEnabled
//     }
//     return module.isEnabled && module.subModules.map(subModule => isSubmoduleShown(subModule)).includes(true)
//   }
//
//   const isSubmoduleShown = (subModule: ExtensionSubModule) => {
//     const hasPermission = permission.hasPermission({ resource: subModule.permission.resource, action: CrudType.READ })
//     return subModule.isEnabled && hasPermission && isInAllowedNamespace(subModule.allowedNamespaces)
//   }
//
//   const isInAllowedNamespace = (allowedNamespaces?: string[]) => {
//     if (!allowedNamespaces) {
//       return true
//     }
//
//     const filteredNamespaces = allowedNamespaces.filter(Boolean)
//     if (filteredNamespaces.length <= 0) {
//       return true
//     }
//
//     return filteredNamespaces.includes(currentNamespace)
//   }
//
//   return { isModuleShown, isSubmoduleShown, isInAllowedNamespace }
// }

export {}
