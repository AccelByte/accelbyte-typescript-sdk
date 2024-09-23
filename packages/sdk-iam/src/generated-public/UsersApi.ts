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
import { UserProfileUpdateAllowStatus } from '../generated-definitions/UserProfileUpdateAllowStatus.js'
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

export function UsersApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsersMe_v3(queryParams?: { includeAllPlatforms?: boolean | null }): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMe_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUser(data: UserCreateRequest): Promise<AxiosResponse<UserCreateResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeProfileStatus_v3(): Promise<AxiosResponse<UserProfileUpdateAllowStatus>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeProfileStatus_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersAdmin(queryParams?: {
    after?: number
    before?: number
    limit?: number
    roleId?: string | null
  }): Promise<AxiosResponse<GetAdminUsersResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersAdmin(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersVerifyLinkVerify_v3(queryParams?: { code?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersVerifyLinkVerify_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersSearch(queryParams?: { query?: string | null }): Promise<AxiosResponse<SearchUsersResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUser_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId(userId: string): Promise<AxiosResponse<UserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUser_ByUserId(userId: string, data: UserUpdateRequest): Promise<AxiosResponse<UserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUser_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersByLoginId(queryParams?: { loginId?: string | null }): Promise<AxiosResponse<PublicUserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersByLoginId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUser_v2(data: UserCreateRequest): Promise<AxiosResponse<UserCreateResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsers_v3(queryParams?: {
    by?: string | null
    limit?: number
    offset?: number
    platformBy?: string | null
    platformId?: string | null
    query?: string | null
  }): Promise<AxiosResponse<PublicUserInformationResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUser_v3(data: UserCreateRequestV3): Promise<AxiosResponse<UserCreateResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeVerifyLinkRequest_v3(data: SendVerificationLinkRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeVerifyLinkRequest_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBan_ByUserId(userId: string, data: BanCreateRequest): Promise<AxiosResponse<UserBanResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBan_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUserMe_v3(data: PublicUserUpdateRequestV3): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUserMe_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMe_v3(data: PublicUserUpdateRequestV3): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMe_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeHeadlessLinkConflict_v3(queryParams: {
    oneTimeLinkCode: string | null
  }): Promise<AxiosResponse<GetLinkHeadlessAccountConflictResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeHeadlessLinkConflict_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBans_ByUserId(userId: string): Promise<AxiosResponse<UserBanResponseArray>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserResetPassword(data: ResetPasswordRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserResetPassword(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRole_ByUserId(userId: string, data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserForgotPassword(data: SendVerificationCodeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserForgotPassword(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersListByLoginIds(queryParams?: { loginIds?: string | null }): Promise<AxiosResponse<PublicUsersResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersListByLoginIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnable_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserReset_v3(data: ResetPasswordRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserReset_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisable_ByUserId(userId: string, data: DisableUserRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersByPlatformUserId(queryParams: {
    platformID: string | null
    platformUserID: string | null
  }): Promise<AxiosResponse<PublicUserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersByPlatformUserId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserForgot_v3(data: ForgotPasswordRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserForgot_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePassword_ByUserId(userId: string, data: UserPasswordUpdateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePassword_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postCrosslink_ByUserId(
    userId: string,
    data: { linkingToken: string | null; platformId?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postCrosslink_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatforms_ByUserId(userId: string): Promise<AxiosResponse<UserLinkedPlatformArray>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatforms_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPublisher_ByUserId(userId: string): Promise<AxiosResponse<GetPublisherUserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublisher_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId_v2(userId: string): Promise<AxiosResponse<UserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_v2(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUser_ByUserId_v2(userId: string, data: UserUpdateRequest): Promise<AxiosResponse<UserResponseArray>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUser_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId_v3(userId: string): Promise<AxiosResponse<PublicUserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeHeadlesLinkWithProgression_v3(data: LinkHeadlessAccountRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesLinkWithProgression_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserPlatform_v3(data: UsersPlatformInfosRequestV3): Promise<AxiosResponse<UsersPlatformInfosResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserPlatform_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInformation_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInformation_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInformation_ByUserId(userId: string): Promise<AxiosResponse<UserInformation>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInformation_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByUserId(userId: string, data: Permissions): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserBulkBasic_v3(data: UserIDsRequest): Promise<AxiosResponse<ListBulkUserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserBulkBasic_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateVerification_ByUserId(userId: string, data: UserVerificationRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVerification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserCodeVerify_v3(data: VerifyRegistrationCode): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserCodeVerify_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMePassword_v3(data: UserPasswordUpdateV3Request): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMePassword_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersAvailability_v3(queryParams: { field: string | null; query: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersAvailability_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserCodeRequest_v3(data: SendRegisterVerificationCodeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserCodeRequest_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRole_ByUserId_ByRoleId(userId: string, roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByUserId_ByRoleId(userId, roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRole_ByUserId_ByRoleId(userId: string, roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId_ByRoleId(userId, roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBans_ByUserId_v2(
    userId: string,
    queryParams?: { activeOnly?: boolean | null }
  ): Promise<AxiosResponse<UserBanResponseArray>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserResetPassword_v2(data: ResetPasswordRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserResetPassword_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBans_ByUserId_v3(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<GetUserBanV3Response>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserForgotPassword_v2(data: SendVerificationCodeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserForgotPassword_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeCodeVerify_v3(data: UserVerificationRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeCodeVerify_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLoginsHistories_ByUserId(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<AxiosResponse<LoginHistoriesResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLoginsHistories_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateVerificationcode_ByUserId(userId: string, data: SendVerificationCodeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVerificationcode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeCodeRequest_v3(data: SendVerificationCodeRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeCodeRequest_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserInputValidation_v3(data: UserInputValidationRequest): Promise<AxiosResponse<UserInputValidationResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserInputValidation_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePassword_ByUserId_v2(userId: string, data: UserPasswordUpdateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePassword_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postValidate_ByUserId_v3(userId: string, data: { password: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postValidate_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnable_ByUserId_ByBanId(userId: string, banId: string): Promise<AxiosResponse<UserBanResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId_ByBanId(userId, banId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatforms_ByUserId_v3(
    userId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number; platformId?: string | null }
  ): Promise<AxiosResponse<UserLinkedPlatformsResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatforms_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPublisher_ByUserId_v3(userId: string): Promise<AxiosResponse<GetPublisherUserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublisher_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeHeadlesVerify_v3(
    data: UpgradeHeadlessAccountV3Request,
    queryParams?: { needVerificationCode?: boolean | null }
  ): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesVerify_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisable_ByUserId_ByBanId(userId: string, banId: string): Promise<AxiosResponse<UserBanResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId_ByBanId(userId, banId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInformation_ByUserId_v3(userId: string): Promise<AxiosResponse<UserInformationV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInformation_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUpgradeHeadlessAccount_ByUserId(
    userId: string,
    data: UpgradeHeadlessAccountRequest
  ): Promise<AxiosResponse<UserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUpgradeHeadlessAccount_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUserInvite_ByInvitationId_v3(invitationId: string): Promise<AxiosResponse<UserInvitationV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUserInvite_ByInvitationId_v3(invitationId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserInvite_ByInvitationId_v3(
    invitationId: string,
    data: UserCreateRequestV3
  ): Promise<AxiosResponse<UserCreateResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserInvite_ByInvitationId_v3(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUser_ByPlatformId_v3(
    platformId: string,
    data: PlatformUserIdRequest,
    queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
  ): Promise<AxiosResponse<UserPlatforms>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser_ByPlatformId_v3(platformId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPlatformLink_ByUserId_v3(userId: string, data: LinkPlatformAccountRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlatformLink_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeHeadlesCodeVerify_v3(
    data: UpgradeHeadlessAccountWithVerificationCodeRequestV3
  ): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeHeadlesCodeVerify_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLoginsHistories_ByUserId_v3(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<AxiosResponse<LoginHistoriesResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLoginsHistories_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUserMePlatform_ByPlatformId_v3(
    platformId: string,
    data: UnlinkUserPlatformRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMePlatform_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMePlatform_ByPlatformId_v3(
    platformId: string,
    data: { ticket: string | null; redirectUri?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMePlatform_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLink_ByUserId_ByPlatformId(
    userId: string,
    platformId: string,
    data: { ticket: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLink_ByUserId_ByPlatformId(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformsJustice_ByUserId_v2(userId: string): Promise<AxiosResponse<GetUserMappingArray>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsJustice_ByUserId_v2(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDistinctPlatforms_ByUserId_v3(userId: string): Promise<AxiosResponse<DistinctPlatformResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDistinctPlatforms_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformsJustice_ByUserId_v3(userId: string): Promise<AxiosResponse<GetUserMappingV3Array>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsJustice_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAsyncStatus_ByRequestId_v3(requestId: string): Promise<AxiosResponse<LinkRequest>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAsyncStatus_ByRequestId_v3(requestId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUnlink_ByUserId_ByPlatformId(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUnlink_ByUserId_ByPlatformId(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAllMeUser_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAllMeUser_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByUserId_ByResource_ByAction(
    userId: string,
    resource: string,
    action: number
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByUserId_ByResource_ByAction(userId, resource, action)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByUserId_ByResource_ByAction(
    userId: string,
    resource: string,
    action: number,
    data: UpdatePermissionScheduleRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByUserId_ByResource_ByAction(userId, resource, action, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postForceMeUser_ByPlatformId_v3(platformId: string, data: { ticket: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postForceMeUser_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAgerestrictions_ByCountryCode_v2(countryCode: string): Promise<AxiosResponse<Country>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgerestrictions_ByCountryCode_v2(countryCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAgerestrictionCountry_ByCountryCode_v3(countryCode: string): Promise<AxiosResponse<CountryV3Response>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgerestrictionCountry_ByCountryCode_v3(countryCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformJustice_ByUserId_ByTargetNamespace(
    userId: string,
    targetNamespace: string
  ): Promise<AxiosResponse<GetUserMapping>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformJustice_ByUserId_ByTargetNamespace(userId, targetNamespace)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePlatformJustice_ByUserId_ByTargetNamespace(
    userId: string,
    targetNamespace: string
  ): Promise<AxiosResponse<GetUserJusticePlatformAccountResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlatformJustice_ByUserId_ByTargetNamespace(userId, targetNamespace)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWebLinkMeUsers_ByPlatformId_v3(
    platformId: string,
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  ): Promise<AxiosResponse<WebLinkingResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWebLinkMeUsers_ByPlatformId_v3(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLink_ByUserId_ByPlatformId_v2(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLink_ByUserId_ByPlatformId_v2(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLink_ByUserId_ByPlatformId_v2(
    userId: string,
    platformId: string,
    data: { ticket: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLink_ByUserId_ByPlatformId_v2(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPlatformLinkWithProgression_ByUserId_v3(
    userId: string,
    data: LinkPlatformAccountWithProgressionRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlatformLinkWithProgression_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMePlatformJustice_ByTargetNamespace_v3(
    targetNamespace: string
  ): Promise<AxiosResponse<CreateJusticeUserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMePlatformJustice_ByTargetNamespace_v3(targetNamespace)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByPlatformId_ByPlatformUserId_v3(
    platformId: string,
    platformUserId: string
  ): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByPlatformId_ByPlatformUserId_v3(platformId, platformUserId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUpgradeHeadlessAccountWithVerificationCode_ByUserId(
    userId: string,
    data: UpgradeHeadlessAccountWithVerificationCodeRequest
  ): Promise<AxiosResponse<UserResponse>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUpgradeHeadlessAccountWithVerificationCode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postWebLinkProcesMeUser_ByPlatformId_v3(
    platformId: string,
    data: { state: string | null; code?: string | null }
  ): Promise<AxiosResponse<LinkRequest>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postWebLinkProcesMeUser_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWebLinkEstablishMeUsers_ByPlatformId_v3(
    platformId: string,
    queryParams: { state: string | null; code?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Users$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWebLinkEstablishMeUsers_ByPlatformId_v3(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get my user data __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * account id * display name * avatar * __Xbox(live, xblweb)__ * xuid or pxuid * display name * __Steam(steam, steamopenid)__ * steam id * display name * avatar * __EpicGames(epicgames)__ * epic account id * display name action code : 10147
     */
    getUsersMe_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [POST]_** - **Substitute endpoint: _/iam/v4/public/namespaces/{namespace}/users [POST]_** - **Note:** 1. v3 &amp; v4 introduce optional verification code 2. format difference（Pascal case =&gt; Camel case) Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. 2. **PHONEPASSWD**: an authentication type used for new user registration through phone number. Country use ISO3166-1 alpha-2 two letter, e.g. US.
     */
    createUser,
    /**
     * This API is for user to get self profile update allow status. Note: If the config is not found, this API will return a config with unlimited.
     */
    getUsersMeProfileStatus_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/admin/namespaces/{namespace}/roles/{roleId}/users [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status
     */
    getUsersAdmin,

    getUsersVerifyLinkVerify_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_** Search all users that match the query on these fields: all login IDs (email address, phone number, and platform user id), userID, display name, and on the specified namespace. If the query is not defined, then it searches all users on the specified namespace.
     */
    getUsersSearch,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/information [DELETE]_**
     */
    deleteUser_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/users/{userId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_** - **Note:** format difference in response: Pascal case =&gt; Camel case
     */
    getUser_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint([PUT]): _/iam/v3/public/namespaces/{namespace}/users/me [PUT]_** - **Substitute endpoint([PATCH]): _/iam/v3/public/namespaces/{namespace}/users/me [PATCH]_** - **Substitute endpoint([PATCH]): _/iam/v4/public/namespaces/{namespace}/users/me [PATCH]_** - **Note:** 1. Prefer [PATCH] if client support PATCH method 2. Difference in V3/v4 request body, format difference: Pascal case =&gt; Camel case This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
     */
    updateUser_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [GET]_**
     */
    getUsersByLoginId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [POST]_** - **Substitute endpoint: _/iam/v4/public/namespaces/{namespace}/users [POST]_** - **Note:** 1. v3 &amp; v4 introduce optional verification code 2. format difference（Pascal case =&gt; Camel case) Available Authentication Types: 1. *EMAILPASSWD*: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US.
     */
    createUser_v2,
    /**
     * This endpoint search all users on the specified namespace that match the query on these fields: display name, unique display name, username or by 3rd party display name. The query length should between 3-20, otherwise will not query the database. The default limit value is 20. ## Searching by 3rd party platform **Note: searching by 3rd party platform display name will use exact query, not fuzzy query.** Step when searching by 3rd party platform display name: 1. set __by__ to __thirdPartyPlatform__ 2. set __platformId__ to the _supported platform id_ 3. set __platformBy__ to __platformDisplayName__ **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    getUsers_v3,
    /**
     * Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. * **code**: this is required when mandatoryEmailVerificationEnabled config is true. please refer to the config from /iam/v3/public/namespaces/{namespace}/config/{configKey} [GET] API. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
     */
    createUser_v3,
    /**
     * The verification link is sent to email address It will not send request if user email is already verified
     */
    createUserMeVerifyLinkRequest_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
     */
    createBan_ByUserId,
    /**
     * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
     */
    patchUserMe_v3,
    /**
     * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. **Important notes:** This endpoint provides support for client that doesn&#39;t have PATCH support, i.e. UE4 before v4.23 released. If the client support PATCH method, use [PATCH] /iam/v3/public/namespaces/{namespace}/users/me instead action code : 10103
     */
    updateUserMe_v3,
    /**
     * Note: 1. My account should be full account 2. My account not linked to request headless account&#39;s third platform. After client resolving the conflict, it will call endpoint &lt;code&gt;/iam/v3/public/users/me/headless/linkWithProgression [POST]&lt;/code&gt;
     */
    getUsersMeHeadlessLinkConflict_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
     */
    getBans_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/reset [POST]_**
     */
    createUserResetPassword,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
     */
    updateRole_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/forgot [POST]_** **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address.
     */
    createUserForgotPassword,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(query by email list): _/iam/v3/public/namespaces/{namespace}/users/bulk/basic [POST]_** - **Substitute endpoint(query by user id list): _/iam/v3/admin/namespaces/{namespace}/users/search/bulk [POST]_**
     */
    getUsersListByLoginIds,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
     */
    updateEnable_ByUserId,
    /**
     * action code: 10105
     */
    createUserReset_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
     */
    updateDisable_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId} [GET]_** - **Note:** 1. difference in V3 response, format difference: Pascal case =&gt; Camel case
     */
    getUsersByPlatformUserId,
    /**
     * **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address. action code : 10104
     */
    createUserForgot_v3,
    /**
     * @deprecated
     *  ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/password [PUT]_**
     */
    updatePassword_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** Access token from original namespace is needed as authorization header. Access token from designated account needed as form parameter to verify the ownership of that account. When platformID (device platfom ID) is specified, platform login method for that specific platform ID is removed. This means to protect account from second hand device usage.
     */
    postCrosslink_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms [GET]_** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms [GET]_** ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user.
     */
    getPlatforms_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/publisher [GET]_** **Restriction:** Path Parameter *namespace* can be provided only with game namespace
     */
    getPublisher_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/users/{userId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_** - **Note:** format difference in response: Pascal case =&gt; Camel case
     */
    getUser_ByUserId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint([PUT]): _/iam/v3/public/namespaces/{namespace}/users/me [PUT]_** - **Substitute endpoint([PATCH]): _/iam/v3/public/namespaces/{namespace}/users/me [PATCH]_** - **Substitute endpoint([PATCH]): _/iam/v4/public/namespaces/{namespace}/users/me [PATCH]_** - **Note:** 1. Prefer [PATCH] if client support PATCH method 2. Difference in V3/v4 request body, format difference: Pascal case =&gt; Camel case This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag}
     */
    patchUser_ByUserId_v2,
    /**
     * @deprecated
     * This endpoint retrieve user attributes. action code: 10129 **Substitute endpoint:** /v4/public/namespaces/{namespace}/users/{userId} [READ]
     */
    getUser_ByUserId_v3,
    /**
     * Note: 1. My account should be full account 2. My account not linked to headless account&#39;s third platform.
     */
    createUserMeHeadlesLinkWithProgression_v3,
    /**
     * Note: 1. the max count of user ids in the request is 100 2. if platform id is not empty, the result will only contain the corresponding platform infos 3. if platform id is empty, the result will contain all the supported platform infos __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * account id * display name * avatar * __Xbox(live, xblweb)__ * xuid or pxuid * display name * __Steam(steam, steamopenid)__ * steam id * display name * avatar * __EpicGames(epicgames)__ * epic account id * display name
     */
    createUserPlatform_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/information [DELETE]_**
     */
    deleteInformation_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/information [GET]_**
     */
    getInformation_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions [POST]_** This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByUserId,
    /**
     * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace - **Result will include displayName(if it exists)**
     */
    createUserBulkBasic_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/code/verify [POST]_** Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : *email* or *phone*
     */
    updateVerification_ByUserId,
    /**
     * Verify the registration code
     */
    createUserCodeVerify_v3,
    /**
     * action code: 10107
     */
    updateUserMePassword_v3,
    /**
     * Check user&#39;s account availability. Available field : - displayName - uniqueDisplayName - username If request include access token with user ID data, that user ID will be excluded from availability check. For example, in case user update his emailAddress, he can use his own emailAddress to update his account. Response Code : - Account Available : 404 (not found) - Account Not Available : 204 (no content)
     */
    getUsersAvailability_v3,
    /**
     * This endpoint will validate the request&#39;s email address. If it already been used, will response 409. If it is available, we will send a verification code to this email address. This code can be verified by this [endpoint](#operations-Users-PublicVerifyRegistrationCode).
     */
    createUserCodeRequest_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId} [DELETE]_**
     */
    deleteRole_ByUserId_ByRoleId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId} [POST]_**
     */
    updateRole_ByUserId_ByRoleId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/bans [GET]_**
     */
    getBans_ByUserId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/reset [POST]_**
     */
    createUserResetPassword_v2,
    /**
     * Notes: - This endpoint retrieve the first page of the data if after and before parameters is empty - **The pagination is not working yet** **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    getBans_ByUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/forgot [POST]_** **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address.
     */
    createUserForgotPassword_v2,
    /**
     * Will consume code if validateOnly is set false Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** action code: 10107
     */
    createUserMeCodeVerify_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/logins/histories [GET]_** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/logins/histories [GET]_** Notes for this endpoint: - This endpoint retrieve the first page of the data if &#39;after&#39; and &#39;before&#39; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &#39;after&#39; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &#39;before&#39; parameter with valid data Unix timestamp.
     */
    getLoginsHistories_ByUserId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/code/request [POST]_** The verification code is sent to either the phone number or email address. It depends on the LoginID&#39;s value. Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the loginId field&#39;s value is already used by others by returning HTTP Status Code 409.
     */
    updateVerificationcode_ByUserId,
    /**
     * The verification code is sent to email address Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
     */
    createUserMeCodeRequest_v3,
    /**
     * Validate user&#39;s input. -------- **note:** - this endpoint will check the input validation and profanity filter service(if this is enabled) - the namespace should be publisher namespace
     */
    createUserInputValidation_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/password [PUT]_**
     */
    updatePassword_ByUserId_v2,
    /**
     * This endpoint is used to validate the user password. This endpoint validate the user password by specifying the userId and password. **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    postValidate_ByUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId} [PATCH]_**
     */
    updateEnable_ByUserId_ByBanId,
    /**
     * This endpoint retrieves platform accounts linked to user. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 **Authentication:** The _**userId**_ parameter should match the one in the access token. action code: 10128
     */
    getPlatforms_ByUserId_v3,
    /**
     * **Restriction:** Path Parameter **namespace** can be provided only with game namespace
     */
    getPublisher_ByUserId_v3,
    /**
     * action code : 10124 if set NeedVerificationCode = true, IAM will send verification code into email user can use that verification code to verify user through /iam/v3/public/namespaces/{namespace}/users/me/code/verify
     */
    createUserMeHeadlesVerify_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId} [PATCH]_** **Notes for using IAM in publisher - game studio scenarios** The endpoint allows: - The admin user in publisher namespace disables user’s ban in publisher namespace. - The admin user in game namespace disables user’s ban in game namespace. - The admin user in publisher namespace disables user’s ban in publisher namespace. Other scenarios are not supported and will return 403: Forbidden.
     */
    updateDisable_ByUserId_ByBanId,
    /**
     * This endpoint retrieves user info and linked platform accounts. **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    getInformation_ByUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/headless/verify [POST]_**
     */
    updateUpgradeHeadlessAccount_ByUserId,
    /**
     * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
     */
    getUserInvite_ByInvitationId_v3,
    /**
     * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
     */
    createUserInvite_ByInvitationId_v3,
    /**
     * @deprecated
     * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    createUser_ByPlatformId_v3,
    /**
     * It is going to be **DEPRECATED**. Update Platform Account relation to current User Account. Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be transferred. If the data is tight to game user ID, the user will have the game progression data. **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    createPlatformLink_ByUserId_v3,
    /**
     * If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
     */
    createUserMeHeadlesCodeVerify_v3,
    /**
     * Notes for this endpoint: - This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp. **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    getLoginsHistories_ByUserId_v3,
    /**
     * @deprecated
     * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
     */
    deleteUserMePlatform_ByPlatformId_v3,
    /**
     * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **googleplaygames**: The ticket’s value is the authorization code returned by Google play games OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **ps4web**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps4**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps5**: The ticket’s value is the authorization code returned by PSN OAuth. - **xblweb**: The ticket’s value is the authorization code returned by XBox Live OAuth. - **live**: The ticket’s value is the XSTS token. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the id_token returned by Nintendo OAuth. - **netflix**: The ticket’s value is GAT (Gamer Access Token) returned by Netflix backend. - **snapchat**: The ticket’s value is authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken. action code : 10144
     */
    postUserMePlatform_ByPlatformId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth.
     */
    postLink_ByUserId_ByPlatformId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/justice [GET]_** This endpoint gets list justice platform account by providing publisher namespace and publisher userID.
     */
    getPlatformsJustice_ByUserId_v2,
    /**
     * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts. The results will be distinct and grouped by platform, and for each platform, we will select the oldest linked one. **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    getDistinctPlatforms_ByUserId_v3,
    /**
     * This endpoint gets list justice platform account by providing publisher namespace and publisher userID. **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    getPlatformsJustice_ByUserId_v3,
    /**
     * This endpoint is used to get linking status. This API need logged user and user can only request its own linking status.
     */
    getAsyncStatus_ByRequestId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [DELETE]_** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **justice**: A user might have several &#39;justice’ platform on different namespaces. That’s why the platform_namespace need to be specified when the platform ID is ‘justice’. The platform_namespace is the designated user’s namespace. Unlink user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Unlinking justice platform will enable password token grant and password update.
     */
    postUnlink_ByUserId_ByPlatformId,
    /**
     * Unlink user&#39;s account from third platform in all namespaces. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: to unlink steam third party account, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 Unlink platform account associated with a group: If user unlink platform account associated with a group, the API logic will unlink all of platform account under that group as well. example: if user unlink from ps4, the API logic will unlink ps5 and ps4web as well
     */
    deleteAllMeUser_ByPlatformId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action} [DELETE]_**
     */
    deletePermission_ByUserId_ByResource_ByAction,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions [POST]_** This endpoint will update existing permission (bitwise OR the action) if found one with same resource, otherwise it will append a new permission Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByUserId_ByResource_ByAction,
    /**
     * Force linking user account with platform. If this platform account was already linked to another user account, this endpoint will perform force linking and remove platform from that conflict user, not only from the current request namespace but also include all the enrolled namespaces. If current user have linked to this platform with another platform account (include once linked but it is unlinked now), it will not allow user to perform linking. ## Supported platforms: - **steam**: The platform_token’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the id_token returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
     */
    postForceMeUser_ByPlatformId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/agerestrictions/countries/{countryCode} [GET]_**
     */
    getAgerestrictions_ByCountryCode_v2,
    /**
     * Get age restriction by country code. It will always get by publisher namespace
     */
    getAgerestrictionCountry_ByCountryCode_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace} [GET]_** This endpoint requires the client access token as the bearer token This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace. **Will create game user id if not exists.**
     */
    getPlatformJustice_ByUserId_ByTargetNamespace,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace} [GET]_** This endpoint requires the client access token as the bearer token The endpoint returns user Justice platform account linked with the given user. If the user Justice platform account doesn&#39;t exist in the designated namespace, the endpoint is going to *create and return the new Justice platform account.* The newly user Justice platform account is going to be forced to perform token grant through the given user and can&#39;t perform password update ### Read Justice Platform Account UserID Without permission the UserID is going to be censored and replaced with “Redacted” text.
     */
    updatePlatformJustice_ByUserId_ByTargetNamespace,
    /**
     * This endpoint is used to generate third party login page which will redirected to establish endpoint. Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
     */
    getWebLinkMeUsers_ByPlatformId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [DELETE]_** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
     */
    deleteLink_ByUserId_ByPlatformId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth.
     */
    postLink_ByUserId_ByPlatformId_v2,
    /**
     * Force update other account&#39;s Platform Account relation to current User Account. This endpoint can transfer progression from 3rd platform binding account&#39;s to current account. This endpoint need the same requestID which also used in [Get link status](#operations-Users-PublicGetAsyncStatus). **Authentication:** The _**userId**_ parameter should match the one in the access token.
     */
    createPlatformLinkWithProgression_ByUserId_v3,
    /**
     * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
     */
    createUserMePlatformJustice_ByTargetNamespace_v3,
    /**
     * Get User By Platform User ID. This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    getUser_ByPlatformId_ByPlatformUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/headless/code/verify [POST]_** The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint.
     */
    updateUpgradeHeadlessAccountWithVerificationCode_ByUserId,
    /**
     * This endpoint is used to process third party account link, this endpoint will return the link status directly instead of redirecting to the original page. The param **state** comes from the response of &lt;code&gt;/users/me/platforms/{platformId}/web/link&lt;/code&gt; Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
     */
    postWebLinkProcesMeUser_ByPlatformId_v3,
    /**
     * This endpoint is used by third party to redirect the code for the purpose of linking the account third party to IAM account. Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
     */
    getWebLinkEstablishMeUsers_ByPlatformId_v3
  }
}
