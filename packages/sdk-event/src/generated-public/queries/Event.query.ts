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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { EventApi } from '../EventApi.js'

import { Event } from '../../generated-definitions/Event.js'
import { EventResponse } from '../../generated-definitions/EventResponse.js'

export enum Key_Event {
  Namespace_ByNamespace = 'Event.Event.Namespace_ByNamespace',
  User_ByUserId = 'Event.Event.User_ByUserId',
  EventId_ByEventId = 'Event.Event.EventId_ByEventId',
  EventType_ByEventType = 'Event.Event.EventType_ByEventType',
  EventId_ByUserId_ByEventId = 'Event.Event.EventId_ByUserId_ByEventId',
  EventType_ByUserId_ByEventType = 'Event.Event.EventType_ByUserId_ByEventType',
  EventId_ByEventType_ByEventId = 'Event.Event.EventId_ByEventType_ByEventId',
  EventId_ByUserId_ByEventType_ByEventId = 'Event.Event.EventId_ByUserId_ByEventType_ByEventId'
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.Namespace_ByNamespace, input]
 * }
 * ```
 */
export const useEventApi_GetNamespace_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetNamespace_ByNamespace>[1]) => async () => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNamespace_ByNamespace(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.Namespace_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.Namespace_ByNamespace, input]
 * }
 * ```
 */
export const useEventApi_CreateNamespace_ByNamespaceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: Event }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: Event }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: Event }) => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNamespace_ByNamespace(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Event.Namespace_ByNamespace],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.User_ByUserId, input]
 * }
 * ```
 */
export const useEventApi_GetUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetUser_ByUserId>[1]) => async () => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.User_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.EventId_ByEventId, input]
 * }
 * ```
 */
export const useEventApi_GetEventId_ByEventId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    eventId: number
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetEventId_ByEventId>[1]) => async () => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEventId_ByEventId(
      input.eventId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.EventId_ByEventId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.EventType_ByEventType, input]
 * }
 * ```
 */
export const useEventApi_GetEventType_ByEventType = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    eventType: number
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetEventType_ByEventType>[1]) => async () => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEventType_ByEventType(
      input.eventType,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.EventType_ByEventType, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.EventId_ByUserId_ByEventId, input]
 * }
 * ```
 */
export const useEventApi_GetEventId_ByUserId_ByEventId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    eventId: number
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetEventId_ByUserId_ByEventId>[1]) => async () => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEventId_ByUserId_ByEventId(
      input.userId,
      input.eventId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.EventId_ByUserId_ByEventId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.EventType_ByUserId_ByEventType, input]
 * }
 * ```
 */
export const useEventApi_GetEventType_ByUserId_ByEventType = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    eventType: number
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetEventType_ByUserId_ByEventType>[1]) => async () => {
    const response = await EventApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEventType_ByUserId_ByEventType(input.userId, input.eventType, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.EventType_ByUserId_ByEventType, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.EventId_ByEventType_ByEventId, input]
 * }
 * ```
 */
export const useEventApi_GetEventId_ByEventType_ByEventId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    eventType: number
    eventId: number
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetEventId_ByEventType_ByEventId>[1]) => async () => {
    const response = await EventApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEventId_ByEventType_ByEventId(
      input.eventType,
      input.eventId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.EventId_ByEventType_ByEventId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Event.EventId_ByUserId_ByEventType_ByEventId, input]
 * }
 * ```
 */
export const useEventApi_GetEventId_ByUserId_ByEventType_ByEventId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    eventType: number
    eventId: number
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventResponse>) => void
): UseQueryResult<EventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventApi_GetEventId_ByUserId_ByEventType_ByEventId>[1]) => async () => {
    const response = await EventApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEventId_ByUserId_ByEventType_ByEventId(input.userId, input.eventType, input.eventId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_Event.EventId_ByUserId_ByEventType_ByEventId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
