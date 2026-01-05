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
import { DataRetrievalAdminApi } from '../DataRetrievalAdminApi.js'

import { DataRetrievalResponse } from '../../generated-definitions/DataRetrievalResponse.js'
import { ListPersonalDataResponse } from '../../generated-definitions/ListPersonalDataResponse.js'
import { UserDataUrl } from '../../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../../generated-definitions/UserPersonalDataResponse.js'

export enum Key_DataRetrievalAdmin {
  Requests = 'Gdpr.DataRetrievalAdmin.Requests',
  Requests_ByUserId = 'Gdpr.DataRetrievalAdmin.Requests_ByUserId',
  Request_ByUserId = 'Gdpr.DataRetrievalAdmin.Request_ByUserId',
  Request_ByUserId_ByRequestDate = 'Gdpr.DataRetrievalAdmin.Request_ByUserId_ByRequestDate',
  Generate_ByUserId_ByRequestDate = 'Gdpr.DataRetrievalAdmin.Generate_ByUserId_ByRequestDate'
}

/**
 * Get list personal data requests Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalAdmin.Requests, input]
 * }
 * ```
 */
export const useDataRetrievalAdminApi_GetRequests = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; requestDate?: string | null } },
  options?: Omit<UseQueryOptions<ListPersonalDataResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPersonalDataResponse>) => void
): UseQueryResult<ListPersonalDataResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataRetrievalAdminApi_GetRequests>[1]) => async () => {
    const response = await DataRetrievalAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRequests(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPersonalDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalAdmin.Requests, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user&#39;s personal data requests Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalAdmin.Requests_ByUserId, input]
 * }
 * ```
 */
export const useDataRetrievalAdminApi_GetRequests_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<UserPersonalDataResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPersonalDataResponse>) => void
): UseQueryResult<UserPersonalDataResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataRetrievalAdminApi_GetRequests_ByUserId>[1]) => async () => {
    const response = await DataRetrievalAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRequests_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserPersonalDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalAdmin.Requests_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Submit user personal data retrieval request. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalAdmin.Request_ByUserId, input]
 * }
 * ```
 */
export const useDataRetrievalAdminApi_PostRequest_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DataRetrievalResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: { password?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: DataRetrievalResponse) => void
): UseMutationResult<
  DataRetrievalResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: { password?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: { password?: string | null } }) => {
    const response = await DataRetrievalAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postRequest_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrievalAdmin.Request_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Cancel user&#39;s personal data requests Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalAdmin.Request_ByUserId_ByRequestDate, input]
 * }
 * ```
 */
export const useDataRetrievalAdminApi_DeleteRequest_ByUserId_ByRequestDateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; requestDate: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; requestDate: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; requestDate: string }) => {
    const response = await DataRetrievalAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRequest_ByUserId_ByRequestDate(input.userId, input.requestDate)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrievalAdmin.Request_ByUserId_ByRequestDate],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt; &lt;p&gt;If admin request data for themselves, password is need to be set&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalAdmin.Generate_ByUserId_ByRequestDate, input]
 * }
 * ```
 */
export const useDataRetrievalAdminApi_PostGenerate_ByUserId_ByRequestDateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserDataUrl,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; requestDate: string; data: { password?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: UserDataUrl) => void
): UseMutationResult<
  UserDataUrl,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; requestDate: string; data: { password?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; requestDate: string; data: { password?: string | null } }) => {
    const response = await DataRetrievalAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postGenerate_ByUserId_ByRequestDate(input.userId, input.requestDate, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrievalAdmin.Generate_ByUserId_ByRequestDate],
    mutationFn,
    ...options
  })
}
