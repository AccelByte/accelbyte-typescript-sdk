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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AuthenticatorKeyResponseV4 } from '../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../generated-definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../generated-definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../generated-definitions/InviteUserResponseV3.js'
import { PlatformUserIdRequestV4 } from '../generated-definitions/PlatformUserIdRequestV4.js'
import { PublicInviteUserRequestV4 } from '../generated-definitions/PublicInviteUserRequestV4.js'
import { PublicUserUpdateRequestV3 } from '../generated-definitions/PublicUserUpdateRequestV3.js'
import { UpgradeHeadlessAccountRequestV4 } from '../generated-definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserMfaStatusResponseV4 } from '../generated-definitions/UserMfaStatusResponseV4.js'
import { UserMfaTokenResponseV4 } from '../generated-definitions/UserMfaTokenResponseV4.js'
import { UserPlatforms } from '../generated-definitions/UserPlatforms.js'
import { UserPublicInfoResponseV4 } from '../generated-definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from '../generated-definitions/UserResponseV3.js'
import { UserResponseV4 } from '../generated-definitions/UserResponseV4.js'
import { UsersV4$ } from './endpoints/UsersV4$.js'

export function UsersV4Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace - additionalData(optional): for utm parameter data The invited users will also be assigned with &#34;User&#34; role by default.
   */
  async function createUserInvite(data: PublicInviteUserRequestV4): Promise<InviteUserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserInvite(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createUser(data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  async function patchUserMe(data: PublicUserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a test user and not send verification code email **Required attributes:** - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createTestUser(data: CreateTestUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createTestUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint only returns user&#39;s public information. action code: 10129
   */
  async function getUser_ByUserId(userId: string): Promise<UserPublicInfoResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The endpoint to update my email address. It requires a verification code from &lt;code&gt;/users/me/code/request&lt;/code&gt; with **UpdateEmailAddress** context.
   */
  async function updateUserMeEmail(data: EmailUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateUserMeEmail(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * (Only for test)This endpoint is used to remove trusted device. This endpoint Requires device_token in cookie
   */
  async function deleteUserMeMfaDevice(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaDevice()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get user enabled factors.
   */
  async function getUsersMeMfaFactor(): Promise<EnabledFactorsResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaFactor()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to make 2FA factor default.
   */
  async function postUserMeMfaFactor(data: { factor: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaFactor(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will get user&#39;s&#39; MFA status.
   */
  async function createUserMeMfaStatus(): Promise<UserMfaStatusResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaStatus()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  async function getUsersMeMfaBackupCode_DEPRECATED(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCode_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  async function createUserMeMfaBackupCode_DEPRECATED(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCode_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to send email code. ---------------- Supported values of action: * ChangePassword * DisableMFAEmail
   */
  async function postUserMeMfaEmailCode(data: { action?: string | null; languageTag?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaEmailCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. action code : 10124
   */
  async function createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get existing 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  async function getUsersMeMfaBackupCodes(queryParams?: { languageTag?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCodes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  async function createUserMeMfaBackupCode_ByNS(queryParams?: { languageTag?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCode_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA email.
   */
  async function postUserMeMfaEmailEnable(data: { code: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaEmailEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA email. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  async function createUserMeMfaEmailDisable(data: DisableMfaRequest): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaEmailDisable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
   */
  async function createUserInvite_ByInvitationId(invitationId: string, data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID, the max count is 100. Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 &lt;br&gt; If the request body exceed the max limitation, the max count will be in response body&#39;s messageVariables: &#34;messageVariables&#34;: {&#34;maxCount&#34;: &#34;100&#34;}
   */
  async function createUser_ByPlatformId(
    platformId: string,
    data: PlatformUserIdRequestV4,
    queryParams?: { rawPUID?: boolean | null }
  ): Promise<UserPlatforms> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUser_ByPlatformId(platformId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendVerificationCodeV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token for the action.
   */
  async function postUserMeMfaChallengeVerify(data: { code?: string | null; factor?: string | null }): Promise<UserMfaTokenResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaChallengeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
   */
  async function createUserMeMfaAuthenticatorKey(): Promise<AuthenticatorKeyResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaAuthenticatorKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to enable 2FA backup codes.
   */
  async function createUserMeMfaBackupCodeEnable_DEPRECATED(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCodeEnable_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA backup codes. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  async function deleteUserMeMfaBackupCodeDisable(data: DisableMfaRequest): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaBackupCodeDisable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  async function createUserMeMfaBackupCodeEnable_ByNS(queryParams?: { languageTag?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCodeEnable_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to download backup codes.
   */
  async function getUsersMeMfaBackupCodeDownload_DEPRECATED(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCodeDownload_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA authenticator.
   */
  async function postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaAuthenticatorEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA authenticator. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  async function deleteUserMeMfaAuthenticatorDisable(data: DisableMfaRequest): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserInvite,
    createUser,
    patchUserMe,
    createTestUser,
    getUser_ByUserId,
    updateUserMeEmail,
    deleteUserMeMfaDevice,
    getUsersMeMfaFactor,
    postUserMeMfaFactor,
    createUserMeMfaStatus,
    getUsersMeMfaBackupCode_DEPRECATED,
    createUserMeMfaBackupCode_DEPRECATED,
    postUserMeMfaEmailCode,
    createUserMeHeadlesVerify,
    getUsersMeMfaBackupCodes,
    createUserMeMfaBackupCode_ByNS,
    postUserMeMfaEmailEnable,
    createUserMeMfaEmailDisable,
    createUserInvite_ByInvitationId,
    createUser_ByPlatformId,
    createUserMeHeadlesCodeVerify,
    postUserMeMfaChallengeVerify,
    createUserMeMfaAuthenticatorKey,
    createUserMeMfaBackupCodeEnable_DEPRECATED,
    deleteUserMeMfaBackupCodeDisable,
    createUserMeMfaBackupCodeEnable_ByNS,
    getUsersMeMfaBackupCodeDownload_DEPRECATED,
    postUserMeMfaAuthenticatorEnable,
    deleteUserMeMfaAuthenticatorDisable
  }
}
