/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { HeartbeatRequest } from '../definitions/HeartbeatRequest'

export class Server$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * ``` Required permission: QOS:SERVER [CREATE][UPDATE] Required scope: social This endpoint is intended to be called by QoS service to register and periodically let QoS Manager know that it is still alive. ```
   */
  createServerHeartbeat(data: HeartbeatRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/qosm/servers/heartbeat'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
