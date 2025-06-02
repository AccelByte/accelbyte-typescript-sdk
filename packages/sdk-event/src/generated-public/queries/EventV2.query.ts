/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { EventV2Api } from '../EventV2Api.js'

import { EventResponseV2 } from '../../generated-definitions/EventResponseV2.js'

export enum Key_EventV2 {
  Event_ByUserId_v2 = 'Event.EventV2.Event_ByUserId_v2',
  Edithistory_ByUserId_v2 = 'Event.EventV2.Edithistory_ByUserId_v2'
}

/**
 * Requires valid user access token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventV2.Event_ByUserId_v2, input]
 * }
 * ```
 */
export const useEventV2Api_GetEvent_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  },
  options?: Omit<UseQueryOptions<EventResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponseV2>) => void
): UseQueryResult<EventResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventV2Api_GetEvent_ByUserId_v2>[1]) => async () => {
    const response = await EventV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEvent_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_EventV2.Event_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Available Type: * email * password * displayname * dateofbirth * country * language
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventV2.Edithistory_ByUserId_v2, input]
 * }
 * ```
 */
export const useEventV2Api_GetEdithistory_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null; type?: string | null }
  },
  options?: Omit<UseQueryOptions<EventResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponseV2>) => void
): UseQueryResult<EventResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventV2Api_GetEdithistory_ByUserId_v2>[1]) => async () => {
    const response = await EventV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEdithistory_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_EventV2.Edithistory_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
