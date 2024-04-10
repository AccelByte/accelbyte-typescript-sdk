/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ListClientPermissionSet } from '../../generated-definitions/ListClientPermissionSet.js'
import { ListTemplatesResponse } from '../../generated-definitions/ListTemplatesResponse.js'
import { ListUpsertModulesRequest } from '../../generated-definitions/ListUpsertModulesRequest.js'
import { PermissionSetDeleteGroupRequest } from '../../generated-definitions/PermissionSetDeleteGroupRequest.js'

export class ClientsConfigV3Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * List client templates
   */
  getClientConfigTemplates(): Promise<IResponseWithSync<ListTemplatesResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/clientConfig/templates'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListTemplatesResponse, 'ListTemplatesResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete Client config permissions by module and group.
   */
  deleteClientConfigPermission(
    data: PermissionSetDeleteGroupRequest,
    queryParams?: { forceDelete?: boolean | null }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/clientConfig/permissions'
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * List Client available permissions
   */
  getClientConfigPermissions(queryParams?: { excludePermissions?: boolean | null }): Promise<IResponseWithSync<ListClientPermissionSet>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/clientConfig/permissions'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListClientPermissionSet, 'ListClientPermissionSet')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update Client available permissions, if module or group not exists, it will auto create.
   */
  updateClientConfigPermission(
    data: ListUpsertModulesRequest,
    queryParams?: { forceDelete?: boolean | null }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/clientConfig/permissions'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
