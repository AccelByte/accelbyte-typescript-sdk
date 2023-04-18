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
import { CountryLocationResponse } from './definitions/CountryLocationResponse'
import { GameTokenCodeResponse } from './definitions/GameTokenCodeResponse'
import { OAuth20Extension$ } from './endpoints/OAuth20Extension$'
import { OneTimeLinkingCodeResponse } from './definitions/OneTimeLinkingCodeResponse'
import { OneTimeLinkingCodeValidationResponse } from './definitions/OneTimeLinkingCodeValidationResponse'
import { TokenResponseV3 } from './definitions/TokenResponseV3'

export function OAuth20ExtensionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function createLogout(): Promise<unknown> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLogout()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postAuthenticate(data: {
    user_name: string | null
    password: string | null
    request_id: string | null
    redirect_uri?: string | null
    client_id?: string | null
    extend_exp?: boolean | null
  }): Promise<unknown> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postAuthenticate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postHeadlesToken(data: { linkingToken: string | null; extend_exp?: boolean | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postHeadlesToken(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postTokenExchange(data: { code: string | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postTokenExchange(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getLocationCountry(): Promise<CountryLocationResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLocationCountry()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postLinkCodeRequest(data: { platformId: string | null }): Promise<OneTimeLinkingCodeResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postLinkCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postLinkCodeValidate(data: { oneTimeLinkCode: string | null }): Promise<OneTimeLinkingCodeValidationResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postLinkCodeValidate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postLinkTokenExchange(data: { oneTimeLinkCode: string | null; client_id: string | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postLinkTokenExchange(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postAuthenticateWithLink(data: {
    username: string | null
    password: string | null
    linkingToken: string | null
    client_id: string | null
    extend_exp?: boolean | null
  }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postAuthenticateWithLink(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postTokenRequest(data: { client_id: string | null }): Promise<GameTokenCodeResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postTokenRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getAuthenticate_ByPlatformId(
    platformId: string,
    queryParams: {
      state: string | null
      ns?: string | null
      mode?: string | null
      op_endpoint?: string | null
      claimed_id?: string | null
      identity?: string | null
      return_to?: string | null
      response_nonce?: string | null
      assoc_handle?: string | null
      signed?: string | null
      sig?: string | null
      code?: string | null
      error?: string | null
    }
  ): Promise<unknown> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAuthenticate_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createLogout,
    postAuthenticate,
    postHeadlesToken,
    postTokenExchange,
    getLocationCountry,
    postLinkCodeRequest,
    postLinkCodeValidate,
    postLinkTokenExchange,
    postAuthenticateWithLink,
    postTokenRequest,
    getAuthenticate_ByPlatformId
  }
}
