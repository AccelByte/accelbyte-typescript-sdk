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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ServersAdminApi } from '../ServersAdminApi.js'

import { DsHistoryList } from '../../generated-definitions/DsHistoryList.js'
import { FleetServerConnectionInfoResponse } from '../../generated-definitions/FleetServerConnectionInfoResponse.js'
import { FleetServerHistoryResponse } from '../../generated-definitions/FleetServerHistoryResponse.js'
import { FleetServerInfoResponse } from '../../generated-definitions/FleetServerInfoResponse.js'

export enum Key_ServersAdmin {
  Server_ByServerId = 'Ams.ServersAdmin.Server_ByServerId',
  History_ByServerId = 'Ams.ServersAdmin.History_ByServerId',
  ServersHistory_ByFleetId = 'Ams.ServersAdmin.ServersHistory_ByFleetId',
  Connectioninfo_ByServerId = 'Ams.ServersAdmin.Connectioninfo_ByServerId'
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServersAdmin.Server_ByServerId, input]
 * }
 * ```
 */
export const useServersAdminApi_GetServer_ByServerId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { serverID: string },
  options?: Omit<UseQueryOptions<FleetServerInfoResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FleetServerInfoResponse>) => void
): UseQueryResult<FleetServerInfoResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServersAdminApi_GetServer_ByServerId>[1]) => async () => {
    const response = await ServersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServer_ByServerId(
      input.serverID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FleetServerInfoResponse, AxiosError<ApiError>>({
    queryKey: [Key_ServersAdmin.Server_ByServerId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServersAdmin.History_ByServerId, input]
 * }
 * ```
 */
export const useServersAdminApi_GetHistory_ByServerId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { serverID: string },
  options?: Omit<UseQueryOptions<FleetServerHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FleetServerHistoryResponse>) => void
): UseQueryResult<FleetServerHistoryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServersAdminApi_GetHistory_ByServerId>[1]) => async () => {
    const response = await ServersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getHistory_ByServerId(
      input.serverID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FleetServerHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_ServersAdmin.History_ByServerId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServersAdmin.ServersHistory_ByFleetId, input]
 * }
 * ```
 */
export const useServersAdminApi_GetServersHistory_ByFleetId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    fleetID: string
    queryParams?: {
      count?: number
      offset?: number
      reason?: string | null
      region?: string | null
      serverId?: string | null
      sortDirection?: string | null
      status?: string | null
    }
  },
  options?: Omit<UseQueryOptions<DsHistoryList, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DsHistoryList>) => void
): UseQueryResult<DsHistoryList, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServersAdminApi_GetServersHistory_ByFleetId>[1]) => async () => {
    const response = await ServersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getServersHistory_ByFleetId(input.fleetID, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<DsHistoryList, AxiosError<ApiError>>({
    queryKey: [Key_ServersAdmin.ServersHistory_ByFleetId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:DS:LOGS [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServersAdmin.Connectioninfo_ByServerId, input]
 * }
 * ```
 */
export const useServersAdminApi_GetConnectioninfo_ByServerId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { serverID: string },
  options?: Omit<UseQueryOptions<FleetServerConnectionInfoResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FleetServerConnectionInfoResponse>) => void
): UseQueryResult<FleetServerConnectionInfoResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServersAdminApi_GetConnectioninfo_ByServerId>[1]) => async () => {
    const response = await ServersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConnectioninfo_ByServerId(input.serverID)
    callback && callback(response)
    return response.data
  }

  return useQuery<FleetServerConnectionInfoResponse, AxiosError<ApiError>>({
    queryKey: [Key_ServersAdmin.Connectioninfo_ByServerId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
