/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { TicketAdminApi } from '../TicketAdminApi.js'

import { TicketAcquireRequest } from '../../generated-definitions/TicketAcquireRequest.js'
import { TicketAcquireResult } from '../../generated-definitions/TicketAcquireResult.js'
import { TicketBoothId } from '../../generated-definitions/TicketBoothId.js'
import { TicketDynamicInfo } from '../../generated-definitions/TicketDynamicInfo.js'
import { TicketSaleDecrementRequest } from '../../generated-definitions/TicketSaleDecrementRequest.js'
import { TicketSaleIncrementRequest } from '../../generated-definitions/TicketSaleIncrementRequest.js'
import { TicketSaleIncrementResult } from '../../generated-definitions/TicketSaleIncrementResult.js'

export enum Key_TicketAdmin {
  Ticket_ByBoothName = 'Platform.TicketAdmin.Ticket_ByBoothName',
  Id_ByBoothName = 'Platform.TicketAdmin.Id_ByBoothName',
  Decrement_ByBoothName = 'Platform.TicketAdmin.Decrement_ByBoothName',
  Increment_ByBoothName = 'Platform.TicketAdmin.Increment_ByBoothName',
  Ticket_ByUserId_ByBoothName = 'Platform.TicketAdmin.Ticket_ByUserId_ByBoothName'
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get ticket(code/key) dynamic based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket dynamic&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketAdmin.Ticket_ByBoothName, input]
 * }
 * ```
 */
export const useTicketAdminApi_GetTicket_ByBoothName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { boothName: string },
  options?: Omit<UseQueryOptions<TicketDynamicInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketDynamicInfo>) => void
): UseQueryResult<TicketDynamicInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketAdminApi_GetTicket_ByBoothName>[1]) => async () => {
    const response = await TicketAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTicket_ByBoothName(
      input.boothName
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketDynamicInfo, AxiosError<ApiError>>({
    queryKey: [Key_TicketAdmin.Ticket_ByBoothName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get ticket(code/key) booth ID.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket booth id&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketAdmin.Id_ByBoothName, input]
 * }
 * ```
 */
export const useTicketAdminApi_GetId_ByBoothName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { boothName: string },
  options?: Omit<UseQueryOptions<TicketBoothId, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketBoothId>) => void
): UseQueryResult<TicketBoothId, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketAdminApi_GetId_ByBoothName>[1]) => async () => {
    const response = await TicketAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getId_ByBoothName(
      input.boothName
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketBoothId, AxiosError<ApiError>>({
    queryKey: [Key_TicketAdmin.Id_ByBoothName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Decrease ticket(code/key) sale if requested orderNo is already increased.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketAdmin.Decrement_ByBoothName, input]
 * }
 * ```
 */
export const useTicketAdminApi_UpdateDecrement_ByBoothNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { boothName: string; data: TicketSaleDecrementRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { boothName: string; data: TicketSaleDecrementRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { boothName: string; data: TicketSaleDecrementRequest }) => {
    const response = await TicketAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDecrement_ByBoothName(input.boothName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TicketAdmin.Decrement_ByBoothName],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; increase ticket(code/key) sale.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Ticket sale increment result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketAdmin.Increment_ByBoothName, input]
 * }
 * ```
 */
export const useTicketAdminApi_UpdateIncrement_ByBoothNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TicketSaleIncrementResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { boothName: string; data: TicketSaleIncrementRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: TicketSaleIncrementResult) => void
): UseMutationResult<
  TicketSaleIncrementResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { boothName: string; data: TicketSaleIncrementRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { boothName: string; data: TicketSaleIncrementRequest }) => {
    const response = await TicketAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateIncrement_ByBoothName(input.boothName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TicketAdmin.Increment_ByBoothName],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Acquire ticket(code/key) based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: acquire result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketAdmin.Ticket_ByUserId_ByBoothName, input]
 * }
 * ```
 */
export const useTicketAdminApi_CreateTicket_ByUserId_ByBoothNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TicketAcquireResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; boothName: string; data: TicketAcquireRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: TicketAcquireResult) => void
): UseMutationResult<
  TicketAcquireResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; boothName: string; data: TicketAcquireRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; boothName: string; data: TicketAcquireRequest }) => {
    const response = await TicketAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createTicket_ByUserId_ByBoothName(input.userId, input.boothName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TicketAdmin.Ticket_ByUserId_ByBoothName],
    mutationFn,
    ...options
  })
}
