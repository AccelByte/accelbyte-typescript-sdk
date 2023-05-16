/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RoleNamesResponseV3 } from '../definitions/RoleNamesResponseV3.js'
import { RoleResponse } from '../definitions/RoleResponse.js'

export class Roles$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   *  &lt;br&gt;This endpoint is used to get all non-admin role. &lt;br&gt; &lt;p&gt;action code: 10418&lt;/p&gt;
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

    const res = () => Validate.responseType(() => resultPromise, RoleNamesResponseV3, 'RoleNamesResponseV3')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  &lt;br&gt;This endpoint is used to get non-admin role based on specify roleId. &lt;br&gt;action code : 10417
   */
  getRole_ByRoleId(roleId: string): Promise<IResponseWithSync<RoleResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RoleResponse, 'RoleResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
