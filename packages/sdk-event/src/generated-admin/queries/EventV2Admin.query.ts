/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { EventV2AdminApi } from '../EventV2AdminApi.js'

import { EventResponseV2 } from '../../generated-definitions/EventResponseV2.js'
import { GenericQueryPayload } from '../../generated-definitions/GenericQueryPayload.js'

export enum Key_EventV2Admin {
  Query_v2 = 'Event.EventV2Admin.Query_v2',
  Event_ByUserId_v2 = 'Event.EventV2Admin.Event_ByUserId_v2'
}

/**
 * This endpoint is using POST which is somewhat unfamiliar, but it&#39;s logical that we have to send/post a filter (search term) in order to get the data. This endpoint will not return anything if you give it an empty filters in the request body.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventV2Admin.Query_v2, input]
 * }
 * ```
 */
export const useEventV2AdminApi_FetchQuery_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    data: GenericQueryPayload
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  },
  options?: Omit<UseQueryOptions<EventResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponseV2>) => void
): UseQueryResult<EventResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventV2AdminApi_FetchQuery_v2>[1]) => async () => {
    const response = await EventV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchQuery_v2(
      input.data,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_EventV2Admin.Query_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get events from a specific user
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventV2Admin.Event_ByUserId_v2, input]
 * }
 * ```
 */
export const useEventV2AdminApi_GetEvent_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  },
  options?: Omit<UseQueryOptions<EventResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponseV2>) => void
): UseQueryResult<EventResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventV2AdminApi_GetEvent_ByUserId_v2>[1]) => async () => {
    const response = await EventV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEvent_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_EventV2Admin.Event_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
