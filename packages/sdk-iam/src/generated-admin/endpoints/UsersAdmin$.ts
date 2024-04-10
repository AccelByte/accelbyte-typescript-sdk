/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AgeRestrictionRequest } from '../../generated-definitions/AgeRestrictionRequest.js'
import { AgeRestrictionRequestV3 } from '../../generated-definitions/AgeRestrictionRequestV3.js'
import { AgeRestrictionResponse } from '../../generated-definitions/AgeRestrictionResponse.js'
import { AgeRestrictionResponseV3 } from '../../generated-definitions/AgeRestrictionResponseV3.js'
import { BanCreateRequest } from '../../generated-definitions/BanCreateRequest.js'
import { BanUpdateRequest } from '../../generated-definitions/BanUpdateRequest.js'
import { Country } from '../../generated-definitions/Country.js'
import { CountryAgeRestrictionArray } from '../../generated-definitions/CountryAgeRestrictionArray.js'
import { CountryAgeRestrictionRequest } from '../../generated-definitions/CountryAgeRestrictionRequest.js'
import { CountryAgeRestrictionV3Request } from '../../generated-definitions/CountryAgeRestrictionV3Request.js'
import { CountryV3Response } from '../../generated-definitions/CountryV3Response.js'
import { CountryV3ResponseArray } from '../../generated-definitions/CountryV3ResponseArray.js'
import { CreateJusticeUserResponse } from '../../generated-definitions/CreateJusticeUserResponse.js'
import { DisableUserRequest } from '../../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../../generated-definitions/DistinctPlatformResponseV3.js'
import { GetBulkUserBansRequest } from '../../generated-definitions/GetBulkUserBansRequest.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { GetUserMappingArray } from '../../generated-definitions/GetUserMappingArray.js'
import { GetUserMappingV3 } from '../../generated-definitions/GetUserMappingV3.js'
import { GetUsersResponseWithPaginationV3 } from '../../generated-definitions/GetUsersResponseWithPaginationV3.js'
import { InviteUserRequestV3 } from '../../generated-definitions/InviteUserRequestV3.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { LinkPlatformAccountRequest } from '../../generated-definitions/LinkPlatformAccountRequest.js'
import { LinkingHistoryResponseWithPaginationV3 } from '../../generated-definitions/LinkingHistoryResponseWithPaginationV3.js'
import { ListBulkUserPlatformsResponse } from '../../generated-definitions/ListBulkUserPlatformsResponse.js'
import { ListEmailAddressRequest } from '../../generated-definitions/ListEmailAddressRequest.js'
import { ListUserInformationResult } from '../../generated-definitions/ListUserInformationResult.js'
import { ListUserResponseV3 } from '../../generated-definitions/ListUserResponseV3.js'
import { ListUsersWithPlatformAccountsResponse } from '../../generated-definitions/ListUsersWithPlatformAccountsResponse.js'
import { LoginHistoriesResponse } from '../../generated-definitions/LoginHistoriesResponse.js'
import { NamespaceRoleRequest } from '../../generated-definitions/NamespaceRoleRequest.js'
import { PermissionDeleteRequest } from '../../generated-definitions/PermissionDeleteRequest.js'
import { Permissions } from '../../generated-definitions/Permissions.js'
import { PlatformUserIdRequest } from '../../generated-definitions/PlatformUserIdRequest.js'
import { SearchUsersByPlatformIdResponse } from '../../generated-definitions/SearchUsersByPlatformIdResponse.js'
import { SearchUsersResponseWithPaginationV3 } from '../../generated-definitions/SearchUsersResponseWithPaginationV3.js'
import { SendVerificationCodeRequestV3 } from '../../generated-definitions/SendVerificationCodeRequestV3.js'
import { TokenThirdPartyLinkStatusResponse } from '../../generated-definitions/TokenThirdPartyLinkStatusResponse.js'
import { UnlinkUserPlatformRequest } from '../../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdateUserDeletionStatusRequest } from '../../generated-definitions/UpdateUserDeletionStatusRequest.js'
import { UpdateUserStatusRequest } from '../../generated-definitions/UpdateUserStatusRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponse } from '../../generated-definitions/UserBanResponse.js'
import { UserBanResponseArray } from '../../generated-definitions/UserBanResponseArray.js'
import { UserBanResponseV3 } from '../../generated-definitions/UserBanResponseV3.js'
import { UserDeletionStatusResponse } from '../../generated-definitions/UserDeletionStatusResponse.js'
import { UserIDsRequest } from '../../generated-definitions/UserIDsRequest.js'
import { UserIdentityUpdateRequestV3 } from '../../generated-definitions/UserIdentityUpdateRequestV3.js'
import { UserLinkedPlatformsResponseV3 } from '../../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateRequest } from '../../generated-definitions/UserPasswordUpdateRequest.js'
import { UserPasswordUpdateV3Request } from '../../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatformMetadata } from '../../generated-definitions/UserPlatformMetadata.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserResponse } from '../../generated-definitions/UserResponse.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequest } from '../../generated-definitions/UserUpdateRequest.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'
import { UserVerificationRequest } from '../../generated-definitions/UserVerificationRequest.js'
import { UsersUpdateRequestV3 } from '../../generated-definitions/UsersUpdateRequestV3.js'
import { VerificationCodeResponse } from '../../generated-definitions/VerificationCodeResponse.js'

export class UsersAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get my user data action code : 10147
   */
  getUsersMe(): Promise<IResponseWithSync<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/users/me'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_**
   */
  getUsers(queryParams: {
    platformId: string | null
    after?: string | null
    before?: string | null
    displayName?: string | null
    limit?: number
    loginId?: string | null
    platformUserId?: string | null
    roleId?: string | null
    userId?: string | null
  }): Promise<IResponseWithSync<SearchUsersByPlatformIdResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, SearchUsersByPlatformIdResponse, 'SearchUsersByPlatformIdResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint search user who owns the given email address action code : 10132
   */
  getUsers_ByNS(queryParams?: { emailAddress?: string | null }): Promise<IResponseWithSync<UserResponseV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint support to bulk update users based on given data. ------ Supported fields: * skipLoginQueue
   */
  updateUser(data: UsersUpdateRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * List all users that has admin role (role that has admin_role attribute set to true). Endpoint behavior : - if query parameter is defined, endpoint will search users whose email address and display name match with the query - if roleId parameter is defined, endpoint will search users that have the defined roleId - if startDate and endDate parameters is defined, endpoint will search users which created on the certain date range - if startDate parameter is defined, endpoint will search users that created start from the defined date - if endDate parameter is defined, endpoint will search users that created until the defined date In multi tenant mode : - if super admin search in super admin namespace, the result will be all admin users - if super admin search in game studio namespace, the result will be all admin users under the game studio namespace - if studio admin search in their studio namespace, the result will be all admin user in the game studio namespace The endpoint will return all admin from all namespace when called from publisher namespace. When not called from publisher namespace, the endpoint will return all admin from the path namespace.
   */
  getAdmins(queryParams?: {
    after?: string | null
    before?: string | null
    endDate?: string | null
    limit?: number
    query?: string | null
    roleId?: string | null
    startDate?: string | null
  }): Promise<IResponseWithSync<GetUsersResponseWithPaginationV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/admins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUsersResponseWithPaginationV3, 'GetUsersResponseWithPaginationV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint returns user bans of userIDs specified in the payload action code : 10127
   */
  createUserBan(
    data: GetBulkUserBansRequest,
    queryParams?: { activeOnly?: boolean | null; banType?: string | null }
  ): Promise<IResponse<GetUserBanV3Response>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/bans'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetUserBanV3Response, 'GetUserBanV3Response')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * List User By User ID This endpoint intended to list user information from the given list of userID and namespace
   */
  createUserBulk(data: UserIDsRequest): Promise<IResponse<ListUserInformationResult>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListUserInformationResult, 'ListUserInformationResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace based on the **{namespace}** value in path parameter. An admin user can only assign role to namespaces that the admin user has the required permission. Role is optional, if not specified then it will only assign User role The invited admin will also assigned with &#34;User&#34; role by default.
   */
  createUserInvite(data: InviteUserRequestV3): Promise<IResponse<InviteUserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/invite'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Endpoint behavior : - by default this endpoint searches all users on the specified namespace - if query parameter is defined, endpoint will search users whose email address, display name, username, or third party partially match with the query - if startDate and endDate parameters is defined, endpoint will search users which created on the certain date range - if query, startDate and endDate parameters are defined, endpoint will search users whose email address and display name match and created on the certain date range - if startDate parameter is defined, endpoint will search users that created start from the defined date - if endDate parameter is defined, endpoint will search users that created until the defined date - if platformId parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformId they have linked to - if platformBy parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformUserId or platformDisplayName they have linked to, example value: platformUserId or platformDisplayName - if limit is not defined, The default limit is 100 In multi tenant mode : - if super admin search in super admin namespace, the result will be all game admin user - if super admin search in game studio namespace, the result will be all game admin user and players under the game studio namespace - if super admin search in game namespace, the result will be all game admin users and players under the game namespace - if game admin search in their game studio namespace, the result will be all game admin user in the studio namespace - if game admin search in their game namespace, the result will be all player in the game namespace action code : 10133
   */
  getUsersSearch(queryParams?: {
    by?: string | null
    endDate?: string | null
    includeTotal?: boolean | null
    limit?: number
    offset?: number
    platformBy?: string | null
    platformId?: string | null
    query?: string | null
    roleIds?: string | null
    skipLoginQueue?: boolean | null
    startDate?: string | null
    testAccount?: boolean | null
  }): Promise<IResponseWithSync<SearchUsersResponseWithPaginationV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, SearchUsersResponseWithPaginationV3, 'SearchUsersResponseWithPaginationV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_**
   */
  getUser_ByUserId(userId: string): Promise<IResponseWithSync<UserResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserResponse, 'UserResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [PATCH]_** This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
   */
  patchUser_ByUserId(userId: string, data: UserUpdateRequest): Promise<IResponse<UserResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserResponse, 'UserResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Admin Get User By User Id
   */
  getUser_ByUserId_ByNS(userId: string): Promise<IResponseWithSync<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address. action code : 10103
   */
  patchUser_ByUserId_ByNS(userId: string, data: UserUpdateRequestV3): Promise<IResponse<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case
   */
  getAgerestrictions(): Promise<IResponseWithSync<AgeRestrictionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AgeRestrictionResponse, 'AgeRestrictionResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [PATCH]_**
   */
  patchAgerestriction(data: AgeRestrictionRequest): Promise<IResponse<AgeRestrictionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AgeRestrictionResponse, 'AgeRestrictionResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code: 10138
   */
  getAgerestrictions_ByNS(): Promise<IResponseWithSync<AgeRestrictionResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AgeRestrictionResponseV3, 'AgeRestrictionResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * action code: 10122
   */
  patchAgerestriction_ByNS(data: AgeRestrictionRequestV3): Promise<IResponse<AgeRestrictionResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AgeRestrictionResponseV3, 'AgeRestrictionResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint search user by the list of email addresses action code : 10132
   */
  createUserSearchBulk(data: ListEmailAddressRequest): Promise<IResponse<ListUserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/search/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListUserResponseV3, 'ListUserResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
   */
  createBan_ByUserId(userId: string, data: BanCreateRequest): Promise<IResponse<UserBanResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/ban'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserBanResponse, 'UserBanResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
   */
  getBans_ByUserId(userId: string, queryParams?: { activeOnly?: boolean | null }): Promise<IResponseWithSync<UserBanResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserBanResponseArray, 'UserBanResponseArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint retrieve the first page of the data if after and before parameters is empty action code : 10126
   */
  getBans_ByUserId_ByNS(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  ): Promise<IResponseWithSync<GetUserBanV3Response>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUserBanV3Response, 'GetUserBanV3Response')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Bans a user with specific type of ban. Ban types and reason can be queried. action code : 10141
   */
  createBan_ByUserId_ByNS(userId: string, data: BanCreateRequest): Promise<IResponse<UserBanResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserBanResponseV3, 'UserBanResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * if limit is not defined, The default limit is 100
   */
  getUsersLinkhistories(queryParams: {
    platformId: string | null
    limit?: number
    offset?: number
    platformUserId?: string | null
  }): Promise<IResponseWithSync<LinkingHistoryResponseWithPaginationV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/linkhistories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, LinkingHistoryResponseWithPaginationV3, 'LinkingHistoryResponseWithPaginationV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
   */
  createRole_ByUserId(userId: string, data: string[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
   */
  updateRole_ByUserId(userId: string, data: string[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status action code : 10140
   */
  getUsers_ByRoleId(
    roleId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<IResponseWithSync<GetUsersResponseWithPaginationV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roles/{roleId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUsersResponseWithPaginationV3, 'GetUsersResponseWithPaginationV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * [WARNING] This endpoint is only for testing purpose. This endpoint get active user verification code. There are 3 scenario of getting verification codes : after account registration, after reset password request, and after headless account upgrade. All of them will be returned on this endpoint. action code: 10146
   */
  getCodes_ByUserId(userId: string): Promise<IResponseWithSync<VerificationCodeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/codes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, VerificationCodeResponse, 'VerificationCodeResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete User Roles
   */
  deleteRole_ByUserId(userId: string, data: string[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **namespace** (in request body) if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4].
   */
  patchRole_ByUserId(userId: string, data: NamespaceRoleRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace
   */
  createUserBulkPlatform(data: UserIDsRequest): Promise<IResponse<ListBulkUserPlatformsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/bulk/platforms'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListBulkUserPlatformsResponse, 'ListBulkUserPlatformsResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
   */
  updateEnable_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/enable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint disable or enable user account. Set the enable status on the request body to true to enable user account or set to false to disable it. Disable user for **Account Disable** purpose fill the reason with: - **AdminDeactivateAccount** : if your disable account request comes from admin Enable user ignore field &#39;reason&#39; in the request body. action code : 10143
   */
  patchStatus_ByUserId(userId: string, data: UpdateUserStatusRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint force verify user action code: 10118
   */
  updateVerify_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/verify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
   */
  updateDisable_ByUserId(userId: string, data: DisableUserRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/disable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode} [PATCH]_**
   */
  patchCountry_ByCountryCode(countryCode: string, data: CountryAgeRestrictionRequest): Promise<IResponse<Country>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, Country, 'Country')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/password [PUT]_**
   */
  updatePassword_ByUserId(userId: string, data: UserPasswordUpdateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/password'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update User Password
   */
  updatePassword_ByUserId_ByNS(userId: string, data: UserPasswordUpdateV3Request): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/password'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * **This endpoint requires publisher namespace.** Returns list of users ID and namespace with their Justice platform account, under a namespace. If user doesn&#39;t have Justice platform account, the linkedPlatforms will be empty array.&#39;
   */
  getUsersPlatformsJustice(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<ListUsersWithPlatformAccountsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/platforms/justice'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListUsersWithPlatformAccountsResponse, 'ListUsersWithPlatformAccountsResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user. Gets platform accounts that are already linked with user account action code : 10128
   */
  getPlatforms_ByUserId(
    userId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number; platformId?: string | null }
  ): Promise<IResponseWithSync<UserLinkedPlatformsResponseV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserLinkedPlatformsResponseV3, 'UserLinkedPlatformsResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries [GET]_**
   */
  getCountriesAgerestrictions(): Promise<IResponseWithSync<CountryAgeRestrictionArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/countries/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CountryAgeRestrictionArray, 'CountryAgeRestrictionArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * action code : 10139
   */
  getAgerestrictionsCountries(): Promise<IResponseWithSync<CountryV3ResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CountryV3ResponseArray, 'CountryV3ResponseArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Will verify account and consume code if validateOnly is set false in request body Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** or **phone**
   */
  createCodeVerify_ByUserId(userId: string, data: UserVerificationRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/code/verify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * [WARNING] This endpoint is deleting user data from database directly by skipping GDPR flow
   */
  deleteInformation_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/information'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete User Permission
   */
  deletePermission_ByUserId(userId: string, data: PermissionDeleteRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint will APPEND user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  createPermission_ByUserId(userId: string, data: Permissions): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  updatePermission_ByUserId(userId: string, data: Permissions): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Set ban status for a single user for a specific ban. Retrieve user ban and choose the ban ID. Set the form parameter to true/false to enable or disable the ban. action code : 10142&#39;
   */
  patchBan_ByUserId_ByBanId(userId: string, banId: string, data: BanUpdateRequest): Promise<IResponse<UserBanResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{banId}', banId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserBanResponseV3, 'UserBanResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * The verification code is sent to email address. Available contexts for use : - **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** - **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) - **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
   */
  createCodeRequest_ByUserId(userId: string, data: SendVerificationCodeRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/code/request'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Admin List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  createUser_ByPlatformId(
    platformId: string,
    data: PlatformUserIdRequest,
    queryParams?: { rawPID?: boolean | null }
  ): Promise<IResponse<UserPlatforms>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserPlatforms, 'UserPlatforms')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Force linking platform account to user User Account. This endpoint intended for admin to forcefully link account to user. By default, these cases are not allowed - The platform account current is linked by another account - The target account ever linked this platform&#39;s another account
   */
  createPlatformLink_ByUserId(
    userId: string,
    data: LinkPlatformAccountRequest,
    queryParams?: { skipConflict?: boolean | null }
  ): Promise<IResponse<unknown>> {
    const params = { skipConflict: true, ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint removes role from user action code: 10110
   */
  deleteRole_ByUserId_ByRoleId(userId: string, roleId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code: 10109
   */
  createRole_ByUserId_ByRoleId(userId: string, roleId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code : 10145
   */
  getDeletionStatus_ByUserId(userId: string): Promise<IResponseWithSync<UserDeletionStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/deletion/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserDeletionStatusResponse, 'UserDeletionStatusResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * action code : 10144
   */
  patchDeletionStatus_ByUserId(userId: string, data: UpdateUserDeletionStatusRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/deletion/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Notes for this endpoint: This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp.&#34;
   */
  getLoginsHistories_ByUserId(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<IResponseWithSync<LoginHistoriesResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/logins/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, LoginHistoriesResponse, 'LoginHistoriesResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint ONLY accept **Client Token** This endpoint is utilized for specific scenarios where **email notifications are disabled** The user&#39;s email will be marked as verified Note: - emailAddress or password field are optional - request body can&#39;t be empty action code : 10103
   */
  patchTrustlyIdentity_ByUserId(userId: string, data: UserIdentityUpdateRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/trustly/identity'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one.
   */
  getDistinctPlatforms_ByUserId(userId: string): Promise<IResponseWithSync<DistinctPlatformResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/distinctPlatforms'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, DistinctPlatformResponseV3, 'DistinctPlatformResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint gets list justice platform account by providing publisher namespace and publisher userID
   */
  getPlatformsJustice_ByUserId(userId: string): Promise<IResponseWithSync<GetUserMappingArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUserMappingArray, 'GetUserMappingArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * If validateOnly is set false, will upgrade headless account with verification code The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  createHeadlesCodeVerify_ByUserId(
    userId: string,
    data: UpgradeHeadlessAccountWithVerificationCodeRequestV3
  ): Promise<IResponse<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/headless/code/verify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** - **snapchat** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
   */
  deletePlatform_ByUserId_ByPlatformId(userId: string, platformId: string, data: UnlinkUserPlatformRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code: 10123
   */
  patchAgerestrictionCountry_ByCountryCode(
    countryCode: string,
    data: CountryAgeRestrictionV3Request
  ): Promise<IResponse<CountryV3Response>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CountryV3Response, 'CountryV3Response')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Unlink user&#39;s account from third platform in all namespaces. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: to unlink steam third party account, you can use steamnetwork / steam / steamopenid as platformId path parameter Supported platform: - Steam group(steamnetwork) - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb - facebook - google - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: if user unlink platform account that have group, the API logic will unlink all of platform account under that group as well. example: if user unlink from ps4, the API logic will unlink ps5 and ps4web as well
   */
  deleteAll_ByUserId_ByPlatformId(userId: string, platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/all'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId} [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
   */
  deleteLink_ByUserId_ByPlatformId(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.
   */
  postLink_ByUserId_ByPlatformId(userId: string, platformId: string, data: { ticket: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get User By Platform User ID This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. Supported platform: - Steam group(steamnetwork) - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb - facebook - google - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  getUser_ByPlatformId_ByPlatformUserId(platformId: string, platformUserId: string): Promise<IResponseWithSync<UserResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId}'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
      .replace('{platformUserId}', platformUserId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserResponseV3, 'UserResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete User Permission
   */
  deletePermission_ByUserId_ByResource_ByAction(userId: string, resource: string, action: number): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint gets user single platform account metadata. Supported Platform: - Steam group(steamnetwork): - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb - epicgames - nintendo - aws cognito - facebook - google - discord - twitch - snapchat - amazon Note: you can use either platform ID or platform group as platformId query parameter
   */
  getMetadata_ByUserId_ByPlatformId(userId: string, platformId: string): Promise<IResponseWithSync<UserPlatformMetadata>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserPlatformMetadata, 'UserPlatformMetadata')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Admin get the link status of the third party platform token with user id. This endpoint is used for checking whether the third party user represented by third party token is linked with the corresponding user id. ## Supported platforms: - **steam**: The platform_token’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the authorization code(id_token) returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth.
   */
  postLinkStatu_ByUserId_ByPlatformId(
    userId: string,
    platformId: string,
    data: { platformToken: string | null }
  ): Promise<IResponse<TokenThirdPartyLinkStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/linkStatus'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TokenThirdPartyLinkStatusResponse, 'TokenThirdPartyLinkStatusResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint requires the client access token as the bearer token This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace.
   */
  getPlatformJustice_ByUserId_ByTargetNamespace(userId: string, targetNamespace: string): Promise<IResponseWithSync<GetUserMappingV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{targetNamespace}', targetNamespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUserMappingV3, 'GetUserMappingV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
   */
  createPlatformJustice_ByUserId_ByTargetNamespace(userId: string, targetNamespace: string): Promise<IResponse<CreateJusticeUserResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{targetNamespace}', targetNamespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateJusticeUserResponse, 'CreateJusticeUserResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is for admin to delete user&#39;s linking history with target platform id. Supported platform: - Steam group(steamnetwork) - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb - facebook - google - twitch - discord - apple - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: you can use either platform ID or platform group as platformId query parameter
   */
  deleteLinkHistory_ByUserId_ByPlatformId(userId: string, platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
