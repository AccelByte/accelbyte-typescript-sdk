/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Ownership } from '../generated-definitions/Ownership.js'
import { PlatformOwnership } from '../generated-definitions/PlatformOwnership.js'
import { PsnEntitlementOwnershipRequest } from '../generated-definitions/PsnEntitlementOwnershipRequest.js'
import { XblEntitlementOwnershipRequest } from '../generated-definitions/XblEntitlementOwnershipRequest.js'
import { PlatformAdmin$ } from './endpoints/PlatformAdmin$.js'

export function PlatformAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function createOwnershipXblPlatform_ByProductSku(
    productSku: string,
    data: XblEntitlementOwnershipRequest
  ): Promise<AxiosResponse<PlatformOwnership>> {
    const $ = new PlatformAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createOwnershipXblPlatform_ByProductSku(productSku, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createOwnershipPsnPlatform_ByEntitlementLabel(
    entitlementLabel: string,
    data: PsnEntitlementOwnershipRequest
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new PlatformAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createOwnershipPsnPlatform_ByEntitlementLabel(entitlementLabel, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get Xbox entitlement ownership by product sku.
     */
    createOwnershipXblPlatform_ByProductSku,
    /**
     * Get user psn entitlement ownership by entitlement label.
     */
    createOwnershipPsnPlatform_ByEntitlementLabel
  }
}
