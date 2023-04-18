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
import { CountryV3Response } from './definitions/CountryV3Response'
import { CreateJusticeUserResponse } from './definitions/CreateJusticeUserResponse'
import { DistinctPlatformResponseV3 } from './definitions/DistinctPlatformResponseV3'
import { ForgotPasswordRequestV3 } from './definitions/ForgotPasswordRequestV3'
import { GetLinkHeadlessAccountConflictResponse } from './definitions/GetLinkHeadlessAccountConflictResponse'
import { GetPublisherUserV3Response } from './definitions/GetPublisherUserV3Response'
import { GetUserBanV3Response } from './definitions/GetUserBanV3Response'
import { GetUserMappingV3Array } from './definitions/GetUserMappingV3Array'
import { LinkHeadlessAccountRequest } from './definitions/LinkHeadlessAccountRequest'
import { LinkPlatformAccountRequest } from './definitions/LinkPlatformAccountRequest'
import { LinkPlatformAccountWithProgressionRequest } from './definitions/LinkPlatformAccountWithProgressionRequest'
import { LinkRequest } from './definitions/LinkRequest'
import { ListBulkUserResponse } from './definitions/ListBulkUserResponse'
import { LoginHistoriesResponse } from './definitions/LoginHistoriesResponse'
import { PlatformUserIdRequest } from './definitions/PlatformUserIdRequest'
import { PublicUserInformationResponseV3 } from './definitions/PublicUserInformationResponseV3'
import { ResetPasswordRequestV3 } from './definitions/ResetPasswordRequestV3'
import { SendRegisterVerificationCodeRequest } from './definitions/SendRegisterVerificationCodeRequest'
import { SendVerificationCodeRequestV3 } from './definitions/SendVerificationCodeRequestV3'
import { SendVerificationLinkRequest } from './definitions/SendVerificationLinkRequest'
import { UnlinkUserPlatformRequest } from './definitions/UnlinkUserPlatformRequest'
import { UpgradeHeadlessAccountV3Request } from './definitions/UpgradeHeadlessAccountV3Request'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3'
import { UserCreateFromInvitationRequestV3 } from './definitions/UserCreateFromInvitationRequestV3'
import { UserCreateRequestV3 } from './definitions/UserCreateRequestV3'
import { UserCreateResponseV3 } from './definitions/UserCreateResponseV3'
import { UserIDsRequest } from './definitions/UserIDsRequest'
import { UserInformationV3 } from './definitions/UserInformationV3'
import { UserInvitationV3 } from './definitions/UserInvitationV3'
import { UserLinkedPlatformsResponseV3 } from './definitions/UserLinkedPlatformsResponseV3'
import { UserPasswordUpdateV3Request } from './definitions/UserPasswordUpdateV3Request'
import { UserPlatforms } from './definitions/UserPlatforms'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'
import { UserVerificationRequestV3 } from './definitions/UserVerificationRequestV3'
import { Users$ } from './endpoints/Users$'
import { VerifyRegistrationCode } from './definitions/VerifyRegistrationCode'
import { WebLinkingResponse } from './definitions/WebLinkingResponse'

export function UsersApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getUsersMe(): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMe()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersVerifyLinkVerify(queryParams?: { code?: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersVerifyLinkVerify(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsers(queryParams?: {
    query?: string | null
    by?: string | null
    limit?: string | null
    offset?: string | null
  }): Promise<PublicUserInformationResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUser(data: UserCreateRequestV3): Promise<UserCreateResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeVerifyLinkRequest(data: SendVerificationLinkRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeVerifyLinkRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function patchUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeHeadlessLinkConflict(queryParams: {
    oneTimeLinkCode: string | null
  }): Promise<GetLinkHeadlessAccountConflictResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeHeadlessLinkConflict(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserReset(data: ResetPasswordRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserReset(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserForgot(data: ForgotPasswordRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserForgot(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeHeadlesLinkWithProgression(data: LinkHeadlessAccountRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesLinkWithProgression(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserBulkBasic(data: UserIDsRequest): Promise<ListBulkUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserBulkBasic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserCodeVerify(data: VerifyRegistrationCode): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateUserMePassword(data: UserPasswordUpdateV3Request): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMePassword(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersAvailability(queryParams: { field: string | null; query: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersAvailability(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserCodeRequest(data: SendRegisterVerificationCodeRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getBans_ByUserId(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; limit?: number; before?: string | null; after?: string | null }
  ): Promise<GetUserBanV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBans_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeCodeVerify(data: UserVerificationRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeCodeRequest(data: SendVerificationCodeRequestV3): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeCodeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postValidate_ByUserId(userId: string, data: { password: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postValidate_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPlatforms_ByUserId(
    userId: string,
    queryParams?: { limit?: number; after?: string | null; before?: string | null }
  ): Promise<UserLinkedPlatformsResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlatforms_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPublisher_ByUserId(userId: string): Promise<GetPublisherUserV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublisher_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeHeadlesVerify(
    data: UpgradeHeadlessAccountV3Request,
    queryParams?: { needVerificationCode?: boolean | null }
  ): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesVerify(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getInformation_ByUserId(userId: string): Promise<UserInformationV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInformation_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUserInvite_ByInvitationId(invitationId: string): Promise<UserInvitationV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserInvite_ByInvitationId(invitationId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserInvite_ByInvitationId(
    invitationId: string,
    data: UserCreateFromInvitationRequestV3
  ): Promise<UserCreateResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUser_ByPlatformId(platformId: string, data: PlatformUserIdRequest): Promise<UserPlatforms> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createPlatformLink_ByUserId(userId: string, data: LinkPlatformAccountRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPlatformLink_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV3): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getLoginsHistories_ByUserId(
    userId: string,
    queryParams?: { before?: number; after?: number; limit?: number }
  ): Promise<LoginHistoriesResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLoginsHistories_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postUserMePlatform_ByPlatformId(
    platformId: string,
    data: { ticket: string | null; redirectUri?: string | null }
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMePlatform_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deleteUserMePlatform_ByPlatformId(platformId: string, data: UnlinkUserPlatformRequest): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMePlatform_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDistinctPlatforms_ByUserId(userId: string): Promise<DistinctPlatformResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDistinctPlatforms_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPlatformsJustice_ByUserId(userId: string): Promise<GetUserMappingV3Array> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlatformsJustice_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getAsyncStatus_ByRequestId(requestId: string): Promise<LinkRequest> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAsyncStatus_ByRequestId(requestId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deleteAllMeUser_ByPlatformId(platformId: string): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteAllMeUser_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postForceMeUser_ByPlatformId(platformId: string, data: { ticket: string | null }): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postForceMeUser_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getAgerestrictionCountry_ByCountryCode(countryCode: string): Promise<CountryV3Response> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAgerestrictionCountry_ByCountryCode(countryCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getWebLinkMeUsers_ByPlatformId(
    platformId: string,
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  ): Promise<WebLinkingResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWebLinkMeUsers_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createPlatformLinkWithProgression_ByUserId(
    userId: string,
    data: LinkPlatformAccountWithProgressionRequest
  ): Promise<unknown> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPlatformLinkWithProgression_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMePlatformJustice_ByTargetNamespace(targetNamespace: string): Promise<CreateJusticeUserResponse> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMePlatformJustice_ByTargetNamespace(targetNamespace)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUser_ByPlatformId_ByPlatformUserId(platformId: string, platformUserId: string): Promise<UserResponseV3> {
    const $ = new Users$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByPlatformId_ByPlatformUserId(platformId, platformUserId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getWebLinkEstablishMeUsers_ByPlatformId(platformId: string, queryParams: { state: string | null }): Promise<unknown> {
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
    updateUserMe,
    patchUserMe,
    getUsersMeHeadlessLinkConflict,
    createUserReset,
    createUserForgot,
    createUserMeHeadlesLinkWithProgression,
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
    postUserMePlatform_ByPlatformId,
    deleteUserMePlatform_ByPlatformId,
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
    getWebLinkEstablishMeUsers_ByPlatformId
  }
}
