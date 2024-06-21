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
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { EventV2AdminApi } from '../EventV2AdminApi.js'

import { EventResponseV2 } from '../../generated-definitions/EventResponseV2.js'
import { GenericQueryPayload } from '../../generated-definitions/GenericQueryPayload.js'

export enum Key_EventV2Admin {
  Query = 'EventV2Admin.Query',
  Event_ByUserId = 'EventV2Admin.Event_ByUserId'
}

export const useAdmCreateQueryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      EventResponseV2,
      AxiosError<ApiError>,
      ApiArgs & {
        data: GenericQueryPayload
        queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: EventResponseV2) => void
): UseMutationResult<
  EventResponseV2,
  AxiosError<ApiError>,
  ApiArgs & {
    data: GenericQueryPayload
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & {
      data: GenericQueryPayload
      queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
    }
  ) => {
    const data = await EventV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createQuery(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EventV2Admin.Query],
    mutationFn,
    ...options
  })
}

export const useAdmEvent_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  },
  options?: Omit<UseQueryOptions<EventResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EventResponseV2) => void
): UseQueryResult<EventResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEvent_ByUserId>[1]) => async () => {
    const data = await EventV2AdminApi(sdk, { namespace: input.namespace }).getEvent_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<EventResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_EventV2Admin.Event_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
