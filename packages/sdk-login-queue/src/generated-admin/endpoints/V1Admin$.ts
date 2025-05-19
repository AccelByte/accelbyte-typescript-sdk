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
import { ConfigurationRequest } from '../../generated-definitions/ConfigurationRequest.js'
import { ConfigurationResponse } from '../../generated-definitions/ConfigurationResponse.js'
import { QueueStatusResponse } from '../../generated-definitions/QueueStatusResponse.js'

export class V1Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get log queue configuration of a namespace. Calling this endpoint with namespace which has not set up configuration will return a valid configuration with default value
   */
  getConfig(): Promise<Response<ConfigurationResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/login-queue/v1/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigurationResponse, 'ConfigurationResponse')
  }
  /**
   * This API is used to set/update log queue configuration of a namespace. This endpoint has upsert behavior. Calling the endpoint to a namespace with no configuration will make the service to create a new configuration. When creating new configuration, empty field will have default value: * enabled = false * maxConcurrency = 1000000 * maxLoginRate = 500 * safetyMarginPercentage = 5 * minActivationPeriodInSecond = 600 * playerReconnectGracePeriodInSecond = 300 * queueReconnectGracePeriodInSecond = 60 * playerPollingTimeInSecond = 20 Calling this endpoint with namespace that has configuration will replace the old configuration. Input validation: * maxConcurrency must be &gt; 0 and &lt;= 10000000 (0 &lt; x &lt;= 10000000) * maxLoginRate must be &gt; 0 and &lt;= 100000 (0 &lt; x &lt;= 100000) * minActivationPeriodInSecond, playerReconnectGracePeriodInSecond, playerPollingTimeInSecond and queueReconnectGracePeriodInSecond must be &gt; 0 and &lt;= 21600 (0 &lt; x &lt;= 21600) * playerPollingTimeInSecond must be smaller than queueReconnectGracePeriodInSecond * safetyMarginPercentage must be &gt;= 0 and &lt; 100 (0 &lt;= x &lt; 100)
   */
  updateConfig(data: ConfigurationRequest): Promise<Response<ConfigurationResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/login-queue/v1/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigurationResponse, 'ConfigurationResponse')
  }
  /**
   * Get login queue status
   */
  getStatus(): Promise<Response<QueueStatusResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/login-queue/v1/admin/namespaces/{namespace}/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, QueueStatusResponse, 'QueueStatusResponse')
  }
}
