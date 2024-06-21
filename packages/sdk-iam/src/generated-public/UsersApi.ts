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
import { BanCreateRequest } from '../generated-definitions/BanCreateRequest.js'
import { Country } from '../generated-definitions/Country.js'
import { CountryV3Response } from '../generated-definitions/CountryV3Response.js'
import { CreateJusticeUserResponse } from '../generated-definitions/CreateJusticeUserResponse.js'
import { DisableUserRequest } from '../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../generated-definitions/DistinctPlatformResponseV3.js'
import { ForgotPasswordRequestV3 } from '../generated-definitions/ForgotPasswordRequestV3.js'
import { GetAdminUsersResponse } from '../generated-definitions/GetAdminUsersResponse.js'
import { GetLinkHeadlessAccountConflictResponse } from '../generated-definitions/GetLinkHeadlessAccountConflictResponse.js'
import { GetPublisherUserResponse } from '../generated-definitions/GetPublisherUserResponse.js'
import { GetUserBanV3Response } from '../generated-definitions/GetUserBanV3Response.js'
import { GetUserJusticePlatformAccountResponse } from '../generated-definitions/GetUserJusticePlatformAccountResponse.js'
import { GetUserMapping } from '../generated-definitions/GetUserMapping.js'
import { GetUserMappingArray } from '../generated-definitions/GetUserMappingArray.js'
import { GetUserMappingV3Array } from '../generated-definitions/GetUserMappingV3Array.js'
import { LinkHeadlessAccountRequest } from '../generated-definitions/LinkHeadlessAccountRequest.js'
import { LinkPlatformAccountRequest } from '../generated-definitions/LinkPlatformAccountRequest.js'
import { LinkPlatformAccountWithProgressionRequest } from '../generated-definitions/LinkPlatformAccountWithProgressionRequest.js'
import { LinkRequest } from '../generated-definitions/LinkRequest.js'
import { ListBulkUserResponse } from '../generated-definitions/ListBulkUserResponse.js'
import { LoginHistoriesResponse } from '../generated-definitions/LoginHistoriesResponse.js'
import { Permissions } from '../generated-definitions/Permissions.js'
import { PlatformUserIdRequest } from '../generated-definitions/PlatformUserIdRequest.js'
import { PublicUserInformationResponseV3 } from '../generated-definitions/PublicUserInformationResponseV3.js'
import { PublicUserResponse } from '../generated-definitions/PublicUserResponse.js'
import { PublicUserResponseV3 } from '../generated-definitions/PublicUserResponseV3.js'
import { PublicUserUpdateRequestV3 } from '../generated-definitions/PublicUserUpdateRequestV3.js'
import { PublicUsersResponse } from '../generated-definitions/PublicUsersResponse.js'
import { ResetPasswordRequest } from '../generated-definitions/ResetPasswordRequest.js'
import { ResetPasswordRequestV3 } from '../generated-definitions/ResetPasswordRequestV3.js'
import { SearchUsersResponse } from '../generated-definitions/SearchUsersResponse.js'
import { SendRegisterVerificationCodeRequest } from '../generated-definitions/SendRegisterVerificationCodeRequest.js'
import { SendVerificationCodeRequest } from '../generated-definitions/SendVerificationCodeRequest.js'
import { SendVerificationCodeRequestV3 } from '../generated-definitions/SendVerificationCodeRequestV3.js'
import { SendVerificationLinkRequest } from '../generated-definitions/SendVerificationLinkRequest.js'
import { UnlinkUserPlatformRequest } from '../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdatePermissionScheduleRequest } from '../generated-definitions/UpdatePermissionScheduleRequest.js'
import { UpgradeHeadlessAccountRequest } from '../generated-definitions/UpgradeHeadlessAccountRequest.js'
import { UpgradeHeadlessAccountV3Request } from '../generated-definitions/UpgradeHeadlessAccountV3Request.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequest } from '../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponse } from '../generated-definitions/UserBanResponse.js'
import { UserBanResponseArray } from '../generated-definitions/UserBanResponseArray.js'
import { UserCreateRequest } from '../generated-definitions/UserCreateRequest.js'
import { UserCreateRequestV3 } from '../generated-definitions/UserCreateRequestV3.js'
import { UserCreateResponse } from '../generated-definitions/UserCreateResponse.js'
import { UserCreateResponseV3 } from '../generated-definitions/UserCreateResponseV3.js'
import { UserIDsRequest } from '../generated-definitions/UserIDsRequest.js'
import { UserInformation } from '../generated-definitions/UserInformation.js'
import { UserInformationV3 } from '../generated-definitions/UserInformationV3.js'
import { UserInputValidationRequest } from '../generated-definitions/UserInputValidationRequest.js'
import { UserInputValidationResponse } from '../generated-definitions/UserInputValidationResponse.js'
import { UserInvitationV3 } from '../generated-definitions/UserInvitationV3.js'
import { UserLinkedPlatformArray } from '../generated-definitions/UserLinkedPlatformArray.js'
import { UserLinkedPlatformsResponseV3 } from '../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateRequest } from '../generated-definitions/UserPasswordUpdateRequest.js'
import { UserPasswordUpdateV3Request } from '../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatforms } from '../generated-definitions/UserPlatforms.js'
import { UserResponse } from '../generated-definitions/UserResponse.js'
import { UserResponseArray } from '../generated-definitions/UserResponseArray.js'
import { UserResponseV3 } from '../generated-definitions/UserResponseV3.js'
import { UserUpdateRequest } from '../generated-definitions/UserUpdateRequest.js'
import { UserVerificationRequest } from '../generated-definitions/UserVerificationRequest.js'
import { UserVerificationRequestV3 } from '../generated-definitions/UserVerificationRequestV3.js'
import { UsersPlatformInfosRequestV3 } from '../generated-definitions/UsersPlatformInfosRequestV3.js'
import { UsersPlatformInfosResponse } from '../generated-definitions/UsersPlatformInfosResponse.js'
import { VerifyRegistrationCode } from '../generated-definitions/VerifyRegistrationCode.js'
import { WebLinkingResponse } from '../generated-definitions/WebLinkingResponse.js'
import { Users$ } from './endpoints/Users$.js'

export function UsersApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get my user data __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * account id * display name * avatar * __Xbox(live, xblweb)__ * xuid or pxuid * display name * __Steam(steam, steamopenid)__ * steam id * display name * avatar * __EpicGames(epicgames)__ * epic account id * display name action code : 10147
   */
  async function getUsersMe(queryParams?: { includeAllPlatforms?: boolean | null }): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [POST]_** - **Substitute endpoint: _/iam/v4/public/namespaces/{namespace}/users [POST]_** - **Note:** 1. v3 &amp; v4 introduce optional verification code 2. format difference（Pascal case =&gt; Camel case) Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. 2. **PHONEPASSWD**: an authentication type used for new user registration through phone number. Country use ISO3166-1 alpha-2 two letter, e.g. US.
   */
  async function createUser_DEPRECATED(data: UserCreateRequest): Promise<UserCreateResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUser_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/admin/namespaces/{namespace}/roles/{roleId}/users [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status
   */
  async function getUsersAdmin_DEPRECATED(queryParams?: {
    after?: number
    before?: number
    limit?: number
    roleId?: string | null
  }): Promise<GetAdminUsersResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersAdmin_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersVerifyLinkVerify(queryParams?: { code?: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersVerifyLinkVerify(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_** Search all users that match the query on these fields: all login IDs (email address, phone number, and platform user id), userID, display name, and on the specified namespace. If the query is not defined, then it searches all users on the specified namespace.
   */
  async function getUsersSearch_DEPRECATED(queryParams?: { query?: string | null }): Promise<SearchUsersResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersSearch_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/information [DELETE]_**
   */
  async function deleteUser_ByUserId_DEPRECATED(userId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/users/{userId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_** - **Note:** format difference in response: Pascal case =&gt; Camel case
   */
  async function getUser_ByUserId_DEPRECATED(userId: string): Promise<UserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint([PUT]): _/iam/v3/public/namespaces/{namespace}/users/me [PUT]_** - **Substitute endpoint([PATCH]): _/iam/v3/public/namespaces/{namespace}/users/me [PATCH]_** - **Substitute endpoint([PATCH]): _/iam/v4/public/namespaces/{namespace}/users/me [PATCH]_** - **Note:** 1. Prefer [PATCH] if client support PATCH method 2. Difference in V3/v4 request body, format difference: Pascal case =&gt; Camel case This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
   */
  async function updateUser_ByUserId_DEPRECATED(userId: string, data: UserUpdateRequest): Promise<UserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateUser_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [GET]_**
   */
  async function getUsersByLoginId_DEPRECATED(queryParams?: { loginId?: string | null }): Promise<PublicUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersByLoginId_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [POST]_** - **Substitute endpoint: _/iam/v4/public/namespaces/{namespace}/users [POST]_** - **Note:** 1. v3 &amp; v4 introduce optional verification code 2. format difference（Pascal case =&gt; Camel case) Available Authentication Types: 1. *EMAILPASSWD*: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US.
   */
  async function createUser_ByNS_DEPRECATED(data: UserCreateRequest): Promise<UserCreateResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUser_ByNS_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint search all users on the specified namespace that match the query on these fields: display name, unique display name, username or by 3rd party display name. The query length should between 3-20, otherwise will not query the database. The default limit value is 20. ## Searching by 3rd party platform **Note: searching by 3rd party platform display name will use exact query, not fuzzy query.** Step when searching by 3rd party platform display name: 1. set __by__ to __thirdPartyPlatform__ 2. set __platformId__ to the _supported platform id_ 3. set __platformBy__ to __platformDisplayName__ ### Supported platform id: * Steam group(steamnetwork) * steam * steamopenid * PSN group(psn) * ps4web * ps4 * ps5 * XBOX group(xbox) * live * xblweb * Oculus group(oculusgroup) * oculus * oculusweb * facebook * google group * google * googleplaygames * twitch * discord * android * ios * apple * device * epicgames * nintendo * awscognito * netflix * snapchat * _oidc platform id_ Note: you can use either platform ID or platform group as __platformId__ query parameter.
   */
  async function getUsers(queryParams?: {
    by?: string | null
    limit?: number
    offset?: number
    platformBy?: string | null
    platformId?: string | null
    query?: string | null
  }): Promise<PublicUserInformationResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createUser_ByNS_v3(data: UserCreateRequestV3): Promise<UserCreateResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUser_ByNS_v3(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The verification link is sent to email address It will not send request if user email is already verified
   */
  async function createUserMeVerifyLinkRequest(data: SendVerificationLinkRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeVerifyLinkRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
   */
  async function createBan_ByUserId_DEPRECATED(userId: string, data: BanCreateRequest): Promise<UserBanResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createBan_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  async function patchUserMe(data: PublicUserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. **Important notes:** This endpoint provides support for client that doesn&#39;t have PATCH support, i.e. UE4 before v4.23 released. If the client support PATCH method, use [PATCH] /iam/v3/public/namespaces/{namespace}/users/me instead action code : 10103
   */
  async function updateUserMe(data: PublicUserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Note: 1. My account should be full account 2. My account not linked to request headless account&#39;s third platform. After client resolving the conflict, it will call endpoint &lt;code&gt;/iam/v3/public/users/me/headless/linkWithProgression [POST]&lt;/code&gt;
   */
  async function getUsersMeHeadlessLinkConflict(queryParams: {
    oneTimeLinkCode: string | null
  }): Promise<GetLinkHeadlessAccountConflictResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeHeadlessLinkConflict(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
   */
  async function getBans_ByUserId_DEPRECATED(userId: string): Promise<UserBanResponseArray> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/reset [POST]_**
   */
  async function createUserResetPassword_DEPRECATED(data: ResetPasswordRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserResetPassword_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
   */
  async function createRole_ByUserId_DEPRECATED(userId: string, data: string[]): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createRole_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/forgot [POST]_** **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address.
   */
  async function createUserForgotPassword_DEPRECATED(data: SendVerificationCodeRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserForgotPassword_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(query by email list): _/iam/v3/public/namespaces/{namespace}/users/bulk/basic [POST]_** - **Substitute endpoint(query by user id list): _/iam/v3/admin/namespaces/{namespace}/users/search/bulk [POST]_**
   */
  async function getUsersListByLoginIds_DEPRECATED(queryParams?: { loginIds?: string | null }): Promise<PublicUsersResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersListByLoginIds_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
   */
  async function updateEnable_ByUserId_DEPRECATED(userId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10105
   */
  async function createUserReset(data: ResetPasswordRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserReset(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
   */
  async function updateDisable_ByUserId_DEPRECATED(userId: string, data: DisableUserRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId} [GET]_** - **Note:** 1. difference in V3 response, format difference: Pascal case =&gt; Camel case
   */
  async function getUsersByPlatformUserId_DEPRECATED(queryParams: {
    platformID: string | null
    platformUserID: string | null
  }): Promise<PublicUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersByPlatformUserId_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address. action code : 10104
   */
  async function createUserForgot(data: ForgotPasswordRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserForgot(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   *  ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/password [PUT]_**
   */
  async function updatePassword_ByUserId_DEPRECATED(userId: string, data: UserPasswordUpdateRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updatePassword_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** Access token from original namespace is needed as authorization header. Access token from designated account needed as form parameter to verify the ownership of that account. When platformID (device platfom ID) is specified, platform login method for that specific platform ID is removed. This means to protect account from second hand device usage.
   */
  async function postCrosslink_ByUserId_DEPRECATED(
    userId: string,
    data: { linkingToken: string | null; platformId?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postCrosslink_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms [GET]_** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms [GET]_** ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user.
   */
  async function getPlatforms_ByUserId_DEPRECATED(userId: string): Promise<UserLinkedPlatformArray> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatforms_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/publisher [GET]_** **Restriction:** Path Parameter *namespace* can be provided only with game namespace
   */
  async function getPublisher_ByUserId_DEPRECATED(userId: string): Promise<GetPublisherUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPublisher_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/users/{userId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_** - **Note:** format difference in response: Pascal case =&gt; Camel case
   */
  async function getUser_ByUserId_ByNS_DEPRECATED(userId: string): Promise<UserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_ByNS_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint([PUT]): _/iam/v3/public/namespaces/{namespace}/users/me [PUT]_** - **Substitute endpoint([PATCH]): _/iam/v3/public/namespaces/{namespace}/users/me [PATCH]_** - **Substitute endpoint([PATCH]): _/iam/v4/public/namespaces/{namespace}/users/me [PATCH]_** - **Note:** 1. Prefer [PATCH] if client support PATCH method 2. Difference in V3/v4 request body, format difference: Pascal case =&gt; Camel case This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag}
   */
  async function patchUser_ByUserId_DEPRECATED(userId: string, data: UserUpdateRequest): Promise<UserResponseArray> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchUser_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This endpoint retrieve user attributes. action code: 10129 **Substitute endpoint:** /v4/public/namespaces/{namespace}/users/{userId} [READ]
   */
  async function getUser_ByUserId_ByNS_v3_DEPRECATED(userId: string): Promise<PublicUserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_ByNS_v3_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Note: 1. My account should be full account 2. My account not linked to headless account&#39;s third platform.
   */
  async function createUserMeHeadlesLinkWithProgression(data: LinkHeadlessAccountRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesLinkWithProgression(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Note: 1. the max count of user ids in the request is 100 2. if platform id is not empty, the result will only contain the corresponding platform infos 3. if platform id is empty, the result will contain all the supported platform infos __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * account id * display name * avatar * __Xbox(live, xblweb)__ * xuid or pxuid * display name * __Steam(steam, steamopenid)__ * steam id * display name * avatar * __EpicGames(epicgames)__ * epic account id * display name
   */
  async function createUserPlatform(data: UsersPlatformInfosRequestV3): Promise<UsersPlatformInfosResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserPlatform(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/information [DELETE]_**
   */
  async function deleteInformation_ByUserId_DEPRECATED(userId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteInformation_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/information [GET]_**
   */
  async function getInformation_ByUserId_DEPRECATED(userId: string): Promise<UserInformation> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInformation_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions [POST]_** This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  async function createPermission_ByUserId_DEPRECATED(userId: string, data: Permissions): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPermission_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace - **Result will include displayName(if it exists)**
   */
  async function createUserBulkBasic(data: UserIDsRequest): Promise<ListBulkUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserBulkBasic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/code/verify [POST]_** Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : *email* or *phone*
   */
  async function createVerification_ByUserId_DEPRECATED(userId: string, data: UserVerificationRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createVerification_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify the registration code
   */
  async function createUserCodeVerify(data: VerifyRegistrationCode): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10107
   */
  async function updateUserMePassword(data: UserPasswordUpdateV3Request): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateUserMePassword(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check user&#39;s account availability. Available field : - displayName - uniqueDisplayName - username If request include access token with user ID data, that user ID will be excluded from availability check. For example, in case user update his emailAddress, he can use his own emailAddress to update his account. Response Code : - Account Available : 404 (not found) - Account Not Available : 204 (no content)
   */
  async function getUsersAvailability(queryParams: { field: string | null; query: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersAvailability(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will validate the request&#39;s email address. If it already been used, will response 409. If it is available, we will send a verification code to this email address. This code can be verified by this [endpoint](#operations-Users-PublicVerifyRegistrationCode).
   */
  async function createUserCodeRequest(data: SendRegisterVerificationCodeRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId} [DELETE]_**
   */
  async function deleteRole_ByUserId_ByRoleId_DEPRECATED(userId: string, roleId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByUserId_ByRoleId_DEPRECATED(userId, roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId} [POST]_**
   */
  async function createRole_ByUserId_ByRoleId_DEPRECATED(userId: string, roleId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createRole_ByUserId_ByRoleId_DEPRECATED(userId, roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/bans [GET]_**
   */
  async function getBans_ByUserId_ByNS_DEPRECATED(
    userId: string,
    queryParams?: { activeOnly?: boolean | null }
  ): Promise<UserBanResponseArray> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_ByNS_DEPRECATED(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/reset [POST]_**
   */
  async function createUserResetPassword_ByNS_DEPRECATED(data: ResetPasswordRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserResetPassword_ByNS_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Notes: - This endpoint retrieve the first page of the data if after and before parameters is empty - **The pagination is not working yet**
   */
  async function getBans_ByUserId_ByNS_v3(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  ): Promise<GetUserBanV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_ByNS_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/forgot [POST]_** **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address.
   */
  async function createUserForgotPassword_ByNS_DEPRECATED(data: SendVerificationCodeRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserForgotPassword_ByNS_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Will consume code if validateOnly is set false Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** action code: 10107
   */
  async function createUserMeCodeVerify(data: UserVerificationRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/logins/histories [GET]_** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/logins/histories [GET]_** Notes for this endpoint: - This endpoint retrieve the first page of the data if &#39;after&#39; and &#39;before&#39; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &#39;after&#39; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &#39;before&#39; parameter with valid data Unix timestamp.
   */
  async function getLoginsHistories_ByUserId_DEPRECATED(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<LoginHistoriesResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLoginsHistories_ByUserId_DEPRECATED(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/code/request [POST]_** The verification code is sent to either the phone number or email address. It depends on the LoginID&#39;s value. Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the loginId field&#39;s value is already used by others by returning HTTP Status Code 409.
   */
  async function createVerificationcode_ByUserId_DEPRECATED(userId: string, data: SendVerificationCodeRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createVerificationcode_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The verification code is sent to email address Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
   */
  async function createUserMeCodeRequest(data: SendVerificationCodeRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Validate user&#39;s input. -------- **note:** - this endpoint will check the input validation and profanity filter service(if this is enabled) - the namespace should be publisher namespace
   */
  async function createUserInputValidation(data: UserInputValidationRequest): Promise<UserInputValidationResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserInputValidation(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/password [PUT]_**
   */
  async function updatePassword_ByUserId_ByNS_DEPRECATED(userId: string, data: UserPasswordUpdateRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updatePassword_ByUserId_ByNS_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to validate the user password. Require valid user ID. Notes: - This endpoint validate the user password by specifying the userId and password
   */
  async function postValidate_ByUserId(userId: string, data: { password: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postValidate_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId} [PATCH]_**
   */
  async function updateEnable_ByUserId_ByBanId_DEPRECATED(userId: string, banId: string): Promise<UserBanResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId_ByBanId_DEPRECATED(userId, banId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint retrieves platform accounts linked to user. action code: 10128
   */
  async function getPlatforms_ByUserId_ByNS(
    userId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number; platformId?: string | null }
  ): Promise<UserLinkedPlatformsResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatforms_ByUserId_ByNS(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Restriction:** Path Parameter **namespace** can be provided only with game namespace
   */
  async function getPublisher_ByUserId_ByNS(userId: string): Promise<GetPublisherUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPublisher_ByUserId_ByNS(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code : 10124 if set NeedVerificationCode = true, IAM will send verification code into email user can use that verification code to verify user through /iam/v3/public/namespaces/{namespace}/users/me/code/verify
   */
  async function createUserMeHeadlesVerify(
    data: UpgradeHeadlessAccountV3Request,
    queryParams?: { needVerificationCode?: boolean | null }
  ): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesVerify(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId} [PATCH]_** **Notes for using IAM in publisher - game studio scenarios** The endpoint allows: - The admin user in publisher namespace disables user’s ban in publisher namespace. - The admin user in game namespace disables user’s ban in game namespace. - The admin user in publisher namespace disables user’s ban in publisher namespace. Other scenarios are not supported and will return 403: Forbidden.
   */
  async function updateDisable_ByUserId_ByBanId_DEPRECATED(userId: string, banId: string): Promise<UserBanResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId_ByBanId_DEPRECATED(userId, banId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint retrieves user info and linked platform accounts
   */
  async function getInformation_ByUserId_ByNS(userId: string): Promise<UserInformationV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInformation_ByUserId_ByNS(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/headless/verify [POST]_**
   */
  async function createUpgradeHeadlessAccount_ByUserId_DEPRECATED(
    userId: string,
    data: UpgradeHeadlessAccountRequest
  ): Promise<UserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUpgradeHeadlessAccount_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
   */
  async function getUserInvite_ByInvitationId(invitationId: string): Promise<UserInvitationV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUserInvite_ByInvitationId(invitationId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
   */
  async function createUserInvite_ByInvitationId(invitationId: string, data: UserCreateRequestV3): Promise<UserCreateResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  async function createUser_ByPlatformId_DEPRECATED(
    platformId: string,
    data: PlatformUserIdRequest,
    queryParams?: { rawPID?: boolean | null }
  ): Promise<UserPlatforms> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUser_ByPlatformId_DEPRECATED(platformId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * It is going to be **DEPRECATED**. Update Platform Account relation to current User Account. Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be transferred. If the data is tight to game user ID, the user will have the game progression data.
   */
  async function createPlatformLink_ByUserId(userId: string, data: LinkPlatformAccountRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPlatformLink_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Notes for this endpoint: - This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp.
   */
  async function getLoginsHistories_ByUserId_ByNS(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<LoginHistoriesResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLoginsHistories_ByUserId_ByNS(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
   */
  async function deleteUserMePlatform_ByPlatformId(platformId: string, data: UnlinkUserPlatformRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUserMePlatform_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **googleplaygames**: The ticket’s value is the authorization code returned by Google play games OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **ps4web**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps4**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps5**: The ticket’s value is the authorization code returned by PSN OAuth. - **xblweb**: The ticket’s value is the authorization code returned by XBox Live OAuth. - **live**: The ticket’s value is the XSTS token. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the id_token returned by Nintendo OAuth. - **netflix**: The ticket’s value is GAT (Gamer Access Token) returned by Netflix backend. - **snapchat**: The ticket’s value is authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken. action code : 10144
   */
  async function postUserMePlatform_ByPlatformId(
    platformId: string,
    data: { ticket: string | null; redirectUri?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUserMePlatform_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth.
   */
  async function postLink_ByUserId_ByPlatformId_DEPRECATED(
    userId: string,
    platformId: string,
    data: { ticket: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postLink_ByUserId_ByPlatformId_DEPRECATED(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/justice [GET]_** This endpoint gets list justice platform account by providing publisher namespace and publisher userID.
   */
  async function getPlatformsJustice_ByUserId_DEPRECATED(userId: string): Promise<GetUserMappingArray> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatformsJustice_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one.
   */
  async function getDistinctPlatforms_ByUserId(userId: string): Promise<DistinctPlatformResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDistinctPlatforms_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint gets list justice platform account by providing publisher namespace and publisher userID
   */
  async function getPlatformsJustice_ByUserId_ByNS(userId: string): Promise<GetUserMappingV3Array> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatformsJustice_ByUserId_ByNS(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get linking status. This API need logged user and user can only request its own linking status.
   */
  async function getAsyncStatus_ByRequestId(requestId: string): Promise<LinkRequest> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAsyncStatus_ByRequestId(requestId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [DELETE]_** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **justice**: A user might have several &#39;justice’ platform on different namespaces. That’s why the platform_namespace need to be specified when the platform ID is ‘justice’. The platform_namespace is the designated user’s namespace. Unlink user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Unlinking justice platform will enable password token grant and password update.
   */
  async function postUnlink_ByUserId_ByPlatformId_DEPRECATED(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postUnlink_ByUserId_ByPlatformId_DEPRECATED(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unlink user&#39;s account from third platform in all namespaces. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: to unlink steam third party account, you can use steamnetwork / steam / steamopenid as platformId path parameter. Supported platform: - Steam group(steamnetwork) - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb - facebook - google group - google - googleplaygames - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: if user unlink platform account that have group, the API logic will unlink all of platform account under that group as well. example: if user unlink from ps4, the API logic will unlink ps5 and ps4web as well
   */
  async function deleteAllMeUser_ByPlatformId(platformId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAllMeUser_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action} [DELETE]_**
   */
  async function deletePermission_ByUserId_ByResource_ByAction_DEPRECATED(
    userId: string,
    resource: string,
    action: number
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByUserId_ByResource_ByAction_DEPRECATED(userId, resource, action)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions [POST]_** This endpoint will update existing permission (bitwise OR the action) if found one with same resource, otherwise it will append a new permission Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  async function createPermission_ByUserId_ByResource_ByAction_DEPRECATED(
    userId: string,
    resource: string,
    action: number,
    data: UpdatePermissionScheduleRequest
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPermission_ByUserId_ByResource_ByAction_DEPRECATED(userId, resource, action, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Force linking user account with platform. If this platform account was already linked to another user account, this endpoint will perform force linking and remove platform from that conflict user, not only from the current request namespace but also include all the enrolled namespaces. If current user have linked to this platform with another platform account (include once linked but it is unlinked now), it will not allow user to perform linking. ## Supported platforms: - **steam**: The platform_token’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the id_token returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
   */
  async function postForceMeUser_ByPlatformId(platformId: string, data: { ticket: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postForceMeUser_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/agerestrictions/countries/{countryCode} [GET]_**
   */
  async function getAgerestrictions_ByCountryCode_DEPRECATED(countryCode: string): Promise<Country> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAgerestrictions_ByCountryCode_DEPRECATED(countryCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get age restriction by country code. It will always get by publisher namespace
   */
  async function getAgerestrictionCountry_ByCountryCode(countryCode: string): Promise<CountryV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAgerestrictionCountry_ByCountryCode(countryCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace} [GET]_** This endpoint requires the client access token as the bearer token This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace. **Will create game user id if not exists.**
   */
  async function getPlatformJustice_ByUserId_ByTargetNamespace_DEPRECATED(
    userId: string,
    targetNamespace: string
  ): Promise<GetUserMapping> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatformJustice_ByUserId_ByTargetNamespace_DEPRECATED(userId, targetNamespace)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace} [GET]_** This endpoint requires the client access token as the bearer token The endpoint returns user Justice platform account linked with the given user. If the user Justice platform account doesn&#39;t exist in the designated namespace, the endpoint is going to *create and return the new Justice platform account.* The newly user Justice platform account is going to be forced to perform token grant through the given user and can&#39;t perform password update ### Read Justice Platform Account UserID Without permission the UserID is going to be censored and replaced with “Redacted” text.
   */
  async function createPlatformJustice_ByUserId_ByTargetNamespace_DEPRECATED(
    userId: string,
    targetNamespace: string
  ): Promise<GetUserJusticePlatformAccountResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPlatformJustice_ByUserId_ByTargetNamespace_DEPRECATED(userId, targetNamespace)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate third party login page which will redirected to establish endpoint. Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
   */
  async function getWebLinkMeUsers_ByPlatformId(
    platformId: string,
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  ): Promise<WebLinkingResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getWebLinkMeUsers_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [DELETE]_** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
   */
  async function deleteLink_ByUserId_ByPlatformId_DEPRECATED(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteLink_ByUserId_ByPlatformId_DEPRECATED(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth.
   */
  async function postLink_ByUserId_ByPlatformId_ByNS_DEPRECATED(
    userId: string,
    platformId: string,
    data: { ticket: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postLink_ByUserId_ByPlatformId_ByNS_DEPRECATED(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Force update other account&#39;s Platform Account relation to current User Account. This endpoint can transfer progression from 3rd platform binding account&#39;s to current account. This endpoint need the same requestID which also used in [Get link status](#operations-Users-PublicGetAsyncStatus).
   */
  async function createPlatformLinkWithProgression_ByUserId(
    userId: string,
    data: LinkPlatformAccountWithProgressionRequest
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPlatformLinkWithProgression_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
   */
  async function createUserMePlatformJustice_ByTargetNamespace(targetNamespace: string): Promise<CreateJusticeUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMePlatformJustice_ByTargetNamespace(targetNamespace)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get User By Platform User ID. This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. Supported platform: - Steam group(steamnetwork) - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb - facebook - google group - google - googleplaygames - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  async function getUser_ByPlatformId_ByPlatformUserId(platformId: string, platformUserId: string): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUser_ByPlatformId_ByPlatformUserId(platformId, platformUserId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/headless/code/verify [POST]_** The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint.
   */
  async function createUpgradeHeadlessAccountWithVerificationCode_ByUserId_DEPRECATED(
    userId: string,
    data: UpgradeHeadlessAccountWithVerificationCodeRequest
  ): Promise<UserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUpgradeHeadlessAccountWithVerificationCode_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to process third party account link, this endpoint will return the link status directly instead of redirecting to the original page. The param **state** comes from the response of &lt;code&gt;/users/me/platforms/{platformId}/web/link&lt;/code&gt; Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
   */
  async function postWebLinkProcesMeUser_ByPlatformId(
    platformId: string,
    data: { state: string | null; code?: string | null }
  ): Promise<LinkRequest> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postWebLinkProcesMeUser_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used by third party to redirect the code for the purpose of linking the account third party to IAM account. Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
   */
  async function getWebLinkEstablishMeUsers_ByPlatformId(
    platformId: string,
    queryParams: { state: string | null; code?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getWebLinkEstablishMeUsers_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMe,
    createUser_DEPRECATED,
    getUsersAdmin_DEPRECATED,
    getUsersVerifyLinkVerify,
    getUsersSearch_DEPRECATED,
    deleteUser_ByUserId_DEPRECATED,
    getUser_ByUserId_DEPRECATED,
    updateUser_ByUserId_DEPRECATED,
    getUsersByLoginId_DEPRECATED,
    createUser_ByNS_DEPRECATED,
    getUsers,
    createUser_ByNS_v3,
    createUserMeVerifyLinkRequest,
    createBan_ByUserId_DEPRECATED,
    patchUserMe,
    updateUserMe,
    getUsersMeHeadlessLinkConflict,
    getBans_ByUserId_DEPRECATED,
    createUserResetPassword_DEPRECATED,
    createRole_ByUserId_DEPRECATED,
    createUserForgotPassword_DEPRECATED,
    getUsersListByLoginIds_DEPRECATED,
    updateEnable_ByUserId_DEPRECATED,
    createUserReset,
    updateDisable_ByUserId_DEPRECATED,
    getUsersByPlatformUserId_DEPRECATED,
    createUserForgot,
    updatePassword_ByUserId_DEPRECATED,
    postCrosslink_ByUserId_DEPRECATED,
    getPlatforms_ByUserId_DEPRECATED,
    getPublisher_ByUserId_DEPRECATED,
    getUser_ByUserId_ByNS_DEPRECATED,
    patchUser_ByUserId_DEPRECATED,
    getUser_ByUserId_ByNS_v3_DEPRECATED,
    createUserMeHeadlesLinkWithProgression,
    createUserPlatform,
    deleteInformation_ByUserId_DEPRECATED,
    getInformation_ByUserId_DEPRECATED,
    createPermission_ByUserId_DEPRECATED,
    createUserBulkBasic,
    createVerification_ByUserId_DEPRECATED,
    createUserCodeVerify,
    updateUserMePassword,
    getUsersAvailability,
    createUserCodeRequest,
    deleteRole_ByUserId_ByRoleId_DEPRECATED,
    createRole_ByUserId_ByRoleId_DEPRECATED,
    getBans_ByUserId_ByNS_DEPRECATED,
    createUserResetPassword_ByNS_DEPRECATED,
    getBans_ByUserId_ByNS_v3,
    createUserForgotPassword_ByNS_DEPRECATED,
    createUserMeCodeVerify,
    getLoginsHistories_ByUserId_DEPRECATED,
    createVerificationcode_ByUserId_DEPRECATED,
    createUserMeCodeRequest,
    createUserInputValidation,
    updatePassword_ByUserId_ByNS_DEPRECATED,
    postValidate_ByUserId,
    updateEnable_ByUserId_ByBanId_DEPRECATED,
    getPlatforms_ByUserId_ByNS,
    getPublisher_ByUserId_ByNS,
    createUserMeHeadlesVerify,
    updateDisable_ByUserId_ByBanId_DEPRECATED,
    getInformation_ByUserId_ByNS,
    createUpgradeHeadlessAccount_ByUserId_DEPRECATED,
    getUserInvite_ByInvitationId,
    createUserInvite_ByInvitationId,
    createUser_ByPlatformId_DEPRECATED,
    createPlatformLink_ByUserId,
    createUserMeHeadlesCodeVerify,
    getLoginsHistories_ByUserId_ByNS,
    deleteUserMePlatform_ByPlatformId,
    postUserMePlatform_ByPlatformId,
    postLink_ByUserId_ByPlatformId_DEPRECATED,
    getPlatformsJustice_ByUserId_DEPRECATED,
    getDistinctPlatforms_ByUserId,
    getPlatformsJustice_ByUserId_ByNS,
    getAsyncStatus_ByRequestId,
    postUnlink_ByUserId_ByPlatformId_DEPRECATED,
    deleteAllMeUser_ByPlatformId,
    deletePermission_ByUserId_ByResource_ByAction_DEPRECATED,
    createPermission_ByUserId_ByResource_ByAction_DEPRECATED,
    postForceMeUser_ByPlatformId,
    getAgerestrictions_ByCountryCode_DEPRECATED,
    getAgerestrictionCountry_ByCountryCode,
    getPlatformJustice_ByUserId_ByTargetNamespace_DEPRECATED,
    createPlatformJustice_ByUserId_ByTargetNamespace_DEPRECATED,
    getWebLinkMeUsers_ByPlatformId,
    deleteLink_ByUserId_ByPlatformId_DEPRECATED,
    postLink_ByUserId_ByPlatformId_ByNS_DEPRECATED,
    createPlatformLinkWithProgression_ByUserId,
    createUserMePlatformJustice_ByTargetNamespace,
    getUser_ByPlatformId_ByPlatformUserId,
    createUpgradeHeadlessAccountWithVerificationCode_ByUserId_DEPRECATED,
    postWebLinkProcesMeUser_ByPlatformId,
    getWebLinkEstablishMeUsers_ByPlatformId
  }
}
