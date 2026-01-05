/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { AdminBulkUserRequest } from '../generated-definitions/AdminBulkUserRequest.js'
import { AgeRestrictionRequest } from '../generated-definitions/AgeRestrictionRequest.js'
import { AgeRestrictionRequestV3 } from '../generated-definitions/AgeRestrictionRequestV3.js'
import { AgeRestrictionResponse } from '../generated-definitions/AgeRestrictionResponse.js'
import { AgeRestrictionResponseV3 } from '../generated-definitions/AgeRestrictionResponseV3.js'
import { BanCreateRequest } from '../generated-definitions/BanCreateRequest.js'
import { BanUpdateRequest } from '../generated-definitions/BanUpdateRequest.js'
import { Country } from '../generated-definitions/Country.js'
import { CountryAgeRestrictionArray } from '../generated-definitions/CountryAgeRestrictionArray.js'
import { CountryAgeRestrictionRequest } from '../generated-definitions/CountryAgeRestrictionRequest.js'
import { CountryAgeRestrictionV3Request } from '../generated-definitions/CountryAgeRestrictionV3Request.js'
import { CountryV3Response } from '../generated-definitions/CountryV3Response.js'
import { CountryV3ResponseArray } from '../generated-definitions/CountryV3ResponseArray.js'
import { CreateJusticeUserResponse } from '../generated-definitions/CreateJusticeUserResponse.js'
import { CursorGetUserRequest } from '../generated-definitions/CursorGetUserRequest.js'
import { CursorGetUserResponse } from '../generated-definitions/CursorGetUserResponse.js'
import { DisableUserRequest } from '../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../generated-definitions/DistinctPlatformResponseV3.js'
import { GetBulkUserBansRequest } from '../generated-definitions/GetBulkUserBansRequest.js'
import { GetUserBanSummaryV3 } from '../generated-definitions/GetUserBanSummaryV3.js'
import { GetUserBanV3Response } from '../generated-definitions/GetUserBanV3Response.js'
import { GetUserMappingArray } from '../generated-definitions/GetUserMappingArray.js'
import { GetUserMappingV3 } from '../generated-definitions/GetUserMappingV3.js'
import { GetUsersResponseWithPaginationV3 } from '../generated-definitions/GetUsersResponseWithPaginationV3.js'
import { InviteUserRequestV3 } from '../generated-definitions/InviteUserRequestV3.js'
import { InviteUserResponseV3 } from '../generated-definitions/InviteUserResponseV3.js'
import { LinkPlatformAccountRequest } from '../generated-definitions/LinkPlatformAccountRequest.js'
import { LinkingHistoryResponseWithPaginationV3 } from '../generated-definitions/LinkingHistoryResponseWithPaginationV3.js'
import { ListBulkUserPlatformsResponse } from '../generated-definitions/ListBulkUserPlatformsResponse.js'
import { ListEmailAddressRequest } from '../generated-definitions/ListEmailAddressRequest.js'
import { ListUserInformationResult } from '../generated-definitions/ListUserInformationResult.js'
import { ListUserResponseV3 } from '../generated-definitions/ListUserResponseV3.js'
import { ListUsersWithPlatformAccountsResponse } from '../generated-definitions/ListUsersWithPlatformAccountsResponse.js'
import { LoginHistoriesResponse } from '../generated-definitions/LoginHistoriesResponse.js'
import { NamespaceRoleRequest } from '../generated-definitions/NamespaceRoleRequest.js'
import { PermissionDeleteRequest } from '../generated-definitions/PermissionDeleteRequest.js'
import { Permissions } from '../generated-definitions/Permissions.js'
import { PlatformUserIdRequest } from '../generated-definitions/PlatformUserIdRequest.js'
import { SearchUsersByPlatformIdResponse } from '../generated-definitions/SearchUsersByPlatformIdResponse.js'
import { SearchUsersResponseWithPaginationV3 } from '../generated-definitions/SearchUsersResponseWithPaginationV3.js'
import { SendVerificationCodeRequestV3 } from '../generated-definitions/SendVerificationCodeRequestV3.js'
import { TokenThirdPartyLinkStatusResponse } from '../generated-definitions/TokenThirdPartyLinkStatusResponse.js'
import { UnlinkUserPlatformRequest } from '../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdateUserDeletionStatusRequest } from '../generated-definitions/UpdateUserDeletionStatusRequest.js'
import { UpdateUserStatusRequest } from '../generated-definitions/UpdateUserStatusRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponse } from '../generated-definitions/UserBanResponse.js'
import { UserBanResponseArray } from '../generated-definitions/UserBanResponseArray.js'
import { UserBanResponseV3 } from '../generated-definitions/UserBanResponseV3.js'
import { UserDeletionStatusResponse } from '../generated-definitions/UserDeletionStatusResponse.js'
import { UserIDsRequest } from '../generated-definitions/UserIDsRequest.js'
import { UserIdentityUpdateRequestV3 } from '../generated-definitions/UserIdentityUpdateRequestV3.js'
import { UserLinkedPlatformsResponseV3 } from '../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateRequest } from '../generated-definitions/UserPasswordUpdateRequest.js'
import { UserPasswordUpdateV3Request } from '../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatformLinkHistories } from '../generated-definitions/UserPlatformLinkHistories.js'
import { UserPlatformMetadata } from '../generated-definitions/UserPlatformMetadata.js'
import { UserPlatforms } from '../generated-definitions/UserPlatforms.js'
import { UserResponse } from '../generated-definitions/UserResponse.js'
import { UserResponseV3 } from '../generated-definitions/UserResponseV3.js'
import { UserStateResponseV3 } from '../generated-definitions/UserStateResponseV3.js'
import { UserUpdateRequest } from '../generated-definitions/UserUpdateRequest.js'
import { UserUpdateRequestV3 } from '../generated-definitions/UserUpdateRequestV3.js'
import { UserVerificationRequest } from '../generated-definitions/UserVerificationRequest.js'
import { UsersUpdateRequestV3 } from '../generated-definitions/UsersUpdateRequestV3.js'
import { VerificationCodeResponse } from '../generated-definitions/VerificationCodeResponse.js'
import { UsersAdmin$ } from './endpoints/UsersAdmin$.js'

export function UsersAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getUsersMe_v3(): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMe_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsers_v2(queryParams: {
    platformId: string | null
    after?: string | null
    before?: string | null
    displayName?: string | null
    limit?: number
    loginId?: string | null
    platformUserId?: string | null
    roleId?: string | null
    userId?: string | null
  }): Promise<AxiosResponse<SearchUsersByPlatformIdResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsers_v3(queryParams?: { emailAddress?: string | null }): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUser_v3(data: UsersUpdateRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUser_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAdmins_v3(queryParams?: {
    after?: string | null
    before?: string | null
    endDate?: string | null
    limit?: number
    query?: string | null
    roleId?: string | null
    startDate?: string | null
  }): Promise<AxiosResponse<GetUsersResponseWithPaginationV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAdmins_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchUserBan_v3(
    data: GetBulkUserBansRequest,
    queryParams?: { activeOnly?: boolean | null; banType?: string | null }
  ): Promise<AxiosResponse<GetUserBanV3Response>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchUserBan_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserBulk_v3(data: AdminBulkUserRequest): Promise<AxiosResponse<ListUserInformationResult>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserBulk_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchUserCursor_v3(data: CursorGetUserRequest): Promise<AxiosResponse<CursorGetUserResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchUserCursor_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserInvite_v3(data: InviteUserRequestV3): Promise<AxiosResponse<InviteUserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserInvite_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersSearch_v3(queryParams?: {
    by?: string | null
    endDate?: string | null
    includeTotal?: boolean | null
    limit?: number
    offset?: number
    platformBy?: string | null
    platformId?: string | null
    query?: string | null
    roleIds?: string | null
    selectedFields?: string | null
    skipLoginQueue?: boolean | null
    startDate?: string | null
    tagIds?: string | null
    testAccount?: boolean | null
  }): Promise<AxiosResponse<SearchUsersResponseWithPaginationV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersSearch_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId_v2(userId: string): Promise<AxiosResponse<UserResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_v2(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUser_ByUserId_v2(userId: string, data: UserUpdateRequest): Promise<AxiosResponse<UserResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUser_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId_v3(userId: string): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUser_ByUserId_v3(userId: string, data: UserUpdateRequestV3): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUser_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAgerestrictions_v2(): Promise<AxiosResponse<AgeRestrictionResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgerestrictions_v2()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchAgerestriction_v2(data: AgeRestrictionRequest): Promise<AxiosResponse<AgeRestrictionResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAgerestriction_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAgerestrictions_v3(): Promise<AxiosResponse<AgeRestrictionResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgerestrictions_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchAgerestriction_v3(data: AgeRestrictionRequestV3): Promise<AxiosResponse<AgeRestrictionResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAgerestriction_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchUserSearchBulk_v3(data: ListEmailAddressRequest): Promise<AxiosResponse<ListUserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchUserSearchBulk_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBan_ByUserId_v2(userId: string, data: BanCreateRequest): Promise<AxiosResponse<UserBanResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBan_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBans_ByUserId_v2(
    userId: string,
    queryParams?: { activeOnly?: boolean | null }
  ): Promise<AxiosResponse<UserBanResponseArray>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBans_ByUserId_v3(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<GetUserBanV3Response>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBan_ByUserId_v3(userId: string, data: BanCreateRequest): Promise<AxiosResponse<UserBanResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBan_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersLinkhistories_v3(queryParams: {
    platformId: string | null
    limit?: number
    offset?: number
    platformUserId?: string | null
  }): Promise<AxiosResponse<LinkingHistoryResponseWithPaginationV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersLinkhistories_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRole_ByUserId_v2(userId: string, data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRole_ByUserId_ByNS_v2(userId: string, data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId_ByNS_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsers_ByRoleId_v3(
    roleId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<AxiosResponse<GetUsersResponseWithPaginationV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_ByRoleId_v3(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCodes_ByUserId_v3(userId: string): Promise<AxiosResponse<VerificationCodeResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCodes_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRole_ByUserId_v3(userId: string, data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRole_ByUserId_v3(userId: string, data: NamespaceRoleRequest[]): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRole_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getState_ByUserId_v3(userId: string): Promise<AxiosResponse<UserStateResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getState_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchUserBulkPlatform_v3(data: UserIDsRequest): Promise<AxiosResponse<ListBulkUserPlatformsResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchUserBulkPlatform_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnable_ByUserId_v2(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId_v2(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchStatus_ByUserId_v3(userId: string, data: UpdateUserStatusRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatus_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateVerify_ByUserId_v3(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVerify_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisable_ByUserId_v2(userId: string, data: DisableUserRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchCountry_ByCountryCode_v2(countryCode: string, data: CountryAgeRestrictionRequest): Promise<AxiosResponse<Country>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchCountry_ByCountryCode_v2(countryCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePassword_ByUserId_v2(userId: string, data: UserPasswordUpdateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePassword_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePassword_ByUserId_v3(userId: string, data: UserPasswordUpdateV3Request): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePassword_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersPlatformsJustice_v3(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<ListUsersWithPlatformAccountsResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersPlatformsJustice_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatforms_ByUserId_v3(
    userId: string,
    queryParams?: {
      after?: string | null
      before?: string | null
      limit?: number
      platformId?: string | null
      targetNamespace?: string | null
    }
  ): Promise<AxiosResponse<UserLinkedPlatformsResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatforms_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCountriesAgerestrictions_v2(): Promise<AxiosResponse<CountryAgeRestrictionArray>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountriesAgerestrictions_v2()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAgerestrictionsCountries_v3(): Promise<AxiosResponse<CountryV3ResponseArray>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgerestrictionsCountries_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCodeVerify_ByUserId_v3(userId: string, data: UserVerificationRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCodeVerify_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInformation_ByUserId_v3(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInformation_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByUserId_v3(userId: string, data: PermissionDeleteRequest[]): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPermission_ByUserId_v3(userId: string, data: Permissions): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPermission_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByUserId_v3(userId: string, data: Permissions): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchBan_ByUserId_ByBanId_v3(
    userId: string,
    banId: string,
    data: BanUpdateRequest
  ): Promise<AxiosResponse<UserBanResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBan_ByUserId_ByBanId_v3(userId, banId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBansSummary_ByUserId_v3(userId: string): Promise<AxiosResponse<GetUserBanSummaryV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBansSummary_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCodeRequest_ByUserId_v3(userId: string, data: SendVerificationCodeRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCodeRequest_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchUser_ByPlatformId_v3(
    platformId: string,
    data: PlatformUserIdRequest,
    queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
  ): Promise<AxiosResponse<UserPlatforms>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchUser_ByPlatformId_v3(platformId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePlatformLink_ByUserId_v3(
    userId: string,
    data: LinkPlatformAccountRequest,
    queryParams?: { skipConflict?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlatformLink_ByUserId_v3(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRole_ByUserId_ByRoleId_v3(userId: string, roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByUserId_ByRoleId_v3(userId, roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRole_ByUserId_ByRoleId_v3(userId: string, roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId_ByRoleId_v3(userId, roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDeletionStatus_ByUserId_v3(userId: string): Promise<AxiosResponse<UserDeletionStatusResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeletionStatus_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchDeletionStatus_ByUserId_v3(userId: string, data: UpdateUserDeletionStatusRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchDeletionStatus_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLoginsHistories_ByUserId_v3(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<AxiosResponse<LoginHistoriesResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLoginsHistories_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchTrustlyIdentity_ByUserId_v3(userId: string, data: UserIdentityUpdateRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchTrustlyIdentity_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDistinctPlatforms_ByUserId_v3(userId: string): Promise<AxiosResponse<DistinctPlatformResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDistinctPlatforms_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformsJustice_ByUserId_v3(userId: string): Promise<AxiosResponse<GetUserMappingArray>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsJustice_ByUserId_v3(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformsDistinct_ByUserId_v3(
    userId: string,
    queryParams?: { status?: string | null }
  ): Promise<AxiosResponse<DistinctPlatformResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsDistinct_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateHeadlesCodeVerify_ByUserId_v3(
    userId: string,
    data: UpgradeHeadlessAccountWithVerificationCodeRequestV3
  ): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateHeadlesCodeVerify_ByUserId_v3(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePlatform_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    data: UnlinkUserPlatformRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlatform_ByUserId_ByPlatformId_v3(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchAgerestrictionCountry_ByCountryCode_v3(
    countryCode: string,
    data: CountryAgeRestrictionV3Request
  ): Promise<AxiosResponse<CountryV3Response>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAgerestrictionCountry_ByCountryCode_v3(countryCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformsLinkHistories_ByUserId_v3(
    userId: string,
    queryParams: { platformId: string | null }
  ): Promise<AxiosResponse<UserPlatformLinkHistories>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsLinkHistories_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAll_ByUserId_ByPlatformId_v3(userId: string, platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAll_ByUserId_ByPlatformId_v3(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLink_ByUserId_ByPlatformId_v2(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLink_ByUserId_ByPlatformId_v2(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLink_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    data: { ticket: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLink_ByUserId_ByPlatformId_v3(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByPlatformId_ByPlatformUserId_v3(
    platformId: string,
    platformUserId: string,
    queryParams?: { pidType?: string | null }
  ): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByPlatformId_ByPlatformUserId_v3(platformId, platformUserId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByUserId_ByResource_ByAction_v3(
    userId: string,
    resource: string,
    action: number
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByUserId_ByResource_ByAction_v3(userId, resource, action)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMetadata_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    queryParams?: { crossNamespace?: boolean | null }
  ): Promise<AxiosResponse<UserPlatformMetadata>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMetadata_ByUserId_ByPlatformId_v3(userId, platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postLinkStatu_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    data: { platformToken: string | null }
  ): Promise<AxiosResponse<TokenThirdPartyLinkStatusResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postLinkStatu_ByUserId_ByPlatformId_v3(userId, platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformJustice_ByUserId_ByTargetNamespace_v3(
    userId: string,
    targetNamespace: string
  ): Promise<AxiosResponse<GetUserMappingV3>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformJustice_ByUserId_ByTargetNamespace_v3(userId, targetNamespace)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPlatformJustice_ByUserId_ByTargetNamespace_v3(
    userId: string,
    targetNamespace: string
  ): Promise<AxiosResponse<CreateJusticeUserResponse>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlatformJustice_ByUserId_ByTargetNamespace_v3(userId, targetNamespace)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLinkHistory_ByUserId_ByPlatformId_v3(userId: string, platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLinkHistory_ByUserId_ByPlatformId_v3(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLinkRestriction_ByUserId_ByPlatformId_v3(userId: string, platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLinkRestriction_ByUserId_ByPlatformId_v3(userId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get my user data action code : 10147
     */
    getUsersMe_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_**
     */
    getUsers_v2,
    /**
     * This endpoint search user who owns the given email address action code : 10132
     */
    getUsers_v3,
    /**
     * This endpoint support to bulk update users based on given data. ------ Supported fields: * skipLoginQueue
     */
    updateUser_v3,
    /**
     * List all users that has admin role (role that has admin_role attribute set to true). Endpoint behavior : - if query parameter is defined, endpoint will search users whose email address and display name match with the query - if roleId parameter is defined, endpoint will search users that have the defined roleId - if startDate and endDate parameters is defined, endpoint will search users which created on the certain date range - if startDate parameter is defined, endpoint will search users that created start from the defined date - if endDate parameter is defined, endpoint will search users that created until the defined date In multi tenant mode : - if super admin search in super admin namespace, the result will be all admin users - if super admin search in game studio namespace, the result will be all admin users under the game studio namespace - if studio admin search in their studio namespace, the result will be all admin user in the game studio namespace The endpoint will return all admin from all namespace when called from publisher namespace. When not called from publisher namespace, the endpoint will return all admin from the path namespace.
     */
    getAdmins_v3,
    /**
     * This endpoint returns user bans of userIDs specified in the payload action code : 10127
     */
    fetchUserBan_v3,
    /**
     * List User By User ID This endpoint intended to list user information from the given list of userID and namespace
     */
    createUserBulk_v3,
    /**
     * 1. **Cursor-Based User Retrieval** This API fetches user records ordered by created_at ASC, user_id ASC to ensure a stable pagination order. Pagination is handled using a cursor, which consists of created_at and user_id. 2. **GraphQL-Like Querying** By default, the API only returns the user ID. To include additional fields in the response, specify them in the request body under the fields parameter. ***Supported fields***: [&#39;created_at&#39;, &#39;email_address&#39;] ***Note***: If a value is not in the allowed list, the API will ignore it. 3. **Cursor Mechanics** The cursor consists of created_at and user_id from the last retrieved record. The next query fetches records strictly after the provided cursor. ***The query applies the following ordering logic***: Records with a later created_at timestamp are included. If multiple records have the same created_at, only records with a higher user_id are included. This ensures that records with the exact same created_at as the cursor are excluded from the next page to prevent duplication. 4. **Usage** For the first-time query, the request body does not require a cursor. If the data array is empty, it indicates that the cursor has reached the end of the available records.
     */
    fetchUserCursor_v3,
    /**
     * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace based on the **{namespace}** value in path parameter. An admin user can only assign role to namespaces that the admin user has the required permission. Role is optional, if not specified then it will only assign User role The invited admin will also assigned with &#34;User&#34; role by default.
     */
    createUserInvite_v3,
    /**
     * Endpoint behavior : - By default this endpoint searches all users on the specified namespace. - If query parameter is defined, endpoint will search users whose email address, display name, username, or third party partially match with the query. - The query parameter length must be between 3 and 30 characters. For email address queries (i.e., contains &#39;@&#39;), the allowed length is 3 to 40 characters. Otherwise, the database will not be queried. - If startDate and endDate parameters is defined, endpoint will search users which created on the certain date range. - If query, startDate and endDate parameters are defined, endpoint will search users whose email address and display name match and created on the certain date range. - If startDate parameter is defined, endpoint will search users that created start from the defined date. - If endDate parameter is defined, endpoint will search users that created until the defined date. - If platformId parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformId they have linked to. - If platformBy parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformUserId or platformDisplayName they have linked to, example value: platformUserId or platformDisplayName. - If limit is not defined, The default limit is 100. GraphQL-Like Querying: - By default, the API only returns the minimum fields -&gt; [displayName, authType, createdAt, uniqueDisplayName, deletionStatus, enabled, emailAddress, skipLoginQueue, testAccount] - To include additional fields in the response, specify them in the request params. - Supported fields: [country, emailVerified, avatarUrl, enabled] - Note: If a value is not in the allowed list, the API will ignore it. In Multi Tenant mode : - If super admin search in super admin namespace, the result will be all game admin user - If super admin search in game studio namespace, the result will be all game admin user and players under the game studio namespace - If super admin search in game namespace, the result will be all game admin users and players under the game namespace - If game admin search in their game studio namespace, the result will be all game admin user in the studio namespace - If game admin search in their game namespace, the result will be all player in the game namespace action code : 10133
     */
    getUsersSearch_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_**
     */
    getUser_ByUserId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [PATCH]_** This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
     */
    patchUser_ByUserId_v2,
    /**
     * Admin Get User By User Id
     */
    getUser_ByUserId_v3,
    /**
     * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName, tags} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Admin can set Tags with array string data e.g. [&#34;10e9a46ef6164b7e86d08e86605bd8cf&#34;]. Admin also can reset user tags by sending empty array string e.g. [ ]. Users can have at most 5 tags. No duplicate tags allowed. **Response body logic when user updating email address:** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address. action code : 10103
     */
    patchUser_ByUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case
     */
    getAgerestrictions_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [PATCH]_**
     */
    patchAgerestriction_v2,
    /**
     * action code: 10138
     */
    getAgerestrictions_v3,
    /**
     * action code: 10122
     */
    patchAgerestriction_v3,
    /**
     * This endpoint search user by the list of email addresses action code : 10132
     */
    fetchUserSearchBulk_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
     */
    createBan_ByUserId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
     */
    getBans_ByUserId_v2,
    /**
     * This endpoint retrieve the first page of the data if after and before parameters is empty action code : 10126
     */
    getBans_ByUserId_v3,
    /**
     * Bans a user with specific type of ban. Ban types and reason can be queried. action code : 10141
     */
    createBan_ByUserId_v3,
    /**
     * if limit is not defined, The default limit is 100
     */
    getUsersLinkhistories_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
     */
    updateRole_ByUserId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
     */
    updateRole_ByUserId_ByNS_v2,
    /**
     * This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status action code : 10140
     */
    getUsers_ByRoleId_v3,
    /**
     * **[WARNING] This endpoint is only for testing purpose.** This endpoint get active user verification code. There are some scenarios of getting verification codes, all of them will be returned on this endpoint: - After account registration - After reset password request - After headless account upgrade - After update email request This API only accept publisher/studio namespace and userId. Action code: 10146
     */
    getCodes_ByUserId_v3,
    /**
     * Delete User Roles
     */
    deleteRole_ByUserId_v3,
    /**
     * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **namespace** (in request body) if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4].
     */
    patchRole_ByUserId_v3,
    /**
     * Admin Get User State By User Id
     */
    getState_ByUserId_v3,
    /**
     * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace
     */
    fetchUserBulkPlatform_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
     */
    updateEnable_ByUserId_v2,
    /**
     * This endpoint disable or enable user account. Set the enable status on the request body to true to enable user account or set to false to disable it. Disable user for **Account Disable** purpose fill the reason with: - **AdminDeactivateAccount** : if your disable account request comes from admin Enable user ignore field &#39;reason&#39; in the request body. action code : 10143
     */
    patchStatus_ByUserId_v3,
    /**
     * This endpoint force verify user Note: - namespace: only accept publisher/studio namespace - userId: only accept publisher/studio userId action code: 10118
     */
    updateVerify_ByUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
     */
    updateDisable_ByUserId_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode} [PATCH]_**
     */
    patchCountry_ByCountryCode_v2,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/password [PUT]_**
     */
    updatePassword_ByUserId_v2,
    /**
     * Update User Password
     */
    updatePassword_ByUserId_v3,
    /**
     * **This endpoint requires publisher namespace.** Returns list of users ID and namespace with their Justice platform account, under a namespace. If user doesn&#39;t have Justice platform account, the linkedPlatforms will be empty array.&#39;
     */
    getUsersPlatformsJustice_v3,
    /**
     * Gets platform accounts that are already linked with user account. Action code : 10128 **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user.
     */
    getPlatforms_ByUserId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries [GET]_**
     */
    getCountriesAgerestrictions_v2,
    /**
     * action code : 10139
     */
    getAgerestrictionsCountries_v3,
    /**
     * Will verify account and consume code if validateOnly is set false in request body Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** or **phone**
     */
    updateCodeVerify_ByUserId_v3,
    /**
     * [WARNING] This endpoint is deleting user data from database directly by skipping GDPR flow
     */
    deleteInformation_ByUserId_v3,
    /**
     * Delete User Permission
     */
    deletePermission_ByUserId_v3,
    /**
     * This endpoint will APPEND user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    createPermission_ByUserId_v3,
    /**
     * This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByUserId_v3,
    /**
     * Set ban status for a single user for a specific ban. Retrieve user ban and choose the ban ID. Set the form parameter to true/false to enable or disable the ban. action code : 10142&#39;
     */
    patchBan_ByUserId_ByBanId_v3,
    /**
     * This endpoint get user&#39;s bans summary&#39;
     */
    getBansSummary_ByUserId_v3,
    /**
     * The verification code is sent to email address. Available contexts for use : - **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** - **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) - **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
     */
    updateCodeRequest_ByUserId_v3,
    /**
     * Admin List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    fetchUser_ByPlatformId_v3,
    /**
     * Force linking platform account to user User Account. This endpoint intended for admin to forcefully link account to user. By default, these cases are not allowed - The platform account current is linked by another account - The target account ever linked this platform&#39;s another account
     */
    updatePlatformLink_ByUserId_v3,
    /**
     * This endpoint removes role from user action code: 10110
     */
    deleteRole_ByUserId_ByRoleId_v3,
    /**
     * action code: 10109
     */
    updateRole_ByUserId_ByRoleId_v3,
    /**
     * action code : 10145
     */
    getDeletionStatus_ByUserId_v3,
    /**
     * action code : 10144
     */
    patchDeletionStatus_ByUserId_v3,
    /**
     * Notes for this endpoint: This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp.&#34;
     */
    getLoginsHistories_ByUserId_v3,
    /**
     * This endpoint ONLY accept **Client Token** This endpoint is utilized for specific scenarios where **email notifications are disabled** The user&#39;s email will be marked as verified Note: - emailAddress or password field are optional - request body can&#39;t be empty action code : 10103
     */
    patchTrustlyIdentity_ByUserId_v3,
    /**
     * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one.
     */
    getDistinctPlatforms_ByUserId_v3,
    /**
     * This endpoint gets list justice platform account by providing publisher namespace and publisher userID
     */
    getPlatformsJustice_ByUserId_v3,
    /**
     * This endpoint only retrieves 3rd party platform accounts linked to user. It will query platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one. ------ Supported status: - LINKED - RESTRICTIVELY_UNLINKED - UNLINKED - ALL
     */
    getPlatformsDistinct_ByUserId_v3,
    /**
     * If validateOnly is set false, will upgrade headless account with verification code The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
     */
    updateHeadlesCodeVerify_ByUserId_v3,
    /**
     * @deprecated
     * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** - **snapchat** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
     */
    deletePlatform_ByUserId_ByPlatformId_v3,
    /**
     * action code: 10123
     */
    patchAgerestrictionCountry_ByCountryCode_v3,
    /**
     * This API is for admin to get user&#39;s link history. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    getPlatformsLinkHistories_ByUserId_v3,
    /**
     * Unlink user&#39;s account from third platform in all namespaces. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: to unlink steam third party account, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 Unlink platform account associated with a group: If user unlink platform account associated with a group, the API logic will unlink all of platform account under that group as well. example: if user unlink from ps4, the API logic will unlink ps5 and ps4web as well
     */
    deleteAll_ByUserId_ByPlatformId_v3,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId} [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
     */
    deleteLink_ByUserId_ByPlatformId_v2,
    /**
     * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **googleplaygames**: The ticket’s value is the authorization code returned by Google play games OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.
     */
    postLink_ByUserId_ByPlatformId_v3,
    /**
     * Get User By Platform User ID This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 - **oculus**: if query by app user id, please set the query param **pidType** to **OCULUS_APP_USER_ID** (support game namespace only)
     */
    getUser_ByPlatformId_ByPlatformUserId_v3,
    /**
     * Delete User Permission
     */
    deletePermission_ByUserId_ByResource_ByAction_v3,
    /**
     * This endpoint gets user single platform account metadata. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    getMetadata_ByUserId_ByPlatformId_v3,
    /**
     * Admin get the link status of the third party platform token with user id. This endpoint is used for checking whether the third party user represented by third party token is linked with the corresponding user id. ## Supported platforms: - **steam**: The platform_token’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the authorization code(id_token) returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth.
     */
    postLinkStatu_ByUserId_ByPlatformId_v3,
    /**
     * This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace.
     */
    getPlatformJustice_ByUserId_ByTargetNamespace_v3,
    /**
     * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
     */
    createPlatformJustice_ByUserId_ByTargetNamespace_v3,
    /**
     * @deprecated
     * This API is for admin to delete user&#39;s linking history with target platform id. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 ---- **Substitute endpoint**: /v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/restrictions
     */
    deleteLinkHistory_ByUserId_ByPlatformId_v3,
    /**
     * This API is for admin to delete user&#39;s linking restriction with target platform id. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
     */
    deleteLinkRestriction_ByUserId_ByPlatformId_v3
  }
}
