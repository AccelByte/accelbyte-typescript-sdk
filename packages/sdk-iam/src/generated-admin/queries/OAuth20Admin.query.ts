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
import { OAuth20AdminApi } from '../OAuth20AdminApi.js'

import { TokenThirdPartyResponse } from '../../generated-definitions/TokenThirdPartyResponse.js'

export enum Key_OAuth20Admin {
  RevokeOauth_ByUserId = 'OAuth20Admin.RevokeOauth_ByUserId',
  PlatformTokenOauth_ByUserId_ByPlatformId = 'OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId'
}

export const useAdmCreateRevokeOauth_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; queryParams?: { includeGameNamespace?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; queryParams?: { includeGameNamespace?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; queryParams?: { includeGameNamespace?: boolean | null } }) => {
    const data = await OAuth20AdminApi(sdk, { namespace: input.namespace, config: input.config }).createRevokeOauth_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Admin.RevokeOauth_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmPlatformTokenOauth_ByUserId_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; platformId: string; queryParams?: { platformUserId?: string | null } },
  options?: Omit<UseQueryOptions<TokenThirdPartyResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TokenThirdPartyResponse) => void
): UseQueryResult<TokenThirdPartyResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformTokenOauth_ByUserId_ByPlatformId>[1]) => async () => {
    const data = await OAuth20AdminApi(sdk, { namespace: input.namespace }).getPlatformTokenOauth_ByUserId_ByPlatformId(
      input.userId,
      input.platformId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TokenThirdPartyResponse, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
