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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { TtlConfigAdminApi } from '../TtlConfigAdminApi.js'

export enum Key_TtlConfigAdmin {
  Ttl_ByKey = 'TtlConfigAdmin.Ttl_ByKey',
  Ttl_ByKey_ByNS = 'TtlConfigAdmin.Ttl_ByKey_ByNS'
}

export const useAdmDeleteTtl_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string }) => {
    const data = await TtlConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTtl_ByKey(input.key)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TtlConfigAdmin.Ttl_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteTtl_ByKey_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string }) => {
    const data = await TtlConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTtl_ByKey_ByNS(input.key)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TtlConfigAdmin.Ttl_ByKey_ByNS],
    mutationFn,
    ...options
  })
}
