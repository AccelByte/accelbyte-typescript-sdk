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
import { JwkSet } from '../generated-definitions/JwkSet.js'
import { RevocationList } from '../generated-definitions/RevocationList.js'
import { TokenIntrospectResponse } from '../generated-definitions/TokenIntrospectResponse.js'
import { TokenResponse } from '../generated-definitions/TokenResponse.js'
import { TokenResponseV3 } from '../generated-definitions/TokenResponseV3.js'
import { TokenThirdPartyResponse } from '../generated-definitions/TokenThirdPartyResponse.js'
import { TokenWithDeviceCookieResponseV3 } from '../generated-definitions/TokenWithDeviceCookieResponseV3.js'
import { OAuth20$ } from './endpoints/OAuth20$.js'

export function OAuth20Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getOauthJwks_v3(): Promise<AxiosResponse<JwkSet>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOauthJwks_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthToken_v3(data: {
    grant_type:
      | 'authorization_code'
      | 'client_credentials'
      | 'password'
      | 'refresh_token'
      | 'urn:ietf:params:oauth:grant-type:extend_client_credentials'
    additionalData?: string | null
    client_id?: string | null
    client_secret?: string | null
    code?: string | null
    code_verifier?: string | null
    extendNamespace?: string | null
    extend_exp?: boolean | null
    password?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    username?: string | null
  }): Promise<AxiosResponse<TokenWithDeviceCookieResponseV3>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthToken_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthRevoke_v3(data: { token: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthRevoke_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthVerify_v3(data: { token: string | null }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthVerify_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthMfaCode_v3(data: {
    clientId: string | null
    factor: string | null
    mfaToken: string | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthMfaCode_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getOauthAuthorize_v3(queryParams: {
    client_id: string | null
    response_type: 'code'
    code_challenge?: string | null
    code_challenge_method?: 'S256' | 'plain'
    createHeadless?: boolean | null
    oneTimeLinkCode?: string | null
    redirect_uri?: string | null
    scope?: string | null
    state?: string | null
    target_auth_page?: string | null
    useRedirectUriAsLoginUrlWhenLocked?: boolean | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOauthAuthorize_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthIntrospect_v3(data: { token: string | null }): Promise<AxiosResponse<TokenIntrospectResponse>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthIntrospect_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthMfaVerify_v3(data: {
    code: string | null
    factor: string | null
    mfaToken: string | null
    rememberDevice: boolean | null
  }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthMfaVerify_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getOauthRevocationlist_v3(): Promise<AxiosResponse<RevocationList>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOauthRevocationlist_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthMfaFactorChange_v3(data: { factor: string | null; mfaToken: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthMfaFactorChange_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postOauthSimultaneousLogin_v3(data: {
    nativePlatform: 'epicgames' | 'steam'
    nativePlatformTicket: string | null
    simultaneousPlatform?: string | null
    simultaneousTicket?: string | null
  }): Promise<AxiosResponse<TokenResponseV3>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthSimultaneousLogin_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postTokenOauth_ByPlatformId_v3(
    platformId: string,
    data: {
      additionalData?: string | null
      client_id?: string | null
      createHeadless?: boolean | null
      device_id?: string | null
      macAddress?: string | null
      platform_token?: string | null
      serviceLabel?: number
      skipSetCookie?: boolean | null
    }
  ): Promise<AxiosResponse<TokenResponse>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postTokenOauth_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAuthorizeOauth_ByPlatformId_v3(
    platformId: string,
    queryParams: { request_id: string | null; client_id?: string | null; redirect_uri?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAuthorizeOauth_ByPlatformId_v3(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformTokenOauth_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string
  ): Promise<AxiosResponse<TokenThirdPartyResponse>> {
    const $ = new OAuth20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformTokenOauth_ByUserId_ByPlatformId_v3(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint serves public keys for verifying JWT access tokens generated by this service. When a client application wants to verify a JWT token, it needs to get the &#39;kid&#39; value found in the JWT token header and use it to look up the corresponding public key from a set returned by this endpoint. The client application can then use that public key to verify the JWT. A client application might cache the keys so it doesn&#39;t need to do request every time it needs to verify a JWT token. If a client application caches the keys and a key with the same &#39;kid&#39; cannot be found in the cache, it should then try to refresh the keys by making a request to this endpoint again. Please refer to the RFC for more information about JWK (JSON Web Key): https://tools.ietf.org/html/rfc7517 action code : 10709
     */
    getOauthJwks_v3,
    /**
     * This endpoint supports grant type: 1. Grant Type == &lt;code&gt;authorization_code&lt;/code&gt;: It generates the user token by given the authorization code which generated in &#34;/iam/v3/authenticate&#34; API response. It should also pass in the redirect_uri, which should be the same as generating the authorization code request. 2. Grant Type == &lt;code&gt;password&lt;/code&gt;: The grant type to use for authenticating a user, whether it&#39;s by email / username and password combination or through platform. 3. Grant Type == &lt;code&gt;refresh_token&lt;/code&gt;: Used to get a new access token for a valid refresh token. 4. Grant Type == &lt;code&gt;client_credentials&lt;/code&gt;: It generates a token by checking the client credentials provided through Authorization header. 5. Grant Type == &lt;code&gt;urn:ietf:params:oauth:grant-type:extend_client_credentials&lt;/code&gt;: It generates a token by checking the client credentials provided through Authorization header. It only allows publisher/studio namespace client. In generated token: 1. There wil be no roles, namespace_roles &amp; permission. 2. The scope will be fixed as &#39;extend&#39;. 3. There will have a new field &#39;extend_namespace&#39;, the value is from token request body. ## Access Token Content Following is the access token’s content: - **namespace**. It is the namespace the token was generated from. - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential - **roles**. The sub’s roles. It is empty if the token is generated from the client credential - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace - **permissions**. The sub or aud’ permissions - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token. - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents: - 1: Email Address Verified - 2: Phone Number Verified - 4: Anonymous - 8: Suspicious Login - **aud**. The aud is the targeted resource server. - **iat**. The time the token issues at. It is in Epoch time format - **exp**. The time the token expires. It is in Epoch time format - **client_id**. The UserID. The sub is omitted if the token is generated from client credential - **scope**. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings ## Bans The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans. ## Device Cookie Validation _**For grant type &#34;password&#34; only**_ Device Cookie is used to protect the user account from brute force login attack, &lt;a target=&#34;_blank&#34; href=&#34;https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies&#34;&gt;more detail from OWASP&lt;a&gt;. This endpoint will read device cookie from request header **Auth-Trust-Id**. If device cookie not found, it will generate a new one and set it into response body **auth_trust_id** when successfully login. ## Track Login History This endpoint will track login history to detect suspicious login activity, please provide **Device-Id** (alphanumeric) in request header parameter otherwise it will set to &#34;unknown&#34;. Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default&#34; ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token ## Response note If it is a user token request and user hasn&#39;t accepted required legal policy, the field &lt;code&gt;is_comply&lt;/code&gt; will be false in response and responsed token will have no permission. action code: 10703
     */
    postOauthToken_v3,
    /**
     * This endpoint revokes a token. This endpoint requires authorized requests header with Basic Authentication from client that establish the token. action code: 10706
     */
    postOauthRevoke_v3,
    /**
     * This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret.
     */
    postOauthVerify_v3,
    /**
     * Send 2FA code This endpoint is used for sending 2FA code.
     */
    postOauthMfaCode_v3,
    /**
     * Initializes OAuth2.0 authorization code flow The endpoint stores authorization request and redirects to login page with the authorization request id. The user can then do the authentication on the login page. The user will be redirected back to the requesting client with authorization code if successfully authenticated. Only authorization code flow supported by this endpoint, implicit flow is not supported. - **Authorize success**: redirects to login page with the following information: ?request_id={authorization_request_id} - **Authorize failure**: redirects to the given redirect uri with the following information: ?error={error_code}&amp;error_description={error description} For Public Client case, it&#39;s mandatory to fill **code_challenge** to avoid authorization code interception attack. Please refer to the RFC for more information about Proof Key for Code Exchange(PKCE): https://datatracker.ietf.org/doc/html/rfc7636 Following are the error code based on the specification: - invalid_request: The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. - server_error: The authorization server encountered an unexpected condition that prevented it from fulfilling the request. - unauthorized_client: The client is not authorized to request a token using this method. - access_denied: The resource owner or authorization server denied the request. - invalid_scope: The requested scope is invalid, unknown, or malformed. - unsupported_response_type: The authorization server does not support obtaining a token using this method. - temporarily_unavailable: The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server. Please refer to the RFC for more information about authorization code flow: https://tools.ietf.org/html/rfc6749#section-4.1 action code: 10701
     */
    getOauthAuthorize_v3,
    /**
     * This endpoint returns information about an access token intended to be used by resource servers or other internal servers. This endpoint requires authorized requests header with valid basic or bearer token. action code : 10705
     */
    postOauthIntrospect_v3,
    /**
     * Verify 2FA code This endpoint is used for verifying 2FA code. ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token
     */
    postOauthMfaVerify_v3,
    /**
     * This endpoint will return a list of revoked users and revoked tokens. List of revoked tokens in bloom filter format. This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. The bloom filter uses MurmurHash3 algorithm for hashing the values action code : 10708
     */
    getOauthRevocationlist_v3,
    /**
     * Change 2FA method This endpoint is used for change 2FA method. Only enabled methods are accepted. Supported methods: - authenticator - backupCode - email
     */
    postOauthMfaFactorChange_v3,
    /**
     * # This endpoint is in ALPHA, avoid using this endpoint fow now, reach out to AB support for inquiries Simultaneous login flow. The primary goals of this project are to entitle players to authenticate on a native PC platform(Steam/Epic) and the PlayStation platform, link their accounts, and provide support for platform sync with a valid 3rd platform access token. ## Given a valid native ticket and empty simultaneous ticket, these cases will be failed - Native ticket&#39;s account is not linked AGS account yet - Native ticket&#39;s account is linked AGS account, but AGS account is not linked simultaneous platform yet - Native ticket&#39;s account is linked AGS account, AGS account is linked simultaneous platform but there is no available simultaneous token.(only if this platform is expected to store the platform token) ## Given a valid native ticket and empty simultaneous ticket, this case will be success - Native ticket&#39;s account already linked AGS account, this AGS account already linked simultaneous platform. There is valid simultaneous token.(this is required only when this simultaneous is expected to cache platform token) ## Given a valid native ticket token and valid simultaneous ticket, these cases will be failed #### Native ticket&#39;s account is already linked with AGS account - Native linked AGS account is linked this simultaneous platform but is different with simultaneous ticket&#39;s account - Native linked AGS account is not linked with simultaneous but has a linking history with simultaneous platform and it is different with simultaneous ticket&#39;s account #### Native ticket&#39;s account is not linked with AGS account and Simultaneous ticket&#39;s account is already linked wth AGS account - Simultaneous linked AGS account is linked this native platform but is different with native ticket&#39;s account - Simultaneous linked AGS account is not linked with native but has a linking history with native platform and it is different with native ticket&#39;s account ## Given a valid native ticket and valid simultaneous ticket, these cases will be success - Native ticket&#39;s account &amp; Simultaneous ticket&#39;s account are both not linked to AGS account yet - Native ticket&#39;s account &amp; Simultaneous ticket&#39;s account are already linked to same AGS account
     */
    postOauthSimultaneousLogin_v3,
    /**
     * Platform token grant specifically used for performing token grant using platform, e.g. Steam, Justice, etc. The endpoint automatically create an account if the account associated with the platform is not exists yet. This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. For publisher-game namespace schema : Specify only either platform_token or device_id. Device token grant should be requested along with device_id parameter against game namespace. Another 3rd party platform token grant should be requested along with platform_token parameter against publisher namespace. ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token ## Supported platforms: - **steam**: The platform_token’s value is the binary ticket returned by Steam. If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: &lt;code&gt;{identity}:{ticket}&lt;/code&gt;, the &lt;code&gt;{identity}&lt;/code&gt; was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain &lt;code&gt;:&lt;/code&gt; in this &lt;code&gt;{identity}&lt;/code&gt;. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code or idToken returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code or idToken returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code or idToken returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the id_token returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken. ## Account Group Several platforms are grouped under account groups. The accounts on these platforms have the same platform user id. Login using one of these platform will returns the same IAM user. Following is the current registered account grouping: - Steam group(steamnetwork): - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb ## Access Token Content Following is the access token’s content: - **namespace**. It is the namespace the token was generated from. - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential - **roles**. The sub’s roles. It is empty if the token is generated from the client credential - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace - **permissions**. The sub or aud’ permissions - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token. - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents: - 1: Email Address Verified - 2: Phone Number Verified - 4: Anonymous - 8: Suspicious Login - **aud**. The aud is the client ID. - **iat**. The time the token issues at. It is in Epoch time format - **exp**. The time the token expires. It is in Epoch time format - **sub**. The UserID. The sub is omitted if the token is generated from client credential ## Bans The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans. action code : 10704
     */
    postTokenOauth_ByPlatformId_v3,
    /**
     * Generate url to request auth code from third party platform ## Supported platforms: - **steamopenid**This endpoint redirects to steam login page, then redirect back to platform authenticate endpoint after successfully authenticating user steam. - **xblweb**This endpoint redirects to xbox login page, then redirect back to platform authenticate endpoint after successfully authenticating xbox user. - **ps4web**This endpoint redirects to psn login page, then redirect back to platform authenticate endpoint after successfully authenticating psn user. - **epicgames**This endpoint redirects to Epicgames OAuth login page. then redirect to platform authenticate endpoint after successfully authenticating an Epicgames credential - **twitch**This endpoint redirects to twitch login page, then redirect back to platform authenticate endpoint after successfully authenticating twitch user. - **azure**This endpoint redirects to azure login page, then redirect back to platform authenticate(saml) endpoint after successfully authenticating azure user. - **facebook**This endpoint redirects to facebook login page, then redirect back to platform authenticate endpoint after successfully authenticating facebook user. - **google**This endpoint redirects to google login page, then redirect back to platform authenticate endpoint after successfully authenticating google user. - **snapchat**This endpoint redirects to snapchat login page, then redirect back to platform authenticate endpoint after successfully authenticating snapchat user. - **discord**This endpoint redirects to discord login page, then redirect back to platform authenticate endpoint after successfully authenticating discord user. - **amazon**This endpoint redirects to amazon login page, then redirect back to platform authenticate endpoint after successfully authenticating amazon user. - **oculusweb**This endpoint redirects to oculus login page, then redirect back to Login Website page after successfully authenticating oculus user. action code : 10702&#39;
     */
    getAuthorizeOauth_ByPlatformId_v3,
    /**
     * Retrieve User Third Party Platform Token This endpoint used for retrieving third party platform token for user that login using third party, if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace. Passing platform group name or it&#39;s member will return same access token that can be used across the platform members. The third party platform and platform group covered for this is: - (psn) ps4web - (psn) ps4 - (psn) ps5 - epicgames - twitch - awscognito - &lt;amazon/li&gt; - eaorigin - snapchat - twitch - live **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    getPlatformTokenOauth_ByUserId_ByPlatformId_v3
  }
}
