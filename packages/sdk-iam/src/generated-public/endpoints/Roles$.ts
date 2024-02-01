/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RoleNamesResponseV3 } from '../../generated-definitions/RoleNamesResponseV3.js'
import { RoleResponse } from '../../generated-definitions/RoleResponse.js'

export class Roles$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This endpoint is used to get all non-admin role. action code: 10418
   */
  getRoles(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<IResponseWithSync<RoleNamesResponseV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/roles'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RoleNamesResponseV3, 'RoleNamesResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used to get non-admin role based on specify roleId. action code : 10417
   */
  getRole_ByRoleId(roleId: string): Promise<IResponseWithSync<RoleResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RoleResponse, 'RoleResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
