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
import { DataRetrievalS2SApi } from '../DataRetrievalS2SApi.js'

import { ListFinishedDataRequests } from '../../generated-definitions/ListFinishedDataRequests.js'
import { S2SDataRequestSummary } from '../../generated-definitions/S2SDataRequestSummary.js'
import { S2SDataRetrievalResponse } from '../../generated-definitions/S2SDataRetrievalResponse.js'
import { S2SUserDataUrl } from '../../generated-definitions/S2SUserDataUrl.js'

export enum Key_DataRetrievalS2S {
  S2SRequestsFinished = 'Gdpr.DataRetrievalS2S.S2SRequestsFinished',
  S2Request_ByRequestId = 'Gdpr.DataRetrievalS2S.S2Request_ByRequestId',
  RequestS2_ByUserId = 'Gdpr.DataRetrievalS2S.RequestS2_ByUserId',
  GenerateS2_ByUserId_ByRequestDate = 'Gdpr.DataRetrievalS2S.GenerateS2_ByUserId_ByRequestDate'
}

/**
 * Scope: account Get list of finished personal data requests based on the finished time period. Unfinished personal data requests will not appear here, i.e. have Status **Pending**, **In-Progress** or **Canceled**. **Anonymize userId for deleted account:** For user accounts that have been deleted, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalS2S.S2SRequestsFinished, input]
 * }
 * ```
 */
export const useDataRetrievalS2SApi_GetS2SRequestsFinished = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { end: string | null; start: string | null } },
  options?: Omit<UseQueryOptions<ListFinishedDataRequests, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListFinishedDataRequests>) => void
): UseQueryResult<ListFinishedDataRequests, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataRetrievalS2SApi_GetS2SRequestsFinished>[1]) => async () => {
    const response = await DataRetrievalS2SApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getS2SRequestsFinished(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListFinishedDataRequests, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalS2S.S2SRequestsFinished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Scope: account Get Personal Data Request by Request Id. If the request has been completed, it will return a download url for the data package. --- ## This API for S2S integration purpose only
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalS2S.S2Request_ByRequestId, input]
 * }
 * ```
 */
export const useDataRetrievalS2SApi_GetS2Request_ByRequestId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { requestId: string },
  options?: Omit<UseQueryOptions<S2SDataRequestSummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<S2SDataRequestSummary>) => void
): UseQueryResult<S2SDataRequestSummary, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataRetrievalS2SApi_GetS2Request_ByRequestId>[1]) => async () => {
    const response = await DataRetrievalS2SApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getS2Request_ByRequestId(input.requestId)
    callback && callback(response)
    return response.data
  }

  return useQuery<S2SDataRequestSummary, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalS2S.S2Request_ByRequestId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Scope: account Submit user personal data retrieval request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalS2S.RequestS2_ByUserId, input]
 * }
 * ```
 */
export const useDataRetrievalS2SApi_CreateRequestS2_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<S2SDataRetrievalResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: S2SDataRetrievalResponse) => void
): UseMutationResult<S2SDataRetrievalResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await DataRetrievalS2SApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRequestS2_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataRetrievalS2S.RequestS2_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Scope: account Generate personal data download url. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataRetrievalS2S.GenerateS2_ByUserId_ByRequestDate, input]
 * }
 * ```
 */
export const useDataRetrievalS2SApi_FetchGenerateS2_ByUserId_ByRequestDate = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; requestDate: string },
  options?: Omit<UseQueryOptions<S2SUserDataUrl, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<S2SUserDataUrl>) => void
): UseQueryResult<S2SUserDataUrl, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useDataRetrievalS2SApi_FetchGenerateS2_ByUserId_ByRequestDate>[1]) => async () => {
      const response = await DataRetrievalS2SApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).fetchGenerateS2_ByUserId_ByRequestDate(input.userId, input.requestDate)
      callback && callback(response)
      return response.data
    }

  return useQuery<S2SUserDataUrl, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalS2S.GenerateS2_ByUserId_ByRequestDate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
