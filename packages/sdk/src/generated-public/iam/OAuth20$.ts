/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { JwkSet } from './definitions/JwkSet'
import { RevocationList } from './definitions/RevocationList'
import { TokenIntrospectResponse } from './definitions/TokenIntrospectResponse'
import { TokenResponse } from './definitions/TokenResponse'
import { TokenResponseV3 } from './definitions/TokenResponseV3'
import { TokenThirdPartyResponse } from './definitions/TokenThirdPartyResponse'
import { TokenWithDeviceCookieResponseV3 } from './definitions/TokenWithDeviceCookieResponseV3'

export class OAuth20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Initializes OAuth2.0 authorization code flow<br/>
   * <p>The endpoint stores authorization request and redirects to login page with the authorization request id.
   * 	The user can then do the authentication on the login page.
   * 	The user will be redirected back to the requesting client with authorization code if successfully authenticated.
   * </p>
   * <p>Only authorization code flow supported by this endpoint, implicit flow is not supported.</p>
   * <ul>
   * 	<li><p><strong>Authorize success</strong>:
   * 		redirects to login page with the following information: ?request_id={authorization_request_id}</p>
   * 	</li>
   * 	<li><p><strong>Authorize failure</strong>:
   * 		redirects to the given redirect uri with the following information:
   * 		?error={error_code}&error_description={error description}</p>
   * 	</li>
   * </ul>
   * 	<p>Following are the error code based on the specification:</p>
   * <ul>
   * 	<li><p>invalid_request: The request is missing a required parameter,
   * 		includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.</p>
   * 	</li>
   * 	<li><p>server_error:
   * 		The authorization server encountered an unexpected condition that prevented it from fulfilling the request.</p>
   * 	</li>
   * 	<li><p>unauthorized_client: The client is not authorized to request a token using this method.</p></li>
   * 	<li><p>access_denied: The resource owner or authorization server denied the request.</p></li>
   * 	<li><p>invalid_scope: The requested scope is invalid, unknown, or malformed.</p></li>
   * 	<li><p>unsupported_response_type: The authorization server does not support obtaining a token using this method.</p></li>
   * 	<li><p>temporarily_unavailable: The authorization server is currently unable to handle the request
   * 		due to a temporary overloading or maintenance of the server.</p>
   * 	</li>
   * </ul>
   * 	<p>Please refer to the RFC for more information about authorization code flow: https://tools.ietf.org/html/rfc6749#section-4.1</p><br>
   * 	action code: 10701
   *
   *
   */
  fetchIamV3OauthAuthorize(queryParams: {
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
  }): Promise<IResponseWithSync<unknown>> {
    const params = {
      scope: 'commerce account social publishing analytics',
      code_challenge_method: 'plain',
      createHeadless: true,
      ...queryParams
    } as SDKRequestConfig
    const url = '/iam/v3/oauth/authorize'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint returns information about an access token intended to be used by resource servers or other internal servers.</p>
   * 					 <p>This endpoint requires authorized requests header with valid basic or bearer token.</p>
   * 					 <p>action code : 10705</p>
   */
  postIamV3OauthIntrospect<T = TokenIntrospectResponse>(data: { token: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/introspect'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenIntrospectResponse)
  }

  /**
   * <p>This endpoint serves public keys for verifying JWT access tokens generated by this service.</p>
   * 			<p>When a client application wants to verify a JWT token, it needs to get the 'kid' value found in the JWT token header and use it
   * 			to look up the corresponding public key from a set returned by this endpoint. The client application can then use that public key to verify the JWT.</p>
   * 			<p>A client application might cache the keys so it doesn't need to do request every time it needs to verify a JWT token. If a client application
   * 			caches the keys and a key with the same 'kid' cannot be found in the cache, it should then try to refresh the keys by making a request to this
   * 			endpoint again.</p>
   * 			<p>Please refer to the RFC for more information about JWK (JSON Web Key): https://tools.ietf.org/html/rfc7517</p>
   * 			<br>action code : 10709
   */
  fetchIamV3OauthJwks<T = JwkSet>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/jwks'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, JwkSet)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Send 2FA code<br/>
   * <p>This endpoint is used for sending 2FA code.</p>
   *
   */
  postIamV3OauthMfaCode(data: { mfaToken: string | null; factor: string | null; clientId: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/mfa/code'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Change 2FA method<br/>
   * <p>This endpoint is used for change 2FA method. Only enabled methods are accepted.</p>
   * <p>Supported methods:</p>
   * <ul>
   * 	<li>authenticator</li>
   * 	<li>backupCode</li>
   * 	<li>email</li>
   * </ul>
   *
   */
  postIamV3OauthMfaFactorChange(data: { mfaToken: string | null; factor: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/mfa/factor/change'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Verify 2FA code<br/>
   * <p>This endpoint is used for verifying 2FA code.</p>
   *          <h2>2FA remember device</h2>
   *          <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>
   *
   */
  postIamV3OauthMfaVerify<T = TokenResponseV3>(data: {
    mfaToken: string | null
    factor: string | null
    code: string | null
    rememberDevice: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/mfa/verify'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3)
  }

  /**
   * Retrieve User Third Party Platform Token<br/>
   * <p>
   * This endpoint used for retrieving third party platform token for user that login using third party,
   * if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace.
   * Passing platform group name or it's member will return same access token that can be used across the platform members.
   * </p>
   * <p>The third party platform and platform group covered for this is:</p>
   * <ul>
   * 	<li>(psn) ps4web</li>
   * 	<li>(psn) ps4</li>
   * 	<li>(psn) ps5</li>
   * 	<li>epicgames</li>
   * 	<li>twitch</li>
   * 	<li>awscognito</li>
   * </ul>
   */
  fetchV3OauthUsersByUseridPlatformsByPlatformidPlatformToken<T = TokenThirdPartyResponse>(
    userId: string,
    platformId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/namespaces/{namespace}/users/{userId}/platforms/{platformId}/platformToken'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TokenThirdPartyResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Generate url to request auth code from third party platform <br>
   *                <h2>Supported platforms:</h2><ul>
   *                <li><strong>steamopenid</strong></li>This endpoint redirects to steam login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating user steam.
   *                <li><strong>xblweb</strong></li>This endpoint redirects to xbox login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating xbox user.
   *                <li><strong>ps4web</strong></li>This endpoint redirects to psn login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating psn user.
   *                <li><strong>epicgames</strong></li>This endpoint redirects to Epicgames OAuth login page. then redirect to platform
   *                authenticate endpoint after successfully authenticating an Epicgames credential
   *                <li><strong>twitch</strong></li>This endpoint redirects to twitch login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating twitch user.
   *                <li><strong>azure</strong></li>This endpoint redirects to azure login page, then redirect back to platform
   *                authenticate(saml) endpoint after successfully authenticating azure user.
   *                <li><strong>facebook</strong></li>This endpoint redirects to facebook login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating facebook user.
   *                <li><strong>google</strong></li>This endpoint redirects to google login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating google user.
   * 							 <li><strong>snapchat</strong></li>This endpoint redirects to snapchat login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating snapchat user.
   * 							 <li><strong>discord</strong></li>This endpoint redirects to discord login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating discord user.
   *                <li><strong>amazon</strong></li>This endpoint redirects to amazon login page, then redirect back to platform
   *                authenticate endpoint after successfully authenticating amazon user.
   *                </ul> action code : 10702'
   */
  fetchV3OauthPlatformsByPlatformidAuthorize(
    platformId: string,
    queryParams: { request_id: string | null; client_id?: string | null; redirect_uri?: string | null }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/oauth/platforms/{platformId}/authorize'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Platform token grant specifically used for performing token grant using platform, e.g. Steam, Justice, etc. The endpoint automatically create an account if the account associated with the platform is not exists yet.
   * 			This endpoint requires all requests to have Authorization header set with Basic access authentication
   * 			constructed from client id and client secret. For publisher-game namespace schema : Specify only either platform_token or device_id. Device token grant
   * 			should be requested along with device_id parameter against game namespace. Another 3rd party platform token grant should be requested
   * 			along with platform_token parameter against publisher namespace.</p><br/>
   *             <h2>2FA remember device</h2>
   *             <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>
   * 			<h2>Supported platforms:</h2>
   * 			<ul>
   * 				<li><strong>steam</strong>: The platform_token’s value is the authentication code returned by Steam.</li>
   * 				<li><strong>steamopenid</strong>: Steam's user authentication method using OpenID 2.0. The platform_token's value is URL generated by Steam on web authentication</li>
   * 				<li><strong>facebook</strong>: The platform_token’s value is the authorization code returned by Facebook OAuth</li>
   * 				<li><strong>google</strong>: The platform_token’s value is the authorization code returned by Google OAuth</li>
   * 				<li><strong>oculus</strong>: The platform_token’s value is a string composed of Oculus's user ID and the nonce separated by a colon (:).</li>
   * 				<li><strong>twitch</strong>: The platform_token’s value is the authorization code returned by Twitch OAuth.</li>
   * 				<li><strong>discord</strong>: The platform_token’s value is the authorization code returned by Discord OAuth</li>
   * 				<li><strong>android</strong>: The device_id is the Android’s device ID</li>
   * 				<li><strong>ios</strong>: The device_id is the iOS’s device ID.</li>
   * 				<li><strong>apple</strong>: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token)</li>
   * 				<li><strong>device</strong>: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID.</li>
   * 				<li><strong>justice</strong>: The platform_token’s value is the designated user’s access token.</li>
   * 				<li><strong>epicgames</strong>: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service.</li>
   * 				<li><strong>ps4</strong>: The platform_token’s value is the authorization code returned by Sony OAuth.</li>
   * 				<li><strong>ps5</strong>: The platform_token’s value is the authorization code returned by Sony OAuth.</li>
   * 				<li><strong>nintendo</strong>: The platform_token’s value is the authorization code(id_token) returned by Nintendo OAuth.</li>
   * 				<li><strong>awscognito</strong>: The platform_token’s value is the aws cognito access token or id token (JWT).</li>
   * 				<li><strong>live</strong>: The platform_token’s value is xbox XSTS token</li>
   * 				<li><strong>xblweb</strong>: The platform_token’s value is code returned by xbox after login</li>
   * 				<li><strong>netflix</strong>: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend</li>
   * 				<li><strong>snapchat</strong>: The platform_token’s value is the authorization code returned by Snapchat OAuth.</li>
   * 				<br><li><strong>for specific generic oauth (OIDC)</strong>: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.</li>
   * 			</ul>
   * 			<h2>Account Group</h2>
   * 			<p>Several platforms are grouped under account groups. The accounts on these platforms have the same platform user id.
   * 			Login using one of these platform will returns the same IAM user. </p>
   * 			<p>Following is the current registered account grouping: </p>
   * 			<ul>
   * 			<li> (psn) ps4web </li>
   * 			<li> (psn) ps4 </li>
   * 			<li> (psn) ps5 </li>
   * 			</ul>
   * 			<h2>Access Token Content</h2>
   * 			<p>Following is the access token’s content:</p>
   * 			<ul>
   * 			<li>
   * 				<p><strong>namespace</strong>. It is the namespace the token was generated from.</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>display_name</strong>. The display name of the sub. It is empty if the token is generated from the client credential</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>roles</strong>. The sub’s roles. It is empty if the token is generated from the client credential</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>namespace_roles</strong>. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>permissions</strong>. The sub or aud’ permissions</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>bans</strong>. The sub’s list of bans. It is used by the IAM client for validating the token.</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>jflgs</strong>. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:</p>
   * 			<ul>
   * 				<li><p>1: Email Address Verified</p></li>
   * 				<li><p>2: Phone Number Verified</p></li>
   * 				<li><p>4: Anonymous</p></li>
   * 				<li><p>8: Suspicious Login</p></li>
   * 			</ul>
   * 			</li>
   * 			<li>
   * 				<p><strong>aud</strong>. The aud is the client ID.</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>iat</strong>. The time the token issues at. It is in Epoch time format</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>exp</strong>. The time the token expires. It is in Epoch time format</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>sub</strong>. The UserID. The sub is omitted if the token is generated from client credential</p>
   * 			</li>
   * 			<h2>Bans</h2>
   * 			<p>The JWT contains user's active bans with its expiry date. List of ban types can be obtained from /bans.</p>
   * 			<br>action code : 10704
   */
  postV3OauthPlatformsByPlatformidToken<T = TokenResponse>(
    platformId: string,
    data: {
      platform_token?: string | null
      client_id?: string | null
      device_id?: string | null
      createHeadless?: boolean | null
      macAddress?: string | null
    }
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/platforms/{platformId}/token'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponse)
  }

  /**
   * <p>This endpoint will return a list of revoked users and revoked tokens. List of revoked tokens in bloom filter format.</p>
   * 					 <p>This endpoint requires authorized requests header with valid access token.</p>
   * 					 <p>The bloom filter uses MurmurHash3 algorithm for hashing the values</p>
   * 					 <p>action code : 10708</p>
   */
  fetchIamV3OauthRevocationlist<T = RevocationList>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/revocationlist'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RevocationList)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint revokes a token.</p>
   * 					 <p>This endpoint requires authorized requests header with Basic Authentication from client that establish the token.</p><br>action code: 10706
   */
  postIamV3OauthRevoke(data: { token: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/revoke'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint supports grant type:</p><ol>
   * 	 		<li>Grant Type == <code>authorization_code</code>:<br />
   * 				&nbsp;&nbsp;&nbsp; It generates the user token by given the authorization
   * 				code which generated in "/iam/v3/authenticate" API response. It should also pass
   * 				in the redirect_uri, which should be the same as generating the
   * 				authorization code request.
   * 			</li>
   * 			<li>Grant Type == <code>password</code>:<br />
   * 	 			&nbsp;&nbsp;&nbsp; The grant type to use for authenticating a user, whether it's by email / username and password combination
   * 				or through platform.
   * 			</li>
   * 			<li>Grant Type == <code>refresh_token</code>:<br />
   * 	 			&nbsp;&nbsp;&nbsp; Used to get a new access token for a valid refresh token.
   * 			</li>
   * 			<li>Grant Type == <code>client_credentials</code>:<br />
   * 	 			&nbsp;&nbsp;&nbsp; It generates a token by checking the client credentials provided through Authorization header.
   * 			</li></ol>
   * 			<h2>Access Token Content</h2>
   * 			<p>Following is the access token’s content:</p>
   * 			<ul>
   * 			<li>
   * 				<p><strong>namespace</strong>. It is the namespace the token was generated from.</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>display_name</strong>. The display name of the sub. It is empty if the token is generated from the client credential</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>roles</strong>. The sub’s roles. It is empty if the token is generated from the client credential</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>namespace_roles</strong>. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>permissions</strong>. The sub or aud’ permissions</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>bans</strong>. The sub’s list of bans. It is used by the IAM client for validating the token.</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>jflgs</strong>. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:</p>
   * 			<ul>
   * 				<li><p>1: Email Address Verified</p></li>
   * 				<li><p>2: Phone Number Verified</p></li>
   * 				<li><p>4: Anonymous</p></li>
   * 				<li><p>8: Suspicious Login</p></li>
   * 			</ul>
   * 			</li>
   * 			<li>
   * 				<p><strong>aud</strong>. The aud is the targeted resource server.</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>iat</strong>. The time the token issues at. It is in Epoch time format</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>exp</strong>. The time the token expires. It is in Epoch time format</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>client_id</strong>. The UserID. The sub is omitted if the token is generated from client credential</p>
   * 			</li>
   * 			<li>
   * 				<p><strong>scope</strong>. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings</p>
   * 			</li>
   * 			</ul>
   * 			<h2>Bans</h2>
   * 			<p>The JWT contains user's active bans with its expiry date. List of ban types can be obtained from /bans.</p>
   * 			<h2>Device Cookie Validation</h2>
   * 			<p><i><b>For grant type "password" only</b></i></p>
   * 			<p>Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>.</p>
   * 			<p>This endpoint will read device cookie from request header <b>Auth-Trust-Id</b>. If device cookie not found, it will generate a new one and set it into response body <b>auth_trust_id</b> when successfully login.</p>
   * 			<h2>Track Login History</h2>
   * 			<p>This endpoint will track login history to detect suspicious login activity, please provide <b>Device-Id</b> (alphanumeric) in request header parameter otherwise it will set to "unknown".</p>
   * 			<p>Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default"</p>
   *             <h2>2FA remember device</h2>
   *             <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>
   * 			<p>action code: 10703
   */
  postIamV3OauthToken<T = TokenWithDeviceCookieResponseV3>(data: {
    grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token'
    username?: string | null
    password?: string | null
    code?: string | null
    code_verifier?: string | null
    client_id?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenWithDeviceCookieResponseV3)
  }

  /**
   * This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret.
   */
  postIamV3OauthVerify<T = TokenResponseV3>(data: { token: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/verify'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3)
  }
}
