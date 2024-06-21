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
import { MatchmakingAdminApi } from '../MatchmakingAdminApi.js'

import { ChannelV1 } from '../../generated-definitions/ChannelV1.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { MatchAddUserIntoSessionRequest } from '../../generated-definitions/MatchAddUserIntoSessionRequest.js'
import { MatchingPartyArray } from '../../generated-definitions/MatchingPartyArray.js'
import { MatchmakingResultArray } from '../../generated-definitions/MatchmakingResultArray.js'
import { StatResumeResponse } from '../../generated-definitions/StatResumeResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export enum Key_MatchmakingAdmin {
  ChannelsExport = 'MatchmakingAdmin.ChannelsExport',
  ChannelImport = 'MatchmakingAdmin.ChannelImport',
  ChannelsAllParties = 'MatchmakingAdmin.ChannelsAllParties',
  Channel_ByChannelName = 'MatchmakingAdmin.Channel_ByChannelName',
  ChannelsAllSessionsBulk = 'MatchmakingAdmin.ChannelsAllSessionsBulk',
  Stats_ByChannelName = 'MatchmakingAdmin.Stats_ByChannelName',
  Parties_ByChannelName = 'MatchmakingAdmin.Parties_ByChannelName',
  Sessions_ByChannelName = 'MatchmakingAdmin.Sessions_ByChannelName',
  Session_ByChannelName_ByMatchId = 'MatchmakingAdmin.Session_ByChannelName_ByMatchId',
  User_ByChannelName_ByMatchId_ByUserId = 'MatchmakingAdmin.User_ByChannelName_ByMatchId_ByUserId'
}

export const useAdmChannelsExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannelsExport>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getChannelsExport()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.ChannelsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateChannelImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File; strategy?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: ImportConfigResponse) => void
): UseMutationResult<ImportConfigResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File; strategy?: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File; strategy?: string | null } }) => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createChannelImport(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.ChannelImport],
    mutationFn,
    ...options
  })
}

export const useAdmChannelsAllParties = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannelsAllParties>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getChannelsAllParties()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.ChannelsAllParties, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmChannel_ByChannelName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelName: string },
  options?: Omit<UseQueryOptions<ChannelV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ChannelV1) => void
): UseQueryResult<ChannelV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannel_ByChannelName>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getChannel_ByChannelName(input.channelName)
    callback && callback(data)
    return data
  }

  return useQuery<ChannelV1, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Channel_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchChannel_ByChannelNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; data: UpdateChannelRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; data: UpdateChannelRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; data: UpdateChannelRequest }) => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchChannel_ByChannelName(
      input.channelName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.Channel_ByChannelName],
    mutationFn,
    ...options
  })
}

export const useAdmChannelsAllSessionsBulk = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { matchIDs?: string | null } },
  options?: Omit<UseQueryOptions<MatchmakingResultArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: MatchmakingResultArray) => void
): UseQueryResult<MatchmakingResultArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannelsAllSessionsBulk>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getChannelsAllSessionsBulk(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<MatchmakingResultArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.ChannelsAllSessionsBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStats_ByChannelName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelName: string },
  options?: Omit<UseQueryOptions<StatResumeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StatResumeResponse) => void
): UseQueryResult<StatResumeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStats_ByChannelName>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getStats_ByChannelName(input.channelName)
    callback && callback(data)
    return data
  }

  return useQuery<StatResumeResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Stats_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmParties_ByChannelName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelName: string },
  options?: Omit<UseQueryOptions<MatchingPartyArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: MatchingPartyArray) => void
): UseQueryResult<MatchingPartyArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmParties_ByChannelName>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getParties_ByChannelName(input.channelName)
    callback && callback(data)
    return data
  }

  return useQuery<MatchingPartyArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Parties_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSessions_ByChannelName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelName: string },
  options?: Omit<UseQueryOptions<MatchmakingResultArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: MatchmakingResultArray) => void
): UseQueryResult<MatchmakingResultArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSessions_ByChannelName>[1]) => async () => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace }).getSessions_ByChannelName(input.channelName)
    callback && callback(data)
    return data
  }

  return useQuery<MatchmakingResultArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Sessions_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteSession_ByChannelName_ByMatchIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; matchID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; matchID: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; matchID: string }) => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSession_ByChannelName_ByMatchId(
      input.channelName,
      input.matchID
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.Session_ByChannelName_ByMatchId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSession_ByChannelName_ByMatchIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { channelName: string; matchID: string; data: MatchAddUserIntoSessionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { channelName: string; matchID: string; data: MatchAddUserIntoSessionRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; matchID: string; data: MatchAddUserIntoSessionRequest }) => {
    const data = await MatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSession_ByChannelName_ByMatchId(
      input.channelName,
      input.matchID,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.Session_ByChannelName_ByMatchId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteUser_ByChannelName_ByMatchId_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; matchID: string; userID: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; matchID: string; userID: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; matchID: string; userID: string }) => {
    const data = await MatchmakingAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteUser_ByChannelName_ByMatchId_ByUserId(input.channelName, input.matchID, input.userID)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.User_ByChannelName_ByMatchId_ByUserId],
    mutationFn,
    ...options
  })
}
