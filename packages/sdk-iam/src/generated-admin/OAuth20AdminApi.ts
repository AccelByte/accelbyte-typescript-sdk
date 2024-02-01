/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { OAuth20Admin$ } from './endpoints/OAuth20Admin$.js'
import { TokenThirdPartyResponse } from '../generated-definitions/TokenThirdPartyResponse.js'

export function OAuth20AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint revokes all access tokens and refresh tokens a user has prior the revocation time. This endpoint requires authorized requests header with valid access token. It is a convenient feature for the developer (or admin) who wanted to revokes all user&#39;s access tokens and refresh tokens generated before some period of time. action code : 10707
   */
  async function createRevokeOauth_ByUserId(userId: string, queryParams?: { includeGameNamespace?: boolean | null }): Promise<unknown> {
    const $ = new OAuth20Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRevokeOauth_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin Retrieve User Third Party Platform Token This endpoint used for retrieving third party platform token for user that login using third party, if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace. Passing platform group name or it&#39;s member will return same access token that can be used across the platform members. Notes: The third party platform and platform group covered for this is: - (psn) ps4web - (psn) ps4 - (psn) ps5 - epicgames - twitch - awscognito - amazon - eaorigin - snapchat - twitch - live
   */
  async function getPlatformTokenOauth_ByUserId_ByPlatformId(userId: string, platformId: string): Promise<TokenThirdPartyResponse> {
    const $ = new OAuth20Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPlatformTokenOauth_ByUserId_ByPlatformId(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createRevokeOauth_ByUserId,
    getPlatformTokenOauth_ByUserId_ByPlatformId
  }
}
