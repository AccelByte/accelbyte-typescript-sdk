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
import { DataDeletionS2SApi } from '../DataDeletionS2SApi.js'

import { ListFinishedDataDeletion } from '../../generated-definitions/ListFinishedDataDeletion.js'
import { S2SRequestDeleteResponse } from '../../generated-definitions/S2SRequestDeleteResponse.js'

export enum Key_DataDeletionS2S {
  S2SDeletionsFinished = 'Gdpr.DataDeletionS2S.S2SDeletionsFinished',
  DeletionS2_ByUserId = 'Gdpr.DataDeletionS2S.DeletionS2_ByUserId'
}

/**
 * Scope: account Get list of finished account deletion requests based on the finished time period. Unfinished deletion requests will not appear here, i.e. have Status **Request**, **Pending** or **In-Progress**. **Anonymize userId for deleted account:** For user accounts that have been deleted, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletionS2S.S2SDeletionsFinished, input]
 * }
 * ```
 */
export const useDataDeletionS2SApi_GetS2SDeletionsFinished = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { end: string | null; start: string | null } },
  options?: Omit<UseQueryOptions<ListFinishedDataDeletion, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListFinishedDataDeletion>) => void
): UseQueryResult<ListFinishedDataDeletion, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataDeletionS2SApi_GetS2SDeletionsFinished>[1]) => async () => {
    const response = await DataDeletionS2SApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getS2SDeletionsFinished(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListFinishedDataDeletion, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletionS2S.S2SDeletionsFinished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Scope: account Submit user&#39;s account deletion request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification. 2. This API will **perform account deletion immediately** without GDPR grace period (i.e. 28 days grace period).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletionS2S.DeletionS2_ByUserId, input]
 * }
 * ```
 */
export const useDataDeletionS2SApi_CreateDeletionS2_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<S2SRequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: S2SRequestDeleteResponse) => void
): UseMutationResult<S2SRequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await DataDeletionS2SApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createDeletionS2_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataDeletionS2S.DeletionS2_ByUserId],
    mutationFn,
    ...options
  })
}
