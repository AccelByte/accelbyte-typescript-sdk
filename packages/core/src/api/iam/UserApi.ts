/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CreateUserRequestV4 } from '@od-web-sdk/generated-public/iam/definitions/CreateUserRequestV4'
import { EmailUpdateRequestV4 } from '@od-web-sdk/generated-public/iam/definitions/EmailUpdateRequestV4'
import { LinkPlatformAccountRequest } from '@od-web-sdk/generated-public/iam/definitions/LinkPlatformAccountRequest'
import { SendRegisterVerificationCodeRequest } from '@od-web-sdk/generated-public/iam/definitions/SendRegisterVerificationCodeRequest'
import { SendVerificationCodeRequestV3 } from '@od-web-sdk/generated-public/iam/definitions/SendVerificationCodeRequestV3'
import { UnlinkUserPlatformRequest } from '@od-web-sdk/generated-public/iam/definitions/UnlinkUserPlatformRequest'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '@od-web-sdk/generated-public/iam/definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '@od-web-sdk/generated-public/iam/definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4'
import { UserPasswordUpdateV3Request } from '@od-web-sdk/generated-public/iam/definitions/UserPasswordUpdateV3Request'
import { UserUpdateRequestV3 } from '@od-web-sdk/generated-public/iam/definitions/UserUpdateRequestV3'
import { UserVerificationRequestV3 } from '@od-web-sdk/generated-public/iam/definitions/UserVerificationRequestV3'
import { Users$ } from '@od-web-sdk/generated-public/iam/Users$'
import { UsersV4$ } from '@od-web-sdk/generated-public/iam/UsersV4$'
import { ReadyPlayerMe } from '@od-web-sdk/models/ReadyPlayerMe'
import { Network } from '@od-web-sdk/utils/Network'
import { Validate } from '@od-web-sdk/utils/Validate'
import { z } from 'zod'

export class UserApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Users$(Network.create(this.conf), this.namespace, this.cache)
  }

  newInstance4() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }

  getCurrentUser = () => {
    return this.newInstance().fetchIamV3PublicUsersMe()
  }

  updateUserMe = (data: UserUpdateRequestV3) => {
    return this.newInstance().patchV3UsersMe(data)
  }

  updateEmailMe = (data: EmailUpdateRequestV4) => {
    return this.newInstance4().putV4UsersMeEmail(data)
  }

  updatePasswordMe = (data: UserPasswordUpdateV3Request) => {
    return this.newInstance().putV3UsersMePassword(data)
  }

  requestVerificationCode = (data: SendVerificationCodeRequestV3) => {
    return this.newInstance().postV3UsersMeCodeRequest(data)
  }

  verifyCode = (data: UserVerificationRequestV3) => {
    return this.newInstance().postV3UsersMeCodeVerify(data)
  }

  upgradeHeadlessAccount = (data: UpgradeHeadlessAccountWithVerificationCodeRequestV3) => {
    return this.newInstance().postV3UsersMeHeadlessCodeVerify(data)
  }

  upgradeHeadlessAccountV4 = (data: UpgradeHeadlessAccountWithVerificationCodeRequestV4) => {
    return this.newInstance4().postV4UsersMeHeadlessCodeVerify(data)
  }

  getUserLinkedPlatform = (userId: string) => {
    return this.newInstance().fetchV3UsersByUseridPlatforms(userId)
  }

  linkAccountToPlatform = ({ platformId, data }: { platformId: string; data: { ticket: string | null; redirectUri?: string | null } }) => {
    return this.newInstance().postV3UsersMePlatformsByPlatformid(platformId, data)
  }

  getLinkRequestStatus = (requestId: string) => {
    return this.newInstance().fetchV3RequestsByRequestidAsyncStatus(requestId)
  }

  linkPlatformToUserAccount = ({ userId, data }: { userId: string; data: LinkPlatformAccountRequest }) => {
    return this.newInstance().postV3UsersByUseridPlatformsLink(userId, data)
  }

  unLinkAccountFromPlatform = ({ platformId, data }: { platformId: string; data: UnlinkUserPlatformRequest }) => {
    return this.newInstance().deleteV3UsersMePlatformsByPlatformid(platformId, data)
  }

  getThirdPartyURL = ({
    platformId,
    queryParams
  }: {
    platformId: string
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  }) => {
    return this.newInstance().fetchV3UsersMePlatformsByPlatformidWebLink(platformId, queryParams)
  }

  getAgeRestrictionByCountry = (countryCode: string) => {
    return this.newInstance().fetchV3AgerestrictionsCountriesByCountrycode(countryCode)
  }

  renderImageFromGlbModel(data: { model: string; scene: string }) {
    const axios = Network.create({
      ...this.conf
    })
    return Validate.responseType(() => axios.post('https://render.readyplayer.me/render', data), ReadyPlayerMe)
  }

  notifyGameSDK(url: string) {
    const axios = Network.create({
      ...this.conf
    })
    return Validate.responseType(() => axios.get(url), z.string())
  }

  requestNewUserVerificationCode(data: SendRegisterVerificationCodeRequest) {
    return this.newInstance().postV3UsersCodeRequest(data)
  }

  createUser(data: CreateUserRequestV4) {
    return this.newInstance4().postV4Users(data)
  }

  getUserDistinctLinkedPlatform(userId: string) {
    return this.newInstance().fetchV3UsersByUseridDistinctPlatforms(userId)
  }

  unLinkAccountFromPlatformDistinct(platformId: string) {
    return this.newInstance().deleteV3UsersMePlatformsByPlatformidAll(platformId)
  }

  sendVerificationLink(languageTag: string) {
    return this.newInstance().postIamV3PublicUsersMeVerifyLinkRequest({ languageTag })
  }

  getLinkedAccount(userId: string) {
    return this.newInstance().fetchV3UsersByUseridPlatforms(userId)
  }
}
