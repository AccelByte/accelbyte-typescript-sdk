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
import { CountryV3Response } from './definitions/CountryV3Response.js'
import { CreateJusticeUserResponse } from './definitions/CreateJusticeUserResponse.js'
import { DistinctPlatformResponseV3 } from './definitions/DistinctPlatformResponseV3.js'
import { ForgotPasswordRequestV3 } from './definitions/ForgotPasswordRequestV3.js'
import { GetLinkHeadlessAccountConflictResponse } from './definitions/GetLinkHeadlessAccountConflictResponse.js'
import { GetPublisherUserResponse } from './definitions/GetPublisherUserResponse.js'
import { GetUserBanV3Response } from './definitions/GetUserBanV3Response.js'
import { GetUserMappingV3Array } from './definitions/GetUserMappingV3Array.js'
import { LinkHeadlessAccountRequest } from './definitions/LinkHeadlessAccountRequest.js'
import { LinkPlatformAccountRequest } from './definitions/LinkPlatformAccountRequest.js'
import { LinkPlatformAccountWithProgressionRequest } from './definitions/LinkPlatformAccountWithProgressionRequest.js'
import { LinkRequest } from './definitions/LinkRequest.js'
import { ListBulkUserResponse } from './definitions/ListBulkUserResponse.js'
import { LoginHistoriesResponse } from './definitions/LoginHistoriesResponse.js'
import { PlatformUserIdRequest } from './definitions/PlatformUserIdRequest.js'
import { PublicUserInformationResponseV3 } from './definitions/PublicUserInformationResponseV3.js'
import { ResetPasswordRequestV3 } from './definitions/ResetPasswordRequestV3.js'
import { SendRegisterVerificationCodeRequest } from './definitions/SendRegisterVerificationCodeRequest.js'
import { SendVerificationCodeRequestV3 } from './definitions/SendVerificationCodeRequestV3.js'
import { SendVerificationLinkRequest } from './definitions/SendVerificationLinkRequest.js'
import { UnlinkUserPlatformRequest } from './definitions/UnlinkUserPlatformRequest.js'
import { UpgradeHeadlessAccountV3Request } from './definitions/UpgradeHeadlessAccountV3Request.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserCreateFromInvitationRequestV3 } from './definitions/UserCreateFromInvitationRequestV3.js'
import { UserCreateRequestV3 } from './definitions/UserCreateRequestV3.js'
import { UserCreateResponseV3 } from './definitions/UserCreateResponseV3.js'
import { UserIDsRequest } from './definitions/UserIDsRequest.js'
import { UserInformationV3 } from './definitions/UserInformationV3.js'
import { UserInvitationV3 } from './definitions/UserInvitationV3.js'
import { UserLinkedPlatformsResponseV3 } from './definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateV3Request } from './definitions/UserPasswordUpdateV3Request.js'
import { UserPlatforms } from './definitions/UserPlatforms.js'
import { UserResponseV3 } from './definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3.js'
import { UserVerificationRequestV3 } from './definitions/UserVerificationRequestV3.js'
import { Users$ } from './endpoints/Users$.js'
import { UsersPlatformInfosRequestV3 } from './definitions/UsersPlatformInfosRequestV3.js'
import { UsersPlatformInfosResponse } from './definitions/UsersPlatformInfosResponse.js'
import { VerifyRegistrationCode } from './definitions/VerifyRegistrationCode.js'
import { WebLinkingResponse } from './definitions/WebLinkingResponse.js'

export function UsersApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get my user data __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * display name * avatar * __Xbox(live, xblweb)__ * display name * __Steam(steam, steamopenid)__ * display name * avatar * __EpicGames(epicgames)__ * display name action code : 10147
   */
  async function getUsersMe(queryParams?: { includeAllPlatforms?: boolean | null }): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersVerifyLinkVerify(queryParams?: { code?: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersVerifyLinkVerify(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint search all users on the specified namespace that match the query on these fields: display name, and username or by 3rd party display name. The query length should greater than 2，otherwise will not query the database. The default limit value is 100. **Note: searching by 3rd party platform display name is exact query** --- When searching by 3rd party platform display name: 1. set __by__ to __thirdPartyPlatform__ 2. set __platformId__ to the supported platform id 3. set __platformBy__ to __platformDisplayName__ --- Supported platform id: * steam * steamopenid * facebook * google * oculus * oculusweb * twitch * discord * android * ios * apple * device * epicgames * ps4 * ps5 * ps4web * nintendo * awscognito * live * xblweb * netflix * snapchat * oidc platform id
   */
  async function getUsers(queryParams?: {
    by?: string | null
    limit?: number
    offset?: number
    platformBy?: string | null
    platformId?: string | null
    query?: string | null
  }): Promise<PublicUserInformationResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createUser(data: UserCreateRequestV3): Promise<UserCreateResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The verification link is sent to email address It will not send request if user email is already verified
   */
  async function createUserMeVerifyLinkRequest(data: SendVerificationLinkRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeVerifyLinkRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  async function patchUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. **Important notes:** This endpoint provides support for client that doesn&#39;t have PATCH support, i.e. UE4 before v4.23 released. If the client support PATCH method, use [PATCH] /iam/v3/public/namespaces/{namespace}/users/me instead action code : 10103
   */
  async function updateUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
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
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeHeadlessLinkConflict(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10105
   */
  async function createUserReset(data: ResetPasswordRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserReset(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address. action code : 10104
   */
  async function createUserForgot(data: ForgotPasswordRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserForgot(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Note: 1. My account should be full account 2. My account not linked to headless account&#39;s third platform.
   */
  async function createUserMeHeadlesLinkWithProgression(data: LinkHeadlessAccountRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesLinkWithProgression(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Note: 1. the max count of user ids in the request is 100 2. if platform id is not empty, the result will only contain the corresponding platform infos 3. if platform id is empty, the result will contain all the supported platform infos __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * display name * avatar * __Xbox(live, xblweb)__ * display name * __Steam(steam, steamopenid)__ * display name * avatar * __EpicGames(epicgames)__ * display name
   */
  async function createUserPlatform(data: UsersPlatformInfosRequestV3): Promise<UsersPlatformInfosResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserPlatform(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace - **Result will include displayName(if it exists)**
   */
  async function createUserBulkBasic(data: UserIDsRequest): Promise<ListBulkUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserBulkBasic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify the registration code
   */
  async function createUserCodeVerify(data: VerifyRegistrationCode): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10107
   */
  async function updateUserMePassword(data: UserPasswordUpdateV3Request): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMePassword(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check user&#39;s account availability. Available field : - displayName - username If request include access token with user ID data, that user ID will be excluded from availability check. For example, in case user update his emailAddress, he can use his own emailAddress to update his account. Response Code : - Account Available : 404 (not found) - Account Not Available : 204 (no content)
   */
  async function getUsersAvailability(queryParams: { field: string | null; query: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersAvailability(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will validate the request&#39;s email address. If it already been used, will response 409. If it is available, we will send a verification code to this email address. This code can be verified by this [endpoint](#operations-Users-PublicVerifyRegistrationCode).
   */
  async function createUserCodeRequest(data: SendRegisterVerificationCodeRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Notes: - This endpoint retrieve the first page of the data if after and before parameters is empty - **The pagination is not working yet**
   */
  async function getBans_ByUserId(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  ): Promise<GetUserBanV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBans_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Will consume code if validateOnly is set false Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** action code: 10107
   */
  async function createUserMeCodeVerify(data: UserVerificationRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The verification code is sent to email address Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
   */
  async function createUserMeCodeRequest(data: SendVerificationCodeRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to validate the user password. Require valid user ID. Notes: - This endpoint validate the user password by specifying the userId and password
   */
  async function postValidate_ByUserId(userId: string, data: { password: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postValidate_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint retrieves platform accounts linked to user. action code: 10128
   */
  async function getPlatforms_ByUserId(
    userId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number; platformId?: string | null }
  ): Promise<UserLinkedPlatformsResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlatforms_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Restriction:** Path Parameter **namespace** can be provided only with game namespace
   */
  async function getPublisher_ByUserId(userId: string): Promise<GetPublisherUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublisher_ByUserId(userId)
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
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesVerify(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint retrieves user info and linked platform accounts
   */
  async function getInformation_ByUserId(userId: string): Promise<UserInformationV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInformation_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
   */
  async function getUserInvite_ByInvitationId(invitationId: string): Promise<UserInvitationV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserInvite_ByInvitationId(invitationId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
   */
  async function createUserInvite_ByInvitationId(
    invitationId: string,
    data: UserCreateFromInvitationRequestV3
  ): Promise<UserCreateResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  async function createUser_ByPlatformId(
    platformId: string,
    data: PlatformUserIdRequest,
    queryParams?: { rawPID?: boolean | null }
  ): Promise<UserPlatforms> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser_ByPlatformId(platformId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * It is going to be **DEPRECATED**. Update Platform Account relation to current User Account. Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be transferred. If the data is tight to game user ID, the user will have the game progression data.
   */
  async function createPlatformLink_ByUserId(userId: string, data: LinkPlatformAccountRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPlatformLink_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Notes for this endpoint: - This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp.
   */
  async function getLoginsHistories_ByUserId(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<LoginHistoriesResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLoginsHistories_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
   */
  async function deleteUserMePlatform_ByPlatformId(platformId: string, data: UnlinkUserPlatformRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMePlatform_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **ps4web**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps4**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps5**: The ticket’s value is the authorization code returned by PSN OAuth. - **xblweb**: The ticket’s value is the authorization code returned by XBox Live OAuth. - **live**: The ticket’s value is the XSTS token. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the id_token returned by Nintendo OAuth. - **netflix**: The ticket’s value is GAT (Gamer Access Token) returned by Netflix backend. - **snapchat**: The ticket’s value is authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken. action code : 10144
   */
  async function postUserMePlatform_ByPlatformId(
    platformId: string,
    data: { ticket: string | null; redirectUri?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMePlatform_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one.
   */
  async function getDistinctPlatforms_ByUserId(userId: string): Promise<DistinctPlatformResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDistinctPlatforms_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint gets list justice platform account by providing publisher namespace and publisher userID
   */
  async function getPlatformsJustice_ByUserId(userId: string): Promise<GetUserMappingV3Array> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlatformsJustice_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get linking status. This API need logged user and user can only request its own linking status.
   */
  async function getAsyncStatus_ByRequestId(requestId: string): Promise<LinkRequest> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAsyncStatus_ByRequestId(requestId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unlink user&#39;s account from third platform in all namespaces. This API support to handling platform group use case: i.e. 1. Steam group: steam, steamopenid 2. PSN group: ps4, ps5, psnweb 3. XBOX group: live, xblweb Example: if user unlink from ps4, the API logic will unlink ps5 and psnweb as well.
   */
  async function deleteAllMeUser_ByPlatformId(platformId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteAllMeUser_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Force linking user account with platform. If this platform account was already linked to another user account, this endpoint will perform force linking and remove platform from that conflict user, not only from the current request namespace but also include all the enrolled namespaces. If current user have linked to this platform with another platform account (include once linked but it is unlinked now), it will not allow user to perform linking. ## Supported platforms: - **steam**: The platform_token’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the id_token returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
   */
  async function postForceMeUser_ByPlatformId(platformId: string, data: { ticket: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postForceMeUser_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get age restriction by country code. It will always get by publisher namespace
   */
  async function getAgerestrictionCountry_ByCountryCode(countryCode: string): Promise<CountryV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAgerestrictionCountry_ByCountryCode(countryCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate third party login page which will redirected to establish endpoint.
   */
  async function getWebLinkMeUsers_ByPlatformId(
    platformId: string,
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  ): Promise<WebLinkingResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWebLinkMeUsers_ByPlatformId(platformId, queryParams)
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
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPlatformLinkWithProgression_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
   */
  async function createUserMePlatformJustice_ByTargetNamespace(targetNamespace: string): Promise<CreateJusticeUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMePlatformJustice_ByTargetNamespace(targetNamespace)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get User By Platform User ID This endpoint return user information by given platform ID and platform user ID **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  async function getUser_ByPlatformId_ByPlatformUserId(platformId: string, platformUserId: string): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByPlatformId_ByPlatformUserId(platformId, platformUserId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to process third party account link, this endpoint will return the link status directly instead of redirecting to the original page. The param **state** comes from the response of &lt;code&gt;/users/me/platforms/{platformId}/web/link&lt;/code&gt;
   */
  async function postWebLinkProcesMeUser_ByPlatformId(
    platformId: string,
    data: { state: string | null; code?: string | null }
  ): Promise<LinkRequest> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postWebLinkProcesMeUser_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used by third party to redirect the code for the purpose of linking the account third party to IAM account.
   */
  async function getWebLinkEstablishMeUsers_ByPlatformId(
    platformId: string,
    queryParams: { state: string | null; code?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWebLinkEstablishMeUsers_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMe,
    getUsersVerifyLinkVerify,
    getUsers,
    createUser,
    createUserMeVerifyLinkRequest,
    patchUserMe,
    updateUserMe,
    getUsersMeHeadlessLinkConflict,
    createUserReset,
    createUserForgot,
    createUserMeHeadlesLinkWithProgression,
    createUserPlatform,
    createUserBulkBasic,
    createUserCodeVerify,
    updateUserMePassword,
    getUsersAvailability,
    createUserCodeRequest,
    getBans_ByUserId,
    createUserMeCodeVerify,
    createUserMeCodeRequest,
    postValidate_ByUserId,
    getPlatforms_ByUserId,
    getPublisher_ByUserId,
    createUserMeHeadlesVerify,
    getInformation_ByUserId,
    getUserInvite_ByInvitationId,
    createUserInvite_ByInvitationId,
    createUser_ByPlatformId,
    createPlatformLink_ByUserId,
    createUserMeHeadlesCodeVerify,
    getLoginsHistories_ByUserId,
    deleteUserMePlatform_ByPlatformId,
    postUserMePlatform_ByPlatformId,
    getDistinctPlatforms_ByUserId,
    getPlatformsJustice_ByUserId,
    getAsyncStatus_ByRequestId,
    deleteAllMeUser_ByPlatformId,
    postForceMeUser_ByPlatformId,
    getAgerestrictionCountry_ByCountryCode,
    getWebLinkMeUsers_ByPlatformId,
    createPlatformLinkWithProgression_ByUserId,
    createUserMePlatformJustice_ByTargetNamespace,
    getUser_ByPlatformId_ByPlatformUserId,
    postWebLinkProcesMeUser_ByPlatformId,
    getWebLinkEstablishMeUsers_ByPlatformId
  }
}
