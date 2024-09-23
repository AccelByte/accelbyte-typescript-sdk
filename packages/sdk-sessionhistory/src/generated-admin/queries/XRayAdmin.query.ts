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
import { XRayAdminApi } from '../XRayAdminApi.js'

import { XRayAcquiringDsQueryResponse } from '../../generated-definitions/XRayAcquiringDsQueryResponse.js'
import { XRayAcquiringDsWaitTimeQueryResponse } from '../../generated-definitions/XRayAcquiringDsWaitTimeQueryResponse.js'
import { XRayBulkTicketObservabilityRequest } from '../../generated-definitions/XRayBulkTicketObservabilityRequest.js'
import { XRayBulkTicketObservabilityResponse } from '../../generated-definitions/XRayBulkTicketObservabilityResponse.js'
import { XRayCanceledMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayCanceledMatchmakingTicketQueryResponse.js'
import { XRayCreatedMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayCreatedMatchmakingTicketQueryResponse.js'
import { XRayExpiredMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayExpiredMatchmakingTicketQueryResponse.js'
import { XRayMatchHistorQueryResponse } from '../../generated-definitions/XRayMatchHistorQueryResponse.js'
import { XRayMatchLengthDurationQueryResponse } from '../../generated-definitions/XRayMatchLengthDurationQueryResponse.js'
import { XRayMatchMatchmakingQueryResponse } from '../../generated-definitions/XRayMatchMatchmakingQueryResponse.js'
import { XRayMatchMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayMatchMatchmakingTicketQueryResponse.js'
import { XRayMatchPoolPodTickMatchResponse } from '../../generated-definitions/XRayMatchPoolPodTickMatchResponse.js'
import { XRayMatchPoolPodTickQueryResponse } from '../../generated-definitions/XRayMatchPoolPodTickQueryResponse.js'
import { XRayMatchPoolPodTickTicketResponse } from '../../generated-definitions/XRayMatchPoolPodTickTicketResponse.js'
import { XRayMatchPoolQueryResponse } from '../../generated-definitions/XRayMatchPoolQueryResponse.js'
import { XRayMatchTicketHistoryQueryResponse } from '../../generated-definitions/XRayMatchTicketHistoryQueryResponse.js'
import { XRayMatchesQueryResponse } from '../../generated-definitions/XRayMatchesQueryResponse.js'
import { XRayTicketObservabilityRequest } from '../../generated-definitions/XRayTicketObservabilityRequest.js'
import { XRayTicketObservabilityResponse } from '../../generated-definitions/XRayTicketObservabilityResponse.js'
import { XRayTicketQueryResponse } from '../../generated-definitions/XRayTicketQueryResponse.js'
import { XRayTotalActiveSessionQueryResponse } from '../../generated-definitions/XRayTotalActiveSessionQueryResponse.js'
import { XRayTotalPlayerPersessionAvgQueryResponse } from '../../generated-definitions/XRayTotalPlayerPersessionAvgQueryResponse.js'

export enum Key_XRayAdmin {
  XrayTicket_v2 = 'Sessionhistory.XRayAdmin.XrayTicket_v2',
  XrayTicketBulk_v2 = 'Sessionhistory.XRayAdmin.XrayTicketBulk_v2',
  XrayTicket_ByTicketId_v2 = 'Sessionhistory.XRayAdmin.XrayTicket_ByTicketId_v2',
  XrayMetricsTotalMatch_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalMatch_v2',
  XrayMetricsAcquiringDs_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsAcquiringDs_v2',
  XrayMatchPool_ByPoolName_v2 = 'Sessionhistory.XRayAdmin.XrayMatchPool_ByPoolName_v2',
  TicketsXray_ByUserId_v2 = 'Sessionhistory.XRayAdmin.TicketsXray_ByUserId_v2',
  TicketsXray_ByMatchId_v2 = 'Sessionhistory.XRayAdmin.TicketsXray_ByMatchId_v2',
  XrayMetricsTotalTicketMatch_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalTicketMatch_v2',
  HistoriesXray_ByMatchId_v2 = 'Sessionhistory.XRayAdmin.HistoriesXray_ByMatchId_v2',
  XrayMetricsTotalActiveSession_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalActiveSession_v2',
  XrayMetricsTotalTicketCreated_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalTicketCreated_v2',
  XrayMetricsTotalTicketExpired_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalTicketExpired_v2',
  XrayMetricsTotalTicketCanceled_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalTicketCanceled_v2',
  XrayMetricsMatchLengthDurationAvg_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsMatchLengthDurationAvg_v2',
  XrayMetricsMatchLengthDurationP99_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsMatchLengthDurationP99_v2',
  TicketHistoriesXray_ByMatchId_v2 = 'Sessionhistory.XRayAdmin.TicketHistoriesXray_ByMatchId_v2',
  XrayMetricsAcquiringDsWaitTimeAvg_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsAcquiringDsWaitTimeAvg_v2',
  XrayMetricsTotalPlayerPersessionAvg_v2 = 'Sessionhistory.XRayAdmin.XrayMetricsTotalPlayerPersessionAvg_v2',
  TicksXray_ByPoolName_ByPodName_v2 = 'Sessionhistory.XRayAdmin.TicksXray_ByPoolName_ByPodName_v2',
  MatchesXray_ByPoolName_ByPodName_ByTickId_v2 = 'Sessionhistory.XRayAdmin.MatchesXray_ByPoolName_ByPodName_ByTickId_v2',
  TicketsXray_ByPoolName_ByPodName_ByTickId_v2 = 'Sessionhistory.XRayAdmin.TicketsXray_ByPoolName_ByPodName_ByTickId_v2'
}

/**
 * Create ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; TicketID : ticket ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayTicket_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_CreateXrayTicketMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<XRayTicketObservabilityResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: XRayTicketObservabilityRequest }>,
    'mutationKey'
  >,
  callback?: (data: XRayTicketObservabilityResponse) => void
): UseMutationResult<
  XRayTicketObservabilityResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: XRayTicketObservabilityRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: XRayTicketObservabilityRequest }) => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createXrayTicket_v2(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_XRayAdmin.XrayTicket_v2],
    mutationFn,
    ...options
  })
}

/**
 * Create bulk ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; PartyID : ticket Party ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayTicketBulk_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_CreateXrayTicketBulkMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      XRayBulkTicketObservabilityResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: XRayBulkTicketObservabilityRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: XRayBulkTicketObservabilityResponse) => void
): UseMutationResult<
  XRayBulkTicketObservabilityResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: XRayBulkTicketObservabilityRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: XRayBulkTicketObservabilityRequest }) => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createXrayTicketBulk_v2(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_XRayAdmin.XrayTicketBulk_v2],
    mutationFn,
    ...options
  })
}

/**
 * Query xray timeline by ticketID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayTicket_ByTicketId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayTicket_ByTicketId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    ticketId: string
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<XRayTicketQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayTicketQueryResponse>) => void
): UseQueryResult<XRayTicketQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayTicket_ByTicketId_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getXrayTicket_ByTicketId_v2(
      input.ticketId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayTicketQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayTicket_ByTicketId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total match.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalMatch_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalMatch_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayMatchMatchmakingQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchMatchmakingQueryResponse>) => void
): UseQueryResult<XRayMatchMatchmakingQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalMatch_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getXrayMetricsTotalMatch_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchMatchmakingQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalMatch_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total success and failed claim DS.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsAcquiringDs_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsAcquiringDs_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayAcquiringDsQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayAcquiringDsQueryResponse>) => void
): UseQueryResult<XRayAcquiringDsQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsAcquiringDs_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getXrayMetricsAcquiringDs_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayAcquiringDsQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsAcquiringDs_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray match pool. query can using matchpool array with separate &#34;,&#34;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMatchPool_ByPoolName_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMatchPool_ByPoolName_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { poolName: string[]; queryParams: { endDate: string | null; startDate: string | null } },
  options?: Omit<UseQueryOptions<XRayMatchPoolQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchPoolQueryResponse>) => void
): UseQueryResult<XRayMatchPoolQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMatchPool_ByPoolName_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMatchPool_ByPoolName_v2(input.poolName, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchPoolQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMatchPool_ByPoolName_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray timeline by userID or ticketID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.TicketsXray_ByUserId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetTicketsXray_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<XRayTicketQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayTicketQueryResponse>) => void
): UseQueryResult<XRayTicketQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetTicketsXray_ByUserId_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTicketsXray_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayTicketQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.TicketsXray_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray timeline by matchID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.TicketsXray_ByMatchId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetTicketsXray_ByMatchId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { matchId: string },
  options?: Omit<UseQueryOptions<XRayMatchesQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchesQueryResponse>) => void
): UseQueryResult<XRayMatchesQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetTicketsXray_ByMatchId_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTicketsXray_ByMatchId_v2(
      input.matchId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchesQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.TicketsXray_ByMatchId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total ticket match.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketMatch_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalTicketMatch_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayMatchMatchmakingTicketQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchMatchmakingTicketQueryResponse>) => void
): UseQueryResult<XRayMatchMatchmakingTicketQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalTicketMatch_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsTotalTicketMatch_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchMatchmakingTicketQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketMatch_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray match histories.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.HistoriesXray_ByMatchId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetHistoriesXray_ByMatchId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { matchId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<XRayMatchHistorQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchHistorQueryResponse>) => void
): UseQueryResult<XRayMatchHistorQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetHistoriesXray_ByMatchId_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getHistoriesXray_ByMatchId_v2(input.matchId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchHistorQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.HistoriesXray_ByMatchId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total active session.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalActiveSession_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalActiveSession_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[]; region?: string | null }
  },
  options?: Omit<UseQueryOptions<XRayTotalActiveSessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayTotalActiveSessionQueryResponse>) => void
): UseQueryResult<XRayTotalActiveSessionQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalActiveSession_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsTotalActiveSession_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayTotalActiveSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalActiveSession_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total ticket created.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketCreated_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalTicketCreated_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayCreatedMatchmakingTicketQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayCreatedMatchmakingTicketQueryResponse>) => void
): UseQueryResult<XRayCreatedMatchmakingTicketQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalTicketCreated_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsTotalTicketCreated_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayCreatedMatchmakingTicketQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketCreated_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total ticket expired.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketExpired_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalTicketExpired_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayExpiredMatchmakingTicketQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayExpiredMatchmakingTicketQueryResponse>) => void
): UseQueryResult<XRayExpiredMatchmakingTicketQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalTicketExpired_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsTotalTicketExpired_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayExpiredMatchmakingTicketQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketExpired_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total ticket canceled.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketCanceled_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalTicketCanceled_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayCanceledMatchmakingTicketQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayCanceledMatchmakingTicketQueryResponse>) => void
): UseQueryResult<XRayCanceledMatchmakingTicketQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalTicketCanceled_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsTotalTicketCanceled_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayCanceledMatchmakingTicketQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalTicketCanceled_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query match length duration avg. time in seconds
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsMatchLengthDurationAvg_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsMatchLengthDurationAvg_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayMatchLengthDurationQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchLengthDurationQueryResponse>) => void
): UseQueryResult<XRayMatchLengthDurationQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsMatchLengthDurationAvg_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsMatchLengthDurationAvg_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchLengthDurationQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsMatchLengthDurationAvg_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query match length duration p99. time in seconds
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsMatchLengthDurationP99_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsMatchLengthDurationP99_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayMatchLengthDurationQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchLengthDurationQueryResponse>) => void
): UseQueryResult<XRayMatchLengthDurationQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsMatchLengthDurationP99_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsMatchLengthDurationP99_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchLengthDurationQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsMatchLengthDurationP99_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray match ticket histories.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.TicketHistoriesXray_ByMatchId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetTicketHistoriesXray_ByMatchId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { matchId: string },
  options?: Omit<UseQueryOptions<XRayMatchTicketHistoryQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchTicketHistoryQueryResponse>) => void
): UseQueryResult<XRayMatchTicketHistoryQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetTicketHistoriesXray_ByMatchId_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTicketHistoriesXray_ByMatchId_v2(input.matchId)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchTicketHistoryQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.TicketHistoriesXray_ByMatchId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query acquiring ds wait time average. time in seconds
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsAcquiringDsWaitTimeAvg_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsAcquiringDsWaitTimeAvg_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayAcquiringDsWaitTimeQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayAcquiringDsWaitTimeQueryResponse>) => void
): UseQueryResult<XRayAcquiringDsWaitTimeQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsAcquiringDsWaitTimeAvg_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getXrayMetricsAcquiringDsWaitTimeAvg_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayAcquiringDsWaitTimeQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsAcquiringDsWaitTimeAvg_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query total player persession average.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.XrayMetricsTotalPlayerPersessionAvg_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetXrayMetricsTotalPlayerPersessionAvg_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { endDate: string | null; startDate: string | null; matchPool?: string[] } },
  options?: Omit<UseQueryOptions<XRayTotalPlayerPersessionAvgQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayTotalPlayerPersessionAvgQueryResponse>) => void
): UseQueryResult<XRayTotalPlayerPersessionAvgQueryResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetXrayMetricsTotalPlayerPersessionAvg_v2>[1]) => async () => {
      const response = await XRayAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getXrayMetricsTotalPlayerPersessionAvg_v2(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<XRayTotalPlayerPersessionAvgQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.XrayMetricsTotalPlayerPersessionAvg_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray match pool ticks.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.TicksXray_ByPoolName_ByPodName_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetTicksXray_ByPoolName_ByPodName_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    poolName: string
    podName: string
    queryParams: { endDate: string | null; startDate: string | null; all?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<XRayMatchPoolPodTickQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchPoolPodTickQueryResponse>) => void
): UseQueryResult<XRayMatchPoolPodTickQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetTicksXray_ByPoolName_ByPodName_v2>[1]) => async () => {
    const response = await XRayAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTicksXray_ByPoolName_ByPodName_v2(input.poolName, input.podName, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<XRayMatchPoolPodTickQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.TicksXray_ByPoolName_ByPodName_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray match pool tick matches by tick id.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.MatchesXray_ByPoolName_ByPodName_ByTickId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetMatchesXray_ByPoolName_ByPodName_ByTickId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { poolName: string; podName: string; tickId: string },
  options?: Omit<UseQueryOptions<XRayMatchPoolPodTickMatchResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchPoolPodTickMatchResponse>) => void
): UseQueryResult<XRayMatchPoolPodTickMatchResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetMatchesXray_ByPoolName_ByPodName_ByTickId_v2>[1]) => async () => {
      const response = await XRayAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getMatchesXray_ByPoolName_ByPodName_ByTickId_v2(input.poolName, input.podName, input.tickId)
      callback && callback(response)
      return response.data
    }

  return useQuery<XRayMatchPoolPodTickMatchResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.MatchesXray_ByPoolName_ByPodName_ByTickId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query xray match pool tick tickets detail by tick id.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_XRayAdmin.TicketsXray_ByPoolName_ByPodName_ByTickId_v2, input]
 * }
 * ```
 */
export const useXRayAdminApi_GetTicketsXray_ByPoolName_ByPodName_ByTickId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { poolName: string; podName: string; tickId: string },
  options?: Omit<UseQueryOptions<XRayMatchPoolPodTickTicketResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XRayMatchPoolPodTickTicketResponse>) => void
): UseQueryResult<XRayMatchPoolPodTickTicketResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useXRayAdminApi_GetTicketsXray_ByPoolName_ByPodName_ByTickId_v2>[1]) => async () => {
      const response = await XRayAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getTicketsXray_ByPoolName_ByPodName_ByTickId_v2(input.poolName, input.podName, input.tickId)
      callback && callback(response)
      return response.data
    }

  return useQuery<XRayMatchPoolPodTickTicketResponse, AxiosError<ApiError>>({
    queryKey: [Key_XRayAdmin.TicketsXray_ByPoolName_ByPodName_ByTickId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
