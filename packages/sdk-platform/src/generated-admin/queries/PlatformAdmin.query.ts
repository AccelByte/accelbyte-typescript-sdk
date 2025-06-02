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
import { PlatformAdminApi } from '../PlatformAdminApi.js'

import { Ownership } from '../../generated-definitions/Ownership.js'
import { PlatformOwnership } from '../../generated-definitions/PlatformOwnership.js'
import { PsnEntitlementOwnershipRequest } from '../../generated-definitions/PsnEntitlementOwnershipRequest.js'
import { XblEntitlementOwnershipRequest } from '../../generated-definitions/XblEntitlementOwnershipRequest.js'

export enum Key_PlatformAdmin {
  OwnershipXblPlatform_ByProductSku = 'Platform.PlatformAdmin.OwnershipXblPlatform_ByProductSku',
  OwnershipPsnPlatform_ByEntitlementLabel = 'Platform.PlatformAdmin.OwnershipPsnPlatform_ByEntitlementLabel'
}

/**
 * Get Xbox entitlement ownership by product sku.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAdmin.OwnershipXblPlatform_ByProductSku, input]
 * }
 * ```
 */
export const usePlatformAdminApi_CreateOwnershipXblPlatform_ByProductSkuMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformOwnership,
      AxiosError<ApiError>,
      SdkSetConfigParam & { productSku: string; data: XblEntitlementOwnershipRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformOwnership) => void
): UseMutationResult<
  PlatformOwnership,
  AxiosError<ApiError>,
  SdkSetConfigParam & { productSku: string; data: XblEntitlementOwnershipRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { productSku: string; data: XblEntitlementOwnershipRequest }) => {
    const response = await PlatformAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createOwnershipXblPlatform_ByProductSku(input.productSku, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlatformAdmin.OwnershipXblPlatform_ByProductSku],
    mutationFn,
    ...options
  })
}

/**
 * Get user psn entitlement ownership by entitlement label.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAdmin.OwnershipPsnPlatform_ByEntitlementLabel, input]
 * }
 * ```
 */
export const usePlatformAdminApi_CreateOwnershipPsnPlatform_ByEntitlementLabelMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      Ownership,
      AxiosError<ApiError>,
      SdkSetConfigParam & { entitlementLabel: string; data: PsnEntitlementOwnershipRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: Ownership) => void
): UseMutationResult<
  Ownership,
  AxiosError<ApiError>,
  SdkSetConfigParam & { entitlementLabel: string; data: PsnEntitlementOwnershipRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { entitlementLabel: string; data: PsnEntitlementOwnershipRequest }) => {
    const response = await PlatformAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createOwnershipPsnPlatform_ByEntitlementLabel(input.entitlementLabel, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlatformAdmin.OwnershipPsnPlatform_ByEntitlementLabel],
    mutationFn,
    ...options
  })
}
