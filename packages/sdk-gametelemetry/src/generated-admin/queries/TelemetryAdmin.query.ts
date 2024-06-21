/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { TelemetryAdminApi } from '../TelemetryAdminApi.js'

import { ListBaseResponseStr } from '../../generated-definitions/ListBaseResponseStr.js'
import { PagedResponseGetNamespaceEventResponse } from '../../generated-definitions/PagedResponseGetNamespaceEventResponse.js'

export enum Key_TelemetryAdmin {
  Namespaces = 'TelemetryAdmin.Namespaces',
  Events = 'TelemetryAdmin.Events'
}

export const useAdmNamespaces = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ListBaseResponseStr, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListBaseResponseStr) => void
): UseQueryResult<ListBaseResponseStr, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNamespaces>[1]) => async () => {
    const data = await TelemetryAdminApi(sdk, { namespace: input.namespace }).getNamespaces()
    callback && callback(data)
    return data
  }

  return useQuery<ListBaseResponseStr, AxiosError<ApiError>>({
    queryKey: [Key_TelemetryAdmin.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEvents = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
    }
  },
  options?: Omit<UseQueryOptions<PagedResponseGetNamespaceEventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PagedResponseGetNamespaceEventResponse) => void
): UseQueryResult<PagedResponseGetNamespaceEventResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEvents>[1]) => async () => {
    const data = await TelemetryAdminApi(sdk, { namespace: input.namespace }).getEvents(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PagedResponseGetNamespaceEventResponse, AxiosError<ApiError>>({
    queryKey: [Key_TelemetryAdmin.Events, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
