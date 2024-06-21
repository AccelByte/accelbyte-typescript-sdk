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
import { FulfillmentScriptAdminApi } from '../FulfillmentScriptAdminApi.js'

import { FulfillmentScriptCreate } from '../../generated-definitions/FulfillmentScriptCreate.js'
import { FulfillmentScriptInfo } from '../../generated-definitions/FulfillmentScriptInfo.js'
import { FulfillmentScriptInfoArray } from '../../generated-definitions/FulfillmentScriptInfoArray.js'
import { FulfillmentScriptUpdate } from '../../generated-definitions/FulfillmentScriptUpdate.js'

export enum Key_FulfillmentScriptAdmin {
  FulfillmentScripts = 'FulfillmentScriptAdmin.FulfillmentScripts',
  FulfillmentScript_ById = 'FulfillmentScriptAdmin.FulfillmentScript_ById'
}

export const useAdmFulfillmentScripts = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<FulfillmentScriptInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FulfillmentScriptInfoArray) => void
): UseQueryResult<FulfillmentScriptInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmFulfillmentScripts>[1]) => async () => {
    const data = await FulfillmentScriptAdminApi(sdk, { namespace: input.namespace }).getFulfillmentScripts()
    callback && callback(data)
    return data
  }

  return useQuery<FulfillmentScriptInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScripts, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteFulfillmentScript_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { id: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string }) => {
    const data = await FulfillmentScriptAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteFulfillmentScript_ById(
      input.id
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}

export const useAdmFulfillmentScript_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string },
  options?: Omit<UseQueryOptions<FulfillmentScriptInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FulfillmentScriptInfo) => void
): UseQueryResult<FulfillmentScriptInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmFulfillmentScript_ById>[1]) => async () => {
    const data = await FulfillmentScriptAdminApi(sdk, { namespace: input.namespace }).getFulfillmentScript_ById(input.id)
    callback && callback(data)
    return data
  }

  return useQuery<FulfillmentScriptInfo, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchFulfillmentScript_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentScriptInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: FulfillmentScriptUpdate }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentScriptInfo) => void
): UseMutationResult<FulfillmentScriptInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: FulfillmentScriptUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: FulfillmentScriptUpdate }) => {
    const data = await FulfillmentScriptAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchFulfillmentScript_ById(
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFulfillmentScript_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentScriptInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: FulfillmentScriptCreate }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentScriptInfo) => void
): UseMutationResult<FulfillmentScriptInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: FulfillmentScriptCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: FulfillmentScriptCreate }) => {
    const data = await FulfillmentScriptAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFulfillmentScript_ById(
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}
