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
import { z } from 'zod'
import { QoSEndpointResponse } from '../../generated-definitions/QoSEndpointResponse.js'
import { UpdateServerRequest } from '../../generated-definitions/UpdateServerRequest.js'

export class AmsQoSAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [READ] This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions
   */
  getQos(queryParams?: { status?: string | null }): Promise<Response<QoSEndpointResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/qos'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, QoSEndpointResponse, 'QoSEndpointResponse')
  }
  /**
   * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] This endpoint updates the registered QoS service&#39;s configurable configuration.
   */
  patchQo_ByRegion(region: string, data: UpdateServerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/qos/{region}'.replace('{namespace}', this.namespace).replace('{region}', region)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
