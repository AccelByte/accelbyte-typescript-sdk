/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ListClientPermissionSet } from '../../generated-definitions/ListClientPermissionSet.js'
import { ListTemplatesResponse } from '../../generated-definitions/ListTemplatesResponse.js'
import { ListUpsertModulesRequest } from '../../generated-definitions/ListUpsertModulesRequest.js'
import { PermissionSetDeleteGroupRequest } from '../../generated-definitions/PermissionSetDeleteGroupRequest.js'

export class ClientsConfigV3Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * List client templates
   */
  getClientConfigTemplates(): Promise<IResponse<ListTemplatesResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/clientConfig/templates'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListTemplatesResponse, 'ListTemplatesResponse')
      : Validate.unsafeResponse(() => resultPromise)
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
  getClientConfigPermissions(queryParams?: { excludePermissions?: boolean | null }): Promise<IResponse<ListClientPermissionSet>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/clientConfig/permissions'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListClientPermissionSet, 'ListClientPermissionSet')
      : Validate.unsafeResponse(() => resultPromise)
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
