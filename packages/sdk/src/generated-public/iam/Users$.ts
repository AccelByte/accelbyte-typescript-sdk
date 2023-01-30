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
import { CountryV3Response } from './definitions/CountryV3Response'
import { CreateJusticeUserResponse } from './definitions/CreateJusticeUserResponse'
import { DistinctPlatformResponseV3 } from './definitions/DistinctPlatformResponseV3'
import { ForgotPasswordRequestV3 } from './definitions/ForgotPasswordRequestV3'
import { GetLinkHeadlessAccountConflictResponse } from './definitions/GetLinkHeadlessAccountConflictResponse'
import { GetPublisherUserV3Response } from './definitions/GetPublisherUserV3Response'
import { GetUserBanV3Response } from './definitions/GetUserBanV3Response'
import { GetUserMappingV3Array } from './definitions/GetUserMappingV3Array'
import { LinkHeadlessAccountRequest } from './definitions/LinkHeadlessAccountRequest'
import { LinkPlatformAccountRequest } from './definitions/LinkPlatformAccountRequest'
import { LinkPlatformAccountWithProgressionRequest } from './definitions/LinkPlatformAccountWithProgressionRequest'
import { LinkRequest } from './definitions/LinkRequest'
import { ListBulkUserResponse } from './definitions/ListBulkUserResponse'
import { LoginHistoriesResponse } from './definitions/LoginHistoriesResponse'
import { PlatformUserIdRequest } from './definitions/PlatformUserIdRequest'
import { PublicUserInformationResponseV3 } from './definitions/PublicUserInformationResponseV3'
import { PublicUserResponseV3 } from './definitions/PublicUserResponseV3'
import { ResetPasswordRequestV3 } from './definitions/ResetPasswordRequestV3'
import { SendRegisterVerificationCodeRequest } from './definitions/SendRegisterVerificationCodeRequest'
import { SendVerificationCodeRequestV3 } from './definitions/SendVerificationCodeRequestV3'
import { SendVerificationLinkRequest } from './definitions/SendVerificationLinkRequest'
import { UnlinkUserPlatformRequest } from './definitions/UnlinkUserPlatformRequest'
import { UpgradeHeadlessAccountV3Request } from './definitions/UpgradeHeadlessAccountV3Request'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3'
import { UserCreateFromInvitationRequestV3 } from './definitions/UserCreateFromInvitationRequestV3'
import { UserCreateRequestV3 } from './definitions/UserCreateRequestV3'
import { UserCreateResponseV3 } from './definitions/UserCreateResponseV3'
import { UserIDsRequest } from './definitions/UserIDsRequest'
import { UserInformationV3 } from './definitions/UserInformationV3'
import { UserInvitationV3 } from './definitions/UserInvitationV3'
import { UserLinkedPlatformsResponseV3 } from './definitions/UserLinkedPlatformsResponseV3'
import { UserPasswordUpdateV3Request } from './definitions/UserPasswordUpdateV3Request'
import { UserPlatforms } from './definitions/UserPlatforms'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'
import { UserVerificationRequestV3 } from './definitions/UserVerificationRequestV3'
import { VerifyRegistrationCode } from './definitions/VerifyRegistrationCode'
import { WebLinkingResponse } from './definitions/WebLinkingResponse'

export class Users$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get age restriction by country code. It will always get by publisher namespace
   */
  fetchV3AgerestrictionsCountriesByCountrycode<T = CountryV3Response>(countryCode: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/agerestrictions/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryV3Response)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List User ID By Platform User ID
   * This endpoint intended to list game user ID from the given namespace
   * This endpoint return list of user ID by given platform ID and list of platform user ID
   *
   * <strong>nintendo platform user ID</strong>: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   *
   */
  postV3PlatformsByPlatformidUsers<T = UserPlatforms>(platformId: string, data: PlatformUserIdRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserPlatforms)
  }

  /**
   * Get User By Platform User ID
   *
   * This endpoint return user information by given platform ID and platform user ID
   *
   * <strong>nintendo platform user ID</strong>: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   *
   */
  fetchV3PlatformsByPlatformidUsersByPlatformuserid<T = UserResponseV3>(
    platformId: string,
    platformUserId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId}'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
      .replace('{platformUserId}', platformUserId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used to get linking status.
   */
  fetchV3RequestsByRequestidAsyncStatus<T = LinkRequest>(requestId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/requests/{requestId}/async/status'
      .replace('{namespace}', this.namespace)
      .replace('{requestId}', requestId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, LinkRequest)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Requires valid user access token</p>
   * 			<p>This endpoint search all users on the specified namespace that match the query on these fields: display name, and username.
   * 			The query length should greater than 1，otherwise will not query the database. The default limit value is 100</p>
   * 			<br>action code : 10132
   */
  fetchV3Users<T = PublicUserInformationResponseV3>(queryParams?: {
    query?: string | null
    by?: string | null
    limit?: string | null
    offset?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicUserInformationResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *
   * 		<p>Available Authentication Types:</p>
   * 			<ol>
   * 				<li><strong>EMAILPASSWD</strong>: an authentication type used for new user registration through email.</li>
   * 		</ol>
   * 		<p>Country use ISO3166-1 alpha-2 two letter, e.g. US.</p>
   * 		<p>Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.</p>
   * 		<p>This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>
   */
  postV3Users<T = UserCreateResponseV3>(data: UserCreateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserCreateResponseV3)
  }

  /**
   * Check user's account availability.
   * Available field :
   * 	- displayName
   *
   * If request include access token with user ID data, that user ID will be excluded from availability check.
   * For example, in case user update his emailAddress, he can use his own emailAddress to update his account.
   *
   * Response Code :
   * 	- Account Available : 404 (not found)
   * 	- Account Not Available : 204 (no content)
   *
   */
  fetchV3UsersAvailability(queryParams: { field: string | null; query: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/availability'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Notes:</p>
   * 		<ul>
   * 			<li>This endpoint bulk get users' basic info by userId, max allowed 100 at a time</li>
   * 			<li>If namespace is game, will search by game user Id, other wise will search by publisher namespace</li>
   * 			<li><strong>Result will include displayName(if it exists)</strong></li>
   * 		</ul>
   *
   */
  postV3UsersBulkBasic<T = ListBulkUserResponse>(data: UserIDsRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/bulk/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ListBulkUserResponse)
  }

  /**
   * This endpoint will validate the request's email address.
   *
   * If it already been used, will response 409.
   *
   * If it is available, we will send a verification code to this email address.
   * This code can be verified by this <a href="#operations-Users-PublicVerifyRegistrationCode">endpoint</a>.
   *
   */
  postV3UsersCodeRequest(data: SendRegisterVerificationCodeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/code/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>Verify the registration code</p>
   *
   */
  postV3UsersCodeVerify(data: VerifyRegistrationCode): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p><strong>Special note for publisher-game scenario:</strong>
   * Game Client should provide game namespace path parameter and Publisher
   * Client should provide publisher namespace path parameter. </p>
   * <p>The password reset code will be sent to the publisher account's email address. </p>
   * <p>action code : 10104 </p>
   *
   */
  postV3UsersForgot(data: ForgotPasswordRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/forgot'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
   *
   */
  fetchV3UsersInviteByInvitationid<T = UserInvitationV3>(invitationId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserInvitationV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data.
   * User will be able to login after completing submitting the data through this endpoint.
   * Available Authentication Types:
   *
   * 	EMAILPASSWD: an authentication type used for new user registration through email.
   *
   * Country use ISO3166-1 alpha-2 two letter, e.g. US.
   *
   * Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
   *
   */
  postV3UsersInviteByInvitationid<T = UserCreateResponseV3>(
    invitationId: string,
    data: UserCreateFromInvitationRequestV3
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserCreateResponseV3)
  }

  /**
   * <p>Requires valid user access token </p>
   * <br><p>This Endpoint support update user based on given data. <b>Single request can update single field or multi fields.</b></p>
   * <p>Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl}</p>
   * <p>Country use ISO3166-1 alpha-2 two letter, e.g. US.</p>
   * <p>Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.</p>
   * <br><b>Several case of updating email address</b>
   * <ul><li>User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address.</li>
   * <li>User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. </li>
   * <li>User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. </li>
   * <br><b>Important notes:</b>
   * <br><p>This endpoint provides support for client that doesn't have PATCH support, i.e. UE4 before v4.23 released.
   * <br>If the client support PATCH method, use [PATCH] /iam/v3/public/namespaces/{namespace}/users/me instead</p><br>
   * <p>action code : 10103 </p>
   */
  putV3UsersMe<T = UserResponseV3>(data: UserUpdateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV3)
  }

  /**
   * <p>Requires valid user access token </p>
   * <br><p>This Endpoint support update user based on given data. <b>Single request can update single field or multi fields.</b></p>
   * <p>Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl}</p>
   * <p>Country use ISO3166-1 alpha-2 two letter, e.g. US.</p>
   * <p>Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.</p>
   * <br><b>Several case of updating email address</b>
   * <ul><li>User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address.</li>
   * <li>User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. </li>
   * <li>User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. </li>
   * <p>action code : 10103 </p>
   */
  patchV3UsersMe<T = UserResponseV3>(data: UserUpdateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV3)
  }

  /**
   * Required valid user authorization
   * <p>The verification code is sent to email address</p>
   * <p>Available contexts for use : </p>
   * <ol>
   * 	<li>
   * 		<strong>UserAccountRegistration</strong>
   * 		<p>a context type used for verifying email address in user account registration. It returns 409 if the email address already verified.
   * 		<strong><em>It is the default context if the Context field is empty</em></strong></p>
   * 	</li>
   * 	<li>
   * 		<strong>UpdateEmailAddress</strong>
   * 		<p>a context type used for verify user before updating email address.(Without email address verified checking)</p>
   * 	</li>
   * 	<li><strong>upgradeHeadlessAccount</strong>
   * 		<p>The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account.
   * 		If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409.</p>
   * 	</li>
   * </ol>
   * <p>action code: 10116</p>
   *
   */
  postV3UsersMeCodeRequest(data: SendVerificationCodeRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/code/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>Will consume code if validateOnly is set false</p>
   * <p>Required valid user authorization</p>
   * <p>Redeems a verification code sent to a user to verify the user's contact address is correct</p>
   * <p>Available ContactType : <b>email</b></p>
   * <p>action code: 10107</p>
   *
   */
  postV3UsersMeCodeVerify(data: UserVerificationRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded</p>
   * Require valid user access token.
   *      	<p>The endpoint upgrades a headless account by linking the headless account with the email address and the password.
   * By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. </p>
   *      	<p>The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call.
   * In order to get a verification code for the endpoint, please check the send verification code endpoint.</p>
   *      	<p>This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.<br/>
   * 	Supported user data fields :
   * 	<ul>
   * 		<li>displayName</li>
   * 		<li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li>
   * 		<li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li>
   * 	</ul>
   *      	<br>action code : 10124</p>
   */
  postV3UsersMeHeadlessCodeVerify<T = UserResponseV3>(data: UpgradeHeadlessAccountWithVerificationCodeRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/headless/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV3)
  }

  /**
   * <p>Require valid user authorization<br>action code : 10124 </p>
   */
  postV3UsersMeHeadlessVerify<T = UserResponseV3>(data: UpgradeHeadlessAccountV3Request): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/headless/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV3)
  }

  /**
   * Required valid user authorization. <br> action code: 10107
   */
  putV3UsersMePassword(data: UserPasswordUpdateV3Request): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/password'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
   *
   */
  postV3UsersMePlatformsJusticeByTargetnamespace<T = CreateJusticeUserResponse>(targetNamespace: string): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/justice/{targetNamespace}'
      .replace('{namespace}', this.namespace)
      .replace('{targetNamespace}', targetNamespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, CreateJusticeUserResponse)
  }

  /**
   * Required valid user authorization.
   * 		<p><br><b>Prerequisite:</b>
   * 		Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables).
   * 			<h2>Supported platforms:</h2>
   * 			<ul>
   * 				<li><strong>steam</strong>: The ticket’s value is the authentication code returned by Steam.</li>
   * 				<li><strong>steamopenid</strong>: Steam's user authentication method using OpenID 2.0. The ticket's value is URL generated by Steam on web authentication</li>
   * 				<li><strong>facebook</strong>: The ticket’s value is the authorization code returned by Facebook OAuth</li>
   * 				<li><strong>google</strong>: The ticket’s value is the authorization code returned by Google OAuth</li>
   * 				<li><strong>oculus</strong>: The ticket’s value is a string composed of Oculus's user ID and the nonce separated by a colon (:).</li>
   * 				<li><strong>twitch</strong>: The ticket’s value is the authorization code returned by Twitch OAuth.</li>
   * 				<li><strong>android</strong>: The ticket's value is the Android’s device ID</li>
   * 				<li><strong>ios</strong>: The ticket's value is the iOS’s device ID.</li>
   * 				<li><strong>apple</strong>: The ticket’s value is the authorization code returned by Apple OAuth.</li>
   * 				<li><strong>device</strong>: Every device that doesn't run Android and iOS is categorized as a device platform. The ticket's value is the device’s ID.</li>
   * 				<li><strong>discord</strong>: The ticket’s value is the authorization code returned by Discord OAuth.</li>
   * 				<li><strong>ps4web</strong>: The ticket’s value is the authorization code returned by PSN OAuth.</li>
   * 				<li><strong>xblweb</strong>: The ticket’s value is the authorization code returned by XBox Live OAuth.</li>
   * 				<li><strong>awscognito</strong>: The ticket’s value is the aws cognito access token (JWT).</li>
   * 				<li><strong>epicgames</strong>: The ticket’s value is an access-token obtained from Epicgames EOS Account Service.</li>
   * 				<li><strong>nintendo</strong>: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.</li>
   * 			</ul>
   * 		<br>action code : 10144
   */
  postV3UsersMePlatformsByPlatformid(
    platformId: string,
    data: { ticket: string | null; redirectUri?: string | null }
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Required valid user authorization.
   * 			<h2>Supported platforms:</h2>
   * 			<ul>
   * 				<li><strong>steam</strong></li>
   * 				<li><strong>steamopenid</strong></li>
   * 				<li><strong>facebook</strong></li>
   * 				<li><strong>google</strong></li>
   * 				<li><strong>oculus</strong></li>
   * 				<li><strong>twitch</strong></li>
   * 				<li><strong>android</strong></li>
   * 				<li><strong>ios</strong></li>
   * 				<li><strong>apple</strong></li>
   * 				<li><strong>device</strong></li>
   * 				<li><strong>discord</strong></li>
   * 				<li><strong>awscognito</strong></li>
   * 				<li><strong>epicgames</strong></li>
   * 				<li><strong>nintendo</strong></li>
   * 			</ul>
   * 			<p>Unlink user's account from a specific platform. 'justice' platform might have multiple accounts from different namespaces linked.
   * 			<br><i>platformNamespace</i> need to be specified when the platform ID is 'justice'.
   * 			<br>
   * 			<br>Unlink user's account from justice platform will enable password token grant and password update.
   * 			<br>
   * 			<br>If you want to unlink user's account in a game namespace, you have to specify <i>platformNamespace</i> to that game namespace.
   * 			<br>
   * 			<br>action code : 10121 </p>
   */
  deleteV3UsersMePlatformsByPlatformid(platformId: string, data: UnlinkUserPlatformRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Required valid user authorization.
   * 			<p>Unlink user's account from for all third platforms. </p>
   */
  deleteV3UsersMePlatformsByPlatformidAll(platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Force linking user account with platform.
   * 			<br> If this platform account was already linked to another user account, this endpoint will perform force linking and remove platform from that conflict user, not only from the current request namespace but also include all the enrolled namespaces.</br>
   * 			<br> If current user have linked to this platform with another platform account (include once linked but it is unlinked now), it will not allow user to perform linking.</br>
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
   * 			</ul>
   *
   */
  postV3UsersMePlatformsByPlatformidForce(platformId: string, data: { ticket: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/force'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * This endpoint is used to generate third party login page which will redirected to establish endpoint.
   */
  fetchV3UsersMePlatformsByPlatformidWebLink<T = WebLinkingResponse>(
    platformId: string,
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/web/link'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, WebLinkingResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used by third party to redirect the code for the purpose of linking the account third party to IAM account.
   */
  fetchV3UsersMePlatformsByPlatformidWebLinkEstablish(
    platformId: string,
    queryParams: { state: string | null }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/web/link/establish'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>action code: 10105</p>
   */
  postV3UsersReset(data: ResetPasswordRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/reset'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint retrieve user attributes. action code: 10129</p>
   */
  fetchV3UsersByUserid<T = PublicUserResponseV3>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicUserResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user authorization.
   * 		<p>Notes:</p>
   * 		<ul>
   * 			<li>This endpoint retrieve the first page of the data if after and before parameters is empty</li>
   * 			<li><strong>The pagination is not working yet</strong></li>
   * 		</ul>
   *
   */
  fetchV3UsersByUseridBans<T = GetUserBanV3Response>(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; limit?: number; before?: string | null; after?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserBanV3Response)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint retrieves platform accounts linked to user.
   * 					<br>It will query all linked platform accounts and result will be distinct & grouped, same platform we will pick oldest linked one.
   * 					<br>Required valid user authorization.</p>
   */
  fetchV3UsersByUseridDistinctPlatforms<T = DistinctPlatformResponseV3>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/distinctPlatforms'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DistinctPlatformResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint retrieves user info and linked platform accounts.
   * 					Required permissions 'NAMESPACE:{namespace}:INFORMATION:USER:{userId} [READ]'</p>
   */
  fetchV3UsersByUseridInformation<T = UserInformationV3>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/information'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserInformationV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user authorization.<p>Notes for this endpoint: </p> <ul><li>This endpoint retrieve the first page of the data if `after` and `before` parameters is empty.</li><li>The maximum value of the limit is 100 and the minimum value of the limit is 1.</li><li>This endpoint retrieve the next page of the data if we provide `after` parameters with valid Unix timestamp.</li><li>This endpoint retrieve the previous page of the data if we provide `before` parameter with valid data Unix timestamp.</li><ul>
   */
  fetchV3UsersByUseridLoginsHistories<T = LoginHistoriesResponse>(
    userId: string,
    queryParams?: { before?: number; after?: number; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/logins/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, LoginHistoriesResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint retrieves platform accounts linked to user. Required valid user authorization.
   * 					<br>action code: 10128 </p>
   */
  fetchV3UsersByUseridPlatforms<T = UserLinkedPlatformsResponseV3>(
    userId: string,
    queryParams?: { limit?: number; after?: string | null; before?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserLinkedPlatformsResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint gets list justice platform account by providing publisher namespace and publisher userID</br>
   * <p>Requires valid user access token </p></br>
   */
  fetchV3UsersByUseridPlatformsJustice<T = GetUserMappingV3Array>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/justice'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserMappingV3Array)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * It is going to be <strong>DEPRECATED</strong>.
   * Update Platform Account relation to current User Account.
   * Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be
   * transferred. If the data is tight to game user ID, the user will have the game progression data.
   *
   */
  postV3UsersByUseridPlatformsLink(userId: string, data: LinkPlatformAccountRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Force update other account's Platform Account relation to current User Account. <br>
   * This endpoint can transfer progression from 3rd platform binding account's to current account.
   * This endpoint need the same requestID which also used in <a href="#operations-Users-PublicGetAsyncStatus">Get link status</a>.
   *
   */
  postV3UsersByUseridPlatformsLinkWithProgression(
    userId: string,
    data: LinkPlatformAccountWithProgressionRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/linkWithProgression'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>Required permissions 'NAMESPACE:{namespace}:USER:{userId}:PUBLISHER [READ].</p>
   * 	<p><strong>Restriction:</strong>
   * 		Path Parameter <strong>namespace</strong> can be provided only with game namespace</p>
   */
  fetchV3UsersByUseridPublisher<T = GetPublisherUserV3Response>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/publisher'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetPublisherUserV3Response)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used to validate the user password. Required valid user authorization and valid user ID.
   * 		<p>Notes:</p>
   * 		<ul>
   * 			<li>This endpoint validate the user password by specifying the userId and password</li>
   * 		</ul>
   *
   */
  postV3UsersByUseridValidate(userId: string, data: { password: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/{userId}/validate'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>Require valid user authorization<br>Get my user data<br>action code : 10147 </p>
   */
  fetchIamV3PublicUsersMe<T = UserResponseV3>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/users/me'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Note:<br>
   * 1. My account should be full account
   * 2. My account not linked to request headless account's third platform.
   */
  fetchIamV3PublicUsersMeHeadlessLinkConflict<T = GetLinkHeadlessAccountConflictResponse>(queryParams: {
    oneTimeLinkCode: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/users/me/headless/link/conflict'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLinkHeadlessAccountConflictResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Note:<br>
   * 1. My account should be full account
   * 2. My account not linked to headless account's third platform.
   */
  postIamV3PublicUsersMeHeadlessLinkWithProgression(data: LinkHeadlessAccountRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/users/me/headless/linkWithProgression'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Required valid user authorization
   * <p>The verification link is sent to email address</p>
   * <p>It will not send request if user email is already verified</p>
   *
   */
  postIamV3PublicUsersMeVerifyLinkRequest(data: SendVerificationLinkRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/users/me/verify_link/request'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  fetchIamV3PublicUsersVerifyLinkVerify(queryParams?: { code?: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/users/verify_link/verify'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
