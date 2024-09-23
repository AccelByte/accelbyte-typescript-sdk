/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { PlayerApi } from '../PlayerApi.js'

import { BlockPlayerRequest } from '../../generated-definitions/BlockPlayerRequest.js'
import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { UnblockPlayerRequest } from '../../generated-definitions/UnblockPlayerRequest.js'

export enum Key_Player {
  PlayerUserMeBlock = 'Lobby.Player.PlayerUserMeBlock',
  PlayerUsersMeBlocked = 'Lobby.Player.PlayerUsersMeBlocked',
  PlayerUserMeUnblock = 'Lobby.Player.PlayerUserMeUnblock',
  PlayerUsersMeBlockedBy = 'Lobby.Player.PlayerUsersMeBlockedBy'
}

/**
 * Required valid user authorization &lt;br/&gt; &lt;br&gt;add blocked players in a namespace based on user id &lt;br/&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.PlayerUserMeBlock, input]
 * }
 * ```
 */
export const usePlayerApi_CreatePlayerUserMeBlockMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BlockPlayerRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BlockPlayerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BlockPlayerRequest }) => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPlayerUserMeBlock(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Player.PlayerUserMeBlock],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authorization &lt;br/&gt; &lt;br&gt;load blocked players in a namespace based on user id &lt;br/&gt; Action Code: 50101
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.PlayerUsersMeBlocked, input]
 * }
 * ```
 */
export const usePlayerApi_GetPlayerUsersMeBlocked = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllPlayerBlockedUsersResponse>) => void
): UseQueryResult<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerApi_GetPlayerUsersMeBlocked>[1]) => async () => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlayerUsersMeBlocked()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Player.PlayerUsersMeBlocked, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authorization &lt;br/&gt; unblock player in a namespace based on user id &lt;br/&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.PlayerUserMeUnblock, input]
 * }
 * ```
 */
export const usePlayerApi_CreatePlayerUserMeUnblockMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UnblockPlayerRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UnblockPlayerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UnblockPlayerRequest }) => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPlayerUserMeUnblock(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Player.PlayerUserMeUnblock],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authorization &lt;br/&gt; &lt;br&gt;load get players who blocked this player in a namespace based on user id &lt;br/&gt; Action Code: 50101
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.PlayerUsersMeBlockedBy, input]
 * }
 * ```
 */
export const usePlayerApi_GetPlayerUsersMeBlockedBy = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllPlayerBlockedByUsersResponse>) => void
): UseQueryResult<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerApi_GetPlayerUsersMeBlockedBy>[1]) => async () => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlayerUsersMeBlockedBy()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Player.PlayerUsersMeBlockedBy, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
