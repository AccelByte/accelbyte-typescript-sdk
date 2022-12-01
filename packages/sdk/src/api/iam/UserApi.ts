/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CreateUserRequestV4 } from '@accelbyte/sdk/generated-public/iam/definitions/CreateUserRequestV4'
import { EmailUpdateRequestV4 } from '@accelbyte/sdk/generated-public/iam/definitions/EmailUpdateRequestV4'
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
import { z } from 'zod'

export class UserApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * get currently logged in user
   */
  getCurrentUser = () => {
    return this.newInstance().fetchIamV3PublicUsersMe()
  }

  /**
   * update current user
   */
  updateUserMe = (data: UserUpdateRequestV3) => {
    return this.newInstance().patchV3UsersMe(data)
  }

  /**
   * update current user's email
   */
  updateEmailMe = (data: EmailUpdateRequestV4) => {
    return this.newInstance4().putV4UsersMeEmail(data)
  }

  /**
   * update current user's password
   */
  updatePasswordMe = (data: UserPasswordUpdateV3Request) => {
    return this.newInstance().putV3UsersMePassword(data)
  }

  /**
   * Required valid user authorization
   * <p>The verification code is sent to email address</p>
   * <p>Available contexts for use : </p>
   * <ol>
   *  <li>
   *    <strong>UserAccountRegistration</strong>
   *    <p>a context type used for verifying email address in user account registration. It returns 409 if the email address already verified.
   *    <strong><em>It is the default context if the Context field is empty</em></strong></p>
   *  </li>
   *  <li>
   *    <strong>UpdateEmailAddress</strong>
   *    <p>a context type used for verify user before updating email address.(Without email address verified checking)</p>
   *  </li>
   *  <li><strong>upgradeHeadlessAccount</strong>
   *    <p>The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account.
   *    If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409.</p>
   *  </li>
   * </ol>
   * <p>action code: 10116</p>
   *
   */
  requestVerificationCode = (data: SendVerificationCodeRequestV3) => {
    return this.newInstance().postV3UsersMeCodeRequest(data)
  }

  /**
   * <p>Will consume code if validateOnly is set false</p>
   * <p>Required valid user authorization</p>
   * <p>Redeems a verification code sent to a user to verify the user's contact address is correct</p>
   * <p>Available ContactType : <b>email</b></p>
   * <p>action code: 10107</p>
   *
   */
  verifyCode = (data: UserVerificationRequestV3) => {
    return this.newInstance().postV3UsersMeCodeVerify(data)
  }

  /**
   * <p>If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded</p>
   * Require valid user access token.
   *        <p>The method upgrades a headless account by linking the headless account with the email address and the password.
   * By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. </p>
   *        <p>The method is a shortcut for upgrading a headless account and verifying the email address in one call.
   * In order to get a verification code for the method, please check the send verification code method.</p>
   *        <p>This method also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.<br/>
   *  Supported user data fields :
   *  <ul>
   *    <li>displayName</li>
   *    <li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li>
   *    <li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li>
   *  </ul>
   *        <br>action code : 10124</p>
   */
  upgradeHeadlessAccount = (data: UpgradeHeadlessAccountWithVerificationCodeRequestV3) => {
    return this.newInstance().postV3UsersMeHeadlessCodeVerify(data)
  }

  /**
   * Require valid user access token.
   *          The method upgrades a headless account by linking the headless account with the email address, username, and password.
   *      By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM.
   *          <br>
   *      The method is a shortcut for upgrading a headless account and verifying the email address in one call.
   *      In order to get a verification code for the method, please check the <a href="#operations-Users-PublicSendVerificationCodeV3">send verification code method</a>.
   *          <br>
   *      This method also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.
   *      Supported user data fields:
   *        <ul>
   *          <li>displayName</li>
   *          <li>dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29</li>
   *          <li>country : format ISO3166-1 alpha-2 two letter, e.g. US</li>
   *        </ul>
   *          action code : 10124
   */
  upgradeHeadlessAccountV4 = (data: UpgradeHeadlessAccountWithVerificationCodeRequestV4) => {
    return this.newInstance4().postV4UsersMeHeadlessCodeVerify(data)
  }

  /**
   * <p>This method retrieves platform accounts linked to user. Required valid user authorization.
   *          <br>action code: 10128 </p>
   */
  getUserLinkedPlatform = (userId: string) => {
    return this.newInstance().fetchV3UsersByUseridPlatforms(userId)
  }

  /**
   * Required valid user authorization.
   *    <p><br><b>Prerequisite:</b>
   *    Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables).
   *      <h2>Supported platforms:</h2>
   *      <ul>
   *        <li><strong>steam</strong>: The ticket’s value is the authentication code returned by Steam.</li>
   *        <li><strong>steamopenid</strong>: Steam's user authentication method using OpenID 2.0. The ticket's value is URL generated by Steam on web authentication</li>
   *        <li><strong>facebook</strong>: The ticket’s value is the authorization code returned by Facebook OAuth</li>
   *        <li><strong>google</strong>: The ticket’s value is the authorization code returned by Google OAuth</li>
   *        <li><strong>oculus</strong>: The ticket’s value is a string composed of Oculus's user ID and the nonce separated by a colon (:).</li>
   *        <li><strong>twitch</strong>: The ticket’s value is the authorization code returned by Twitch OAuth.</li>
   *        <li><strong>android</strong>: The ticket's value is the Android’s device ID</li>
   *        <li><strong>ios</strong>: The ticket's value is the iOS’s device ID.</li>
   *        <li><strong>apple</strong>: The ticket’s value is the authorization code returned by Apple OAuth.</li>
   *        <li><strong>device</strong>: Every device that doesn't run Android and iOS is categorized as a device platform. The ticket's value is the device’s ID.</li>
   *        <li><strong>discord</strong>: The ticket’s value is the authorization code returned by Discord OAuth.</li>
   *        <li><strong>ps4web</strong>: The ticket’s value is the authorization code returned by PSN OAuth.</li>
   *        <li><strong>xblweb</strong>: The ticket’s value is the authorization code returned by XBox Live OAuth.</li>
   *        <li><strong>awscognito</strong>: The ticket’s value is the aws cognito access token (JWT).</li>
   *        <li><strong>epicgames</strong>: The ticket’s value is an access-token obtained from Epicgames EOS Account Service.</li>
   *        <li><strong>nintendo</strong>: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.</li>
   *        <li><strong>stadia</strong>: The ticket’s value is a JWT Token, which can be obtained after calling the Stadia SDK's function.</li>
   *      </ul>
   *    <br>action code : 10144
   */
  linkAccountToPlatform = ({ platformId, data }: { platformId: string; data: { ticket: string | null; redirectUri?: string | null } }) => {
    return this.newInstance().postV3UsersMePlatformsByPlatformid(platformId, data)
  }

  /**
   * Get the linking status between a third-party platform to a user
   */
  getLinkRequestStatus = (requestId: string) => {
    return this.newInstance().fetchV3RequestsByRequestidAsyncStatus(requestId)
  }

  /**
   * It is going to be <strong>DEPRECATED</strong>.
   * Update Platform Account relation to current User Account.
   * Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be
   * transferred. If the data is tight to game user ID, the user will have the game progression data.
   *
   */
  linkPlatformToUserAccount = ({ userId, data }: { userId: string; data: LinkPlatformAccountRequest }) => {
    return this.newInstance().postV3UsersByUseridPlatformsLink(userId, data)
  }

  /**
   * Required valid user authorization.
   *      <h2>Supported platforms:</h2>
   *      <ul>
   *        <li><strong>steam</strong></li>
   *        <li><strong>steamopenid</strong></li>
   *        <li><strong>facebook</strong></li>
   *        <li><strong>google</strong></li>
   *        <li><strong>oculus</strong></li>
   *        <li><strong>twitch</strong></li>
   *        <li><strong>android</strong></li>
   *        <li><strong>ios</strong></li>
   *        <li><strong>apple</strong></li>
   *        <li><strong>device</strong></li>
   *        <li><strong>discord</strong></li>
   *        <li><strong>awscognito</strong></li>
   *        <li><strong>epicgames</strong></li>
   *        <li><strong>nintendo</strong></li>
   *        <li><strong>stadia</strong></li>
   *      </ul>
   *      <p>Unlink user's account from a specific platform. 'justice' platform might have multiple accounts from different namespaces linked.
   *      <br><i>platformNamespace</i> need to be specified when the platform ID is 'justice'.
   *      <br>
   *      <br>Unlink user's account from justice platform will enable password token grant and password update.
   *      <br>
   *      <br>If you want to unlink user's account in a game namespace, you have to specify <i>platformNamespace</i> to that game namespace.
   *      <br>
   *      <br>action code : 10121 </p>
   */
  unLinkAccountFromPlatform = ({ platformId, data }: { platformId: string; data: UnlinkUserPlatformRequest }) => {
    return this.newInstance().deleteV3UsersMePlatformsByPlatformid(platformId, data)
  }

  /**
   * This method is used to generate third party login page which will redirected to establish method.
   */
  getThirdPartyURL = ({
    platformId,
    queryParams
  }: {
    platformId: string
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  }) => {
    return this.newInstance().fetchV3UsersMePlatformsByPlatformidWebLink(platformId, queryParams)
  }

  /**
   * Get age restriction by country code. It will always get by publisher namespace
   */
  getAgeRestrictionByCountry = (countryCode: string) => {
    return this.newInstance().fetchV3AgerestrictionsCountriesByCountrycode(countryCode)
  }

  /**
   * Render 2D Avatar via readyplayer.me (https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/render-api)
   */
  renderImageFromGlbModel(data: { model: string; scene: string }) {
    const axios = Network.create({
      ...this.conf
    })
    return Validate.responseType(() => axios.post('https://render.readyplayer.me/render', data), ReadyPlayerMe)
  }

  // TODO: evaluate the use of this method. It looks too generic for a function that should notify game SDK
  notifyGameSDK(url: string) {
    const axios = Network.create({
      ...this.conf
    })
    return Validate.responseType(() => axios.get(url), z.string())
  }

  /**
   * This method will validate the request's email address.
   *
   * If it already been used, will response 409.
   *
   * If it is available, we will send a verification code to this email address.
   * This code can be verified by this <a href="#operations-Users-PublicVerifyRegistrationCode">method</a>.
   *
   */
  requestNewUserVerificationCode(data: SendRegisterVerificationCodeRequest) {
    return this.newInstance().postV3UsersCodeRequest(data)
  }

  /**
   * Create a new user with unique email address and username.
   *    <p>
   *    <b>Required attributes:</b>
   *    - authType: possible value is EMAILPASSWD
   *    - emailAddress: Please refer to the rule from /v3/public/inputValidations API.
   *    - username: Please refer to the rule from /v3/public/inputValidations API.
   *    - password: Please refer to the rule from /v3/public/inputValidations API.
   *    - country: ISO3166-1 alpha-2 two letter, e.g. US.
   *    - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date.
   *    <br/>
   *    <b>Not required attributes:</b>
   *    - displayName: Please refer to the rule from /v3/public/inputValidations API.
   *    </p>
   *    <p>This method support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.</p>
   *
   */
  createUser(data: CreateUserRequestV4) {
    return this.newInstance4().postV4Users(data)
  }

  /**
   * <p>This method retrieves platform accounts linked to user.
   *          <br>It will query all linked platform accounts and result will be distinct & grouped, same platform we will pick oldest linked one.
   *          <br>Required valid user authorization.</p>
   */
  getUserDistinctLinkedPlatform(userId: string) {
    return this.newInstance().fetchV3UsersByUseridDistinctPlatforms(userId)
  }

  /**
   * Required valid user authorization.
   *      <p>Unlink user's account from for all third platforms. </p>
   */
  unLinkAccountFromPlatformDistinct(platformId: string) {
    return this.newInstance().deleteV3UsersMePlatformsByPlatformidAll(platformId)
  }

  /**
   * Required valid user authorization
   * <p>The verification link is sent to email address</p>
   * <p>It will not send request if user email is already verified</p>
   *
   */
  sendVerificationLink(languageTag: string) {
    return this.newInstance().postIamV3PublicUsersMeVerifyLinkRequest({ languageTag })
  }

  /**
   * <p>This method retrieves platform accounts linked to user. Required valid user authorization.
   *          <br>action code: 10128 </p>
   */
  getLinkedAccount(userId: string) {
    return this.newInstance().fetchV3UsersByUseridPlatforms(userId)
  }

  /**
   * @internal
   */
  newInstance() {
    return new Users$(Network.create(this.conf), this.namespace, this.cache)
  }

  /**
   * @internal
   */
  newInstance4() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }
}
