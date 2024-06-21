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
import { TicketAdminApi } from '../TicketAdminApi.js'

import { TicketAcquireRequest } from '../../generated-definitions/TicketAcquireRequest.js'
import { TicketAcquireResult } from '../../generated-definitions/TicketAcquireResult.js'
import { TicketBoothId } from '../../generated-definitions/TicketBoothId.js'
import { TicketDynamicInfo } from '../../generated-definitions/TicketDynamicInfo.js'
import { TicketSaleDecrementRequest } from '../../generated-definitions/TicketSaleDecrementRequest.js'
import { TicketSaleIncrementRequest } from '../../generated-definitions/TicketSaleIncrementRequest.js'
import { TicketSaleIncrementResult } from '../../generated-definitions/TicketSaleIncrementResult.js'

export enum Key_TicketAdmin {
  Ticket_ByBoothName = 'TicketAdmin.Ticket_ByBoothName',
  Id_ByBoothName = 'TicketAdmin.Id_ByBoothName',
  Decrement_ByBoothName = 'TicketAdmin.Decrement_ByBoothName',
  Increment_ByBoothName = 'TicketAdmin.Increment_ByBoothName',
  Ticket_ByUserId_ByBoothName = 'TicketAdmin.Ticket_ByUserId_ByBoothName'
}

export const useAdmTicket_ByBoothName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { boothName: string },
  options?: Omit<UseQueryOptions<TicketDynamicInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TicketDynamicInfo) => void
): UseQueryResult<TicketDynamicInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTicket_ByBoothName>[1]) => async () => {
    const data = await TicketAdminApi(sdk, { namespace: input.namespace }).getTicket_ByBoothName(input.boothName)
    callback && callback(data)
    return data
  }

  return useQuery<TicketDynamicInfo, AxiosError<ApiError>>({
    queryKey: [Key_TicketAdmin.Ticket_ByBoothName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmId_ByBoothName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { boothName: string },
  options?: Omit<UseQueryOptions<TicketBoothId, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TicketBoothId) => void
): UseQueryResult<TicketBoothId, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmId_ByBoothName>[1]) => async () => {
    const data = await TicketAdminApi(sdk, { namespace: input.namespace }).getId_ByBoothName(input.boothName)
    callback && callback(data)
    return data
  }

  return useQuery<TicketBoothId, AxiosError<ApiError>>({
    queryKey: [Key_TicketAdmin.Id_ByBoothName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateDecrement_ByBoothNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { boothName: string; data: TicketSaleDecrementRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { boothName: string; data: TicketSaleDecrementRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { boothName: string; data: TicketSaleDecrementRequest }) => {
    const data = await TicketAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDecrement_ByBoothName(
      input.boothName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TicketAdmin.Decrement_ByBoothName],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateIncrement_ByBoothNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TicketSaleIncrementResult, AxiosError<ApiError>, ApiArgs & { boothName: string; data: TicketSaleIncrementRequest }>,
    'mutationKey'
  >,
  callback?: (data: TicketSaleIncrementResult) => void
): UseMutationResult<
  TicketSaleIncrementResult,
  AxiosError<ApiError>,
  ApiArgs & { boothName: string; data: TicketSaleIncrementRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { boothName: string; data: TicketSaleIncrementRequest }) => {
    const data = await TicketAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIncrement_ByBoothName(
      input.boothName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TicketAdmin.Increment_ByBoothName],
    mutationFn,
    ...options
  })
}

export const useAdmCreateTicket_ByUserId_ByBoothNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      TicketAcquireResult,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; boothName: string; data: TicketAcquireRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: TicketAcquireResult) => void
): UseMutationResult<
  TicketAcquireResult,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; boothName: string; data: TicketAcquireRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; boothName: string; data: TicketAcquireRequest }) => {
    const data = await TicketAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTicket_ByUserId_ByBoothName(
      input.userId,
      input.boothName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TicketAdmin.Ticket_ByUserId_ByBoothName],
    mutationFn,
    ...options
  })
}
