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
import { NativeSessionAdminApi } from '../NativeSessionAdminApi.js'

import { NativeSessionPagingResponse } from '../../generated-definitions/NativeSessionPagingResponse.js'

export enum Key_NativeSessionAdmin {
  NativeSessions = 'NativeSessionAdmin.NativeSessions'
}

export const useAdmNativeSessions = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; order?: string | null } },
  options?: Omit<UseQueryOptions<NativeSessionPagingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NativeSessionPagingResponse) => void
): UseQueryResult<NativeSessionPagingResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNativeSessions>[1]) => async () => {
    const data = await NativeSessionAdminApi(sdk, { namespace: input.namespace }).getNativeSessions(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<NativeSessionPagingResponse, AxiosError<ApiError>>({
    queryKey: [Key_NativeSessionAdmin.NativeSessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
