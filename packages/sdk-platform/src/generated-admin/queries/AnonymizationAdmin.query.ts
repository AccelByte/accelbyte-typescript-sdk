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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AnonymizationAdminApi } from '../AnonymizationAdminApi.js'

export enum Key_AnonymizationAdmin {
  AnonymizationOrder_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationOrder_ByUserId',
  AnonymizationPayment_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationPayment_ByUserId',
  AnonymizationWallet_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationWallet_ByUserId',
  AnonymizationCampaign_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationCampaign_ByUserId',
  AnonymizationRevocation_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationRevocation_ByUserId',
  AnonymizationFulfillment_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationFulfillment_ByUserId',
  AnonymizationEntitlement_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationEntitlement_ByUserId',
  AnonymizationIntegration_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationIntegration_ByUserId',
  AnonymizationSubscription_ByUserId = 'Platform.AnonymizationAdmin.AnonymizationSubscription_ByUserId'
}

/**
 * Anonymize order. At current it will only anonymize order, order history.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationOrder_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationOrder_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationOrder_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationOrder_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize payment. At current it will only anonymize payment order, payment order history.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationPayment_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationPayment_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationPayment_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationPayment_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize wallet. At current it will only anonymize wallet, wallet transaction.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationWallet_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationWallet_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationWallet_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationWallet_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize campaign. At current it will only anonymize redeem history.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationCampaign_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationCampaign_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationCampaign_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationCampaign_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize revocation. At current it will only anonymize revocation history.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationRevocation_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationRevocation_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationRevocation_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationRevocation_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize fulfillment. At current it will only anonymize fulfillment history.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationFulfillment_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationFulfillment_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationFulfillment_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationFulfillment_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize entitlement. At current it will only anonymize entitlement, entitlement history.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationEntitlement_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationEntitlement_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationEntitlement_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationEntitlement_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize integrations. At current it will only anonymize iap histories.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationIntegration_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationIntegration_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationIntegration_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationIntegration_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Anonymize subscription. At current it will anonymize subscription, billing history and subscription activity.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationSubscription_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationSubscription_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationSubscription_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationSubscription_ByUserId],
    mutationFn,
    ...options
  })
}
