/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CreateUserRequestV4 } from '@accelbyte/sdk/generated-public/iam/definitions/CreateUserRequestV4'
import { EmailUpdateRequestV4 } from '@accelbyte/sdk/generated-public/iam/definitions/EmailUpdateRequestV4'
import { LinkHeadlessAccountRequest } from '@accelbyte/sdk/generated-public/iam/definitions/LinkHeadlessAccountRequest'
import { LinkPlatformAccountRequest } from '@accelbyte/sdk/generated-public/iam/definitions/LinkPlatformAccountRequest'
import { SendRegisterVerificationCodeRequest } from '@accelbyte/sdk/generated-public/iam/definitions/SendRegisterVerificationCodeRequest'
import { SendVerificationCodeRequestV3 } from '@accelbyte/sdk/generated-public/iam/definitions/SendVerificationCodeRequestV3'
import { UnlinkUserPlatformRequest } from '@accelbyte/sdk/generated-public/iam/definitions/UnlinkUserPlatformRequest'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '@accelbyte/sdk/generated-public/iam/definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '@accelbyte/sdk/generated-public/iam/definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4'
import { UserPasswordUpdateV3Request } from '@accelbyte/sdk/generated-public/iam/definitions/UserPasswordUpdateV3Request'
import { UserUpdateRequestV3 } from '@accelbyte/sdk/generated-public/iam/definitions/UserUpdateRequestV3'
import { UserVerificationRequestV3 } from '@accelbyte/sdk/generated-public/iam/definitions/UserVerificationRequestV3'
import { Users$ } from '@accelbyte/sdk/generated-public/iam/Users$'
import { UsersV4$ } from '@accelbyte/sdk/generated-public/iam/UsersV4$'
import { ReadyPlayerMe } from '@accelbyte/sdk/models/ReadyPlayerMe'
import { Network } from '@accelbyte/sdk/utils/Network'
import { Validate } from '@accelbyte/sdk/utils/Validate'

export class UserApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * GET [/iam/v3/public/users/me](api)
   *
   * get currently logged-in user
   */
  getCurrentUser = () => {
    return this.newInstance().fetchUsersMe()
  }

  /**
   * PATCH [/iam/v3/public/namespaces/{namespace}/users/me](api)
   *
   * Update current user
   */
  updateUserMe = (data: UserUpdateRequestV3) => {
    return this.newInstance().patchUserMe(data)
  }

  /**
   * PUT [/iam/v4/public/namespaces/{namespace}/users/me/email](api)
   *
   * update current user's email
   */
  updateEmailMe = (data: EmailUpdateRequestV4) => {
    return this.newInstance4().updateUserMeEmail(data)
  }

  /**
   * PUT [/iam/v3/public/namespaces/{namespace}/users/me/password](api)
   *
   * update current user's password
   */
  updatePasswordMe = (data: UserPasswordUpdateV3Request) => {
    return this.newInstance().updateUserMePassword(data)
  }

  /**
   * POST [/iam/v3/public/namespaces/{namespace}/users/me/code/request](api)
   *
   * Required valid user authorization
   * The verification code is sent to email address
   * Available contexts for use :
   *  -
   *    __UserAccountRegistration__
   *    a context type used for verifying email address in user account registration. It returns 409 if the email address already verified.
   *    __It is the default context if the Context field is empty__
   *
   *  -
   *    __UpdateEmailAddress__
   *    a context type used for verify user before updating email address.(Without email address verified checking)
   *
   *  - __upgradeHeadlessAccount__
   *    The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account.
   *    If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409.
   * action code: 10116
   *
   */
  requestVerificationCode = (data: SendVerificationCodeRequestV3) => {
    return this.newInstance().createUserMeCodeRequest(data)
  }

  /**
   * POST [/iam/v3/public/namespaces/{namespace}/users/me/code/verify](api)
   *
   * Will consume code if validateOnly is set false
   * Required valid user authorization
   * Redeems a verification code sent to a user to verify the user's contact address is correct
   * Available ContactType : __email__
   * action code: 10107
   *
   */
  verifyCode = (data: UserVerificationRequestV3) => {
    return this.newInstance().createUserMeCodeVerify(data)
  }

  /**
   * POST [/iam/v3/public/namespaces/{namespace}/users/me/headless/code/verify](api)
   *
   * If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded
   * Require valid user access token.
   *        The method upgrades a headless account by linking the headless account with the email address and the password.
   * By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM.
   *        The method is a shortcut for upgrading a headless account and verifying the email address in one call.
   * In order to get a verification code for the method, please check the send verification code method.
   *        This method also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.
   *  Supported user data fields :
   *
   *    - displayName
   *    - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29
   *    - country : format ISO3166-1 alpha-2 two letter, e.g. US
   *
   *        action code : 10124
   */
  upgradeHeadlessAccount = (data: UpgradeHeadlessAccountWithVerificationCodeRequestV3) => {
    return this.newInstance().createUserMeHeadlesCodeVerify(data)
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/headless/code/verify](api)
   *
   * Require valid user access token.
   *          The method upgrades a headless account by linking the headless account with the email address, username, and password.
   *      By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM.
   *
   *      The method is a shortcut for upgrading a headless account and verifying the email address in one call.
   *
   *      This method also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.
   *      Supported user data fields:
   *
   *          - displayName
   *          - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29
   *          - country : format ISO3166-1 alpha-2 two letter, e.g. US
   *
   *          action code : 10124
   */
  upgradeHeadlessAccountV4 = (data: UpgradeHeadlessAccountWithVerificationCodeRequestV4) => {
    return this.newInstance4().createUserMeHeadlesCodeVerify(data)
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms](api)
   *
   * This method retrieves platform accounts linked to user. Required valid user authorization.
   * action code: 10128
   */
  getUserLinkedPlatform = (userId: string) => {
    return this.newInstance().fetchPlatforms_ByUserId(userId)
  }

  /**
   * POST [/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}](api)
   *
   * Required valid user authorization.
   *    __Prerequisite:__
   *    Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables).
   *      ##Supported platforms:
   *
   *        - __steam__: The ticket’s value is the authentication code returned by Steam.
   *        - __steamopenid__: Steam's user authentication method using OpenID 2.0. The ticket's value is URL generated by Steam on web authentication
   *        - __facebook__: The ticket’s value is the authorization code returned by Facebook OAuth
   *        - __google__: The ticket’s value is the authorization code returned by Google OAuth
   *        - __oculus__: The ticket’s value is a string composed of Oculus's user ID and the nonce separated by a colon (:).
   *        - __twitch__: The ticket’s value is the authorization code returned by Twitch OAuth.
   *        - __android__: The ticket's value is the Android’s device ID
   *        - __ios__: The ticket's value is the iOS’s device ID.
   *        - __apple__: The ticket’s value is the authorization code returned by Apple OAuth.
   *        - __device__: Every device that doesn't run Android and iOS is categorized as a device platform. The ticket's value is the device’s ID.
   *        - __discord__: The ticket’s value is the authorization code returned by Discord OAuth.
   *        - __ps4web__: The ticket’s value is the authorization code returned by PSN OAuth.
   *        - __xblweb__: The ticket’s value is the authorization code returned by XBox Live OAuth.
   *        - __awscognito__: The ticket’s value is the aws cognito access token (JWT).
   *        - __epicgames__: The ticket’s value is an access-token obtained from Epicgames EOS Account Service.
   *        - __nintendo__: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.
   *        - __stadia__: The ticket’s value is a JWT Token, which can be obtained after calling the Stadia SDK's function.
   *
   *    action code : 10144
   */
  linkAccountToPlatform = ({ platformId, data }: { platformId: string; data: { ticket: string | null; redirectUri?: string | null } }) => {
    return this.newInstance().postUserMePlatform_ByPlatformId(platformId, data)
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/requests/{requestId}/async/status](api)
   *
   * Get the linking status between a third-party platform to a user
   */
  getLinkRequestStatus = (requestId: string) => {
    return this.newInstance().fetchAsyncStatus_ByRequestId(requestId)
  }

  /**
   * @internal
   * It is going to be __DEPRECATED__.
   * Update Platform Account relation to current User Account.
   * Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be
   * transferred. If the data is tight to game user ID, the user will have the game progression data.
   */
  linkPlatformToUserAccount = ({ userId, data }: { userId: string; data: LinkPlatformAccountRequest }) => {
    return this.newInstance().createPlatformLink_ByUserId(userId, data)
  }

  /**
   * DELETE [/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}](api)
   *
   * Required valid user authorization.
   *      ##Supported platforms:
   *
   *        - __steam__
   *        - __steamopenid__
   *        - __facebook__
   *        - __google__
   *        - __oculus__
   *        - __twitch__
   *        - __android__
   *        - __ios__
   *        - __apple__
   *        - __device__
   *        - __discord__
   *        - __awscognito__
   *        - __epicgames__
   *        - __nintendo__
   *        - __stadia__
   *
   *      Unlink user's account from a specific platform. 'justice' platform might have multiple accounts from different namespaces linked.
   *      _platformNamespace_ need to be specified when the platform ID is 'justice'.
   *
   *      Unlink user's account from justice platform will enable password token grant and password update.
   *
   *      If you want to unlink user's account in a game namespace, you have to specify _platformNamespace_ to that game namespace.
   *
   *      action code : 10121
   */
  unLinkAccountFromPlatform = ({ platformId, data }: { platformId: string; data: UnlinkUserPlatformRequest }) => {
    return this.newInstance().deleteUserMePlatform_ByPlatformId(platformId, data)
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/web/link](api)
   *
   * This method is used to generate third party login page which will redirected to establish method.
   */
  getThirdPartyURL = ({
    platformId,
    namespace,
    queryParams
  }: {
    platformId: string
    namespace?: string
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  }) => {
    return this.newInstance(namespace).fetchWebLinkMeUsers_ByPlatformId(platformId, queryParams)
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/agerestrictions/countries/{countryCode}](api)
   *
   * Get age restriction by country code. It will always get by publisher namespace
   */
  getAgeRestrictionByCountry = (countryCode: string) => {
    return this.newInstance().fetchAgerestrictionCountry_ByCountryCode(countryCode)
  }

  /**
   * Render 2D Avatar via readyplayer.me POST [](https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/render-api)
   * @internal
   */
  renderImageFromGlbModel = (data: { model: string; scene: string }) => {
    const axios = Network.create({
      ...this.conf
    })
    return Validate.responseType(() => axios.post('https://render.readyplayer.me/render', data), ReadyPlayerMe)
  }

  /**
   * POST [/iam/v3/public/namespaces/{namespace}/users/code/request](api)
   *
   * This method will validate the request's email address.
   *
   * If it already been used, will response 409.
   *
   * If it is available, we will send a verification code to this email address.
   */
  requestNewUserVerificationCode = (data: SendRegisterVerificationCodeRequest) => {
    return this.newInstance().createUserCodeRequest(data)
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users](api)
   *
   * Create a new user with unique email address and username.
   *
   *    __Required attributes:__
   *    - authType: possible value is EMAILPASSWD
   *    - emailAddress: Please refer to the rule from /v3/public/inputValidations API.
   *    - username: Please refer to the rule from /v3/public/inputValidations API.
   *    - password: Please refer to the rule from /v3/public/inputValidations API.
   *    - country: ISO3166-1 alpha-2 two letter, e.g. US.
   *    - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date.
   *
   *    __Not required attributes:__
   *    - displayName: Please refer to the rule from /v3/public/inputValidations API.
   *
   *    This method support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   *
   */
  createUser = (data: CreateUserRequestV4) => {
    return this.newInstance4().createUser(data)
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/users/{userId}/distinctPlatforms](api)
   *
   * This method retrieves platform accounts linked to user.
   *          It will query all linked platform accounts and result will be distinct & grouped, same platform we will pick oldest linked one.
   *          Required valid user authorization.
   */
  getUserDistinctLinkedPlatform = (userId: string) => {
    return this.newInstance().fetchDistinctPlatforms_ByUserId(userId)
  }

  /**
   * DELETE [/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all](api)
   *
   * Required valid user authorization.
   *      Unlink user's account from for all third platforms.
   */
  unLinkAccountFromPlatformDistinct = (platformId: string) => {
    return this.newInstance().deleteAllMeUser_ByPlatformId(platformId)
  }

  /**
   * POST [/iam/v3/public/users/me/verify_link/request](api)
   *
   * Required valid user authorization
   * The verification link is sent to email address
   * It will not send request if user email is already verified
   */
  sendVerificationLink = (languageTag: string) => {
    return this.newInstance().createUserMeVerifyLinkRequest({ languageTag })
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms](api)
   *
   * This method retrieves platform accounts linked to user. Required valid user authorization.
   *          action code: 10128
   */
  getLinkedAccount = (userId: string) => {
    return this.newInstance().fetchPlatforms_ByUserId(userId)
  }

  /**
   * GET [/iam/v3/public/users/me/headless/link/conflict](api)
   *
   * Note:
   * 1. My account should be full account
   * 2. My account not linked to request headless account's third platform.
   */
  getLinkAccountByOneTimeCodeConflict = (params: { oneTimeLinkCode: string | null }) => {
    return this.newInstance().fetchUsersMeHeadlessLinkConflict(params)
  }

  /**
   * POST [/iam/v3/public/users/me/headless/linkWithProgression](api)
   *
   * Note:
   * 1. My account should be full account
   * 2. My account not linked to headless account's third platform.
   */
  linkWithProgression = (data: LinkHeadlessAccountRequest) => {
    return this.newInstance().createUserMeHeadlesLinkWithProgression(data)
  }

  /**
   * POST [/iam/v3/public/namespaces/{namespace}/users/me/platforms/justice/{targetNamespace}](api)
   *
   * This method is to create a game namespace user
   *
   */
  createPlatformGameNamespace = (targetNamespace: string) => {
    return this.newInstance().createUserMePlatformJustice_ByTargetNamespace(targetNamespace)
  }

  /**
   * GET [/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/{platformUserId}](api)
   *
   */
  getLinkedAccountbyPlatformUserId = (platformId: string, platformUserId: string) => {
    return this.newInstance().fetchUser_ByPlatformId_ByPlatformUserId(platformId, platformUserId)
  }

  /**
   * @internal
   */
  newInstance(namespace?: string) {
    return new Users$(Network.create(this.conf), namespace || this.namespace, this.cache)
  }

  /**
   * @internal
   */
  newInstance4() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }
}
