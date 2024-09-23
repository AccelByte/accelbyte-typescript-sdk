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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { TtlConfigAdminApi } from '../TtlConfigAdminApi.js'

export enum Key_TtlConfigAdmin {
  Ttl_ByKey = 'Cloudsave.TtlConfigAdmin.Ttl_ByKey',
  Ttl_ByKey_ByNS = 'Cloudsave.TtlConfigAdmin.Ttl_ByKey_ByNS'
}

/**
 * ## Description This endpoints will delete the ttl config of the game record
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TtlConfigAdmin.Ttl_ByKey, input]
 * }
 * ```
 */
export const useTtlConfigAdminApi_DeleteTtl_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await TtlConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTtl_ByKey(
      input.key
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TtlConfigAdmin.Ttl_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will delete the ttl config of the game binary record
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TtlConfigAdmin.Ttl_ByKey_ByNS, input]
 * }
 * ```
 */
export const useTtlConfigAdminApi_DeleteTtl_ByKey_ByNSMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await TtlConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTtl_ByKey_ByNS(
      input.key
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TtlConfigAdmin.Ttl_ByKey_ByNS],
    mutationFn,
    ...options
  })
}
