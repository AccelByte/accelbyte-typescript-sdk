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
import { AnonymizationAdminApi } from '../AnonymizationAdminApi.js'

export enum Key_AnonymizationAdmin {
  AnonymizationOrder_ByUserId = 'AnonymizationAdmin.AnonymizationOrder_ByUserId',
  AnonymizationPayment_ByUserId = 'AnonymizationAdmin.AnonymizationPayment_ByUserId',
  AnonymizationWallet_ByUserId = 'AnonymizationAdmin.AnonymizationWallet_ByUserId',
  AnonymizationCampaign_ByUserId = 'AnonymizationAdmin.AnonymizationCampaign_ByUserId',
  AnonymizationRevocation_ByUserId = 'AnonymizationAdmin.AnonymizationRevocation_ByUserId',
  AnonymizationFulfillment_ByUserId = 'AnonymizationAdmin.AnonymizationFulfillment_ByUserId',
  AnonymizationEntitlement_ByUserId = 'AnonymizationAdmin.AnonymizationEntitlement_ByUserId',
  AnonymizationIntegration_ByUserId = 'AnonymizationAdmin.AnonymizationIntegration_ByUserId',
  AnonymizationSubscription_ByUserId = 'AnonymizationAdmin.AnonymizationSubscription_ByUserId'
}

export const useAdmDeleteAnonymizationOrder_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAnonymizationOrder_ByUserId(
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationOrder_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationPayment_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAnonymizationPayment_ByUserId(
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationPayment_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationWallet_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAnonymizationWallet_ByUserId(
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationWallet_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationCampaign_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteAnonymizationCampaign_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationCampaign_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationRevocation_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteAnonymizationRevocation_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationRevocation_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationFulfillment_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteAnonymizationFulfillment_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationFulfillment_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationEntitlement_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteAnonymizationEntitlement_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationEntitlement_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationIntegration_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteAnonymizationIntegration_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationIntegration_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAnonymizationSubscription_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteAnonymizationSubscription_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationSubscription_ByUserId],
    mutationFn,
    ...options
  })
}
