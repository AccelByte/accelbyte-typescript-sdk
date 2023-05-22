/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AuthenticatorKeyResponseV4 } from '../definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../definitions/CreateUserResponseV4.js'
import { EmailUpdateRequestV4 } from '../definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../definitions/InviteUserResponseV3.js'
import { PublicInviteUserRequestV4 } from '../definitions/PublicInviteUserRequestV4.js'
import { UpgradeHeadlessAccountRequestV4 } from '../definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserCreateFromInvitationRequestV4 } from '../definitions/UserCreateFromInvitationRequestV4.js'
import { UserResponseV3 } from '../definitions/UserResponseV3.js'
import { UserResponseV4 } from '../definitions/UserResponseV4.js'
import { UserUpdateRequestV3 } from '../definitions/UserUpdateRequestV3.js'

export class UsersV4$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace The invited users will also be assigned with &#34;User&#34; role by default.
   */
  createUserInvite(data: PublicInviteUserRequestV4): Promise<IResponse<InviteUserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/users/invite'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
  }

  /**
   * Create a new user with unique email address and username. &lt;p&gt; &lt;b&gt;Required attributes:&lt;/b&gt; - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. &lt;br/&gt; &lt;b&gt;Not required attributes:&lt;/b&gt; - displayName: Please refer to the rule from /v3/public/inputValidations API. &lt;/p&gt; &lt;p&gt;This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.&lt;/p&gt;
   */
  createUser(data: CreateUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }

  /**
   * &lt;p&gt;Requires valid user access token &lt;/p&gt; &lt;br&gt;&lt;p&gt;This Endpoint support update user based on given data. &lt;b&gt;Single request can update single field or multi fields.&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Supported field {country, displayName, languageTag, dateOfBirth}&lt;/p&gt; &lt;p&gt;Country use ISO3166-1 alpha-2 two letter, e.g. US.&lt;/p&gt; &lt;p&gt;Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.&lt;/p&gt; &lt;br&gt;&lt;b&gt;Several case of updating email address&lt;/b&gt; &lt;p&gt;action code : 10103 &lt;/p&gt;
   */
  patchUserMe(data: UserUpdateRequestV3): Promise<IResponse<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
  }

  /**
   * Create a test user and not send verification code email &lt;p&gt; &lt;b&gt;Required attributes:&lt;/b&gt; - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. &lt;br/&gt; &lt;b&gt;Not required attributes:&lt;/b&gt; - displayName: Please refer to the rule from /v3/public/inputValidations API. &lt;/p&gt; &lt;p&gt;This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.&lt;/p&gt;
   */
  createTestUser(data: CreateTestUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/test_users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }

  /**
   * &lt;p&gt;The endpoint to update my email address. &lt;/p&gt; &lt;p&gt;It requires a verification code from &lt;pre&gt;/users/me/code/request&lt;/pre&gt; with &lt;b&gt;UpdateEmailAddress&lt;/b&gt; context.&lt;/p&gt;
   */
  updateUserMeEmail(data: EmailUpdateRequestV4): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/email'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;(Only for test)This endpoint is used to remove trusted device.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;&lt;br/&gt; &lt;p&gt;This endpoint Requires device_token in cookie&lt;/p&gt;
   */
  deleteUserMeMfaDevice(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/device'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint is used to get user enabled factors.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  getUsersMeMfaFactor(): Promise<IResponseWithSync<EnabledFactorsResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EnabledFactorsResponseV4, 'EnabledFactorsResponseV4')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint is used to make 2FA factor default.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  postUserMeMfaFactor(data: { factor: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  getUsersMeMfaBackupCode(): Promise<IResponseWithSync<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  createUserMeMfaBackupCode(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }

  /**
   * &lt;p&gt;This endpoint is used to send email code.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  createUserMeMfaEmailCode(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/code'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Require valid user authorization Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. &lt;br&gt;action code : 10124 &lt;/p&gt;
   */
  createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<IResponse<UserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV4, 'UserResponseV4')
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA email.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  postUserMeMfaEmailEnable(data: { code: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint is used to disable 2FA email.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  createUserMeMfaEmailDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
   */
  createUserInvite_ByInvitationId(invitationId: string, data: UserCreateFromInvitationRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }

  /**
   * Require valid user access token. The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. &lt;br&gt; The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the &lt;a href=&#34;#operations-Users-PublicSendVerificationCodeV3&#34;&gt;send verification code endpoint&lt;/a&gt;. &lt;br&gt; This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: &lt;ul&gt; &lt;li&gt;displayName&lt;/li&gt; &lt;li&gt;dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29&lt;/li&gt; &lt;li&gt;country : format ISO3166-1 alpha-2 two letter, e.g. US&lt;/li&gt; &lt;/ul&gt; action code : 10124
   */
  createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<IResponse<UserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserResponseV4, 'UserResponseV4')
  }

  /**
   * &lt;p&gt;This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  createUserMeMfaAuthenticatorKey(): Promise<IResponse<AuthenticatorKeyResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, AuthenticatorKeyResponseV4, 'AuthenticatorKeyResponseV4')
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA backup codes.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  createUserMeMfaBackupCodeEnable(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA backup codes.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  deleteUserMeMfaBackupCodeDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint is used to download backup codes.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  getUsersMeMfaBackupCodeDownload(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/download'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA authenticator.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint is used to disable 2FA authenticator.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  deleteUserMeMfaAuthenticatorDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
