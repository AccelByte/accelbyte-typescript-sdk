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
import { AuthenticatorKeyResponseV4 } from './definitions/AuthenticatorKeyResponseV4'
import { BackupCodesResponseV4 } from './definitions/BackupCodesResponseV4'
import { CreateTestUserRequestV4 } from './definitions/CreateTestUserRequestV4'
import { CreateUserRequestV4 } from './definitions/CreateUserRequestV4'
import { CreateUserResponseV4 } from './definitions/CreateUserResponseV4'
import { EmailUpdateRequestV4 } from './definitions/EmailUpdateRequestV4'
import { EnabledFactorsResponseV4 } from './definitions/EnabledFactorsResponseV4'
import { UpgradeHeadlessAccountRequestV4 } from './definitions/UpgradeHeadlessAccountRequestV4'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4'
import { UserCreateFromInvitationRequestV4 } from './definitions/UserCreateFromInvitationRequestV4'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserResponseV4 } from './definitions/UserResponseV4'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'

export class UsersV4$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Create a test user and not send verification code email
   * 		<p>
   * 		<b>Required attributes:</b>
   * 		- verified: this new user is verified or not
   * 		- authType: possible value is EMAILPASSWD
   * 		- emailAddress: Please refer to the rule from /v3/public/inputValidations API.
   * 		- username: Please refer to the rule from /v3/public/inputValidations API.
   * 		- password: Please refer to the rule from /v3/public/inputValidations API.
   * 		- country: ISO3166-1 alpha-2 two letter, e.g. US.
   * 		- dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date.
   * 		<br/>
   * 		<b>Not required attributes:</b>
   * 		- displayName: Please refer to the rule from /v3/public/inputValidations API.
   * 		</p>
   * 		<p>This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>
   *
   */
  postV4NsTestUsers<T = CreateUserResponseV4>(data: CreateTestUserRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/test_users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateUserResponseV4)
  }

  /**
   * Create a new user with unique email address and username.
   * 		<p>
   * 		<b>Required attributes:</b>
   * 		- authType: possible value is EMAILPASSWD
   * 		- emailAddress: Please refer to the rule from /v3/public/inputValidations API.
   * 		- username: Please refer to the rule from /v3/public/inputValidations API.
   * 		- password: Please refer to the rule from /v3/public/inputValidations API.
   * 		- country: ISO3166-1 alpha-2 two letter, e.g. US.
   * 		- dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date.
   * 		<br/>
   * 		<b>Not required attributes:</b>
   * 		- displayName: Please refer to the rule from /v3/public/inputValidations API.
   * 		</p>
   * 		<p>This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>
   *
   */
  postV4NsUsers<T = CreateUserResponseV4>(data: CreateUserRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateUserResponseV4)
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
   * Required attributes:
   * - authType: possible value is EMAILPASSWD (see above)
   * - country: ISO3166-1 alpha-2 two letter, e.g. US.
   * - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date.
   * - displayName: Please refer to the rule from /v3/public/inputValidations API.
   * - password: Please refer to the rule from /v3/public/inputValidations API.
   * - username: Please refer to the rule from /v3/public/inputValidations API.
   *
   */
  postV4NsUsersInviteByInvitationid<T = CreateUserResponseV4>(
    invitationId: string,
    data: UserCreateFromInvitationRequestV4
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateUserResponseV4)
  }

  /**
   * <p>Requires valid user access token </p>
   * <br><p>This Endpoint support update user based on given data. <b>Single request can update single field or multi fields.</b></p>
   * <p>Supported field {country, displayName, languageTag, dateOfBirth}</p>
   * <p>Country use ISO3166-1 alpha-2 two letter, e.g. US.</p>
   * <p>Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.</p>
   * <br><b>Several case of updating email address</b>
   * <p>action code : 10103 </p>
   */
  patchV4NsUsersMe<T = UserResponseV3>(data: UserUpdateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV3)
  }

  /**
   * <p>The endpoint to update my email address. </p>
   * <p>It requires a verification code from <pre>/users/me/code/request</pre> with <b>UpdateEmailAddress</b> context.</p>
   *
   */
  putV4NsUsersMeEmail(data: EmailUpdateRequestV4): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/email'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Require valid user access token.
   *         	The endpoint upgrades a headless account by linking the headless account with the email address, username, and password.
   * 			By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM.
   *         	<br>
   * 			The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call.
   * 			In order to get a verification code for the endpoint, please check the <a href="#operations-Users-PublicSendVerificationCodeV3">send verification code endpoint</a>.
   *         	<br>
   * 			This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.
   * 			Supported user data fields:
   * 				<ul>
   * 					<li>displayName</li>
   * 					<li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li>
   * 					<li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li>
   * 				</ul>
   *         	action code : 10124
   */
  postV4NsUsersMeHeadlessCodeVerify<T = UserResponseV4>(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV4)
  }

  /**
   * Require valid user authorization
   * 			Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address.
   * 			<br>action code : 10124 </p>
   */
  postV4NsUsersMeHeadlessVerify<T = UserResponseV4>(data: UpgradeHeadlessAccountRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV4)
  }

  /**
   * <p>This endpoint is used to disable 2FA authenticator.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  deleteV4NsUsersMeMfaAuthenticatorDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to enable 2FA authenticator.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to generate a secret key for 3rd-party authenticator app.
   * A QR code URI is also returned so that frontend can generate QR code image.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaAuthenticatorKey<T = AuthenticatorKeyResponseV4>(): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, AuthenticatorKeyResponseV4)
  }

  /**
   * <p>This endpoint is used to get 8-digits backup codes.
   * Each code is a one-time code and will be deleted once used.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  fetchV4NsUsersMeMfaBackupCode<T = BackupCodesResponseV4>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BackupCodesResponseV4)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint is used to generate 8-digits backup codes.
   * Each code is a one-time code and will be deleted once used.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaBackupCode<T = BackupCodesResponseV4>(): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, BackupCodesResponseV4)
  }

  /**
   * <p>This endpoint is used to enable 2FA backup codes.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  deleteV4NsUsersMeMfaBackupCodeDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to download backup codes.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  fetchV4NsUsersMeMfaBackupCodeDownload(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/download'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint is used to enable 2FA backup codes.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaBackupCodeEnable<T = BackupCodesResponseV4>(): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, BackupCodesResponseV4)
  }

  /**
   * <p>(Only for test)This endpoint is used to remove trusted device.</p>
   * <p>This endpoint Requires valid user access token</p><br/>
   * <p>This endpoint Requires device_token in cookie</p>
   *
   */
  deleteV4NsUsersMeMfaDevice(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/device'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to send email code.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaEmailCode(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/code'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to disable 2FA email.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaEmailDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to enable 2FA email.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaEmailEnable(data: { code: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is used to get user enabled factors.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  fetchV4NsUsersMeMfaFactor<T = EnabledFactorsResponseV4>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EnabledFactorsResponseV4)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint is used to make 2FA factor default.</p>
   * <p>This endpoint Requires valid user access token</p>
   *
   */
  postV4NsUsersMeMfaFactor(data: { factor: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }
}
