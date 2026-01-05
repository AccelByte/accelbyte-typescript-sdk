/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ReportingLimit } from '../../generated-definitions/ReportingLimit.js'

export class ConfigurationsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * TimeInterval is in nanoseconds. When there&#39;s no configuration set, the response is the default value (configurable through envar).
   */
  getConfigurations(queryParams?: { category?: 'all' | 'extension' }): Promise<Response<ConfigResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigResponse, 'ConfigResponse')
  }
  /**
   * The behaviour of this endpoint is upsert based on the namespace. So, you can use this for both creating &amp; updating the configuration. TimeInterval is in nanoseconds.
   */
  createConfiguration(data: ReportingLimit): Promise<Response<ConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigResponse, 'ConfigResponse')
  }
}
