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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
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

export function UsersV4Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function createUserInvite_v4(data: PublicInviteUserRequestV4): Promise<AxiosResponse<InviteUserResponseV3>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserInvite_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUser_v4(data: CreateUserRequestV4): Promise<AxiosResponse<CreateUserResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUserMe_v4(data: PublicUserUpdateRequestV3): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUserMe_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTestUser_v4(data: CreateTestUserRequestV4): Promise<AxiosResponse<CreateUserResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTestUser_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId_v4(userId: string): Promise<AxiosResponse<UserPublicInfoResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_v4(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMeEmail_v4(data: EmailUpdateRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMeEmail_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUserMeMfaDevice_v4(): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaDevice_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeMfaFactor_v4(): Promise<AxiosResponse<EnabledFactorsResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaFactor_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMeMfaFactor_v4(data: { factor: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaFactor_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeMfaStatus_v4(): Promise<AxiosResponse<UserMfaStatusResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaStatus_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaStatus_v4(): Promise<AxiosResponse<UserMfaStatusResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaStatus_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeMfaBackupCode_v4(): Promise<AxiosResponse<BackupCodesResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCode_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaBackupCode_v4(): Promise<AxiosResponse<BackupCodesResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCode_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMeMfaEmailCode_v4(data: { action?: string | null; languageTag?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaEmailCode_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeHeadlesVerify_v4(data: UpgradeHeadlessAccountRequestV4): Promise<AxiosResponse<UserResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesVerify_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeMfaBackupCodes_v4(queryParams?: { languageTag?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCodes_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaBackupCode_ByNS_v4(queryParams?: { languageTag?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCode_ByNS_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMeMfaEmailEnable_v4(data: { code: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaEmailEnable_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaEmailDisable_v4(data: DisableMfaRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaEmailDisable_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserInvite_ByInvitationId_v4(
    invitationId: string,
    data: CreateUserRequestV4
  ): Promise<AxiosResponse<CreateUserResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserInvite_ByInvitationId_v4(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUser_ByPlatformId_v4(
    platformId: string,
    data: PlatformUserIdRequestV4,
    queryParams?: { rawPUID?: boolean | null }
  ): Promise<AxiosResponse<UserPlatforms>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser_ByPlatformId_v4(platformId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeHeadlesCodeVerify_v4(
    data: UpgradeHeadlessAccountWithVerificationCodeRequestV4
  ): Promise<AxiosResponse<UserResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesCodeVerify_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMeMfaChallengeVerify_v4(data: {
    code?: string | null
    factor?: string | null
  }): Promise<AxiosResponse<UserMfaTokenResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaChallengeVerify_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaAuthenticatorKey_v4(): Promise<AxiosResponse<AuthenticatorKeyResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaAuthenticatorKey_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaBackupCodeEnable_v4(): Promise<AxiosResponse<BackupCodesResponseV4>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCodeEnable_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUserMeMfaBackupCodeDisable_v4(data: DisableMfaRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaBackupCodeDisable_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeMfaBackupCodeEnable_ByNS_v4(queryParams?: { languageTag?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCodeEnable_ByNS_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeMfaBackupCodeDownload_v4(): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCodeDownload_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMeMfaAuthenticatorEnable_v4(data: { code: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaAuthenticatorEnable_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUserMeMfaAuthenticatorDisable_v4(data: DisableMfaRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace - additionalData(optional): for utm parameter data The invited users will also be assigned with &#34;User&#34; role by default.
     */
    createUserInvite_v4,
    /**
     * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. - code: required when mandatoryEmailVerificationEnabled config is true, please refer to the config from /iam/v3/public/namespaces/{namespace}/config/{configKey} [GET] API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
     */
    createUser_v4,
    /**
     * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
     */
    patchUserMe_v4,
    /**
     * Create a test user and not send verification code email **Required attributes:** - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
     */
    createTestUser_v4,
    /**
     * This endpoint only returns user&#39;s public information. action code: 10129
     */
    getUser_ByUserId_v4,
    /**
     * The endpoint to update my email address. It requires a verification code from &lt;code&gt;/users/me/code/request&lt;/code&gt; with **UpdateEmailAddress** context.
     */
    updateUserMeEmail_v4,
    /**
     * (Only for test)This endpoint is used to remove trusted device. This endpoint Requires device_token in cookie
     */
    deleteUserMeMfaDevice_v4,
    /**
     * This endpoint is used to get user enabled factors.
     */
    getUsersMeMfaFactor_v4,
    /**
     * This endpoint is used to make 2FA factor default.
     */
    postUserMeMfaFactor_v4,
    /**
     * This endpoint will get user&#39;s&#39; MFA status.
     */
    getUsersMeMfaStatus_v4,
    /**
     * @deprecated
     * This endpoint will get user&#39;s&#39; MFA status. --------- **Substitute endpoint**: /iam/v4/public/namespaces/{namespace}/users/me/mfa/status [GET]
     */
    createUserMeMfaStatus_v4,
    /**
     * @deprecated
     * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
     */
    getUsersMeMfaBackupCode_v4,
    /**
     * @deprecated
     * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
     */
    createUserMeMfaBackupCode_v4,
    /**
     * This endpoint is used to send email code. ---------------- Supported values of action: * ChangePassword * DisableMFAEmail
     */
    postUserMeMfaEmailCode_v4,
    /**
     * Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. action code : 10124
     */
    createUserMeHeadlesVerify_v4,
    /**
     * This endpoint is used to get existing 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
     */
    getUsersMeMfaBackupCodes_v4,
    /**
     * This endpoint is used to generate 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
     */
    createUserMeMfaBackupCode_ByNS_v4,
    /**
     * This endpoint is used to enable 2FA email.
     */
    postUserMeMfaEmailEnable_v4,
    /**
     * This endpoint is used to disable 2FA email. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
     */
    createUserMeMfaEmailDisable_v4,
    /**
     * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
     */
    createUserInvite_ByInvitationId_v4,
    /**
     * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID, the max count is 100. Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 &lt;br&gt; If the request body exceed the max limitation, the max count will be in response body&#39;s messageVariables: &#34;messageVariables&#34;: {&#34;maxCount&#34;: &#34;100&#34;}
     */
    createUser_ByPlatformId_v4,
    /**
     *  The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendVerificationCodeV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
     */
    createUserMeHeadlesCodeVerify_v4,
    /**
     * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token for the action.
     */
    postUserMeMfaChallengeVerify_v4,
    /**
     * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
     */
    createUserMeMfaAuthenticatorKey_v4,
    /**
     * @deprecated
     * This endpoint is used to enable 2FA backup codes.
     */
    createUserMeMfaBackupCodeEnable_v4,
    /**
     * This endpoint is used to disable 2FA backup codes. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
     */
    deleteUserMeMfaBackupCodeDisable_v4,
    /**
     * This endpoint is used to enable 2FA backup codes.
     */
    createUserMeMfaBackupCodeEnable_ByNS_v4,
    /**
     * @deprecated
     * This endpoint is used to download backup codes.
     */
    getUsersMeMfaBackupCodeDownload_v4,
    /**
     * This endpoint is used to enable 2FA authenticator. ---------- Prerequisites: - Generate the secret key/QR code uri by **_/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key_** - Consume the secret key/QR code by an authenticator app - Get the code from the authenticator app
     */
    postUserMeMfaAuthenticatorEnable_v4,
    /**
     * This endpoint is used to disable 2FA authenticator. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
     */
    deleteUserMeMfaAuthenticatorDisable_v4
  }
}
