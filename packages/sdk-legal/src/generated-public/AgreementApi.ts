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
import { AcceptAgreementRequest } from '../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { Agreement$ } from './endpoints/Agreement$.js'

export function AgreementApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getAgreementsPolicies(): Promise<AxiosResponse<RetrieveAcceptedAgreementResponseArray>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicies()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<AxiosResponse<AcceptAgreementResponse>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicy(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAgreementPolicyUser_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AxiosResponse<AcceptAgreementResponse>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicyUser_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<AxiosResponse<unknown>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreference(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(
    countryCode: string,
    clientId: string,
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AxiosResponse<AcceptAgreementResponse>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(countryCode, clientId, userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve accepted Legal Agreements.
     */
    getAgreementsPolicies,
    /**
     * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.
     */
    createAgreementPolicy,
    /**
     * @deprecated
     * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.
     */
    createAgreementPolicyUser_ByUserId,
    /**
     * Change marketing preference consent.
     */
    patchAgreementLocalizedPolicyVersionPreference,
    /**
     * Accepts a legal policy version. Supply with localized version policy id to accept an agreement
     */
    createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    /**
     * @deprecated
     * Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.
     */
    createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId
  }
}
