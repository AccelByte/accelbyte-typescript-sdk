/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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

import { AnonymizationAdmin$ } from './endpoints/AnonymizationAdmin$.js'

export function AnonymizationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function deleteAnonymizationOrder_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationOrder_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationPayment_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationPayment_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationWallet_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationWallet_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationCampaign_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationCampaign_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationRevocation_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationRevocation_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationFulfillment_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationFulfillment_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationEntitlement_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationEntitlement_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationIntegration_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationIntegration_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAnonymizationSubscription_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationSubscription_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Anonymize order. At current it will only anonymize order, order history.
     */
    deleteAnonymizationOrder_ByUserId,
    /**
     * Anonymize payment. At current it will only anonymize payment order, payment order history.
     */
    deleteAnonymizationPayment_ByUserId,
    /**
     * Anonymize wallet. At current it will only anonymize wallet, wallet transaction.
     */
    deleteAnonymizationWallet_ByUserId,
    /**
     * Anonymize campaign. At current it will only anonymize redeem history.
     */
    deleteAnonymizationCampaign_ByUserId,
    /**
     * Anonymize revocation. At current it will only anonymize revocation history.
     */
    deleteAnonymizationRevocation_ByUserId,
    /**
     * Anonymize fulfillment. At current it will only anonymize fulfillment history.
     */
    deleteAnonymizationFulfillment_ByUserId,
    /**
     * Anonymize entitlement. At current it will only anonymize entitlement, entitlement history.
     */
    deleteAnonymizationEntitlement_ByUserId,
    /**
     * Anonymize integrations. At current it will only anonymize iap histories.
     */
    deleteAnonymizationIntegration_ByUserId,
    /**
     * Anonymize subscription. At current it will anonymize subscription, billing history and subscription activity.
     */
    deleteAnonymizationSubscription_ByUserId
  }
}
