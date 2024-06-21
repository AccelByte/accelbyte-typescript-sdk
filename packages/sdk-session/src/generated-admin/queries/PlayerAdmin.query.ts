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
import { PlayerAdminApi } from '../PlayerAdminApi.js'

import { PlayerAttributesResponseBody } from '../../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayerAttributesResponseBodyArray } from '../../generated-definitions/PlayerAttributesResponseBodyArray.js'

export enum Key_PlayerAdmin {
  UsersAttributes = 'PlayerAdmin.UsersAttributes',
  Attributes_ByUserId = 'PlayerAdmin.Attributes_ByUserId'
}

export const useAdmUsersAttributes = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { users?: string | null } },
  options?: Omit<UseQueryOptions<PlayerAttributesResponseBodyArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayerAttributesResponseBodyArray) => void
): UseQueryResult<PlayerAttributesResponseBodyArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersAttributes>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getUsersAttributes(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PlayerAttributesResponseBodyArray, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.UsersAttributes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAttributes_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<PlayerAttributesResponseBody, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayerAttributesResponseBody) => void
): UseQueryResult<PlayerAttributesResponseBody, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAttributes_ByUserId>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getAttributes_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<PlayerAttributesResponseBody, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.Attributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
