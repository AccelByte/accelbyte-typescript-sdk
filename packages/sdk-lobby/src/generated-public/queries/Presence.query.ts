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
import { PresenceApi } from '../PresenceApi.js'

import { GetUsersPresenceResponse } from '../../generated-definitions/GetUsersPresenceResponse.js'
import { RequestUserPresence } from '../../generated-definitions/RequestUserPresence.js'

export enum Key_Presence {
  PresenceUsersPresence = 'Lobby.Presence.PresenceUsersPresence',
  PresenceUserPresence = 'Lobby.Presence.PresenceUserPresence'
}

/**
 * Query users presence with given namespace and userIds.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Presence.PresenceUsersPresence, input]
 * }
 * ```
 */
export const usePresenceApi_GetPresenceUsersPresence = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { userIds: string | null; countOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<GetUsersPresenceResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUsersPresenceResponse>) => void
): UseQueryResult<GetUsersPresenceResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePresenceApi_GetPresenceUsersPresence>[1]) => async () => {
    const response = await PresenceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPresenceUsersPresence(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUsersPresenceResponse, AxiosError<ApiError>>({
    queryKey: [Key_Presence.PresenceUsersPresence, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query users presence with given namespace and userIds.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Presence.PresenceUserPresence, input]
 * }
 * ```
 */
export const usePresenceApi_CreatePresenceUserPresenceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetUsersPresenceResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: RequestUserPresence; queryParams?: { countOnly?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: GetUsersPresenceResponse) => void
): UseMutationResult<
  GetUsersPresenceResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: RequestUserPresence; queryParams?: { countOnly?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RequestUserPresence; queryParams?: { countOnly?: boolean | null } }) => {
    const response = await PresenceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPresenceUserPresence(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Presence.PresenceUserPresence],
    mutationFn,
    ...options
  })
}
