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
import { EventRegistryApi } from '../EventRegistryApi.js'

import { EventRegistry } from '../../generated-definitions/EventRegistry.js'

export enum Key_EventRegistry {
  RegistryEventIds = 'Event.EventRegistry.RegistryEventIds',
  RegistryEventId = 'Event.EventRegistry.RegistryEventId',
  RegistryEventId_ByEventId = 'Event.EventRegistry.RegistryEventId_ByEventId',
  RegistryEventType_ByEventType = 'Event.EventRegistry.RegistryEventType_ByEventType'
}

/**
 * @deprecated
 * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventRegistry.RegistryEventIds, input]
 * }
 * ```
 */
export const useEventRegistryApi_GetRegistryEventIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<EventRegistry, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventRegistry>) => void
): UseQueryResult<EventRegistry, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventRegistryApi_GetRegistryEventIds>[1]) => async () => {
    const response = await EventRegistryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRegistryEventIds()
    callback && callback(response)
    return response.data
  }

  return useQuery<EventRegistry, AxiosError<ApiError>>({
    queryKey: [Key_EventRegistry.RegistryEventIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventRegistry.RegistryEventId, input]
 * }
 * ```
 */
export const useEventRegistryApi_CreateRegistryEventIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EventRegistry }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EventRegistry }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: EventRegistry }) => {
    const response = await EventRegistryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRegistryEventId(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EventRegistry.RegistryEventId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [DELETE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventRegistry.RegistryEventId_ByEventId, input]
 * }
 * ```
 */
export const useEventRegistryApi_DeleteRegistryEventId_ByEventIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { eventId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { eventId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { eventId: string }) => {
    const response = await EventRegistryApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRegistryEventId_ByEventId(input.eventId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EventRegistry.RegistryEventId_ByEventId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventRegistry.RegistryEventId_ByEventId, input]
 * }
 * ```
 */
export const useEventRegistryApi_GetRegistryEventId_ByEventId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { eventId: string },
  options?: Omit<UseQueryOptions<EventRegistry, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventRegistry>) => void
): UseQueryResult<EventRegistry, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventRegistryApi_GetRegistryEventId_ByEventId>[1]) => async () => {
    const response = await EventRegistryApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRegistryEventId_ByEventId(input.eventId)
    callback && callback(response)
    return response.data
  }

  return useQuery<EventRegistry, AxiosError<ApiError>>({
    queryKey: [Key_EventRegistry.RegistryEventId_ByEventId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventRegistry.RegistryEventId_ByEventId, input]
 * }
 * ```
 */
export const useEventRegistryApi_CreateRegistryEventId_ByEventIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { eventId: string; data: EventRegistry }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { eventId: string; data: EventRegistry }> => {
  const mutationFn = async (input: SdkSetConfigParam & { eventId: string; data: EventRegistry }) => {
    const response = await EventRegistryApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRegistryEventId_ByEventId(input.eventId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EventRegistry.RegistryEventId_ByEventId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EventRegistry.RegistryEventType_ByEventType, input]
 * }
 * ```
 */
export const useEventRegistryApi_GetRegistryEventType_ByEventType = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { eventType: string },
  options?: Omit<UseQueryOptions<EventRegistry, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EventRegistry>) => void
): UseQueryResult<EventRegistry, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventRegistryApi_GetRegistryEventType_ByEventType>[1]) => async () => {
    const response = await EventRegistryApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRegistryEventType_ByEventType(input.eventType)
    callback && callback(response)
    return response.data
  }

  return useQuery<EventRegistry, AxiosError<ApiError>>({
    queryKey: [Key_EventRegistry.RegistryEventType_ByEventType, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
