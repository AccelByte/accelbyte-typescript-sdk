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
import { AuthenticatorKeyResponseV4 } from './definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from './definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from './definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from './definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from './definitions/CreateUserResponseV4.js'
import { EmailUpdateRequestV4 } from './definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from './definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from './definitions/InviteUserResponseV3.js'
import { PublicInviteUserRequestV4 } from './definitions/PublicInviteUserRequestV4.js'
import { UpgradeHeadlessAccountRequestV4 } from './definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserCreateFromInvitationRequestV4 } from './definitions/UserCreateFromInvitationRequestV4.js'
import { UserPublicInfoResponseV4 } from './definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from './definitions/UserResponseV3.js'
import { UserResponseV4 } from './definitions/UserResponseV4.js'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3.js'
import { UsersV4$ } from './endpoints/UsersV4$.js'

export function UsersV4Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace The invited users will also be assigned with &#34;User&#34; role by default.
   */
  async function createUserInvite(data: PublicInviteUserRequestV4): Promise<InviteUserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a new user with unique email address and username. &lt;p&gt; &lt;b&gt;Required attributes:&lt;/b&gt; - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. &lt;br/&gt; &lt;b&gt;Not required attributes:&lt;/b&gt; - displayName: Please refer to the rule from /v3/public/inputValidations API. &lt;/p&gt; &lt;p&gt;This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.&lt;/p&gt;
   */
  async function createUser(data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user access token &lt;/p&gt; &lt;br&gt;&lt;p&gt;This Endpoint support update user based on given data. &lt;b&gt;Single request can update single field or multi fields.&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Supported field {country, displayName, languageTag, dateOfBirth}&lt;/p&gt; &lt;p&gt;Country use ISO3166-1 alpha-2 two letter, e.g. US.&lt;/p&gt; &lt;p&gt;Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.&lt;/p&gt; &lt;br&gt;&lt;b&gt;Response body logic when user updating email address:&lt;/b&gt; &lt;ul&gt;&lt;li&gt;User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address.&lt;/li&gt; &lt;li&gt;User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. &lt;/li&gt; &lt;li&gt;User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;action code : 10103 &lt;/p&gt;
   */
  async function patchUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a test user and not send verification code email &lt;p&gt; &lt;b&gt;Required attributes:&lt;/b&gt; - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. &lt;br/&gt; &lt;b&gt;Not required attributes:&lt;/b&gt; - displayName: Please refer to the rule from /v3/public/inputValidations API. &lt;/p&gt; &lt;p&gt;This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.&lt;/p&gt;
   */
  async function createTestUser(data: CreateTestUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTestUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint requires a valid user token and only returns user&#39;s public information.&lt;br/&gt; action code: 10129&lt;/p&gt;
   */
  async function getUser_ByUserId(userId: string): Promise<UserPublicInfoResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;The endpoint to update my email address. &lt;/p&gt; &lt;p&gt;It requires a verification code from &lt;b&gt;/users/me/code/request&lt;/b&gt; with &lt;b&gt;UpdateEmailAddress&lt;/b&gt; context.&lt;/p&gt;
   */
  async function updateUserMeEmail(data: EmailUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeEmail(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;(Only for test)This endpoint is used to remove trusted device.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;&lt;br/&gt; &lt;p&gt;This endpoint Requires device_token in cookie&lt;/p&gt;
   */
  async function deleteUserMeMfaDevice(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaDevice()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to get user enabled factors.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function getUsersMeMfaFactor(): Promise<EnabledFactorsResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaFactor()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to make 2FA factor default.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function postUserMeMfaFactor(data: { factor: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaFactor(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function getUsersMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function createUserMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to send email code.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function createUserMeMfaEmailCode(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaEmailCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Require valid user authorization Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. &lt;br&gt;action code : 10124 &lt;/p&gt;
   */
  async function createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA email.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function postUserMeMfaEmailEnable(data: { code: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaEmailEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to disable 2FA email.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
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
   * Require valid user access token. The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. &lt;br&gt; The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the &lt;a href=&#34;#operations-Users-PublicSendVerificationCodeV3&#34;&gt;send verification code endpoint&lt;/a&gt;. &lt;br&gt; This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: &lt;ul&gt; &lt;li&gt;displayName&lt;/li&gt; &lt;li&gt;dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29&lt;/li&gt; &lt;li&gt;country : format ISO3166-1 alpha-2 two letter, e.g. US&lt;/li&gt; &lt;/ul&gt; action code : 10124
   */
  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function createUserMeMfaAuthenticatorKey(): Promise<AuthenticatorKeyResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaAuthenticatorKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA backup codes.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function createUserMeMfaBackupCodeEnable(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaBackupCodeEnable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA backup codes.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function deleteUserMeMfaBackupCodeDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaBackupCodeDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to download backup codes.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function getUsersMeMfaBackupCodeDownload(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaBackupCodeDownload()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to enable 2FA authenticator.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
   */
  async function postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaAuthenticatorEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to disable 2FA authenticator.&lt;/p&gt; &lt;p&gt;This endpoint Requires valid user access token&lt;/p&gt;
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
    getUser_ByUserId,
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
