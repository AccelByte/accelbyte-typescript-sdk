/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../../generated-definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../../generated-definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { PlatformUserIdRequestV4 } from '../../generated-definitions/PlatformUserIdRequestV4.js'
import { PublicInviteUserRequestV4 } from '../../generated-definitions/PublicInviteUserRequestV4.js'
import { PublicUserUpdateRequestV3 } from '../../generated-definitions/PublicUserUpdateRequestV3.js'
import { UpgradeHeadlessAccountRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserMfaStatusResponseV4 } from '../../generated-definitions/UserMfaStatusResponseV4.js'
import { UserMfaTokenResponseV4 } from '../../generated-definitions/UserMfaTokenResponseV4.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserPublicInfoResponseV4 } from '../../generated-definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserResponseV4 } from '../../generated-definitions/UserResponseV4.js'

export class UsersV4$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace - additionalData(optional): for utm parameter data The invited users will also be assigned with &#34;User&#34; role by default.
   */
  createUserInvite(data: PublicInviteUserRequestV4): Promise<IResponse<InviteUserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/users/invite'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
  }

  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  createUser(data: CreateUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  patchUserMe(data: PublicUserUpdateRequestV3): Promise<IResponse<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }

  /**
   * Create a test user and not send verification code email **Required attributes:** - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  createTestUser(data: CreateTestUserRequestV4): Promise<IResponse<CreateUserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/test_users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }

  /**
   * This endpoint only returns user&#39;s public information. action code: 10129
   */
  getUser_ByUserId(userId: string): Promise<IResponse<UserPublicInfoResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserPublicInfoResponseV4,
      'UserPublicInfoResponseV4'
    )
  }

  /**
   * The endpoint to update my email address. It requires a verification code from &lt;code&gt;/users/me/code/request&lt;/code&gt; with **UpdateEmailAddress** context.
   */
  updateUserMeEmail(data: EmailUpdateRequestV4): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/email'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * (Only for test)This endpoint is used to remove trusted device. This endpoint Requires device_token in cookie
   */
  deleteUserMeMfaDevice(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/device'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint is used to get user enabled factors.
   */
  getUsersMeMfaFactor(): Promise<IResponse<EnabledFactorsResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EnabledFactorsResponseV4,
      'EnabledFactorsResponseV4'
    )
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint will get user&#39;s&#39; MFA status.
   */
  createUserMeMfaStatus(): Promise<IResponse<UserMfaStatusResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserMfaStatusResponseV4,
      'UserMfaStatusResponseV4'
    )
  }

  /**
   * @deprecated
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  getUsersMeMfaBackupCode_DEPRECATED(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }

  /**
   * @deprecated
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  createUserMeMfaBackupCode_DEPRECATED(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }

  /**
   * This endpoint is used to send email code. ---------------- Supported values of action: * ChangePassword * DisableMFAEmail
   */
  postUserMeMfaEmailCode(data: { action?: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/code'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. action code : 10124
   */
  createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<IResponse<UserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV4, 'UserResponseV4')
  }

  /**
   * This endpoint is used to get existing 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  getUsersMeMfaBackupCodes(queryParams?: { languageTag?: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint is used to generate 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  createUserMeMfaBackupCode_ByNS(queryParams?: { languageTag?: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint is used to disable 2FA email. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  createUserMeMfaEmailDisable(data: DisableMfaRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }

  /**
   * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID, the max count is 100. Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  createUser_ByPlatformId(
    platformId: string,
    data: PlatformUserIdRequestV4,
    queryParams?: { rawPUID?: boolean | null }
  ): Promise<IResponse<UserPlatforms>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/platforms/{platformId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserPlatforms, 'UserPlatforms')
  }

  /**
   *  The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendVerificationCodeV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<IResponse<UserResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/headless/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV4, 'UserResponseV4')
  }

  /**
   * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token for the action.
   */
  postUserMeMfaChallengeVerify(data: { code?: string | null; factor?: string | null }): Promise<IResponse<UserMfaTokenResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/challenge/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserMfaTokenResponseV4,
      'UserMfaTokenResponseV4'
    )
  }

  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
   */
  createUserMeMfaAuthenticatorKey(): Promise<IResponse<AuthenticatorKeyResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AuthenticatorKeyResponseV4,
      'AuthenticatorKeyResponseV4'
    )
  }

  /**
   * @deprecated
   * This endpoint is used to enable 2FA backup codes.
   */
  createUserMeMfaBackupCodeEnable_DEPRECATED(): Promise<IResponse<BackupCodesResponseV4>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }

  /**
   * This endpoint is used to disable 2FA backup codes. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  deleteUserMeMfaBackupCodeDisable(data: DisableMfaRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  createUserMeMfaBackupCodeEnable_ByNS(queryParams?: { languageTag?: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * This endpoint is used to download backup codes.
   */
  getUsersMeMfaBackupCodeDownload_DEPRECATED(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/download'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint is used to disable 2FA authenticator. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  deleteUserMeMfaAuthenticatorDisable(data: DisableMfaRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/disable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
