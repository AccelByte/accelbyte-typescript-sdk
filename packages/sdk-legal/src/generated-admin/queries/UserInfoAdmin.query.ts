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
import { UserInfoAdminApi } from '../UserInfoAdminApi.js'

import { RetrieveUserInfoCacheStatusResponseArray } from '../../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'

export enum Key_UserInfoAdmin {
  UserInfo = 'UserInfoAdmin.UserInfo'
}

export const useAdmUserInfo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { namespaces?: string | null } },
  options?: Omit<UseQueryOptions<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveUserInfoCacheStatusResponseArray) => void
): UseQueryResult<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUserInfo>[1]) => async () => {
    const data = await UserInfoAdminApi(sdk, { namespace: input.namespace }).getUserInfo(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UserInfoAdmin.UserInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
