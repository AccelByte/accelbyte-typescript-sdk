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
import { MatchmakingAdminApi } from '../MatchmakingAdminApi.js'

import { ChannelV1 } from '../../generated-definitions/ChannelV1.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponse } from '../../generated-definitions/GetSessionHistorySearchResponse.js'
import { GetSessionHistorySearchResponseV2 } from '../../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { MatchAddUserIntoSessionRequest } from '../../generated-definitions/MatchAddUserIntoSessionRequest.js'
import { MatchingPartyArray } from '../../generated-definitions/MatchingPartyArray.js'
import { MatchmakingResultArray } from '../../generated-definitions/MatchmakingResultArray.js'
import { StatResumeResponse } from '../../generated-definitions/StatResumeResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export enum Key_MatchmakingAdmin {
  ChannelsExport = 'Matchmaking.MatchmakingAdmin.ChannelsExport',
  ChannelImport = 'Matchmaking.MatchmakingAdmin.ChannelImport',
  ChannelsAllParties = 'Matchmaking.MatchmakingAdmin.ChannelsAllParties',
  Channel_ByChannelName = 'Matchmaking.MatchmakingAdmin.Channel_ByChannelName',
  SessionsHistorySearch = 'Matchmaking.MatchmakingAdmin.SessionsHistorySearch',
  SessionsHistorySearch_v2 = 'Matchmaking.MatchmakingAdmin.SessionsHistorySearch_v2',
  ChannelsAllSessionsBulk = 'Matchmaking.MatchmakingAdmin.ChannelsAllSessionsBulk',
  Stats_ByChannelName = 'Matchmaking.MatchmakingAdmin.Stats_ByChannelName',
  Parties_ByChannelName = 'Matchmaking.MatchmakingAdmin.Parties_ByChannelName',
  Sessions_ByChannelName = 'Matchmaking.MatchmakingAdmin.Sessions_ByChannelName',
  HistoryDetailed_ByMatchId = 'Matchmaking.MatchmakingAdmin.HistoryDetailed_ByMatchId',
  Session_ByChannelName_ByMatchId = 'Matchmaking.MatchmakingAdmin.Session_ByChannelName_ByMatchId',
  User_ByChannelName_ByMatchId_ByUserId = 'Matchmaking.MatchmakingAdmin.User_ByChannelName_ByMatchId_ByUserId'
}

/**
 * Export channels configuration to file. Action Code: 510114
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.ChannelsExport, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetChannelsExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetChannelsExport>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChannelsExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.ChannelsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Import channels configuration from file. It will merge with existing channels. Available import strategy: - leaveOut: if channel with same key exist, the existing will be used and imported one will be ignored (default) - replace: if channel with same key exist, the imported channel will be used and existing one will be removed Action Code: 510113
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.ChannelImport, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_UpdateChannelImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File; strategy?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: ImportConfigResponse) => void
): UseMutationResult<
  ImportConfigResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file?: File; strategy?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File; strategy?: string | null } }) => {
    const response = await MatchmakingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateChannelImport(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.ChannelImport],
    mutationFn,
    ...options
  })
}

/**
 * Get all parties queueing in all channels.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.ChannelsAllParties, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetChannelsAllParties = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetChannelsAllParties>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getChannelsAllParties()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.ChannelsAllParties, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Reads single channel based on namespace and channel name Action Code: 510112
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Channel_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetChannel_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<ChannelV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChannelV1>) => void
): UseQueryResult<ChannelV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetChannel_ByChannelName>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getChannel_ByChannelName(input.channelName)
    callback && callback(response)
    return response.data
  }

  return useQuery<ChannelV1, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Channel_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update channel based on namespace and channel name Action Code: 510111
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Channel_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_PatchChannel_ByChannelNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; data: UpdateChannelRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; data: UpdateChannelRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string; data: UpdateChannelRequest }) => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchChannel_ByChannelName(input.channelName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.Channel_ByChannelName],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 *  &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Search sessions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.SessionsHistorySearch, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetSessionsHistorySearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      limit: number
      offset: number
      channel?: string | null
      deleted?: boolean | null
      matchID?: string | null
      partyID?: string | null
      userID?: string | null
    }
  },
  options?: Omit<UseQueryOptions<GetSessionHistorySearchResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetSessionHistorySearchResponse>) => void
): UseQueryResult<GetSessionHistorySearchResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetSessionsHistorySearch>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSessionsHistorySearch(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetSessionHistorySearchResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.SessionsHistorySearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.SessionsHistorySearch_v2, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetSessionsHistorySearch_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      limit: number
      offset: number
      channel?: string | null
      deleted?: boolean | null
      matchID?: string | null
      partyID?: string | null
      userID?: string | null
    }
  },
  options?: Omit<UseQueryOptions<GetSessionHistorySearchResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetSessionHistorySearchResponseV2>) => void
): UseQueryResult<GetSessionHistorySearchResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetSessionsHistorySearch_v2>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSessionsHistorySearch_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetSessionHistorySearchResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.SessionsHistorySearch_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk get sessions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.ChannelsAllSessionsBulk, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetChannelsAllSessionsBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { matchIDs?: string | null } },
  options?: Omit<UseQueryOptions<MatchmakingResultArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchmakingResultArray>) => void
): UseQueryResult<MatchmakingResultArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetChannelsAllSessionsBulk>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getChannelsAllSessionsBulk(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchmakingResultArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.ChannelsAllSessionsBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Get a channel&#39;s stat data (mean, stddev, min, max) according to the stats collected from statistics service. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Stats_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetStats_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<StatResumeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatResumeResponse>) => void
): UseQueryResult<StatResumeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetStats_ByChannelName>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStats_ByChannelName(input.channelName)
    callback && callback(response)
    return response.data
  }

  return useQuery<StatResumeResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Stats_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all parties queueing in a channel.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Parties_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetParties_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<MatchingPartyArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchingPartyArray>) => void
): UseQueryResult<MatchingPartyArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetParties_ByChannelName>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getParties_ByChannelName(input.channelName)
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchingPartyArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Parties_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all sessions in a channel. if party_id value empty/null, field will not show in response body.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Sessions_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetSessions_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<MatchmakingResultArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchmakingResultArray>) => void
): UseQueryResult<MatchmakingResultArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetSessions_ByChannelName>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSessions_ByChannelName(input.channelName)
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchmakingResultArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.Sessions_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 *  &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/{sessionId}/history/detailed [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Get session history detailed. if party_id value empty/null, field will not show in response body.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.HistoryDetailed_ByMatchId, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_GetHistoryDetailed_ByMatchId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { matchID: string },
  options?: Omit<UseQueryOptions<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetSessionHistoryDetailedResponseItemArray>) => void
): UseQueryResult<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingAdminApi_GetHistoryDetailed_ByMatchId>[1]) => async () => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getHistoryDetailed_ByMatchId(input.matchID)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingAdmin.HistoryDetailed_ByMatchId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete a session in a channel.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Session_ByChannelName_ByMatchId, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_DeleteSession_ByChannelName_ByMatchIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; matchID: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; matchID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string; matchID: string }) => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSession_ByChannelName_ByMatchId(input.channelName, input.matchID)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.Session_ByChannelName_ByMatchId],
    mutationFn,
    ...options
  })
}

/**
 * Add user into the session in a channel.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.Session_ByChannelName_ByMatchId, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_CreateSession_ByChannelName_ByMatchIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelName: string; matchID: string; data: MatchAddUserIntoSessionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelName: string; matchID: string; data: MatchAddUserIntoSessionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string; matchID: string; data: MatchAddUserIntoSessionRequest }) => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSession_ByChannelName_ByMatchId(input.channelName, input.matchID, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.Session_ByChannelName_ByMatchId],
    mutationFn,
    ...options
  })
}

/**
 * Delete a user from a session in the channel.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingAdmin.User_ByChannelName_ByMatchId_ByUserId, input]
 * }
 * ```
 */
export const useMatchmakingAdminApi_DeleteUser_ByChannelName_ByMatchId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; matchID: string; userID: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; matchID: string; userID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string; matchID: string; userID: string }) => {
    const response = await MatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUser_ByChannelName_ByMatchId_ByUserId(input.channelName, input.matchID, input.userID)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchmakingAdmin.User_ByChannelName_ByMatchId_ByUserId],
    mutationFn,
    ...options
  })
}
