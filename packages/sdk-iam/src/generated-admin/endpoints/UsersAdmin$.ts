/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AdminBulkUserRequest } from '../../generated-definitions/AdminBulkUserRequest.js'
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
import { CursorGetUserRequest } from '../../generated-definitions/CursorGetUserRequest.js'
import { CursorGetUserResponse } from '../../generated-definitions/CursorGetUserResponse.js'
import { DisableUserRequest } from '../../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../../generated-definitions/DistinctPlatformResponseV3.js'
import { GetBulkUserBansRequest } from '../../generated-definitions/GetBulkUserBansRequest.js'
import { GetUserBanSummaryV3 } from '../../generated-definitions/GetUserBanSummaryV3.js'
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
import { UserPlatformLinkHistories } from '../../generated-definitions/UserPlatformLinkHistories.js'
import { UserPlatformMetadata } from '../../generated-definitions/UserPlatformMetadata.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserResponse } from '../../generated-definitions/UserResponse.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserStateResponseV3 } from '../../generated-definitions/UserStateResponseV3.js'
import { UserUpdateRequest } from '../../generated-definitions/UserUpdateRequest.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'
import { UserVerificationRequest } from '../../generated-definitions/UserVerificationRequest.js'
import { UsersUpdateRequestV3 } from '../../generated-definitions/UsersUpdateRequestV3.js'
import { VerificationCodeResponse } from '../../generated-definitions/VerificationCodeResponse.js'

export class UsersAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get my user data action code : 10147
   */
  getUsersMe_v3(): Promise<Response<UserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/users/me'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_**
   */
  getUsers_v2(queryParams: {
    platformId: string | null
    after?: string | null
    before?: string | null
    displayName?: string | null
    limit?: number
    loginId?: string | null
    platformUserId?: string | null
    roleId?: string | null
    userId?: string | null
  }): Promise<Response<SearchUsersByPlatformIdResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SearchUsersByPlatformIdResponse,
      'SearchUsersByPlatformIdResponse'
    )
  }
  /**
   * This endpoint search user who owns the given email address action code : 10132
   */
  getUsers_v3(queryParams?: { emailAddress?: string | null }): Promise<Response<UserResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * This endpoint support to bulk update users based on given data. ------ Supported fields: * skipLoginQueue
   */
  updateUser_v3(data: UsersUpdateRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * List all users that has admin role (role that has admin_role attribute set to true). Endpoint behavior : - if query parameter is defined, endpoint will search users whose email address and display name match with the query - if roleId parameter is defined, endpoint will search users that have the defined roleId - if startDate and endDate parameters is defined, endpoint will search users which created on the certain date range - if startDate parameter is defined, endpoint will search users that created start from the defined date - if endDate parameter is defined, endpoint will search users that created until the defined date In multi tenant mode : - if super admin search in super admin namespace, the result will be all admin users - if super admin search in game studio namespace, the result will be all admin users under the game studio namespace - if studio admin search in their studio namespace, the result will be all admin user in the game studio namespace The endpoint will return all admin from all namespace when called from publisher namespace. When not called from publisher namespace, the endpoint will return all admin from the path namespace.
   */
  getAdmins_v3(queryParams?: {
    after?: string | null
    before?: string | null
    endDate?: string | null
    limit?: number
    query?: string | null
    roleId?: string | null
    startDate?: string | null
  }): Promise<Response<GetUsersResponseWithPaginationV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/admins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUsersResponseWithPaginationV3,
      'GetUsersResponseWithPaginationV3'
    )
  }
  /**
   * This endpoint returns user bans of userIDs specified in the payload action code : 10127
   */
  fetchUserBan_v3(
    data: GetBulkUserBansRequest,
    queryParams?: { activeOnly?: boolean | null; banType?: string | null }
  ): Promise<Response<GetUserBanV3Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/bans'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetUserBanV3Response, 'GetUserBanV3Response')
  }
  /**
   * List User By User ID This endpoint intended to list user information from the given list of userID and namespace
   */
  createUserBulk_v3(data: AdminBulkUserRequest): Promise<Response<ListUserInformationResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUserInformationResult,
      'ListUserInformationResult'
    )
  }
  /**
   * 1. **Cursor-Based User Retrieval** This API fetches user records ordered by created_at ASC, user_id ASC to ensure a stable pagination order. Pagination is handled using a cursor, which consists of created_at and user_id. 2. **GraphQL-Like Querying** By default, the API only returns the user ID. To include additional fields in the response, specify them in the request body under the fields parameter. ***Supported fields***: [&#39;created_at&#39;, &#39;email_address&#39;] ***Note***: If a value is not in the allowed list, the API will ignore it. 3. **Cursor Mechanics** The cursor consists of created_at and user_id from the last retrieved record. The next query fetches records strictly after the provided cursor. ***The query applies the following ordering logic***: Records with a later created_at timestamp are included. If multiple records have the same created_at, only records with a higher user_id are included. This ensures that records with the exact same created_at as the cursor are excluded from the next page to prevent duplication. 4. **Usage** For the first-time query, the request body does not require a cursor. If the data array is empty, it indicates that the cursor has reached the end of the available records.
   */
  fetchUserCursor_v3(data: CursorGetUserRequest): Promise<Response<CursorGetUserResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/cursor'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CursorGetUserResponse, 'CursorGetUserResponse')
  }
  /**
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace based on the **{namespace}** value in path parameter. An admin user can only assign role to namespaces that the admin user has the required permission. Role is optional, if not specified then it will only assign User role The invited admin will also assigned with &#34;User&#34; role by default.
   */
  createUserInvite_v3(data: InviteUserRequestV3): Promise<Response<InviteUserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/invite'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
  }
  /**
   * Endpoint behavior : - By default this endpoint searches all users on the specified namespace. - If query parameter is defined, endpoint will search users whose email address, display name, username, or third party partially match with the query. - The query parameter length must be between 3 and 30 characters. For email address queries (i.e., contains &#39;@&#39;), the allowed length is 3 to 40 characters. Otherwise, the database will not be queried. - If startDate and endDate parameters is defined, endpoint will search users which created on the certain date range. - If query, startDate and endDate parameters are defined, endpoint will search users whose email address and display name match and created on the certain date range. - If startDate parameter is defined, endpoint will search users that created start from the defined date. - If endDate parameter is defined, endpoint will search users that created until the defined date. - If platformId parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformId they have linked to. - If platformBy parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformUserId or platformDisplayName they have linked to, example value: platformUserId or platformDisplayName. - If limit is not defined, The default limit is 100. GraphQL-Like Querying: - By default, the API only returns the minimum fields -&gt; [displayName, authType, createdAt, uniqueDisplayName, deletionStatus, enabled, emailAddress, skipLoginQueue, testAccount] - To include additional fields in the response, specify them in the request params. - Supported fields: [country, emailVerified, avatarUrl, enabled] - Note: If a value is not in the allowed list, the API will ignore it. In Multi Tenant mode : - If super admin search in super admin namespace, the result will be all game admin user - If super admin search in game studio namespace, the result will be all game admin user and players under the game studio namespace - If super admin search in game namespace, the result will be all game admin users and players under the game namespace - If game admin search in their game studio namespace, the result will be all game admin user in the studio namespace - If game admin search in their game namespace, the result will be all player in the game namespace action code : 10133
   */
  getUsersSearch_v3(queryParams?: {
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
  }): Promise<Response<SearchUsersResponseWithPaginationV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SearchUsersResponseWithPaginationV3,
      'SearchUsersResponseWithPaginationV3'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_**
   */
  getUser_ByUserId_v2(userId: string): Promise<Response<UserResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponse, 'UserResponse')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [PATCH]_** This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
   */
  patchUser_ByUserId_v2(userId: string, data: UserUpdateRequest): Promise<Response<UserResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponse, 'UserResponse')
  }
  /**
   * Admin Get User By User Id
   */
  getUser_ByUserId_v3(userId: string): Promise<Response<UserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName, tags} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Admin can set Tags with array string data e.g. [&#34;10e9a46ef6164b7e86d08e86605bd8cf&#34;]. Admin also can reset user tags by sending empty array string e.g. [ ]. Users can have at most 5 tags. No duplicate tags allowed. **Response body logic when user updating email address:** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address. action code : 10103
   */
  patchUser_ByUserId_v3(userId: string, data: UserUpdateRequestV3): Promise<Response<UserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case
   */
  getAgerestrictions_v2(): Promise<Response<AgeRestrictionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AgeRestrictionResponse,
      'AgeRestrictionResponse'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [PATCH]_**
   */
  patchAgerestriction_v2(data: AgeRestrictionRequest): Promise<Response<AgeRestrictionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AgeRestrictionResponse,
      'AgeRestrictionResponse'
    )
  }
  /**
   * action code: 10138
   */
  getAgerestrictions_v3(): Promise<Response<AgeRestrictionResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AgeRestrictionResponseV3,
      'AgeRestrictionResponseV3'
    )
  }
  /**
   * action code: 10122
   */
  patchAgerestriction_v3(data: AgeRestrictionRequestV3): Promise<Response<AgeRestrictionResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AgeRestrictionResponseV3,
      'AgeRestrictionResponseV3'
    )
  }
  /**
   * This endpoint search user by the list of email addresses action code : 10132
   */
  fetchUserSearchBulk_v3(data: ListEmailAddressRequest): Promise<Response<ListUserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/search/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListUserResponseV3, 'ListUserResponseV3')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
   */
  createBan_ByUserId_v2(userId: string, data: BanCreateRequest): Promise<Response<UserBanResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/ban'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserBanResponse, 'UserBanResponse')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
   */
  getBans_ByUserId_v2(userId: string, queryParams?: { activeOnly?: boolean | null }): Promise<Response<UserBanResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserBanResponseArray, 'UserBanResponseArray')
  }
  /**
   * This endpoint retrieve the first page of the data if after and before parameters is empty action code : 10126
   */
  getBans_ByUserId_v3(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  ): Promise<Response<GetUserBanV3Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetUserBanV3Response, 'GetUserBanV3Response')
  }
  /**
   * Bans a user with specific type of ban. Ban types and reason can be queried. action code : 10141
   */
  createBan_ByUserId_v3(userId: string, data: BanCreateRequest): Promise<Response<UserBanResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserBanResponseV3, 'UserBanResponseV3')
  }
  /**
   * if limit is not defined, The default limit is 100
   */
  getUsersLinkhistories_v3(queryParams: {
    platformId: string | null
    limit?: number
    offset?: number
    platformUserId?: string | null
  }): Promise<Response<LinkingHistoryResponseWithPaginationV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/linkhistories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LinkingHistoryResponseWithPaginationV3,
      'LinkingHistoryResponseWithPaginationV3'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
   */
  updateRole_ByUserId_v2(userId: string, data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
   */
  updateRole_ByUserId_ByNS_v2(userId: string, data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status action code : 10140
   */
  getUsers_ByRoleId_v3(
    roleId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<Response<GetUsersResponseWithPaginationV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roles/{roleId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUsersResponseWithPaginationV3,
      'GetUsersResponseWithPaginationV3'
    )
  }
  /**
   * **[WARNING] This endpoint is only for testing purpose.** This endpoint get active user verification code. There are some scenarios of getting verification codes, all of them will be returned on this endpoint: - After account registration - After reset password request - After headless account upgrade - After update email request This API only accept publisher/studio namespace and userId. Action code: 10146
   */
  getCodes_ByUserId_v3(userId: string): Promise<Response<VerificationCodeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/codes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      VerificationCodeResponse,
      'VerificationCodeResponse'
    )
  }
  /**
   * Delete User Roles
   */
  deleteRole_ByUserId_v3(userId: string, data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **namespace** (in request body) if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4].
   */
  patchRole_ByUserId_v3(userId: string, data: NamespaceRoleRequest[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Admin Get User State By User Id
   */
  getState_ByUserId_v3(userId: string): Promise<Response<UserStateResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/state'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserStateResponseV3, 'UserStateResponseV3')
  }
  /**
   * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace
   */
  fetchUserBulkPlatform_v3(data: UserIDsRequest): Promise<Response<ListBulkUserPlatformsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/bulk/platforms'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListBulkUserPlatformsResponse,
      'ListBulkUserPlatformsResponse'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
   */
  updateEnable_ByUserId_v2(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/enable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint disable or enable user account. Set the enable status on the request body to true to enable user account or set to false to disable it. Disable user for **Account Disable** purpose fill the reason with: - **AdminDeactivateAccount** : if your disable account request comes from admin Enable user ignore field &#39;reason&#39; in the request body. action code : 10143
   */
  patchStatus_ByUserId_v3(userId: string, data: UpdateUserStatusRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint force verify user Note: - namespace: only accept publisher/studio namespace - userId: only accept publisher/studio userId action code: 10118
   */
  updateVerify_ByUserId_v3(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/verify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
   */
  updateDisable_ByUserId_v2(userId: string, data: DisableUserRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/disable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode} [PATCH]_**
   */
  patchCountry_ByCountryCode_v2(countryCode: string, data: CountryAgeRestrictionRequest): Promise<Response<Country>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Country, 'Country')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/password [PUT]_**
   */
  updatePassword_ByUserId_v2(userId: string, data: UserPasswordUpdateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/password'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update User Password
   */
  updatePassword_ByUserId_v3(userId: string, data: UserPasswordUpdateV3Request): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/password'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * **This endpoint requires publisher namespace.** Returns list of users ID and namespace with their Justice platform account, under a namespace. If user doesn&#39;t have Justice platform account, the linkedPlatforms will be empty array.&#39;
   */
  getUsersPlatformsJustice_v3(queryParams?: { limit?: number; offset?: number }): Promise<Response<ListUsersWithPlatformAccountsResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/platforms/justice'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUsersWithPlatformAccountsResponse,
      'ListUsersWithPlatformAccountsResponse'
    )
  }
  /**
   * Gets platform accounts that are already linked with user account. Action code : 10128 **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user.
   */
  getPlatforms_ByUserId_v3(
    userId: string,
    queryParams?: {
      after?: string | null
      before?: string | null
      limit?: number
      platformId?: string | null
      targetNamespace?: string | null
    }
  ): Promise<Response<UserLinkedPlatformsResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserLinkedPlatformsResponseV3,
      'UserLinkedPlatformsResponseV3'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries [GET]_**
   */
  getCountriesAgerestrictions_v2(): Promise<Response<CountryAgeRestrictionArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/countries/agerestrictions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CountryAgeRestrictionArray,
      'CountryAgeRestrictionArray'
    )
  }
  /**
   * action code : 10139
   */
  getAgerestrictionsCountries_v3(): Promise<Response<CountryV3ResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CountryV3ResponseArray,
      'CountryV3ResponseArray'
    )
  }
  /**
   * Will verify account and consume code if validateOnly is set false in request body Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** or **phone**
   */
  updateCodeVerify_ByUserId_v3(userId: string, data: UserVerificationRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/code/verify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * [WARNING] This endpoint is deleting user data from database directly by skipping GDPR flow
   */
  deleteInformation_ByUserId_v3(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/information'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Delete User Permission
   */
  deletePermission_ByUserId_v3(userId: string, data: PermissionDeleteRequest[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will APPEND user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  createPermission_ByUserId_v3(userId: string, data: Permissions): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  updatePermission_ByUserId_v3(userId: string, data: Permissions): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Set ban status for a single user for a specific ban. Retrieve user ban and choose the ban ID. Set the form parameter to true/false to enable or disable the ban. action code : 10142&#39;
   */
  patchBan_ByUserId_ByBanId_v3(userId: string, banId: string, data: BanUpdateRequest): Promise<Response<UserBanResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{banId}', banId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserBanResponseV3, 'UserBanResponseV3')
  }
  /**
   * This endpoint get user&#39;s bans summary&#39;
   */
  getBansSummary_ByUserId_v3(userId: string): Promise<Response<GetUserBanSummaryV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/summary'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetUserBanSummaryV3, 'GetUserBanSummaryV3')
  }
  /**
   * The verification code is sent to email address. Available contexts for use : - **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** - **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) - **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
   */
  updateCodeRequest_ByUserId_v3(userId: string, data: SendVerificationCodeRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/code/request'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Admin List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  fetchUser_ByPlatformId_v3(
    platformId: string,
    data: PlatformUserIdRequest,
    queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
  ): Promise<Response<UserPlatforms>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserPlatforms, 'UserPlatforms')
  }
  /**
   * Force linking platform account to user User Account. This endpoint intended for admin to forcefully link account to user. By default, these cases are not allowed - The platform account current is linked by another account - The target account ever linked this platform&#39;s another account
   */
  updatePlatformLink_ByUserId_v3(
    userId: string,
    data: LinkPlatformAccountRequest,
    queryParams?: { skipConflict?: boolean | null }
  ): Promise<Response<unknown>> {
    const params = { skipConflict: true, ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint removes role from user action code: 10110
   */
  deleteRole_ByUserId_ByRoleId_v3(userId: string, roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * action code: 10109
   */
  updateRole_ByUserId_ByRoleId_v3(userId: string, roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * action code : 10145
   */
  getDeletionStatus_ByUserId_v3(userId: string): Promise<Response<UserDeletionStatusResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/deletion/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserDeletionStatusResponse,
      'UserDeletionStatusResponse'
    )
  }
  /**
   * action code : 10144
   */
  patchDeletionStatus_ByUserId_v3(userId: string, data: UpdateUserDeletionStatusRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/deletion/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Notes for this endpoint: This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp.&#34;
   */
  getLoginsHistories_ByUserId_v3(
    userId: string,
    queryParams?: { after?: number; before?: number; limit?: number }
  ): Promise<Response<LoginHistoriesResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/logins/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LoginHistoriesResponse,
      'LoginHistoriesResponse'
    )
  }
  /**
   * This endpoint ONLY accept **Client Token** This endpoint is utilized for specific scenarios where **email notifications are disabled** The user&#39;s email will be marked as verified Note: - emailAddress or password field are optional - request body can&#39;t be empty action code : 10103
   */
  patchTrustlyIdentity_ByUserId_v3(userId: string, data: UserIdentityUpdateRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/trustly/identity'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one.
   */
  getDistinctPlatforms_ByUserId_v3(userId: string): Promise<Response<DistinctPlatformResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/distinctPlatforms'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DistinctPlatformResponseV3,
      'DistinctPlatformResponseV3'
    )
  }
  /**
   * This endpoint gets list justice platform account by providing publisher namespace and publisher userID
   */
  getPlatformsJustice_ByUserId_v3(userId: string): Promise<Response<GetUserMappingArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetUserMappingArray, 'GetUserMappingArray')
  }
  /**
   * This endpoint only retrieves 3rd party platform accounts linked to user. It will query platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one. ------ Supported status: - LINKED - RESTRICTIVELY_UNLINKED - UNLINKED - ALL
   */
  getPlatformsDistinct_ByUserId_v3(
    userId: string,
    queryParams?: { status?: string | null }
  ): Promise<Response<DistinctPlatformResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/distinct'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DistinctPlatformResponseV3,
      'DistinctPlatformResponseV3'
    )
  }
  /**
   * If validateOnly is set false, will upgrade headless account with verification code The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
   */
  updateHeadlesCodeVerify_ByUserId_v3(
    userId: string,
    data: UpgradeHeadlessAccountWithVerificationCodeRequestV3
  ): Promise<Response<UserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/headless/code/verify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * @deprecated
   * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** - **snapchat** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
   */
  deletePlatform_ByUserId_ByPlatformId_v3(userId: string, platformId: string, data: UnlinkUserPlatformRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * action code: 10123
   */
  patchAgerestrictionCountry_ByCountryCode_v3(
    countryCode: string,
    data: CountryAgeRestrictionV3Request
  ): Promise<Response<CountryV3Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CountryV3Response, 'CountryV3Response')
  }
  /**
   * This API is for admin to get user&#39;s link history. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  getPlatformsLinkHistories_ByUserId_v3(
    userId: string,
    queryParams: { platformId: string | null }
  ): Promise<Response<UserPlatformLinkHistories>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/link/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserPlatformLinkHistories,
      'UserPlatformLinkHistories'
    )
  }
  /**
   * Unlink user&#39;s account from third platform in all namespaces. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: to unlink steam third party account, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 Unlink platform account associated with a group: If user unlink platform account associated with a group, the API logic will unlink all of platform account under that group as well. example: if user unlink from ps4, the API logic will unlink ps5 and ps4web as well
   */
  deleteAll_ByUserId_ByPlatformId_v3(userId: string, platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/all'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId} [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
   */
  deleteLink_ByUserId_ByPlatformId_v2(
    userId: string,
    platformId: string,
    data: { platform_namespace?: string | null }
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v2/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **googleplaygames**: The ticket’s value is the authorization code returned by Google play games OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.
   */
  postLink_ByUserId_ByPlatformId_v3(userId: string, platformId: string, data: { ticket: string | null }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get User By Platform User ID This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 - **oculus**: if query by app user id, please set the query param **pidType** to **OCULUS_APP_USER_ID** (support game namespace only)
   */
  getUser_ByPlatformId_ByPlatformUserId_v3(
    platformId: string,
    platformUserId: string,
    queryParams?: { pidType?: string | null }
  ): Promise<Response<UserResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId}'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
      .replace('{platformUserId}', platformUserId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * Delete User Permission
   */
  deletePermission_ByUserId_ByResource_ByAction_v3(userId: string, resource: string, action: number): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint gets user single platform account metadata. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  getMetadata_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    queryParams?: { crossNamespace?: boolean | null }
  ): Promise<Response<UserPlatformMetadata>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserPlatformMetadata, 'UserPlatformMetadata')
  }
  /**
   * Admin get the link status of the third party platform token with user id. This endpoint is used for checking whether the third party user represented by third party token is linked with the corresponding user id. ## Supported platforms: - **steam**: The platform_token’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the authorization code(id_token) returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth.
   */
  postLinkStatu_ByUserId_ByPlatformId_v3(
    userId: string,
    platformId: string,
    data: { platformToken: string | null }
  ): Promise<Response<TokenThirdPartyLinkStatusResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/linkStatus'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TokenThirdPartyLinkStatusResponse,
      'TokenThirdPartyLinkStatusResponse'
    )
  }
  /**
   * This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace.
   */
  getPlatformJustice_ByUserId_ByTargetNamespace_v3(userId: string, targetNamespace: string): Promise<Response<GetUserMappingV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{targetNamespace}', targetNamespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetUserMappingV3, 'GetUserMappingV3')
  }
  /**
   * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
   */
  createPlatformJustice_ByUserId_ByTargetNamespace_v3(
    userId: string,
    targetNamespace: string
  ): Promise<Response<CreateJusticeUserResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{targetNamespace}', targetNamespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateJusticeUserResponse,
      'CreateJusticeUserResponse'
    )
  }
  /**
   * @deprecated
   * This API is for admin to delete user&#39;s linking history with target platform id. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 ---- **Substitute endpoint**: /v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/restrictions
   */
  deleteLinkHistory_ByUserId_ByPlatformId_v3(userId: string, platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is for admin to delete user&#39;s linking restriction with target platform id. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
   */
  deleteLinkRestriction_ByUserId_ByPlatformId_v3(userId: string, platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/restrictions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
