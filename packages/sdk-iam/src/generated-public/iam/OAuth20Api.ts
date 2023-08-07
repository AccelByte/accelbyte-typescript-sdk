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
import { OAuth20$ } from './endpoints/OAuth20$.js'
import { RevocationList } from './definitions/RevocationList.js'
import { TokenIntrospectResponse } from './definitions/TokenIntrospectResponse.js'
import { TokenResponse } from './definitions/TokenResponse.js'
import { TokenResponseV3 } from './definitions/TokenResponseV3.js'
import { TokenThirdPartyResponse } from './definitions/TokenThirdPartyResponse.js'
import { TokenWithDeviceCookieResponseV3 } from './definitions/TokenWithDeviceCookieResponseV3.js'

export function OAuth20Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;This endpoint supports grant type:&lt;/p&gt;&lt;ol&gt; &lt;li&gt;Grant Type == &lt;code&gt;authorization_code&lt;/code&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp; It generates the user token by given the authorization code which generated in &#34;/iam/v3/authenticate&#34; API response. It should also pass in the redirect_uri, which should be the same as generating the authorization code request. &lt;/li&gt; &lt;li&gt;Grant Type == &lt;code&gt;password&lt;/code&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp; The grant type to use for authenticating a user, whether it&#39;s by email / username and password combination or through platform. &lt;/li&gt; &lt;li&gt;Grant Type == &lt;code&gt;refresh_token&lt;/code&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp; Used to get a new access token for a valid refresh token. &lt;/li&gt; &lt;li&gt;Grant Type == &lt;code&gt;client_credentials&lt;/code&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp; It generates a token by checking the client credentials provided through Authorization header. &lt;/li&gt;&lt;/ol&gt; &lt;h2&gt;Access Token Content&lt;/h2&gt; &lt;p&gt;Following is the access token’s content:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;namespace&lt;/strong&gt;. It is the namespace the token was generated from.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;display_name&lt;/strong&gt;. The display name of the sub. It is empty if the token is generated from the client credential&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;roles&lt;/strong&gt;. The sub’s roles. It is empty if the token is generated from the client credential&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;namespace_roles&lt;/strong&gt;. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;permissions&lt;/strong&gt;. The sub or aud’ permissions&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;bans&lt;/strong&gt;. The sub’s list of bans. It is used by the IAM client for validating the token.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;jflgs&lt;/strong&gt;. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;p&gt;1: Email Address Verified&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;2: Phone Number Verified&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;4: Anonymous&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;8: Suspicious Login&lt;/p&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;aud&lt;/strong&gt;. The aud is the targeted resource server.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;iat&lt;/strong&gt;. The time the token issues at. It is in Epoch time format&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;exp&lt;/strong&gt;. The time the token expires. It is in Epoch time format&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;client_id&lt;/strong&gt;. The UserID. The sub is omitted if the token is generated from client credential&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;scope&lt;/strong&gt;. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;h2&gt;Bans&lt;/h2&gt; &lt;p&gt;The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans.&lt;/p&gt; &lt;h2&gt;Device Cookie Validation&lt;/h2&gt; &lt;p&gt;&lt;i&gt;&lt;b&gt;For grant type &#34;password&#34; only&lt;/b&gt;&lt;/i&gt;&lt;/p&gt; &lt;p&gt;Device Cookie is used to protect the user account from brute force login attack, &lt;a target=&#34;_blank&#34; href=&#34;https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies&#34;&gt;more detail from OWASP&lt;a&gt;.&lt;/p&gt; &lt;p&gt;This endpoint will read device cookie from request header &lt;b&gt;Auth-Trust-Id&lt;/b&gt;. If device cookie not found, it will generate a new one and set it into response body &lt;b&gt;auth_trust_id&lt;/b&gt; when successfully login.&lt;/p&gt; &lt;h2&gt;Track Login History&lt;/h2&gt; &lt;p&gt;This endpoint will track login history to detect suspicious login activity, please provide &lt;b&gt;Device-Id&lt;/b&gt; (alphanumeric) in request header parameter otherwise it will set to &#34;unknown&#34;.&lt;/p&gt; &lt;p&gt;Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default&#34;&lt;/p&gt; &lt;h2&gt;2FA remember device&lt;/h2&gt; &lt;p&gt;To remember device for 2FA, should provide cookie: device_token or header: Device-Token&lt;/p&gt; &lt;h2&gt;Response note&lt;/h2&gt; &lt;p&gt;If it is a user token request and user hasn&#39;t accepted required legal policy, the field &lt;code&gt;is_comply&lt;/code&gt; will be false in response and responsed token will have no permission.&lt;/p&gt; &lt;p&gt;action code: 10703
   */
  async function postOauthToken(data: {
    grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token'
    additionalData?: string | null
    client_id?: string | null
    code?: string | null
    code_verifier?: string | null
    extend_exp?: boolean | null
    password?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    username?: string | null
  }): Promise<TokenWithDeviceCookieResponseV3> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthToken(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint revokes a token.&lt;/p&gt; &lt;p&gt;This endpoint requires authorized requests header with Basic Authentication from client that establish the token.&lt;/p&gt;&lt;br&gt;action code: 10706
   */
  async function postOauthRevoke(data: { token: string | null }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthRevoke(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret.
   */
  async function postOauthVerify(data: { token: string | null }): Promise<TokenResponseV3> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Send 2FA code&lt;br/&gt; &lt;p&gt;This endpoint is used for sending 2FA code.&lt;/p&gt;
   */
  async function postOauthMfaCode(data: { clientId: string | null; factor: string | null; mfaToken: string | null }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthMfaCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Initializes OAuth2.0 authorization code flow&lt;br/&gt; &lt;p&gt;The endpoint stores authorization request and redirects to login page with the authorization request id. The user can then do the authentication on the login page. The user will be redirected back to the requesting client with authorization code if successfully authenticated. &lt;/p&gt; &lt;p&gt;Only authorization code flow supported by this endpoint, implicit flow is not supported.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;p&gt;&lt;strong&gt;Authorize success&lt;/strong&gt;: redirects to login page with the following information: ?request_id={authorization_request_id}&lt;/p&gt; &lt;/li&gt; &lt;li&gt;&lt;p&gt;&lt;strong&gt;Authorize failure&lt;/strong&gt;: redirects to the given redirect uri with the following information: ?error={error_code}&amp;error_description={error description}&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Following are the error code based on the specification:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;p&gt;invalid_request: The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.&lt;/p&gt; &lt;/li&gt; &lt;li&gt;&lt;p&gt;server_error: The authorization server encountered an unexpected condition that prevented it from fulfilling the request.&lt;/p&gt; &lt;/li&gt; &lt;li&gt;&lt;p&gt;unauthorized_client: The client is not authorized to request a token using this method.&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;access_denied: The resource owner or authorization server denied the request.&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;invalid_scope: The requested scope is invalid, unknown, or malformed.&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;unsupported_response_type: The authorization server does not support obtaining a token using this method.&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;temporarily_unavailable: The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Please refer to the RFC for more information about authorization code flow: https://tools.ietf.org/html/rfc6749#section-4.1&lt;/p&gt;&lt;br&gt; action code: 10701
   */
  async function getOauthAuthorize(queryParams: {
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
  }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOauthAuthorize(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint returns information about an access token intended to be used by resource servers or other internal servers.&lt;/p&gt; &lt;p&gt;This endpoint requires authorized requests header with valid basic or bearer token.&lt;/p&gt; &lt;p&gt;action code : 10705&lt;/p&gt;
   */
  async function postOauthIntrospect(data: { token: string | null }): Promise<TokenIntrospectResponse> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthIntrospect(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify 2FA code&lt;br/&gt; &lt;p&gt;This endpoint is used for verifying 2FA code.&lt;/p&gt; &lt;h2&gt;2FA remember device&lt;/h2&gt; &lt;p&gt;To remember device for 2FA, should provide cookie: device_token or header: Device-Token&lt;/p&gt;
   */
  async function postOauthMfaVerify(data: {
    code: string | null
    factor: string | null
    mfaToken: string | null
    rememberDevice: boolean | null
  }): Promise<TokenResponseV3> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthMfaVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint will return a list of revoked users and revoked tokens. List of revoked tokens in bloom filter format.&lt;/p&gt; &lt;p&gt;This endpoint requires authorized requests header with valid access token.&lt;/p&gt; &lt;p&gt;The bloom filter uses MurmurHash3 algorithm for hashing the values&lt;/p&gt; &lt;p&gt;action code : 10708&lt;/p&gt;
   */
  async function getOauthRevocationlist(): Promise<RevocationList> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOauthRevocationlist()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Change 2FA method&lt;br/&gt; &lt;p&gt;This endpoint is used for change 2FA method. Only enabled methods are accepted.&lt;/p&gt; &lt;p&gt;Supported methods:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;authenticator&lt;/li&gt; &lt;li&gt;backupCode&lt;/li&gt; &lt;li&gt;email&lt;/li&gt; &lt;/ul&gt;
   */
  async function postOauthMfaFactorChange(data: { factor: string | null; mfaToken: string | null }): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postOauthMfaFactorChange(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Platform token grant specifically used for performing token grant using platform, e.g. Steam, Justice, etc. The endpoint automatically create an account if the account associated with the platform is not exists yet. This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. For publisher-game namespace schema : Specify only either platform_token or device_id. Device token grant should be requested along with device_id parameter against game namespace. Another 3rd party platform token grant should be requested along with platform_token parameter against publisher namespace.&lt;/p&gt;&lt;br/&gt; &lt;h2&gt;2FA remember device&lt;/h2&gt; &lt;p&gt;To remember device for 2FA, should provide cookie: device_token or header: Device-Token&lt;/p&gt; &lt;h2&gt;Supported platforms:&lt;/h2&gt; &lt;ul&gt; &lt;li&gt;&lt;strong&gt;steam&lt;/strong&gt;: The platform_token’s value is the binary ticket returned by Steam.&lt;/br&gt; If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: &lt;code&gt;{identity}:{ticket}&lt;/code&gt;,&lt;br&gt; the &lt;code&gt;{identity}&lt;/code&gt; was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain &lt;code&gt;:&lt;/code&gt; in this &lt;code&gt;{identity}&lt;/code&gt;.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;steamopenid&lt;/strong&gt;: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication&lt;/li&gt; &lt;li&gt;&lt;strong&gt;facebook&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Facebook OAuth&lt;/li&gt; &lt;li&gt;&lt;strong&gt;google&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Google OAuth&lt;/li&gt; &lt;li&gt;&lt;strong&gt;oculus&lt;/strong&gt;: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:).&lt;/li&gt; &lt;li&gt;&lt;strong&gt;twitch&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Twitch OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;discord&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Discord OAuth&lt;/li&gt; &lt;li&gt;&lt;strong&gt;android&lt;/strong&gt;: The device_id is the Android’s device ID&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ios&lt;/strong&gt;: The device_id is the iOS’s device ID.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;apple&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token)&lt;/li&gt; &lt;li&gt;&lt;strong&gt;device&lt;/strong&gt;: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;justice&lt;/strong&gt;: The platform_token’s value is the designated user’s access token.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;epicgames&lt;/strong&gt;: The platform_token’s value is an access-token or authorization code obtained from Epicgames EOS Account Service.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ps4&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Sony OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ps5&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Sony OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;nintendo&lt;/strong&gt;: The platform_token’s value is the id_token returned by Nintendo OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;awscognito&lt;/strong&gt;: The platform_token’s value is the aws cognito access token or id token (JWT).&lt;/li&gt; &lt;li&gt;&lt;strong&gt;live&lt;/strong&gt;: The platform_token’s value is xbox XSTS token&lt;/li&gt; &lt;li&gt;&lt;strong&gt;xblweb&lt;/strong&gt;: The platform_token’s value is code returned by xbox after login&lt;/li&gt; &lt;li&gt;&lt;strong&gt;netflix&lt;/strong&gt;: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend&lt;/li&gt; &lt;li&gt;&lt;strong&gt;snapchat&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Snapchat OAuth.&lt;/li&gt; &lt;br&gt;&lt;li&gt;&lt;strong&gt;for specific generic oauth (OIDC)&lt;/strong&gt;: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.&lt;/li&gt; &lt;/ul&gt; &lt;h2&gt;Account Group&lt;/h2&gt; &lt;p&gt;Several platforms are grouped under account groups. The accounts on these platforms have the same platform user id. Login using one of these platform will returns the same IAM user. &lt;/p&gt; &lt;p&gt;Following is the current registered account grouping: &lt;/p&gt; &lt;ul&gt; &lt;li&gt; (psn) ps4web &lt;/li&gt; &lt;li&gt; (psn) ps4 &lt;/li&gt; &lt;li&gt; (psn) ps5 &lt;/li&gt; &lt;/ul&gt; &lt;h2&gt;Access Token Content&lt;/h2&gt; &lt;p&gt;Following is the access token’s content:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;namespace&lt;/strong&gt;. It is the namespace the token was generated from.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;display_name&lt;/strong&gt;. The display name of the sub. It is empty if the token is generated from the client credential&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;roles&lt;/strong&gt;. The sub’s roles. It is empty if the token is generated from the client credential&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;namespace_roles&lt;/strong&gt;. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;permissions&lt;/strong&gt;. The sub or aud’ permissions&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;bans&lt;/strong&gt;. The sub’s list of bans. It is used by the IAM client for validating the token.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;jflgs&lt;/strong&gt;. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;p&gt;1: Email Address Verified&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;2: Phone Number Verified&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;4: Anonymous&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;8: Suspicious Login&lt;/p&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;aud&lt;/strong&gt;. The aud is the client ID.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;iat&lt;/strong&gt;. The time the token issues at. It is in Epoch time format&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;exp&lt;/strong&gt;. The time the token expires. It is in Epoch time format&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;&lt;strong&gt;sub&lt;/strong&gt;. The UserID. The sub is omitted if the token is generated from client credential&lt;/p&gt; &lt;/li&gt; &lt;h2&gt;Bans&lt;/h2&gt; &lt;p&gt;The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans.&lt;/p&gt; &lt;br&gt;action code : 10704
   */
  async function postTokenOauth_ByPlatformId(
    platformId: string,
    data: {
      additionalData?: string | null
      client_id?: string | null
      createHeadless?: boolean | null
      device_id?: string | null
      macAddress?: string | null
      platform_token?: string | null
      skipSetCookie?: boolean | null
    }
  ): Promise<TokenResponse> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postTokenOauth_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate url to request auth code from third party platform &lt;br&gt; &lt;h2&gt;Supported platforms:&lt;/h2&gt;&lt;ul&gt; &lt;li&gt;&lt;strong&gt;steamopenid&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to steam login page, then redirect back to platform authenticate endpoint after successfully authenticating user steam. &lt;li&gt;&lt;strong&gt;xblweb&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to xbox login page, then redirect back to platform authenticate endpoint after successfully authenticating xbox user. &lt;li&gt;&lt;strong&gt;ps4web&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to psn login page, then redirect back to platform authenticate endpoint after successfully authenticating psn user. &lt;li&gt;&lt;strong&gt;epicgames&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to Epicgames OAuth login page. then redirect to platform authenticate endpoint after successfully authenticating an Epicgames credential &lt;li&gt;&lt;strong&gt;twitch&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to twitch login page, then redirect back to platform authenticate endpoint after successfully authenticating twitch user. &lt;li&gt;&lt;strong&gt;azure&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to azure login page, then redirect back to platform authenticate(saml) endpoint after successfully authenticating azure user. &lt;li&gt;&lt;strong&gt;facebook&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to facebook login page, then redirect back to platform authenticate endpoint after successfully authenticating facebook user. &lt;li&gt;&lt;strong&gt;google&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to google login page, then redirect back to platform authenticate endpoint after successfully authenticating google user. &lt;li&gt;&lt;strong&gt;snapchat&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to snapchat login page, then redirect back to platform authenticate endpoint after successfully authenticating snapchat user. &lt;li&gt;&lt;strong&gt;discord&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to discord login page, then redirect back to platform authenticate endpoint after successfully authenticating discord user. &lt;li&gt;&lt;strong&gt;amazon&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to amazon login page, then redirect back to platform authenticate endpoint after successfully authenticating amazon user. &lt;li&gt;&lt;strong&gt;oculus&lt;/strong&gt;&lt;/li&gt;This endpoint redirects to oculus login page, then redirect back to Login Website page after successfully authenticating oculus user. &lt;/ul&gt; action code : 10702&#39;
   */
  async function getAuthorizeOauth_ByPlatformId(
    platformId: string,
    queryParams: { request_id: string | null; client_id?: string | null; redirect_uri?: string | null }
  ): Promise<unknown> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAuthorizeOauth_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve User Third Party Platform Token&lt;br/&gt; &lt;p&gt; This endpoint used for retrieving third party platform token for user that login using third party, if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace. Passing platform group name or it&#39;s member will return same access token that can be used across the platform members. &lt;/p&gt; &lt;p&gt;The third party platform and platform group covered for this is:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;(psn) ps4web&lt;/li&gt; &lt;li&gt;(psn) ps4&lt;/li&gt; &lt;li&gt;(psn) ps5&lt;/li&gt; &lt;li&gt;epicgames&lt;/li&gt; &lt;li&gt;twitch&lt;/li&gt; &lt;li&gt;awscognito&lt;/li&gt; &lt;/ul&gt;
   */
  async function getPlatformTokenOauth_ByUserId_ByPlatformId(userId: string, platformId: string): Promise<TokenThirdPartyResponse> {
    const $ = new OAuth20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlatformTokenOauth_ByUserId_ByPlatformId(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
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
