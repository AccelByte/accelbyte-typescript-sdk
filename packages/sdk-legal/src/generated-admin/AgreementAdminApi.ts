/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { AcceptAgreementRequest } from '../generated-definitions/AcceptAgreementRequest.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { AgreementAdmin$ } from './endpoints/AgreementAdmin$.js'

export function AgreementAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<PagedRetrieveUserAcceptedAgreementResponse>> {
    const $ = new AgreementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicyVersionsUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAgreementPolicyUser_ByUserId(userId: string): Promise<AxiosResponse<RetrieveAcceptedAgreementResponseArray>> {
    const $ = new AgreementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementPolicyUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AxiosResponse<unknown>> {
    const $ = new AgreementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API will return users who has accepted a specific policy version.
     */
    getAgreementsPolicyVersionsUsers,
    /**
     * This API will return all accepted Legal Agreements for specified user
     */
    getAgreementPolicyUser_ByUserId,
    /**
     * This API will Update Preference Consent
     */
    patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId
  }
}
