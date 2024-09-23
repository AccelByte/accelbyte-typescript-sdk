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
import { CountryLocationResponse } from '../generated-definitions/CountryLocationResponse.js'
import { OneTimeLinkingCodeResponse } from '../generated-definitions/OneTimeLinkingCodeResponse.js'
import { OneTimeLinkingCodeValidationResponse } from '../generated-definitions/OneTimeLinkingCodeValidationResponse.js'
import { PlatformTokenRefreshResponseV3 } from '../generated-definitions/PlatformTokenRefreshResponseV3.js'
import { TargetTokenCodeResponse } from '../generated-definitions/TargetTokenCodeResponse.js'
import { TokenResponseV3 } from '../generated-definitions/TokenResponseV3.js'
import { OAuth20Extension$ } from './endpoints/OAuth20Extension$.js'

export function OAuth20ExtensionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createLogout_v3(): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLogout_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postAuthenticate_v3(data: {
    password: string | null
    request_id: string | null
    user_name: string | null
    client_id?: string | null
    extend_exp?: boolean | null
    redirect_uri?: string | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postAuthenticate_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postHeadlesToken_v3(data: {
    linkingToken: string | null
    additionalData?: string | null
    extend_exp?: boolean | null
  }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postHeadlesToken_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postTokenExchange_v3(data: {
    code: string | null
    additionalData?: string | null
  }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postTokenExchange_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLocationCountry_v3(): Promise<AxiosResponse<CountryLocationResponse>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocationCountry_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLinkCodeRequest_v3(data: { platformId: string | null }): Promise<AxiosResponse<OneTimeLinkingCodeResponse>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLinkCodeRequest_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLinkCodeValidate_v3(data: {
    oneTimeLinkCode: string | null
  }): Promise<AxiosResponse<OneTimeLinkingCodeValidationResponse>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLinkCodeValidate_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLinkTokenExchange_v3(data: {
    client_id: string | null
    oneTimeLinkCode: string | null
    additionalData?: string | null
    isTransient?: boolean | null
  }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLinkTokenExchange_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postAuthenticateWithLink_v3(data: {
    client_id: string | null
    linkingToken: string | null
    password: string | null
    username: string | null
    extend_exp?: boolean | null
  }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postAuthenticateWithLink_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postTokenRequest_v3(
    data: { client_id: string | null },
    queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
  ): Promise<AxiosResponse<TargetTokenCodeResponse>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postTokenRequest_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAuthenticate_ByPlatformId_v3(
    platformId: string,
    queryParams: {
      state: string | null
      code?: string | null
      error?: string | null
      assoc_handle?: string | null
      claimed_id?: string | null
      identity?: string | null
      mode?: string | null
      ns?: string | null
      op_endpoint?: string | null
      response_nonce?: string | null
      return_to?: string | null
      sig?: string | null
      signed?: string | null
    }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAuthenticate_ByPlatformId_v3(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postTokenVerify_ByPlatformId_v3(
    platformId: string,
    data: { platform_token: string | null }
  ): Promise<AxiosResponse<PlatformTokenRefreshResponseV3>> {
    const $ = new OAuth20Extension$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postTokenVerify_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint is used to remove **access_token**, **refresh_token** from cookie.
     */
    createLogout_v3,
    /**
     * This endpoint is being used to authenticate a user account. It validates user&#39;s email / username and password. Deactivated or login-banned users are unable to login. Redirect URI and Client ID must be specified as a pair and only used to redirect to the specified redirect URI in case the requestId is no longer valid. ## Device Cookie Validation Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies). This endpoint will read device cookie from cookie **auth-trust-id**. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate. Action code: 10801
     */
    postAuthenticate_v3,
    /**
     * This endpoint is being used to create headless account after 3rd platform authenticated, and response token . The &#39;linkingToken&#39; in request body is received from &#34;/platforms/{platformId}/token&#34; when 3rd platform account is not linked to justice account yet.
     */
    postHeadlesToken_v3,
    /**
     * This endpoint is being used to generate target token. It requires basic header with ClientID and Secret, it should match the ClientID when call &lt;code&gt;/iam/v3/namespace/{namespace}/token/request&lt;/code&gt; The code should be generated from &lt;code&gt;/iam/v3/namespace/{namespace}/token/request&lt;/code&gt;.
     */
    postTokenExchange_v3,
    /**
     * This endpoint get country location based on the request.
     */
    getLocationCountry_v3,
    /**
     * This endpoint is being used to request the one time code [8 length] for headless account to link or upgrade to a full account. Should specify the target platform id and current user should already linked to this platform. Current user should be a headless account. ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **discord** - **android** - **ios** - **apple** - **device** - **justice** - **epicgames** - **ps4** - **ps5** - **nintendo** - **awscognito** - **live** - **xblweb** - **netflix** - **snapchat**
     */
    postLinkCodeRequest_v3,
    /**
     * This endpoint is being used to validate one time link code.
     */
    postLinkCodeValidate_v3,
    /**
     * This endpoint is being used to generate user&#39;s token by one time link code. It require publisher ClientID It required a code which can be generated from &lt;code&gt;/iam/v3/link/code/request&lt;/code&gt;. This endpoint support creating transient token by utilizing **isTransient** param: **isTransient=true** will generate a transient token with a short Time Expiration and without a refresh token **isTransient=false** will consume the one-time code and generate the access token with a refresh token.
     */
    postLinkTokenExchange_v3,
    /**
     * This endpoint is being used to authenticate a user account and perform platform link. It validates user&#39;s email / username and password. If user already enable 2FA, then invoke _/mfa/verify_ using **mfa_token** from this endpoint response. ## Device Cookie Validation Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies). This endpoint will read device cookie from cookie **auth-trust-id**. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
     */
    postAuthenticateWithLink_v3,
    /**
     * This endpoint is being used to request the code to exchange a new token. The target new token&#39;s clientId should NOT be same with current using one. Path namespace should be target namespace. Client ID should match the target namespace. The code in response can be consumed by &lt;code&gt;/iam/v3/token/exchange&lt;/code&gt;
     */
    postTokenRequest_v3,
    /**
     * This endpoint authenticates user platform. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. If already linked with justice account or match SSO condition, will redirect to client&#39;s redirect url with code. then invoke &#39;/iam/v3/oauth/token&#39; with grant_type=authorization_code If already not linked with justice account and not match SSO condition, will redirect to client&#39;s account linking page ## Supported platforms: - **steamopenid**Steam login page will redirects to this endpoint after login success as previously defined on openID request parameter &lt;code&gt;openid.return_to&lt;/code&gt; when request login to steam https://openid.net/specs/openid-authentication-2_0.html#anchor27 - **ps4web**PS4 login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; https://ps4.siedev.net/resources/documents/WebAPI/1/Auth_WebAPI-Reference/0002.html#0GetAccessTokenUsingAuthorizationCode - **xblweb**XBL login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **epicgames**Epicgames login page will redirects to this endpoint after login success or an error occurred. If error, it redirects to the login page. - **twitch**Twitch login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **facebook**Facebook login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **google**Google login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **snapchat**Snapchat login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **discord**Discord login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; action code : 10709
     */
    getAuthenticate_ByPlatformId_v3,
    /**
     * This endpoint will validate the third party platform token, for some platforms will also refresh the token stored in IAM, it will not generate any event or AB access/refresh token. This endpoint can be used by game client to refresh third party token if game client got platform token not found error, for example got 404 platform token not found from IAP/DLC. ## Platforms will refresh stored token: - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **epicgames**: The platform_token’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **amazon**: The platform_token’s value is authorization code. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
     */
    postTokenVerify_ByPlatformId_v3
  }
}
