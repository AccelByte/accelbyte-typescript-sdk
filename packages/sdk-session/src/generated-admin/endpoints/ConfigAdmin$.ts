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
import { Configuration } from '../../generated-definitions/Configuration.js'

export class ConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get Log Configuration.&lt;br&gt;
   */
  getConfigLog(): Promise<Response<Configuration>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/config/log'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Configuration, 'Configuration')
  }
  /**
   * Update Log Configuration.&lt;br&gt;
   */
  patchConfigLog(data: Configuration): Promise<Response<Configuration>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/config/log'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Configuration, 'Configuration')
  }
}
