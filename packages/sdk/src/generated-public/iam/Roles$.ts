/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RoleNamesResponseV3 } from './definitions/RoleNamesResponseV3'
import { RoleResponse } from './definitions/RoleResponse'

export class Roles$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   *  <br>This endpoint is used to get all non-admin role.  <br> <p>action code: 10418</p>
   */
  fetchIamV3PublicRoles<T = RoleNamesResponseV3>(queryParams?: {
    limit?: number
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/roles'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RoleNamesResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  <br>This endpoint is used to get non-admin role based on specify roleId.  <br>action code : 10417
   */
  fetchV3PublicRolesByRoleid<T = RoleResponse>(roleId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RoleResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
