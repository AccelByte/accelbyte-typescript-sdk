/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { JwkSet } from './definitions/JwkSet'
import { OAuth20$ } from './endpoints/OAuth20$'
import { RevocationList } from './definitions/RevocationList'
import { TokenIntrospectResponse } from './definitions/TokenIntrospectResponse'
import { TokenResponse } from './definitions/TokenResponse'
import { TokenResponseV3 } from './definitions/TokenResponseV3'
import { TokenThirdPartyResponse } from './definitions/TokenThirdPartyResponse'
import { TokenWithDeviceCookieResponseV3 } from './definitions/TokenWithDeviceCookieResponseV3'

export function OAuth20Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getOauthJwks(): Promise<JwkSet> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOauthJwks()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthToken(data: {
    grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token'
    username?: string | null
    password?: string | null
    code?: string | null
    code_verifier?: string | null
    client_id?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    extend_exp?: boolean | null
  }): Promise<TokenWithDeviceCookieResponseV3> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthToken(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthRevoke(data: { token: string | null }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthRevoke(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthVerify(data: { token: string | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthMfaCode(data: { mfaToken: string | null; factor: string | null; clientId: string | null }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthMfaCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getOauthAuthorize(queryParams: {
    response_type: 'code'
    client_id: string | null
    redirect_uri?: string | null
    state?: string | null
    scope?: string | null
    code_challenge?: string | null
    code_challenge_method?: 'S256' | 'plain'
    target_auth_page?: string | null
    createHeadless?: boolean | null
    useRedirectUriAsLoginUrlWhenLocked?: boolean | null
    oneTimeLinkCode?: string | null
  }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOauthAuthorize(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthIntrospect(data: { token: string | null }): Promise<TokenIntrospectResponse> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthIntrospect(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthMfaVerify(data: {
    mfaToken: string | null
    factor: string | null
    code: string | null
    rememberDevice: boolean | null
  }): Promise<TokenResponseV3> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthMfaVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getOauthRevocationlist(): Promise<RevocationList> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOauthRevocationlist()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postOauthMfaFactorChange(data: { mfaToken: string | null; factor: string | null }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthMfaFactorChange(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postTokenOauth_ByPlatformId(
    platformId: string,
    data: {
      platform_token?: string | null
      client_id?: string | null
      device_id?: string | null
      createHeadless?: boolean | null
      macAddress?: string | null
      skipSetCookie?: boolean | null
    }
  ): Promise<TokenResponse> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postTokenOauth_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getAuthorizeOauth_ByPlatformId(
    platformId: string,
    queryParams: { request_id: string | null; client_id?: string | null; redirect_uri?: string | null }
  ): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAuthorizeOauth_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPlatformTokenOauth_ByUserId_ByPlatformId(userId: string, platformId: string): Promise<TokenThirdPartyResponse> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlatformTokenOauth_ByUserId_ByPlatformId(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getOauthJwks,
    postOauthToken,
    postOauthRevoke,
    postOauthVerify,
    postOauthMfaCode,
    getOauthAuthorize,
    postOauthIntrospect,
    postOauthMfaVerify,
    getOauthRevocationlist,
    postOauthMfaFactorChange,
    postTokenOauth_ByPlatformId,
    getAuthorizeOauth_ByPlatformId,
    getPlatformTokenOauth_ByUserId_ByPlatformId
  }
}
