/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { TelemetryAdminApi } from '../TelemetryAdminApi.js'

import { ListBaseResponseStr } from '../../generated-definitions/ListBaseResponseStr.js'
import { PagedResponseGetNamespaceEventResponse } from '../../generated-definitions/PagedResponseGetNamespaceEventResponse.js'

export enum Key_TelemetryAdmin {
  Namespaces = 'Gametelemetry.TelemetryAdmin.Namespaces',
  Events = 'Gametelemetry.TelemetryAdmin.Events'
}

/**
 * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves namespace list
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TelemetryAdmin.Namespaces, input]
 * }
 * ```
 */
export const useTelemetryAdminApi_GetNamespaces = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ListBaseResponseStr, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListBaseResponseStr>) => void
): UseQueryResult<ListBaseResponseStr, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTelemetryAdminApi_GetNamespaces>[1]) => async () => {
    const response = await TelemetryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNamespaces()
    callback && callback(response)
    return response.data
  }

  return useQuery<ListBaseResponseStr, AxiosError<ApiError>>({
    queryKey: [Key_TelemetryAdmin.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves event list
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TelemetryAdmin.Events, input]
 * }
 * ```
 */
export const useTelemetryAdminApi_GetEvents = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      startTime?: string | null
      endTime?: string | null
      offset?: number
      limit?: number
      userId?: string | null
      flightId?: string | null
      eventId?: string | null
      eventName?: string | null
      eventPayload?: string | null
      deviceType?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PagedResponseGetNamespaceEventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PagedResponseGetNamespaceEventResponse>) => void
): UseQueryResult<PagedResponseGetNamespaceEventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTelemetryAdminApi_GetEvents>[1]) => async () => {
    const response = await TelemetryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEvents(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PagedResponseGetNamespaceEventResponse, AxiosError<ApiError>>({
    queryKey: [Key_TelemetryAdmin.Events, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
