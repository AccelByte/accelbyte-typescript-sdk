/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { CreateConfig } from '../../generated-definitions/CreateConfig.js'
import { UpdateConfig } from '../../generated-definitions/UpdateConfig.js'

export class AccountProfileConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Created account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled * displayNameSyncMode * avatarSyncMode
   */
  createConfigAccount(data: CreateConfig): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs/account'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Get account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled * displayNameSyncMode * avatarSyncMode
   */
  getConfigAccount_ByConfigKey(configKey: string): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs/account/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Update account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled * displayNameSyncMode * avatarSyncMode
   */
  updateConfigAccount_ByConfigKey(configKey: string, data: UpdateConfig): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs/account/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
}
