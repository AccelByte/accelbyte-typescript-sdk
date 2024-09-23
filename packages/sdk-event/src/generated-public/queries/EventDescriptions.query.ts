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
import { EventDescriptionsApi } from '../EventDescriptionsApi.js'

import { MultipleAgentType } from '../../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../../generated-definitions/MultipleUx.js'

export enum Key_EventDescriptions {
  DescriptionsUx = 'Event.EventDescriptions.DescriptionsUx',
  DescriptionsEventId = 'Event.EventDescriptions.DescriptionsEventId',
  DescriptionsAgentType = 'Event.EventDescriptions.DescriptionsAgentType',
  DescriptionsEventType = 'Event.EventDescriptions.DescriptionsEventType',
  DescriptionsEventLevel = 'Event.EventDescriptions.DescriptionsEventLevel',
  DescriptionsUxListByUx = 'Event.EventDescriptions.DescriptionsUxListByUx',
  DescriptionsEventIdListByEventIds = 'Event.EventDescriptions.DescriptionsEventIdListByEventIds',
  DescriptionsAgentTypeListByAgentTypes = 'Event.EventDescriptions.DescriptionsAgentTypeListByAgentTypes',
  DescriptionsEventTypeListByEventTypes = 'Event.EventDescriptions.DescriptionsEventTypeListByEventTypes',
  DescriptionsEventLevelListByEventLevels = 'Event.EventDescriptions.DescriptionsEventLevelListByEventLevels'
}

export const useEventDescriptionsApi_GetDescriptionsUx = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<MultipleUx, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleUx>) => void
): UseQueryResult<MultipleUx, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsUx>[1]) => async () => {
    const response = await EventDescriptionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDescriptionsUx()
    callback && callback(response)
    return response.data
  }

  return useQuery<MultipleUx, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsUx, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsEventId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<MultipleEventId, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleEventId>) => void
): UseQueryResult<MultipleEventId, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsEventId>[1]) => async () => {
    const response = await EventDescriptionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDescriptionsEventId()
    callback && callback(response)
    return response.data
  }

  return useQuery<MultipleEventId, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsEventId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsAgentType = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<MultipleAgentType, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleAgentType>) => void
): UseQueryResult<MultipleAgentType, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsAgentType>[1]) => async () => {
    const response = await EventDescriptionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDescriptionsAgentType()
    callback && callback(response)
    return response.data
  }

  return useQuery<MultipleAgentType, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsAgentType, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsEventType = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<MultipleEventType, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleEventType>) => void
): UseQueryResult<MultipleEventType, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsEventType>[1]) => async () => {
    const response = await EventDescriptionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDescriptionsEventType()
    callback && callback(response)
    return response.data
  }

  return useQuery<MultipleEventType, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsEventType, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsEventLevel = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<MultipleEventLevel, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleEventLevel>) => void
): UseQueryResult<MultipleEventLevel, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsEventLevel>[1]) => async () => {
    const response = await EventDescriptionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDescriptionsEventLevel()
    callback && callback(response)
    return response.data
  }

  return useQuery<MultipleEventLevel, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsEventLevel, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsUxListByUx = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { ux?: string | null } },
  options?: Omit<UseQueryOptions<MultipleUx, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleUx>) => void
): UseQueryResult<MultipleUx, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsUxListByUx>[1]) => async () => {
    const response = await EventDescriptionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDescriptionsUxListByUx(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<MultipleUx, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsUxListByUx, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsEventIdListByEventIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { eventIds?: string | null } },
  options?: Omit<UseQueryOptions<MultipleEventId, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleEventId>) => void
): UseQueryResult<MultipleEventId, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsEventIdListByEventIds>[1]) => async () => {
      const response = await EventDescriptionsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDescriptionsEventIdListByEventIds(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<MultipleEventId, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsEventIdListByEventIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsAgentTypeListByAgentTypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { agentTypes?: string | null } },
  options?: Omit<UseQueryOptions<MultipleAgentType, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleAgentType>) => void
): UseQueryResult<MultipleAgentType, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsAgentTypeListByAgentTypes>[1]) => async () => {
      const response = await EventDescriptionsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDescriptionsAgentTypeListByAgentTypes(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<MultipleAgentType, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsAgentTypeListByAgentTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsEventTypeListByEventTypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { eventTypes?: string | null } },
  options?: Omit<UseQueryOptions<MultipleEventType, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleEventType>) => void
): UseQueryResult<MultipleEventType, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsEventTypeListByEventTypes>[1]) => async () => {
      const response = await EventDescriptionsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDescriptionsEventTypeListByEventTypes(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<MultipleEventType, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsEventTypeListByEventTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useEventDescriptionsApi_GetDescriptionsEventLevelListByEventLevels = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { eventLevels?: string | null } },
  options?: Omit<UseQueryOptions<MultipleEventLevel, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MultipleEventLevel>) => void
): UseQueryResult<MultipleEventLevel, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEventDescriptionsApi_GetDescriptionsEventLevelListByEventLevels>[1]) => async () => {
      const response = await EventDescriptionsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDescriptionsEventLevelListByEventLevels(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<MultipleEventLevel, AxiosError<ApiError>>({
    queryKey: [Key_EventDescriptions.DescriptionsEventLevelListByEventLevels, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
