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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DataRetrievalApi } from '../DataRetrievalApi.js'

import { DataRetrievalResponse } from '../../generated-definitions/DataRetrievalResponse.js'
import { UserDataUrl } from '../../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../../generated-definitions/UserPersonalDataResponse.js'

export enum Key_DataRetrieval {
  Requests_ByUserId = 'Gdpr.DataRetrieval.Requests_ByUserId',
  Request_ByUserId = 'Gdpr.DataRetrieval.Request_ByUserId',
  Request_ByUserId_ByRequestDate = 'Gdpr.DataRetrieval.Request_ByUserId_ByRequestDate',
  Generate_ByUserId_ByRequestDate = 'Gdpr.DataRetrieval.Generate_ByUserId_ByRequestDate'
}

/**
 * Get user&#39;s personal data requests Requires valid user access token Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrieval.Requests_ByUserId, input]
 * }
 * ```
 */
export const useDataRetrievalApi_GetRequests_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<UserPersonalDataResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPersonalDataResponse>) => void
): UseQueryResult<UserPersonalDataResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataRetrievalApi_GetRequests_ByUserId>[1]) => async () => {
    const response = await DataRetrievalApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRequests_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserPersonalDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrieval.Requests_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Submit personal data retrieval request. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrieval.Request_ByUserId, input]
 * }
 * ```
 */
export const useDataRetrievalApi_PostRequest_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DataRetrievalResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: { password: string | null; languageTag?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: DataRetrievalResponse) => void
): UseMutationResult<
  DataRetrievalResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: { password: string | null; languageTag?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; data: { password: string | null; languageTag?: string | null } }
  ) => {
    const response = await DataRetrievalApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postRequest_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrieval.Request_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Cancel user&#39;s personal data requests Requires valid user access token Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrieval.Request_ByUserId_ByRequestDate, input]
 * }
 * ```
 */
export const useDataRetrievalApi_DeleteRequest_ByUserId_ByRequestDateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; requestDate: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; requestDate: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; requestDate: string }) => {
    const response = await DataRetrievalApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRequest_ByUserId_ByRequestDate(input.userId, input.requestDate)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrieval.Request_ByUserId_ByRequestDate],
    mutationFn,
    ...options
  })
}

/**
 * Generate personal data download url Requires valid user access token Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrieval.Generate_ByUserId_ByRequestDate, input]
 * }
 * ```
 */
export const useDataRetrievalApi_PostGenerate_ByUserId_ByRequestDateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserDataUrl,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; requestDate: string; data: { password: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: UserDataUrl) => void
): UseMutationResult<
  UserDataUrl,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; requestDate: string; data: { password: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; requestDate: string; data: { password: string | null } }) => {
    const response = await DataRetrievalApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postGenerate_ByUserId_ByRequestDate(input.userId, input.requestDate, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrieval.Generate_ByUserId_ByRequestDate],
    mutationFn,
    ...options
  })
}
