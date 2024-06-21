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
import { ClawbackAdminApi } from '../ClawbackAdminApi.js'

import { ClawbackInfo } from '../../generated-definitions/ClawbackInfo.js'
import { IapClawbackPagingSlicedResult } from '../../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../../generated-definitions/StreamEvent.js'

export enum Key_ClawbackAdmin {
  IapClawbackHistories = 'ClawbackAdmin.IapClawbackHistories',
  IapClawbackPlaystationMock = 'ClawbackAdmin.IapClawbackPlaystationMock'
}

export const useAdmIapClawbackHistories = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      endTime?: string | null
      eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND'
      externalOrderId?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS'
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<IapClawbackPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: IapClawbackPagingSlicedResult) => void
): UseQueryResult<IapClawbackPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapClawbackHistories>[1]) => async () => {
    const data = await ClawbackAdminApi(sdk, { namespace: input.namespace }).getIapClawbackHistories(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<IapClawbackPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ClawbackAdmin.IapClawbackHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateIapClawbackPlaystationMockMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ClawbackInfo, AxiosError<ApiError>, ApiArgs & { data: StreamEvent }>, 'mutationKey'>,
  callback?: (data: ClawbackInfo) => void
): UseMutationResult<ClawbackInfo, AxiosError<ApiError>, ApiArgs & { data: StreamEvent }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StreamEvent }) => {
    const data = await ClawbackAdminApi(sdk, { namespace: input.namespace, config: input.config }).createIapClawbackPlaystationMock(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClawbackAdmin.IapClawbackPlaystationMock],
    mutationFn,
    ...options
  })
}
