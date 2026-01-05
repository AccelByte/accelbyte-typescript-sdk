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
import { TokenThirdPartyResponse } from '../generated-definitions/TokenThirdPartyResponse.js'
import { OAuth20Admin$ } from './endpoints/OAuth20Admin$.js'

export function OAuth20AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function updateRevokeOauth_ByUserId_v3(
    userId: string,
    queryParams?: { includeGameNamespace?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevokeOauth_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformTokenOauth_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    queryParams?: { platformUserId?: string | null }
  ): Promise<AxiosResponse<TokenThirdPartyResponse>> {
    const $ = new OAuth20Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformTokenOauth_ByUserId_ByPlatformId_v3(userId, platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint revokes all access tokens and refresh tokens a user has prior the revocation time. This endpoint requires authorized requests header with valid access token. It is a convenient feature for the developer (or admin) who wanted to revokes all user&#39;s access tokens and refresh tokens generated before some period of time. action code : 10707
     */
    updateRevokeOauth_ByUserId_v3,
    /**
     * Admin Retrieve User Third Party Platform Token This endpoint used for retrieving third party platform token for user that login using third party, if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace. Passing platform group name or it&#39;s member will return same access token that can be used across the platform members. If platformUserId provided, IAM will prefer to get platform token by platform user id. Notes: The third party platform and platform group covered for this is: - (psn) ps4web - (psn) ps4 - (psn) ps5 - epicgames - twitch - awscognito - amazon - eaorigin - snapchat - twitch - live
     */
    getPlatformTokenOauth_ByUserId_ByPlatformId_v3
  }
}
