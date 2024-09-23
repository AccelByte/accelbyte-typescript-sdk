/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { NamespaceConfig } from '../../generated-definitions/NamespaceConfig.js'
import { NamespaceConfigList } from '../../generated-definitions/NamespaceConfigList.js'
import { PatchNamespaceConfigRequest } from '../../generated-definitions/PatchNamespaceConfigRequest.js'

export class Config$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get matchmaking config of all namespaces. Will only return namespace configs than have been updated.
   */
  getConfig(): Promise<Response<NamespaceConfigList>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/config'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceConfigList, 'NamespaceConfigList')
  }
  /**
   * Get matchmaking config of a namespaces.
   */
  getConfig_ByNamespace(): Promise<Response<NamespaceConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceConfig, 'NamespaceConfig')
  }
  /**
   * Patch update matchmaking config of a namespaces. Partially update matchmaking config, will only update value that defined on the request.
   */
  patchConfig_ByNamespace(data: PatchNamespaceConfigRequest): Promise<Response<NamespaceConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceConfig, 'NamespaceConfig')
  }
}
