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
import { ListBaseResponseStr } from '../../generated-definitions/ListBaseResponseStr.js'
import { PagedResponseGetNamespaceEventResponse } from '../../generated-definitions/PagedResponseGetNamespaceEventResponse.js'

export class TelemetryAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves namespace list
   */
  getNamespaces(): Promise<IResponse<ListBaseResponseStr>> {
    const params = {} as SDKRequestConfig
    const url = '/game-telemetry/v1/admin/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ListBaseResponseStr, 'ListBaseResponseStr')
  }

  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves event list
   */
  getEvents(queryParams?: {
    startTime?: string | null
    endTime?: string | null
    offset?: number
    limit?: number
    userId?: string | null
    flightId?: string | null
    eventId?: string | null
    eventName?: string | null
    eventPayload?: string | null
  }): Promise<IResponse<PagedResponseGetNamespaceEventResponse>> {
    const params = { limit: 100, ...queryParams } as SDKRequestConfig
    const url = '/game-telemetry/v1/admin/namespaces/{namespace}/events'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PagedResponseGetNamespaceEventResponse,
      'PagedResponseGetNamespaceEventResponse'
    )
  }
}
