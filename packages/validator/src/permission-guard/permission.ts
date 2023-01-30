/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { RolePermission } from './models/role'
import { AdminUser } from './models/user'
import { CrudBitType, CrudRolePermission, CrudType, WILDCARD_SIGN } from './types'

export class PermissionGuard {
  public permissionCheck: { [key: string]: boolean } = {}
  private user: AdminUser | null
  private currentNamespace: string
  private clientId: string
  private subscriber: Set<() => unknown> = new Set()

  constructor(props: { user?: AdminUser | null; currentNamespace?: string; clientId?: string } = {}) {
    this.user = props.user || null
    this.currentNamespace = props.currentNamespace || ''
    this.clientId = props.clientId || ''
  }

  public hasPermission = (permission: CrudRolePermission): boolean => {
    const key = JSON.stringify(permission)
    const currentUser = this.user

    if (currentUser) {
      const userPermissionExist = Array.isArray(currentUser.permissions) && currentUser.permissions.length > 0
      if (!userPermissionExist) {
        this.permissionCheck = {}
        return this.permissionCheck[key]
      }

      this.permissionCheck[key] = this.checkHasPermission(currentUser.permissions, permission)
    }

    return this.permissionCheck[key]
  }

  public getCrudTypeByCrudBit = (action: number) => {
    const actionBits = Object.keys(CrudBitType).map(Number).filter(Boolean)
    // tslint:disable-next-line:no-bitwise
    return actionBits.map(bit => (action & bit) === bit && CrudBitType[bit]).filter(Boolean) as CrudType[]
  }

  public hasPermissionByCrudBit = (permission: RolePermission, action: CrudType) => {
    const isUserHasPermission = this.getCrudTypeByCrudBit(permission.action)
      // tslint:disable-next-line:no-shadowed-variable
      .map((action: string) => action.toUpperCase())
      .find(permissionAction => permissionAction === action.toUpperCase())

    if (!isUserHasPermission) {
      return false
    }
    return this.hasPermission({ action, resource: permission.resource })
  }

  public reset = () => {
    this.permissionCheck = {}
  }

  public setUser = (user: AdminUser | null) => {
    this.user = user
    this.notifySubscribers()
  }

  public setCurrentNamespace = (currentNamespace: string) => {
    this.currentNamespace = currentNamespace
    this.notifySubscribers()
  }

  public setClientId = (clientId: string) => {
    this.clientId = clientId
    this.notifySubscribers()
  }

  public listen(listener: () => unknown) {
    this.subscriber.add(listener)
  }

  public unlisten(listener: () => unknown) {
    this.subscriber.delete(listener)
  }

  private notifySubscribers() {
    Array.from(this.subscriber).forEach(a => a())
  }

  private checkHasPermission = (userPermissions: RolePermission[], { resource, action }: CrudRolePermission): boolean => {
    return (
      Array.isArray(userPermissions) &&
      userPermissions.some((permission: RolePermission) => {
        return !!permission && this.isResourceIncluded(permission, resource) && this.isActionIncluded(permission, action)
      })
    )
  }

  private isResourceIncluded = (permission: RolePermission, resource: string): boolean => {
    if (!permission.resource || !resource) {
      return false
    }
    if (permission.resource === resource) {
      return true
    }
    const hasAPairOfBracketsRegexp = /{[A-z]*}/
    if (
      !hasAPairOfBracketsRegexp.test(permission.resource) &&
      !hasAPairOfBracketsRegexp.test(resource) &&
      permission.resource === resource
    ) {
      return true
    }
    const requiredResourceArr = resource.split(':')
    const testResourceArr = permission.resource.split(':')

    const maxSectionLength = requiredResourceArr.length > testResourceArr.length ? testResourceArr.length : requiredResourceArr.length

    const isDifferentSection = requiredResourceArr
      .slice(0, maxSectionLength)
      .some((_: string, index: number) => !this.isVariableCovered(testResourceArr[index], requiredResourceArr[index]))

    if (isDifferentSection) {
      return false
    }
    if (testResourceArr.length === requiredResourceArr.length) {
      return true
    }

    const resourceSlice = testResourceArr.slice(requiredResourceArr.length, testResourceArr.length)
    return resourceSlice.length > 0 && resourceSlice.every((section: string) => section === WILDCARD_SIGN)
  }

  private isActionIncluded = (permission: RolePermission, action: CrudType): boolean => {
    const modeType = Object.keys(CrudType)
    return Number(permission.action)
      .toString(2)
      .split('')
      .reverse()
      .some((item, index) => item === '1' && modeType[index] === action)
  }

  private isVariableCovered = (access: string, required: string): boolean => {
    if (access === WILDCARD_SIGN) {
      return true
    }
    const insideBracketRegexp = /^{[A-z]*}$/
    const accessIsInsideBracket = insideBracketRegexp.test(access)
    const requiredIsInsideBracket = insideBracketRegexp.test(required)

    if ((!accessIsInsideBracket && !requiredIsInsideBracket) || !this.user) {
      return access === required
    }

    const actualAccessVal = !accessIsInsideBracket
      ? access
      : this.replaceResourceVal(access, {
          namespace: this.user.namespace,
          userId: this.user.userId,
          clientId: this.clientId
        })

    const actualRequiredVal = !requiredIsInsideBracket
      ? required
      : this.replaceResourceVal(required, {
          namespace: this.currentNamespace,
          userId: this.user.userId,
          clientId: this.clientId
        })

    return actualAccessVal === actualRequiredVal
  }

  private replaceResourceVal = (value: string, replacement: { [key: string]: string }) => {
    return Object.keys(replacement).reduce((val: string, key: string) => val.replace(`{${key}}`, replacement[key]), value)
  }
}
