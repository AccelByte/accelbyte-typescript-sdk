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
import { GameProfileAdminApi } from '../GameProfileAdminApi.js'

import { GameProfileHeaderArray } from '../../generated-definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../../generated-definitions/GameProfileInfo.js'

export enum Key_GameProfileAdmin {
  Profiles_ByUserId = 'GameProfileAdmin.Profiles_ByUserId',
  Profile_ByUserId_ByProfileId = 'GameProfileAdmin.Profile_ByUserId_ByProfileId'
}

export const useAdmProfiles_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<GameProfileHeaderArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GameProfileHeaderArray) => void
): UseQueryResult<GameProfileHeaderArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfiles_ByUserId>[1]) => async () => {
    const data = await GameProfileAdminApi(sdk, { namespace: input.namespace }).getProfiles_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<GameProfileHeaderArray, AxiosError<ApiError>>({
    queryKey: [Key_GameProfileAdmin.Profiles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmProfile_ByUserId_ByProfileId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; profileId: string },
  options?: Omit<UseQueryOptions<GameProfileInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GameProfileInfo) => void
): UseQueryResult<GameProfileInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfile_ByUserId_ByProfileId>[1]) => async () => {
    const data = await GameProfileAdminApi(sdk, { namespace: input.namespace }).getProfile_ByUserId_ByProfileId(
      input.userId,
      input.profileId
    )
    callback && callback(data)
    return data
  }

  return useQuery<GameProfileInfo, AxiosError<ApiError>>({
    queryKey: [Key_GameProfileAdmin.Profile_ByUserId_ByProfileId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
