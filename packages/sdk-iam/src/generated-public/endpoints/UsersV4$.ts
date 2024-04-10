/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../../generated-definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../../generated-definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../../generated-definitions/CreateUserResponseV4.js'
import { EmailUpdateRequestV4 } from '../../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { PublicInviteUserRequestV4 } from '../../generated-definitions/PublicInviteUserRequestV4.js'
import { PublicUserUpdateRequestV3 } from '../../generated-definitions/PublicUserUpdateRequestV3.js'
import { UpgradeHeadlessAccountRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserPublicInfoResponseV4 } from '../../generated-definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserResponseV4 } from '../../generated-definitions/UserResponseV4.js'

export class UsersV4$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace - additionalData(optional): for utm parameter data The invited users will also be assigned with &#34;User&#34; role by default.
   */
  createUserInvite(data: PublicInviteUserRequestV4): Promise<IResponse<InviteUserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/users/invite'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  createUser(data: CreateUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  patchUserMe(data: PublicUserUpdateRequestV3): Promise<IResponse<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create a test user and not send verification code email **Required attributes:** - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  createTestUser(data: CreateTestUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/test_users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint only returns user&#39;s public information. action code: 10129
   */
  getUser_ByUserId(userId: string): Promise<IResponseWithSync<UserPublicInfoResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserPublicInfoResponseV4, 'UserPublicInfoResponseV4')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * The endpoint to update my email address. It requires a verification code from &lt;code&gt;/users/me/code/request&lt;/code&gt; with **UpdateEmailAddress** context.
   */
  updateUserMeEmail(data: EmailUpdateRequestV4): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/email'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * (Only for test)This endpoint is used to remove trusted device. This endpoint Requires device_token in cookie
   */
  deleteUserMeMfaDevice(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/device'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to get user enabled factors.
   */
  getUsersMeMfaFactor(): Promise<IResponseWithSync<EnabledFactorsResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EnabledFactorsResponseV4, 'EnabledFactorsResponseV4')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used to make 2FA factor default.
   */
  postUserMeMfaFactor(data: { factor: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  getUsersMeMfaBackupCode(): Promise<IResponseWithSync<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  createUserMeMfaBackupCode(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to send email code.
   */
  createUserMeMfaEmailCode(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/code'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. action code : 10124
   */
  createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<IResponse<UserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserResponseV4, 'UserResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to get existing 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  getUsersMeMfaBackupCodes(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used to generate 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  createUserMeMfaBackupCode_ByNS(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to enable 2FA email.
   */
  postUserMeMfaEmailEnable(data: { code: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to disable 2FA email.
   */
  createUserMeMfaEmailDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
   */
  createUserInvite_ByInvitationId(invitationId: string, data: CreateUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendVerificationCodeV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<IResponse<UserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserResponseV4, 'UserResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
   */
  createUserMeMfaAuthenticatorKey(): Promise<IResponse<AuthenticatorKeyResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AuthenticatorKeyResponseV4, 'AuthenticatorKeyResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This endpoint is used to enable 2FA backup codes.
   */
  createUserMeMfaBackupCodeEnable(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to disable 2FA backup codes.
   */
  deleteUserMeMfaBackupCodeDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  createUserMeMfaBackupCodeEnable_ByNS(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This endpoint is used to download backup codes.
   */
  getUsersMeMfaBackupCodeDownload(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/download'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint is used to enable 2FA authenticator.
   */
  postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint is used to disable 2FA authenticator.
   */
  deleteUserMeMfaAuthenticatorDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
