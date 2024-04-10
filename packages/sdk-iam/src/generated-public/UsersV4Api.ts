/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AuthenticatorKeyResponseV4 } from '../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../generated-definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../generated-definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../generated-definitions/CreateUserResponseV4.js'
import { EmailUpdateRequestV4 } from '../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../generated-definitions/InviteUserResponseV3.js'
import { PublicInviteUserRequestV4 } from '../generated-definitions/PublicInviteUserRequestV4.js'
import { PublicUserUpdateRequestV3 } from '../generated-definitions/PublicUserUpdateRequestV3.js'
import { UpgradeHeadlessAccountRequestV4 } from '../generated-definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserPublicInfoResponseV4 } from '../generated-definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from '../generated-definitions/UserResponseV3.js'
import { UserResponseV4 } from '../generated-definitions/UserResponseV4.js'
import { UsersV4$ } from './endpoints/UsersV4$.js'

export function UsersV4Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace - additionalData(optional): for utm parameter data The invited users will also be assigned with &#34;User&#34; role by default.
   */
  async function createUserInvite(data: PublicInviteUserRequestV4): Promise<InviteUserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserInvite(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createUser(data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  async function patchUserMe(data: PublicUserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a test user and not send verification code email **Required attributes:** - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createTestUser(data: CreateTestUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createTestUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint only returns user&#39;s public information. action code: 10129
   */
  async function getUser_ByUserId(userId: string): Promise<UserPublicInfoResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The endpoint to update my email address. It requires a verification code from &lt;code&gt;/users/me/code/request&lt;/code&gt; with **UpdateEmailAddress** context.
   */
  async function updateUserMeEmail(data: EmailUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateUserMeEmail(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * (Only for test)This endpoint is used to remove trusted device. This endpoint Requires device_token in cookie
   */
  async function deleteUserMeMfaDevice(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUserMeMfaDevice()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get user enabled factors.
   */
  async function getUsersMeMfaFactor(): Promise<EnabledFactorsResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaFactor()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to make 2FA factor default.
   */
  async function postUserMeMfaFactor(data: { factor: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.postUserMeMfaFactor(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  async function getUsersMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  async function createUserMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to send email code.
   */
  async function createUserMeMfaEmailCode(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaEmailCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. action code : 10124
   */
  async function createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeHeadlesVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get existing 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  async function getUsersMeMfaBackupCodes(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaBackupCodes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
   */
  async function createUserMeMfaBackupCode_ByNS(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaBackupCode_ByNS()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA email.
   */
  async function postUserMeMfaEmailEnable(data: { code: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.postUserMeMfaEmailEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA email.
   */
  async function createUserMeMfaEmailDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaEmailDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
   */
  async function createUserInvite_ByInvitationId(invitationId: string, data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendVerificationCodeV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
   */
  async function createUserMeMfaAuthenticatorKey(): Promise<AuthenticatorKeyResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaAuthenticatorKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to enable 2FA backup codes.
   */
  async function createUserMeMfaBackupCodeEnable(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaBackupCodeEnable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA backup codes.
   */
  async function deleteUserMeMfaBackupCodeDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUserMeMfaBackupCodeDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  async function createUserMeMfaBackupCodeEnable_ByNS(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaBackupCodeEnable_ByNS()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint is used to download backup codes.
   */
  async function getUsersMeMfaBackupCodeDownload(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaBackupCodeDownload()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA authenticator.
   */
  async function postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.postUserMeMfaAuthenticatorEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA authenticator.
   */
  async function deleteUserMeMfaAuthenticatorDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable()
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
    getUsersMeMfaBackupCode,
    createUserMeMfaBackupCode,
    createUserMeMfaEmailCode,
    createUserMeHeadlesVerify,
    getUsersMeMfaBackupCodes,
    createUserMeMfaBackupCode_ByNS,
    postUserMeMfaEmailEnable,
    createUserMeMfaEmailDisable,
    createUserInvite_ByInvitationId,
    createUserMeHeadlesCodeVerify,
    createUserMeMfaAuthenticatorKey,
    createUserMeMfaBackupCodeEnable,
    deleteUserMeMfaBackupCodeDisable,
    createUserMeMfaBackupCodeEnable_ByNS,
    getUsersMeMfaBackupCodeDownload,
    postUserMeMfaAuthenticatorEnable,
    deleteUserMeMfaAuthenticatorDisable
  }
}
