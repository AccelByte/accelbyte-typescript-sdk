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
import { AuthenticatorKeyResponseV4 } from './definitions/AuthenticatorKeyResponseV4'
import { BackupCodesResponseV4 } from './definitions/BackupCodesResponseV4'
import { CreateTestUserRequestV4 } from './definitions/CreateTestUserRequestV4'
import { CreateUserRequestV4 } from './definitions/CreateUserRequestV4'
import { CreateUserResponseV4 } from './definitions/CreateUserResponseV4'
import { EmailUpdateRequestV4 } from './definitions/EmailUpdateRequestV4'
import { EnabledFactorsResponseV4 } from './definitions/EnabledFactorsResponseV4'
import { InviteUserResponseV3 } from './definitions/InviteUserResponseV3'
import { PublicInviteUserRequestV4 } from './definitions/PublicInviteUserRequestV4'
import { UpgradeHeadlessAccountRequestV4 } from './definitions/UpgradeHeadlessAccountRequestV4'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4'
import { UserCreateFromInvitationRequestV4 } from './definitions/UserCreateFromInvitationRequestV4'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserResponseV4 } from './definitions/UserResponseV4'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'
import { UsersV4$ } from './endpoints/UsersV4$'

export function UsersV4Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace The invited users will also be assigned with "User" role by default.
   */
  async function createUserInvite(data: PublicInviteUserRequestV4): Promise<InviteUserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a new user with unique email address and username. <p> <b>Required attributes:</b> - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. <br/> <b>Not required attributes:</b> - displayName: Please refer to the rule from /v3/public/inputValidations API. </p> <p>This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>
   */
  async function createUser(data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user access token </p> <br><p>This Endpoint support update user based on given data. <b>Single request can update single field or multi fields.</b></p> <p>Supported field {country, displayName, languageTag, dateOfBirth}</p> <p>Country use ISO3166-1 alpha-2 two letter, e.g. US.</p> <p>Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.</p> <br><b>Several case of updating email address</b> <p>action code : 10103 </p>
   */
  async function patchUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a test user and not send verification code email <p> <b>Required attributes:</b> - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. <br/> <b>Not required attributes:</b> - displayName: Please refer to the rule from /v3/public/inputValidations API. </p> <p>This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>
   */
  async function createTestUser(data: CreateTestUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTestUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>The endpoint to update my email address. </p> <p>It requires a verification code from <pre>/users/me/code/request</pre> with <b>UpdateEmailAddress</b> context.</p>
   */
  async function updateUserMeEmail(data: EmailUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeEmail(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>(Only for test)This endpoint is used to remove trusted device.</p> <p>This endpoint Requires valid user access token</p><br/> <p>This endpoint Requires device_token in cookie</p>
   */
  async function deleteUserMeMfaDevice(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaDevice()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to get user enabled factors.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function getUsersMeMfaFactor(): Promise<EnabledFactorsResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaFactor()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to make 2FA factor default.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function postUserMeMfaFactor(data: { factor: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaFactor(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function getUsersMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function createUserMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to send email code.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function createUserMeMfaEmailCode(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaEmailCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Require valid user authorization Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. <br>action code : 10124 </p>
   */
  async function createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to enable 2FA email.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function postUserMeMfaEmailEnable(data: { code: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaEmailEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to disable 2FA email.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function createUserMeMfaEmailDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaEmailDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
   */
  async function createUserInvite_ByInvitationId(
    invitationId: string,
    data: UserCreateFromInvitationRequestV4
  ): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Require valid user access token. The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. <br> The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the <a href="#operations-Users-PublicSendVerificationCodeV3">send verification code endpoint</a>. <br> This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: <ul> <li>displayName</li> <li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li> <li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li> </ul> action code : 10124
   */
  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function createUserMeMfaAuthenticatorKey(): Promise<AuthenticatorKeyResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaAuthenticatorKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to enable 2FA backup codes.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function createUserMeMfaBackupCodeEnable(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaBackupCodeEnable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to enable 2FA backup codes.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function deleteUserMeMfaBackupCodeDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaBackupCodeDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to download backup codes.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function getUsersMeMfaBackupCodeDownload(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaBackupCodeDownload()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to enable 2FA authenticator.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaAuthenticatorEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint is used to disable 2FA authenticator.</p> <p>This endpoint Requires valid user access token</p>
   */
  async function deleteUserMeMfaAuthenticatorDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserInvite,
    createUser,
    patchUserMe,
    createTestUser,
    updateUserMeEmail,
    deleteUserMeMfaDevice,
    getUsersMeMfaFactor,
    postUserMeMfaFactor,
    getUsersMeMfaBackupCode,
    createUserMeMfaBackupCode,
    createUserMeMfaEmailCode,
    createUserMeHeadlesVerify,
    postUserMeMfaEmailEnable,
    createUserMeMfaEmailDisable,
    createUserInvite_ByInvitationId,
    createUserMeHeadlesCodeVerify,
    createUserMeMfaAuthenticatorKey,
    createUserMeMfaBackupCodeEnable,
    deleteUserMeMfaBackupCodeDisable,
    getUsersMeMfaBackupCodeDownload,
    postUserMeMfaAuthenticatorEnable,
    deleteUserMeMfaAuthenticatorDisable
  }
}
