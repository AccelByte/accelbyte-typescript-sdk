/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { UsersAdminApi } from '../UsersAdminApi.js'

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

export enum Key_UsersAdmin {
  UsersMe_v3 = 'Iam.UsersAdmin.UsersMe_v3',
  Users_v2 = 'Iam.UsersAdmin.Users_v2',
  Users_v3 = 'Iam.UsersAdmin.Users_v3',
  User_v3 = 'Iam.UsersAdmin.User_v3',
  Admins_v3 = 'Iam.UsersAdmin.Admins_v3',
  UserBan_v3 = 'Iam.UsersAdmin.UserBan_v3',
  UserBulk_v3 = 'Iam.UsersAdmin.UserBulk_v3',
  UserCursor_v3 = 'Iam.UsersAdmin.UserCursor_v3',
  UserInvite_v3 = 'Iam.UsersAdmin.UserInvite_v3',
  UsersSearch_v3 = 'Iam.UsersAdmin.UsersSearch_v3',
  User_ByUserId_v2 = 'Iam.UsersAdmin.User_ByUserId_v2',
  User_ByUserId_v3 = 'Iam.UsersAdmin.User_ByUserId_v3',
  Agerestrictions_v2 = 'Iam.UsersAdmin.Agerestrictions_v2',
  Agerestriction_v2 = 'Iam.UsersAdmin.Agerestriction_v2',
  Agerestrictions_v3 = 'Iam.UsersAdmin.Agerestrictions_v3',
  Agerestriction_v3 = 'Iam.UsersAdmin.Agerestriction_v3',
  UserSearchBulk_v3 = 'Iam.UsersAdmin.UserSearchBulk_v3',
  Ban_ByUserId_v2 = 'Iam.UsersAdmin.Ban_ByUserId_v2',
  Bans_ByUserId_v2 = 'Iam.UsersAdmin.Bans_ByUserId_v2',
  Bans_ByUserId_v3 = 'Iam.UsersAdmin.Bans_ByUserId_v3',
  Ban_ByUserId_v3 = 'Iam.UsersAdmin.Ban_ByUserId_v3',
  UsersLinkhistories_v3 = 'Iam.UsersAdmin.UsersLinkhistories_v3',
  Role_ByUserId_v2 = 'Iam.UsersAdmin.Role_ByUserId_v2',
  Role_ByUserId_ByNS_v2 = 'Iam.UsersAdmin.Role_ByUserId_ByNS_v2',
  Users_ByRoleId_v3 = 'Iam.UsersAdmin.Users_ByRoleId_v3',
  Codes_ByUserId_v3 = 'Iam.UsersAdmin.Codes_ByUserId_v3',
  Role_ByUserId_v3 = 'Iam.UsersAdmin.Role_ByUserId_v3',
  State_ByUserId_v3 = 'Iam.UsersAdmin.State_ByUserId_v3',
  UserBulkPlatform_v3 = 'Iam.UsersAdmin.UserBulkPlatform_v3',
  Enable_ByUserId_v2 = 'Iam.UsersAdmin.Enable_ByUserId_v2',
  Status_ByUserId_v3 = 'Iam.UsersAdmin.Status_ByUserId_v3',
  Verify_ByUserId_v3 = 'Iam.UsersAdmin.Verify_ByUserId_v3',
  Disable_ByUserId_v2 = 'Iam.UsersAdmin.Disable_ByUserId_v2',
  Country_ByCountryCode_v2 = 'Iam.UsersAdmin.Country_ByCountryCode_v2',
  Password_ByUserId_v2 = 'Iam.UsersAdmin.Password_ByUserId_v2',
  Password_ByUserId_v3 = 'Iam.UsersAdmin.Password_ByUserId_v3',
  UsersPlatformsJustice_v3 = 'Iam.UsersAdmin.UsersPlatformsJustice_v3',
  Platforms_ByUserId_v3 = 'Iam.UsersAdmin.Platforms_ByUserId_v3',
  CountriesAgerestrictions_v2 = 'Iam.UsersAdmin.CountriesAgerestrictions_v2',
  AgerestrictionsCountries_v3 = 'Iam.UsersAdmin.AgerestrictionsCountries_v3',
  CodeVerify_ByUserId_v3 = 'Iam.UsersAdmin.CodeVerify_ByUserId_v3',
  Information_ByUserId_v3 = 'Iam.UsersAdmin.Information_ByUserId_v3',
  Permission_ByUserId_v3 = 'Iam.UsersAdmin.Permission_ByUserId_v3',
  Ban_ByUserId_ByBanId_v3 = 'Iam.UsersAdmin.Ban_ByUserId_ByBanId_v3',
  BansSummary_ByUserId_v3 = 'Iam.UsersAdmin.BansSummary_ByUserId_v3',
  CodeRequest_ByUserId_v3 = 'Iam.UsersAdmin.CodeRequest_ByUserId_v3',
  User_ByPlatformId_v3 = 'Iam.UsersAdmin.User_ByPlatformId_v3',
  PlatformLink_ByUserId_v3 = 'Iam.UsersAdmin.PlatformLink_ByUserId_v3',
  Role_ByUserId_ByRoleId_v3 = 'Iam.UsersAdmin.Role_ByUserId_ByRoleId_v3',
  DeletionStatus_ByUserId_v3 = 'Iam.UsersAdmin.DeletionStatus_ByUserId_v3',
  LoginsHistories_ByUserId_v3 = 'Iam.UsersAdmin.LoginsHistories_ByUserId_v3',
  TrustlyIdentity_ByUserId_v3 = 'Iam.UsersAdmin.TrustlyIdentity_ByUserId_v3',
  DistinctPlatforms_ByUserId_v3 = 'Iam.UsersAdmin.DistinctPlatforms_ByUserId_v3',
  PlatformsJustice_ByUserId_v3 = 'Iam.UsersAdmin.PlatformsJustice_ByUserId_v3',
  PlatformsDistinct_ByUserId_v3 = 'Iam.UsersAdmin.PlatformsDistinct_ByUserId_v3',
  HeadlesCodeVerify_ByUserId_v3 = 'Iam.UsersAdmin.HeadlesCodeVerify_ByUserId_v3',
  Platform_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.Platform_ByUserId_ByPlatformId_v3',
  AgerestrictionCountry_ByCountryCode_v3 = 'Iam.UsersAdmin.AgerestrictionCountry_ByCountryCode_v3',
  PlatformsLinkHistories_ByUserId_v3 = 'Iam.UsersAdmin.PlatformsLinkHistories_ByUserId_v3',
  All_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.All_ByUserId_ByPlatformId_v3',
  Link_ByUserId_ByPlatformId_v2 = 'Iam.UsersAdmin.Link_ByUserId_ByPlatformId_v2',
  Link_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.Link_ByUserId_ByPlatformId_v3',
  User_ByPlatformId_ByPlatformUserId_v3 = 'Iam.UsersAdmin.User_ByPlatformId_ByPlatformUserId_v3',
  Permission_ByUserId_ByResource_ByAction_v3 = 'Iam.UsersAdmin.Permission_ByUserId_ByResource_ByAction_v3',
  Metadata_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.Metadata_ByUserId_ByPlatformId_v3',
  LinkStatu_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.LinkStatu_ByUserId_ByPlatformId_v3',
  PlatformJustice_ByUserId_ByTargetNamespace_v3 = 'Iam.UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3',
  LinkHistory_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.LinkHistory_ByUserId_ByPlatformId_v3',
  LinkRestriction_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.LinkRestriction_ByUserId_ByPlatformId_v3'
}

/**
 * Get my user data action code : 10147
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UsersMe_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersMe_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsersMe_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMe_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersMe_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Users_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsers_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      platformId: string | null
      after?: string | null
      before?: string | null
      displayName?: string | null
      limit?: number
      loginId?: string | null
      platformUserId?: string | null
      roleId?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<SearchUsersByPlatformIdResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SearchUsersByPlatformIdResponse>) => void
): UseQueryResult<SearchUsersByPlatformIdResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsers_v2>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SearchUsersByPlatformIdResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint search user who owns the given email address action code : 10132
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Users_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsers_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { emailAddress?: string | null } },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsers_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint support to bulk update users based on given data. ------ Supported fields: * skipLoginQueue
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateUserMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersUpdateRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UsersUpdateRequestV3 }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUser_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.User_v3],
    mutationFn,
    ...options
  })
}

/**
 * List all users that has admin role (role that has admin_role attribute set to true). Endpoint behavior : - if query parameter is defined, endpoint will search users whose email address and display name match with the query - if roleId parameter is defined, endpoint will search users that have the defined roleId - if startDate and endDate parameters is defined, endpoint will search users which created on the certain date range - if startDate parameter is defined, endpoint will search users that created start from the defined date - if endDate parameter is defined, endpoint will search users that created until the defined date In multi tenant mode : - if super admin search in super admin namespace, the result will be all admin users - if super admin search in game studio namespace, the result will be all admin users under the game studio namespace - if studio admin search in their studio namespace, the result will be all admin user in the game studio namespace The endpoint will return all admin from all namespace when called from publisher namespace. When not called from publisher namespace, the endpoint will return all admin from the path namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Admins_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAdmins_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      after?: string | null
      before?: string | null
      endDate?: string | null
      limit?: number
      query?: string | null
      roleId?: string | null
      startDate?: string | null
    }
  },
  options?: Omit<UseQueryOptions<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUsersResponseWithPaginationV3>) => void
): UseQueryResult<GetUsersResponseWithPaginationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetAdmins_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAdmins_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Admins_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint returns user bans of userIDs specified in the payload action code : 10127
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UserBan_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserBan_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: GetBulkUserBansRequest; queryParams?: { activeOnly?: boolean | null; banType?: string | null } },
  options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_FetchUserBan_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUserBan_v3(
      input.data,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserBan_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List User By User ID This endpoint intended to list user information from the given list of userID and namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UserBulk_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_CreateUserBulkMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ListUserInformationResult, AxiosError<ApiError>, SdkSetConfigParam & { data: AdminBulkUserRequest }>,
    'mutationKey'
  >,
  callback?: (data: ListUserInformationResult) => void
): UseMutationResult<ListUserInformationResult, AxiosError<ApiError>, SdkSetConfigParam & { data: AdminBulkUserRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AdminBulkUserRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserBulk_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserBulk_v3],
    mutationFn,
    ...options
  })
}

/**
 * 1. **Cursor-Based User Retrieval** This API fetches user records ordered by created_at ASC, user_id ASC to ensure a stable pagination order. Pagination is handled using a cursor, which consists of created_at and user_id. 2. **GraphQL-Like Querying** By default, the API only returns the user ID. To include additional fields in the response, specify them in the request body under the fields parameter. ***Supported fields***: [&#39;created_at&#39;, &#39;email_address&#39;] ***Note***: If a value is not in the allowed list, the API will ignore it. 3. **Cursor Mechanics** The cursor consists of created_at and user_id from the last retrieved record. The next query fetches records strictly after the provided cursor. ***The query applies the following ordering logic***: Records with a later created_at timestamp are included. If multiple records have the same created_at, only records with a higher user_id are included. This ensures that records with the exact same created_at as the cursor are excluded from the next page to prevent duplication. 4. **Usage** For the first-time query, the request body does not require a cursor. If the data array is empty, it indicates that the cursor has reached the end of the available records.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UserCursor_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserCursor_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: CursorGetUserRequest },
  options?: Omit<UseQueryOptions<CursorGetUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CursorGetUserResponse>) => void
): UseQueryResult<CursorGetUserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_FetchUserCursor_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUserCursor_v3(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CursorGetUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserCursor_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace based on the **{namespace}** value in path parameter. An admin user can only assign role to namespaces that the admin user has the required permission. Role is optional, if not specified then it will only assign User role The invited admin will also assigned with &#34;User&#34; role by default.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UserInvite_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_CreateUserInviteMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: InviteUserResponseV3) => void
): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: InviteUserRequestV3 }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserInvite_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserInvite_v3],
    mutationFn,
    ...options
  })
}

/**
 * Endpoint behavior : - By default this endpoint searches all users on the specified namespace. - If query parameter is defined, endpoint will search users whose email address, display name, username, or third party partially match with the query. - The query parameter length must be between 3 and 30 characters. For email address queries (i.e., contains &#39;@&#39;), the allowed length is 3 to 40 characters. Otherwise, the database will not be queried. - If startDate and endDate parameters is defined, endpoint will search users which created on the certain date range. - If query, startDate and endDate parameters are defined, endpoint will search users whose email address and display name match and created on the certain date range. - If startDate parameter is defined, endpoint will search users that created start from the defined date. - If endDate parameter is defined, endpoint will search users that created until the defined date. - If platformId parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformId they have linked to. - If platformBy parameter is defined and by parameter is using thirdparty, endpoint will search users based on the platformUserId or platformDisplayName they have linked to, example value: platformUserId or platformDisplayName. - If limit is not defined, The default limit is 100. GraphQL-Like Querying: - By default, the API only returns the minimum fields -&gt; [displayName, authType, createdAt, uniqueDisplayName, deletionStatus, enabled, emailAddress, skipLoginQueue, testAccount] - To include additional fields in the response, specify them in the request params. - Supported fields: [country, emailVerified, avatarUrl, enabled] - Note: If a value is not in the allowed list, the API will ignore it. In Multi Tenant mode : - If super admin search in super admin namespace, the result will be all game admin user - If super admin search in game studio namespace, the result will be all game admin user and players under the game studio namespace - If super admin search in game namespace, the result will be all game admin users and players under the game namespace - If game admin search in their game studio namespace, the result will be all game admin user in the studio namespace - If game admin search in their game namespace, the result will be all player in the game namespace action code : 10133
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UsersSearch_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersSearch_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
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
    }
  },
  options?: Omit<UseQueryOptions<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SearchUsersResponseWithPaginationV3>) => void
): UseQueryResult<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsersSearch_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersSearch_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersSearch_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUser_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponse>) => void
): UseQueryResult<UserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUser_ByUserId_v2>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId_v2(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId} [PATCH]_** This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchUser_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserResponse) => void
): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserUpdateRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchUser_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.User_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Admin Get User By User Id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUser_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUser_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName, tags} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Admin can set Tags with array string data e.g. [&#34;10e9a46ef6164b7e86d08e86605bd8cf&#34;]. Admin also can reset user tags by sending empty array string e.g. [ ]. Users can have at most 5 tags. No duplicate tags allowed. **Response body logic when user updating email address:** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address. action code : 10103
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchUser_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserUpdateRequestV3 }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchUser_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.User_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Agerestrictions_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAgerestrictions_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AgeRestrictionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AgeRestrictionResponse>) => void
): UseQueryResult<AgeRestrictionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetAgerestrictions_v2>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAgerestrictions_v2()
    callback && callback(response)
    return response.data
  }

  return useQuery<AgeRestrictionResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Agerestrictions_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Agerestriction_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchAgerestrictionMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AgeRestrictionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequest }>,
    'mutationKey'
  >,
  callback?: (data: AgeRestrictionResponse) => void
): UseMutationResult<AgeRestrictionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AgeRestrictionRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchAgerestriction_v2(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Agerestriction_v2],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10138
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Agerestrictions_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAgerestrictions_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AgeRestrictionResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AgeRestrictionResponseV3>) => void
): UseQueryResult<AgeRestrictionResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetAgerestrictions_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAgerestrictions_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<AgeRestrictionResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Agerestrictions_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * action code: 10122
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Agerestriction_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchAgerestrictionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AgeRestrictionResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: AgeRestrictionResponseV3) => void
): UseMutationResult<AgeRestrictionResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AgeRestrictionRequestV3 }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchAgerestriction_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Agerestriction_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint search user by the list of email addresses action code : 10132
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UserSearchBulk_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserSearchBulk_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: ListEmailAddressRequest },
  options?: Omit<UseQueryOptions<ListUserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListUserResponseV3>) => void
): UseQueryResult<ListUserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_FetchUserSearchBulk_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUserSearchBulk_v3(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListUserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserSearchBulk_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Ban_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_CreateBan_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BanCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponse) => void
): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BanCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BanCreateRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBan_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Bans_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetBans_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<UserBanResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserBanResponseArray>) => void
): UseQueryResult<UserBanResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetBans_ByUserId_v2>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserBanResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Bans_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint retrieve the first page of the data if after and before parameters is empty action code : 10126
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Bans_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetBans_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  },
  options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetBans_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_ByUserId_v3(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Bans_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bans a user with specific type of ban. Ban types and reason can be queried. action code : 10141
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Ban_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_CreateBan_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BanCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponseV3) => void
): UseMutationResult<UserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BanCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BanCreateRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBan_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * if limit is not defined, The default limit is 100
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UsersLinkhistories_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersLinkhistories_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: { platformId: string | null; limit?: number; offset?: number; platformUserId?: string | null }
  },
  options?: Omit<UseQueryOptions<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LinkingHistoryResponseWithPaginationV3>) => void
): UseQueryResult<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsersLinkhistories_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersLinkhistories_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersLinkhistories_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Role_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateRole_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: string[] }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRole_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Role_ByUserId_ByNS_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateRole_ByUserId_ByNSMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: string[] }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRole_ByUserId_ByNS_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByNS_v2],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status action code : 10140
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Users_ByRoleId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsers_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string; queryParams?: { after?: number; before?: number; limit?: number } },
  options?: Omit<UseQueryOptions<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUsersResponseWithPaginationV3>) => void
): UseQueryResult<GetUsersResponseWithPaginationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsers_ByRoleId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers_ByRoleId_v3(
      input.roleId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * **[WARNING] This endpoint is only for testing purpose.** This endpoint get active user verification code. There are some scenarios of getting verification codes, all of them will be returned on this endpoint: - After account registration - After reset password request - After headless account upgrade - After update email request This API only accept publisher/studio namespace and userId. Action code: 10146
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Codes_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetCodes_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<VerificationCodeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<VerificationCodeResponse>) => void
): UseQueryResult<VerificationCodeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetCodes_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCodes_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<VerificationCodeResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Codes_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete User Roles
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Role_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteRole_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: string[] }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRole_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **namespace** (in request body) if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4].
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Role_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchRole_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: NamespaceRoleRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: NamespaceRoleRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: NamespaceRoleRequest[] }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchRole_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Admin Get User State By User Id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.State_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetState_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserStateResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStateResponseV3>) => void
): UseQueryResult<UserStateResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetState_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getState_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserStateResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.State_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UserBulkPlatform_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserBulkPlatform_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: UserIDsRequest },
  options?: Omit<UseQueryOptions<ListBulkUserPlatformsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListBulkUserPlatformsResponse>) => void
): UseQueryResult<ListBulkUserPlatformsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_FetchUserBulkPlatform_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUserBulkPlatform_v3(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListBulkUserPlatformsResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserBulkPlatform_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Enable_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateEnable_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateEnable_ByUserId_v2(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Enable_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint disable or enable user account. Set the enable status on the request body to true to enable user account or set to false to disable it. Disable user for **Account Disable** purpose fill the reason with: - **AdminDeactivateAccount** : if your disable account request comes from admin Enable user ignore field &#39;reason&#39; in the request body. action code : 10143
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Status_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchStatus_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UpdateUserStatusRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UpdateUserStatusRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UpdateUserStatusRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchStatus_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Status_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint force verify user Note: - namespace: only accept publisher/studio namespace - userId: only accept publisher/studio userId action code: 10118
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Verify_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateVerify_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateVerify_ByUserId_v3(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Verify_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Disable_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateDisable_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: DisableUserRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: DisableUserRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: DisableUserRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDisable_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Disable_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode} [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Country_ByCountryCode_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchCountry_ByCountryCodeMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<Country, AxiosError<ApiError>, SdkSetConfigParam & { countryCode: string; data: CountryAgeRestrictionRequest }>,
    'mutationKey'
  >,
  callback?: (data: Country) => void
): UseMutationResult<Country, AxiosError<ApiError>, SdkSetConfigParam & { countryCode: string; data: CountryAgeRestrictionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { countryCode: string; data: CountryAgeRestrictionRequest }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchCountry_ByCountryCode_v2(input.countryCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Country_ByCountryCode_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/password [PUT]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Password_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdatePassword_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePassword_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Password_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Update User Password
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Password_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdatePassword_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateV3Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateV3Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserPasswordUpdateV3Request }) => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePassword_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Password_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * **This endpoint requires publisher namespace.** Returns list of users ID and namespace with their Justice platform account, under a namespace. If user doesn&#39;t have Justice platform account, the linkedPlatforms will be empty array.&#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UsersPlatformsJustice_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersPlatformsJustice_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListUsersWithPlatformAccountsResponse>) => void
): UseQueryResult<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUsersPlatformsJustice_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersPlatformsJustice_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersPlatformsJustice_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Gets platform accounts that are already linked with user account. Action code : 10128 **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Platforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatforms_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      after?: string | null
      before?: string | null
      limit?: number
      platformId?: string | null
      targetNamespace?: string | null
    }
  },
  options?: Omit<UseQueryOptions<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserLinkedPlatformsResponseV3>) => void
): UseQueryResult<UserLinkedPlatformsResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetPlatforms_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlatforms_ByUserId_v3(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Platforms_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/agerestrictions/countries [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.CountriesAgerestrictions_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetCountriesAgerestrictions_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CountryAgeRestrictionArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryAgeRestrictionArray>) => void
): UseQueryResult<CountryAgeRestrictionArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetCountriesAgerestrictions_v2>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getCountriesAgerestrictions_v2()
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryAgeRestrictionArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.CountriesAgerestrictions_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * action code : 10139
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.AgerestrictionsCountries_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAgerestrictionsCountries_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CountryV3ResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryV3ResponseArray>) => void
): UseQueryResult<CountryV3ResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetAgerestrictionsCountries_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAgerestrictionsCountries_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryV3ResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.AgerestrictionsCountries_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Will verify account and consume code if validateOnly is set false in request body Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** or **phone**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.CodeVerify_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateCodeVerify_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserVerificationRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserVerificationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserVerificationRequest }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCodeVerify_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.CodeVerify_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * [WARNING] This endpoint is deleting user data from database directly by skipping GDPR flow
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Information_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteInformation_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteInformation_ByUserId_v3(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Information_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Delete User Permission
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Permission_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeletePermission_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PermissionDeleteRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PermissionDeleteRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PermissionDeleteRequest[] }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will APPEND user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Permission_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_CreatePermission_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: Permissions }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: Permissions }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: Permissions }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPermission_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Permission_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdatePermission_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: Permissions }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: Permissions }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: Permissions }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Set ban status for a single user for a specific ban. Retrieve user ban and choose the ban ID. Set the form parameter to true/false to enable or disable the ban. action code : 10142&#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Ban_ByUserId_ByBanId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchBan_ByUserId_ByBanIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserBanResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; banId: string; data: BanUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UserBanResponseV3) => void
): UseMutationResult<
  UserBanResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; banId: string; data: BanUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; banId: string; data: BanUpdateRequest }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchBan_ByUserId_ByBanId_v3(input.userId, input.banId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_ByBanId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint get user&#39;s bans summary&#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.BansSummary_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetBansSummary_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetUserBanSummaryV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserBanSummaryV3>) => void
): UseQueryResult<GetUserBanSummaryV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetBansSummary_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBansSummary_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserBanSummaryV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.BansSummary_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * The verification code is sent to email address. Available contexts for use : - **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** - **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) - **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.CodeRequest_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateCodeRequest_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SendVerificationCodeRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SendVerificationCodeRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SendVerificationCodeRequestV3 }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCodeRequest_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.CodeRequest_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Admin List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - android - ios - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUser_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    platformId: string
    data: PlatformUserIdRequest
    queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
  },
  options?: Omit<UseQueryOptions<UserPlatforms, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPlatforms>) => void
): UseQueryResult<UserPlatforms, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_FetchUser_ByPlatformId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUser_ByPlatformId_v3(
      input.platformId,
      input.data,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserPlatforms, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Force linking platform account to user User Account. This endpoint intended for admin to forcefully link account to user. By default, these cases are not allowed - The platform account current is linked by another account - The target account ever linked this platform&#39;s another account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.PlatformLink_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdatePlatformLink_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: LinkPlatformAccountRequest; queryParams?: { skipConflict?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: LinkPlatformAccountRequest; queryParams?: { skipConflict?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; data: LinkPlatformAccountRequest; queryParams?: { skipConflict?: boolean | null } }
  ) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePlatformLink_ByUserId_v3(input.userId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.PlatformLink_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint removes role from user action code: 10110
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteRole_ByUserId_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; roleId: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRole_ByUserId_ByRoleId_v3(input.userId, input.roleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10109
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateRole_ByUserId_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; roleId: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRole_ByUserId_ByRoleId_v3(input.userId, input.roleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code : 10145
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetDeletionStatus_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserDeletionStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserDeletionStatusResponse>) => void
): UseQueryResult<UserDeletionStatusResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetDeletionStatus_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDeletionStatus_ByUserId_v3(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserDeletionStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * action code : 10144
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchDeletionStatus_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UpdateUserDeletionStatusRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UpdateUserDeletionStatusRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UpdateUserDeletionStatusRequest }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchDeletionStatus_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Notes for this endpoint: This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp.&#34;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.LoginsHistories_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetLoginsHistories_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { after?: number; before?: number; limit?: number } },
  options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoginHistoriesResponse>) => void
): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetLoginsHistories_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLoginsHistories_ByUserId_v3(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.LoginsHistories_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint ONLY accept **Client Token** This endpoint is utilized for specific scenarios where **email notifications are disabled** The user&#39;s email will be marked as verified Note: - emailAddress or password field are optional - request body can&#39;t be empty action code : 10103
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.TrustlyIdentity_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchTrustlyIdentity_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserIdentityUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserIdentityUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserIdentityUpdateRequestV3 }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchTrustlyIdentity_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.TrustlyIdentity_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.DistinctPlatforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetDistinctPlatforms_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DistinctPlatformResponseV3>) => void
): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetDistinctPlatforms_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDistinctPlatforms_ByUserId_v3(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.DistinctPlatforms_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint gets list justice platform account by providing publisher namespace and publisher userID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.PlatformsJustice_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformsJustice_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetUserMappingArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserMappingArray>) => void
): UseQueryResult<GetUserMappingArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetPlatformsJustice_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPlatformsJustice_ByUserId_v3(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserMappingArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsJustice_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint only retrieves 3rd party platform accounts linked to user. It will query platform accounts and result will be distinct &amp; grouped, same platform we will pick oldest linked one. ------ Supported status: - LINKED - RESTRICTIVELY_UNLINKED - UNLINKED - ALL
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.PlatformsDistinct_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformsDistinct_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { status?: string | null } },
  options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DistinctPlatformResponseV3>) => void
): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetPlatformsDistinct_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPlatformsDistinct_ByUserId_v3(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsDistinct_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * If validateOnly is set false, will upgrade headless account with verification code The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.HeadlesCodeVerify_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_UpdateHeadlesCodeVerify_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }
    >,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<
  UserResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateHeadlesCodeVerify_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.HeadlesCodeVerify_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** - **snapchat** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Platform_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeletePlatform_ByUserId_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; platformId: string; data: UnlinkUserPlatformRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; platformId: string; data: UnlinkUserPlatformRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; platformId: string; data: UnlinkUserPlatformRequest }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePlatform_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Platform_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10123
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.AgerestrictionCountry_ByCountryCode_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PatchAgerestrictionCountry_ByCountryCodeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CountryV3Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { countryCode: string; data: CountryAgeRestrictionV3Request }
    >,
    'mutationKey'
  >,
  callback?: (data: CountryV3Response) => void
): UseMutationResult<
  CountryV3Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { countryCode: string; data: CountryAgeRestrictionV3Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { countryCode: string; data: CountryAgeRestrictionV3Request }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchAgerestrictionCountry_ByCountryCode_v3(input.countryCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.AgerestrictionCountry_ByCountryCode_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is for admin to get user&#39;s link history. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.PlatformsLinkHistories_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformsLinkHistories_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { platformId: string | null } },
  options?: Omit<UseQueryOptions<UserPlatformLinkHistories, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPlatformLinkHistories>) => void
): UseQueryResult<UserPlatformLinkHistories, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetPlatformsLinkHistories_ByUserId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPlatformsLinkHistories_ByUserId_v3(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserPlatformLinkHistories, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsLinkHistories_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Unlink user&#39;s account from third platform in all namespaces. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: to unlink steam third party account, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 Unlink platform account associated with a group: If user unlink platform account associated with a group, the API logic will unlink all of platform account under that group as well. example: if user unlink from ps4, the API logic will unlink ps5 and ps4web as well
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.All_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteAll_ByUserId_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; platformId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; platformId: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAll_ByUserId_ByPlatformId_v3(input.userId, input.platformId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.All_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId} [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Link_ByUserId_ByPlatformId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteLink_ByUserId_ByPlatformIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; platformId: string; data: { platform_namespace?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; platformId: string; data: { platform_namespace?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; platformId: string; data: { platform_namespace?: string | null } }
  ) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLink_ByUserId_ByPlatformId_v2(input.userId, input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Link_ByUserId_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}

/**
 * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **googleplaygames**: The ticket’s value is the authorization code returned by Google play games OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the authorization code(id_token) returned by Nintendo OAuth.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Link_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PostLink_ByUserId_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; platformId: string; data: { ticket: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; platformId: string; data: { ticket: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; platformId: string; data: { ticket: string | null } }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postLink_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Link_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Get User By Platform User ID This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 - **oculus**: if query by app user id, please set the query param **pidType** to **OCULUS_APP_USER_ID** (support game namespace only)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.User_ByPlatformId_ByPlatformUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUser_ByPlatformId_ByPlatformUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string; platformUserId: string; queryParams?: { pidType?: string | null } },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetUser_ByPlatformId_ByPlatformUserId_v3>[1]) => async () => {
      const response = await UsersAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUser_ByPlatformId_ByPlatformUserId_v3(input.platformId, input.platformUserId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByPlatformId_ByPlatformUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete User Permission
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Permission_ByUserId_ByResource_ByAction_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeletePermission_ByUserId_ByResource_ByActionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; resource: string; action: number }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByUserId_ByResource_ByAction_v3(input.userId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_ByResource_ByAction_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint gets user single platform account metadata. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.Metadata_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetMetadata_ByUserId_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; platformId: string; queryParams?: { crossNamespace?: boolean | null } },
  options?: Omit<UseQueryOptions<UserPlatformMetadata, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPlatformMetadata>) => void
): UseQueryResult<UserPlatformMetadata, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetMetadata_ByUserId_ByPlatformId_v3>[1]) => async () => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getMetadata_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserPlatformMetadata, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Metadata_ByUserId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin get the link status of the third party platform token with user id. This endpoint is used for checking whether the third party user represented by third party token is linked with the corresponding user id. ## Supported platforms: - **steam**: The platform_token’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the authorization code(id_token) returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.LinkStatu_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_PostLinkStatu_ByUserId_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TokenThirdPartyLinkStatusResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; platformId: string; data: { platformToken: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TokenThirdPartyLinkStatusResponse) => void
): UseMutationResult<
  TokenThirdPartyLinkStatusResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; platformId: string; data: { platformToken: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; platformId: string; data: { platformToken: string | null } }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postLinkStatu_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkStatu_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformJustice_ByUserId_ByTargetNamespace_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; targetNamespace: string },
  options?: Omit<UseQueryOptions<GetUserMappingV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserMappingV3>) => void
): UseQueryResult<GetUserMappingV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUsersAdminApi_GetPlatformJustice_ByUserId_ByTargetNamespace_v3>[1]) => async () => {
      const response = await UsersAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformJustice_ByUserId_ByTargetNamespace_v3(input.userId, input.targetNamespace)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetUserMappingV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create Justice User from Publisher User information. It will check first if Justice User on target namespace already exist.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_CreatePlatformJustice_ByUserId_ByTargetNamespaceMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; targetNamespace: string }>,
    'mutationKey'
  >,
  callback?: (data: CreateJusticeUserResponse) => void
): UseMutationResult<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; targetNamespace: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; targetNamespace: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPlatformJustice_ByUserId_ByTargetNamespace_v3(input.userId, input.targetNamespace)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This API is for admin to delete user&#39;s linking history with target platform id. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 ---- **Substitute endpoint**: /v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/restrictions
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.LinkHistory_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteLinkHistory_ByUserId_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; platformId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; platformId: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLinkHistory_ByUserId_ByPlatformId_v3(input.userId, input.platformId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkHistory_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is for admin to delete user&#39;s linking restriction with target platform id. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.LinkRestriction_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_DeleteLinkRestriction_ByUserId_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; platformId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; platformId: string }) => {
    const response = await UsersAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLinkRestriction_ByUserId_ByPlatformId_v3(input.userId, input.platformId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkRestriction_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
