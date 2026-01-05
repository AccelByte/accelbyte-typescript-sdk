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
import { ClawbackAdminApi } from '../ClawbackAdminApi.js'

import { ClawbackInfo } from '../../generated-definitions/ClawbackInfo.js'
import { IapClawbackPagingSlicedResult } from '../../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../../generated-definitions/StreamEvent.js'
import { XblClawbackEvent } from '../../generated-definitions/XblClawbackEvent.js'

export enum Key_ClawbackAdmin {
  IapClawbackXblMock = 'Platform.ClawbackAdmin.IapClawbackXblMock',
  IapClawbackHistories = 'Platform.ClawbackAdmin.IapClawbackHistories',
  IapClawbackPlaystationMock = 'Platform.ClawbackAdmin.IapClawbackPlaystationMock'
}

/**
 * Mock Sync XBox Clawback event.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClawbackAdmin.IapClawbackXblMock, input]
 * }
 * ```
 */
export const useClawbackAdminApi_CreateIapClawbackXblMockMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ClawbackInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: XblClawbackEvent }>, 'mutationKey'>,
  callback?: (data: ClawbackInfo) => void
): UseMutationResult<ClawbackInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: XblClawbackEvent }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: XblClawbackEvent }) => {
    const response = await ClawbackAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createIapClawbackXblMock(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClawbackAdmin.IapClawbackXblMock],
    mutationFn,
    ...options
  })
}

/**
 * Query clawback history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated clawback history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClawbackAdmin.IapClawbackHistories, input]
 * }
 * ```
 */
export const useClawbackAdminApi_GetIapClawbackHistories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endTime?: string | null
      eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND' | 'REVOKED'
      externalOrderId?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS'
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<IapClawbackPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapClawbackPagingSlicedResult>) => void
): UseQueryResult<IapClawbackPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClawbackAdminApi_GetIapClawbackHistories>[1]) => async () => {
    const response = await ClawbackAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapClawbackHistories(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<IapClawbackPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ClawbackAdmin.IapClawbackHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Mock Sync PlayStation Clawback event..
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClawbackAdmin.IapClawbackPlaystationMock, input]
 * }
 * ```
 */
export const useClawbackAdminApi_CreateIapClawbackPlaystationMockMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ClawbackInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StreamEvent }>, 'mutationKey'>,
  callback?: (data: ClawbackInfo) => void
): UseMutationResult<ClawbackInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StreamEvent }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StreamEvent }) => {
    const response = await ClawbackAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createIapClawbackPlaystationMock(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClawbackAdmin.IapClawbackPlaystationMock],
    mutationFn,
    ...options
  })
}
