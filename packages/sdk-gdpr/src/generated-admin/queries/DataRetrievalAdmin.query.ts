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
import { DataRetrievalAdminApi } from '../DataRetrievalAdminApi.js'

import { ListPersonalDataResponse } from '../../generated-definitions/ListPersonalDataResponse.js'
import { UserPersonalDataResponse } from '../../generated-definitions/UserPersonalDataResponse.js'

export enum Key_DataRetrievalAdmin {
  Requests = 'DataRetrievalAdmin.Requests',
  Requests_ByUserId = 'DataRetrievalAdmin.Requests_ByUserId',
  postRequest_ByUserId = 'DataRetrievalAdmin.postRequest_ByUserId',
  Request_ByUserId_ByRequestDate = 'DataRetrievalAdmin.Request_ByUserId_ByRequestDate',
  postGenerate_ByUserId_ByRequestDate = 'DataRetrievalAdmin.postGenerate_ByUserId_ByRequestDate'
}

export const useAdmRequests = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; requestDate?: string | null } },
  options?: Omit<UseQueryOptions<ListPersonalDataResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListPersonalDataResponse) => void
): UseQueryResult<ListPersonalDataResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRequests>[1]) => async () => {
    const data = await DataRetrievalAdminApi(sdk, { namespace: input.namespace }).getRequests(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListPersonalDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalAdmin.Requests, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmRequests_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<UserPersonalDataResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserPersonalDataResponse) => void
): UseQueryResult<UserPersonalDataResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRequests_ByUserId>[1]) => async () => {
    const data = await DataRetrievalAdminApi(sdk, { namespace: input.namespace }).getRequests_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserPersonalDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalAdmin.Requests_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteRequest_ByUserId_ByRequestDateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; requestDate: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; requestDate: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; requestDate: string }) => {
    const data = await DataRetrievalAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteRequest_ByUserId_ByRequestDate(input.userId, input.requestDate)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DataRetrievalAdmin.Request_ByUserId_ByRequestDate],
    mutationFn,
    ...options
  })
}
