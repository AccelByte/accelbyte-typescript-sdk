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
import { PlayerAdminApi } from '../PlayerAdminApi.js'

import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { GetAllPlayerSessionAttributeResponse } from '../../generated-definitions/GetAllPlayerSessionAttributeResponse.js'
import { GetBulkAllPlayerBlockedUsersRequest } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersRequest.js'
import { GetBulkAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersResponse.js'
import { GetLobbyCcuResponse } from '../../generated-definitions/GetLobbyCcuResponse.js'
import { GetPlayerSessionAttributeResponse } from '../../generated-definitions/GetPlayerSessionAttributeResponse.js'
import { ListBlockedPlayerRequest } from '../../generated-definitions/ListBlockedPlayerRequest.js'
import { SetPlayerSessionAttributeRequest } from '../../generated-definitions/SetPlayerSessionAttributeRequest.js'

export enum Key_PlayerAdmin {
  PlayerCcu = 'PlayerAdmin.PlayerCcu',
  PlayerUserBulkBlocked = 'PlayerAdmin.PlayerUserBulkBlocked',
  BlockedPlayer_ByUserId = 'PlayerAdmin.BlockedPlayer_ByUserId',
  AttributesPlayer_ByUserId = 'PlayerAdmin.AttributesPlayer_ByUserId',
  AttributePlayer_ByUserId = 'PlayerAdmin.AttributePlayer_ByUserId',
  BlockedByPlayer_ByUserId = 'PlayerAdmin.BlockedByPlayer_ByUserId',
  BulkBlockPlayer_ByUserId = 'PlayerAdmin.BulkBlockPlayer_ByUserId',
  AttributePlayer_ByUserId_ByAttribute = 'PlayerAdmin.AttributePlayer_ByUserId_ByAttribute'
}

export const useAdmPlayerCcu = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GetLobbyCcuResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLobbyCcuResponse) => void
): UseQueryResult<GetLobbyCcuResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlayerCcu>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getPlayerCcu()
    callback && callback(data)
    return data
  }

  return useQuery<GetLobbyCcuResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.PlayerCcu, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePlayerUserBulkBlockedMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GetBulkAllPlayerBlockedUsersResponse, AxiosError<ApiError>, ApiArgs & { data: GetBulkAllPlayerBlockedUsersRequest }>,
    'mutationKey'
  >,
  callback?: (data: GetBulkAllPlayerBlockedUsersResponse) => void
): UseMutationResult<
  GetBulkAllPlayerBlockedUsersResponse,
  AxiosError<ApiError>,
  ApiArgs & { data: GetBulkAllPlayerBlockedUsersRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: GetBulkAllPlayerBlockedUsersRequest }) => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPlayerUserBulkBlocked(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlayerAdmin.PlayerUserBulkBlocked],
    mutationFn,
    ...options
  })
}

export const useAdmBlockedPlayer_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllPlayerBlockedUsersResponse) => void
): UseQueryResult<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBlockedPlayer_ByUserId>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getBlockedPlayer_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.BlockedPlayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAttributesPlayer_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<GetAllPlayerSessionAttributeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllPlayerSessionAttributeResponse) => void
): UseQueryResult<GetAllPlayerSessionAttributeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAttributesPlayer_ByUserId>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getAttributesPlayer_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllPlayerSessionAttributeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.AttributesPlayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateAttributePlayer_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: SetPlayerSessionAttributeRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: SetPlayerSessionAttributeRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: SetPlayerSessionAttributeRequest }) => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAttributePlayer_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlayerAdmin.AttributePlayer_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmBlockedByPlayer_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllPlayerBlockedByUsersResponse) => void
): UseQueryResult<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBlockedByPlayer_ByUserId>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getBlockedByPlayer_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.BlockedByPlayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBulkBlockPlayer_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: ListBlockedPlayerRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: ListBlockedPlayerRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: ListBlockedPlayerRequest }) => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBulkBlockPlayer_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlayerAdmin.BulkBlockPlayer_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmAttributePlayer_ByUserId_ByAttribute = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; attribute: string },
  options?: Omit<UseQueryOptions<GetPlayerSessionAttributeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetPlayerSessionAttributeResponse) => void
): UseQueryResult<GetPlayerSessionAttributeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAttributePlayer_ByUserId_ByAttribute>[1]) => async () => {
    const data = await PlayerAdminApi(sdk, { namespace: input.namespace }).getAttributePlayer_ByUserId_ByAttribute(
      input.userId,
      input.attribute
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetPlayerSessionAttributeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.AttributePlayer_ByUserId_ByAttribute, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
