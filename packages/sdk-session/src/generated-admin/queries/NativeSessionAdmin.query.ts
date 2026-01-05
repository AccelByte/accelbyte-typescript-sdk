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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { NativeSessionAdminApi } from '../NativeSessionAdminApi.js'

import { NativeSessionPagingResponse } from '../../generated-definitions/NativeSessionPagingResponse.js'

export enum Key_NativeSessionAdmin {
  NativeSessions = 'Session.NativeSessionAdmin.NativeSessions'
}

/**
 * List of native sessions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NativeSessionAdmin.NativeSessions, input]
 * }
 * ```
 */
export const useNativeSessionAdminApi_GetNativeSessions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; order?: string | null } },
  options?: Omit<UseQueryOptions<NativeSessionPagingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NativeSessionPagingResponse>) => void
): UseQueryResult<NativeSessionPagingResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNativeSessionAdminApi_GetNativeSessions>[1]) => async () => {
    const response = await NativeSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNativeSessions(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<NativeSessionPagingResponse, AxiosError<ApiError>>({
    queryKey: [Key_NativeSessionAdmin.NativeSessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
