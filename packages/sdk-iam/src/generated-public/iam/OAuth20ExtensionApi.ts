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
import { CountryLocationResponse } from './definitions/CountryLocationResponse.js'
import { GameTokenCodeResponse } from './definitions/GameTokenCodeResponse.js'
import { OAuth20Extension$ } from './endpoints/OAuth20Extension$.js'
import { OneTimeLinkingCodeResponse } from './definitions/OneTimeLinkingCodeResponse.js'
import { OneTimeLinkingCodeValidationResponse } from './definitions/OneTimeLinkingCodeValidationResponse.js'
import { TokenResponseV3 } from './definitions/TokenResponseV3.js'

export function OAuth20ExtensionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>This endpoint is used to remove <b>access_token</b>, <b>refresh_token</b> from cookie and revoke token from usage.</p> <p>Supported methods:</p> <ul> <li>VerifyToken to verify token from header</li> <li>AddTokenToRevocationList to revoke token with TTL</li> </ul>
   */
  async function createLogout(): Promise<unknown> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLogout()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is being used to authenticate a user account. It validates user's email / username and password. Deactivated or login-banned users are unable to login. Redirect URI and Client ID must be specified as a pair and only used to redirect to the specified redirect URI in case the requestId is no longer valid. <h2>Device Cookie Validation</h2> Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>. This endpoint will read device cookie from cookie <b>auth-trust-id</b>. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate. Action code: 10801
   */
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

  /**
   * <p>This endpoint is being used to create headless account after 3rd platform authenticated, and response token . The 'linkingToken' in request body is received from "/platforms/{platformId}/token" when 3rd platform account is not linked to justice account yet.'</p>
   */
  async function postHeadlesToken(data: { linkingToken: string | null; extend_exp?: boolean | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postHeadlesToken(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is being used to generate publisher user's game token.<br> It require basic header with ClientID and Secret, it should match the ClientID when call <strong>/iam/v3/namespace/{namespace}/token/request</strong><br> It required a code which can be generated from <strong>/iam/v3/namespace/{namespace}/token/request</strong>.<br> </p>
   */
  async function postTokenExchange(data: { code: string | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postTokenExchange(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint get country location based on the request.</p>
   */
  async function getLocationCountry(): Promise<CountryLocationResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLocationCountry()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is being used to request the one time code [8 length] for headless account to link or upgrade to a full account.<br> It require a valid user token.<br> Should specify the target platform id and current user should already linked to this platform.<br> Current user should be a headless account.<br> <h2>Supported platforms:</h2> <ul> <li><strong>steam</strong></li> <li><strong>steamopenid</strong></li> <li><strong>facebook</strong></li> <li><strong>google</strong></li> <li><strong>oculus</strong></li> <li><strong>twitch</strong></li> <li><strong>discord</strong></li> <li><strong>android</strong></li> <li><strong>ios</strong></li> <li><strong>apple</strong></li> <li><strong>device</strong></li> <li><strong>justice</strong></li> <li><strong>epicgames</strong></li> <li><strong>ps4</strong></li> <li><strong>ps5</strong></li> <li><strong>nintendo</strong></li> <li><strong>awscognito</strong></li> <li><strong>live</strong></li> <li><strong>xblweb</strong></li> <li><strong>netflix</strong></li> <li><strong>snapchat</strong></li> </ul> </p>
   */
  async function postLinkCodeRequest(data: { platformId: string | null }): Promise<OneTimeLinkingCodeResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postLinkCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is being used to validate one time link code.<br></p>
   */
  async function postLinkCodeValidate(data: { oneTimeLinkCode: string | null }): Promise<OneTimeLinkingCodeValidationResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postLinkCodeValidate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is being used to generate user's token by one time link code.<br> It require publisher ClientID<br> It required a code which can be generated from <strong>/iam/v3/link/code/request</strong>.<br> </p> <p>This endpoint support creating transient token by utilizing <strong>isTransient</strong> param: <br><strong>isTransient=true</strong> will generate a transient token with a short Time Expiration and without a refresh token <br><strong>isTransient=false</strong> will consume the one-time code and generate the access token with a refresh token.</p>
   */
  async function postLinkTokenExchange(data: {
    oneTimeLinkCode: string | null
    client_id: string | null
    isTransient?: boolean | null
  }): Promise<TokenResponseV3> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postLinkTokenExchange(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is being used to authenticate a user account and perform platform link. It validates user's email / username and password. If user already enable 2FA, then invoke <i>/mfa/verify</i> using <b>mfa_token</b> from this endpoint response. <h2>Device Cookie Validation</h2> Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>. This endpoint will read device cookie from cookie <b>auth-trust-id</b>. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   */
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

  /**
   * <p>This endpoint is being used to request the code to generate publisher user's game token.<br> It require a valid user token with publisher namespace.<br> Path namespace should be a game namespace.<br> Client ID should match the target namespace. It response a code and it can be consumed by <strong>/iam/v3/token/exchange</strong> </p>
   */
  async function postTokenRequest(data: { client_id: string | null }): Promise<GameTokenCodeResponse> {
    const $ = new OAuth20Extension$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postTokenRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint authenticates user platform. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. <br> <p>If already linked with justice account or match SSO condition, will redirect to client's redirect url with code. then invoke '/iam/v3/oauth/token' with grant_type=authorization_code</p> <p>If already not linked with justice account and not match SSO condition, will redirect to client's account linking page</p> <h2>Supported platforms:</h2><ul> <li><strong>steamopenid</strong></li>Steam login page will redirects to this endpoint after login success as previously defined on openID request parameter <code>openid.return_to</code> when request login to steam https://openid.net/specs/openid-authentication-2_0.html#anchor27 <li><strong>ps4web</strong></li>PS4 login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> https://ps4.siedev.net/resources/documents/WebAPI/1/Auth_WebAPI-Reference/0002.html#0GetAccessTokenUsingAuthorizationCode <li><strong>xblweb</strong></li>XBL login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> <li><strong>epicgames</strong></li>Epicgames login page will redirects to this endpoint after login success or an error occurred. If error, it redirects to the login page. <li><strong>twitch</strong></li>Twitch login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> <li><strong>facebook</strong></li>Facebook login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> <li><strong>google</strong></li>Google login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> <li><strong>snapchat</strong></li>Snapchat login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> <li><strong>discord</strong></li>Discord login page will redirects to this endpoint after login success as previously defined on authorize request parameter <code>redirect_uri</code> </ul> action code : 10709
   */
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
