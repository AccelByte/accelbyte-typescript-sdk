/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { UsersApi } from '../UsersApi.js'

import { BanCreateRequest } from '../../generated-definitions/BanCreateRequest.js'
import { Country } from '../../generated-definitions/Country.js'
import { CountryV3Response } from '../../generated-definitions/CountryV3Response.js'
import { CreateJusticeUserResponse } from '../../generated-definitions/CreateJusticeUserResponse.js'
import { DisableUserRequest } from '../../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../../generated-definitions/DistinctPlatformResponseV3.js'
import { ForgotPasswordRequestV3 } from '../../generated-definitions/ForgotPasswordRequestV3.js'
import { GetAdminUsersResponse } from '../../generated-definitions/GetAdminUsersResponse.js'
import { GetLinkHeadlessAccountConflictResponse } from '../../generated-definitions/GetLinkHeadlessAccountConflictResponse.js'
import { GetPublisherUserResponse } from '../../generated-definitions/GetPublisherUserResponse.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { GetUserJusticePlatformAccountResponse } from '../../generated-definitions/GetUserJusticePlatformAccountResponse.js'
import { GetUserMapping } from '../../generated-definitions/GetUserMapping.js'
import { GetUserMappingArray } from '../../generated-definitions/GetUserMappingArray.js'
import { GetUserMappingV3Array } from '../../generated-definitions/GetUserMappingV3Array.js'
import { LinkHeadlessAccountRequest } from '../../generated-definitions/LinkHeadlessAccountRequest.js'
import { LinkPlatformAccountRequest } from '../../generated-definitions/LinkPlatformAccountRequest.js'
import { LinkPlatformAccountWithProgressionRequest } from '../../generated-definitions/LinkPlatformAccountWithProgressionRequest.js'
import { LinkRequest } from '../../generated-definitions/LinkRequest.js'
import { ListBulkUserResponse } from '../../generated-definitions/ListBulkUserResponse.js'
import { LoginHistoriesResponse } from '../../generated-definitions/LoginHistoriesResponse.js'
import { Permissions } from '../../generated-definitions/Permissions.js'
import { PlatformUserIdRequest } from '../../generated-definitions/PlatformUserIdRequest.js'
import { PublicUserInformationResponseV3 } from '../../generated-definitions/PublicUserInformationResponseV3.js'
import { PublicUserResponse } from '../../generated-definitions/PublicUserResponse.js'
import { PublicUserResponseV3 } from '../../generated-definitions/PublicUserResponseV3.js'
import { PublicUserUpdateRequestV3 } from '../../generated-definitions/PublicUserUpdateRequestV3.js'
import { PublicUsersResponse } from '../../generated-definitions/PublicUsersResponse.js'
import { ResetPasswordRequest } from '../../generated-definitions/ResetPasswordRequest.js'
import { ResetPasswordRequestV3 } from '../../generated-definitions/ResetPasswordRequestV3.js'
import { SearchUsersResponse } from '../../generated-definitions/SearchUsersResponse.js'
import { SendRegisterVerificationCodeRequest } from '../../generated-definitions/SendRegisterVerificationCodeRequest.js'
import { SendVerificationCodeRequest } from '../../generated-definitions/SendVerificationCodeRequest.js'
import { SendVerificationCodeRequestV3 } from '../../generated-definitions/SendVerificationCodeRequestV3.js'
import { SendVerificationLinkRequest } from '../../generated-definitions/SendVerificationLinkRequest.js'
import { UnlinkUserPlatformRequest } from '../../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdatePermissionScheduleRequest } from '../../generated-definitions/UpdatePermissionScheduleRequest.js'
import { UpgradeHeadlessAccountRequest } from '../../generated-definitions/UpgradeHeadlessAccountRequest.js'
import { UpgradeHeadlessAccountV3Request } from '../../generated-definitions/UpgradeHeadlessAccountV3Request.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequest } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponse } from '../../generated-definitions/UserBanResponse.js'
import { UserBanResponseArray } from '../../generated-definitions/UserBanResponseArray.js'
import { UserCreateRequest } from '../../generated-definitions/UserCreateRequest.js'
import { UserCreateRequestV3 } from '../../generated-definitions/UserCreateRequestV3.js'
import { UserCreateResponse } from '../../generated-definitions/UserCreateResponse.js'
import { UserCreateResponseV3 } from '../../generated-definitions/UserCreateResponseV3.js'
import { UserIDsRequest } from '../../generated-definitions/UserIDsRequest.js'
import { UserInformation } from '../../generated-definitions/UserInformation.js'
import { UserInformationV3 } from '../../generated-definitions/UserInformationV3.js'
import { UserInputValidationRequest } from '../../generated-definitions/UserInputValidationRequest.js'
import { UserInputValidationResponse } from '../../generated-definitions/UserInputValidationResponse.js'
import { UserInvitationV3 } from '../../generated-definitions/UserInvitationV3.js'
import { UserLinkedPlatformArray } from '../../generated-definitions/UserLinkedPlatformArray.js'
import { UserLinkedPlatformsResponseV3 } from '../../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateRequest } from '../../generated-definitions/UserPasswordUpdateRequest.js'
import { UserPasswordUpdateV3Request } from '../../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserProfileUpdateAllowStatus } from '../../generated-definitions/UserProfileUpdateAllowStatus.js'
import { UserResponse } from '../../generated-definitions/UserResponse.js'
import { UserResponseArray } from '../../generated-definitions/UserResponseArray.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequest } from '../../generated-definitions/UserUpdateRequest.js'
import { UserVerificationRequest } from '../../generated-definitions/UserVerificationRequest.js'
import { UserVerificationRequestV3 } from '../../generated-definitions/UserVerificationRequestV3.js'
import { UsersPlatformInfosRequestV3 } from '../../generated-definitions/UsersPlatformInfosRequestV3.js'
import { UsersPlatformInfosResponse } from '../../generated-definitions/UsersPlatformInfosResponse.js'
import { VerifyRegistrationCode } from '../../generated-definitions/VerifyRegistrationCode.js'
import { WebLinkingResponse } from '../../generated-definitions/WebLinkingResponse.js'

export enum Key_Users {
  UsersMe_v3 = 'Iam.Users.UsersMe_v3',
  User = 'Iam.Users.User',
  UsersMeProfileStatus_v3 = 'Iam.Users.UsersMeProfileStatus_v3',
  UsersAdmin = 'Iam.Users.UsersAdmin',
  UsersVerifyLinkVerify_v3 = 'Iam.Users.UsersVerifyLinkVerify_v3',
  UsersSearch = 'Iam.Users.UsersSearch',
  User_ByUserId = 'Iam.Users.User_ByUserId',
  UsersByLoginId = 'Iam.Users.UsersByLoginId',
  User_v2 = 'Iam.Users.User_v2',
  Users_v3 = 'Iam.Users.Users_v3',
  User_v3 = 'Iam.Users.User_v3',
  UserMeVerifyLinkRequest_v3 = 'Iam.Users.UserMeVerifyLinkRequest_v3',
  Ban_ByUserId = 'Iam.Users.Ban_ByUserId',
  UserMe_v3 = 'Iam.Users.UserMe_v3',
  UsersMeHeadlessLinkConflict_v3 = 'Iam.Users.UsersMeHeadlessLinkConflict_v3',
  Bans_ByUserId = 'Iam.Users.Bans_ByUserId',
  UserResetPassword = 'Iam.Users.UserResetPassword',
  Role_ByUserId = 'Iam.Users.Role_ByUserId',
  UserForgotPassword = 'Iam.Users.UserForgotPassword',
  UsersListByLoginIds = 'Iam.Users.UsersListByLoginIds',
  Enable_ByUserId = 'Iam.Users.Enable_ByUserId',
  UserReset_v3 = 'Iam.Users.UserReset_v3',
  Disable_ByUserId = 'Iam.Users.Disable_ByUserId',
  UsersByPlatformUserId = 'Iam.Users.UsersByPlatformUserId',
  UserForgot_v3 = 'Iam.Users.UserForgot_v3',
  Password_ByUserId = 'Iam.Users.Password_ByUserId',
  Crosslink_ByUserId = 'Iam.Users.Crosslink_ByUserId',
  Platforms_ByUserId = 'Iam.Users.Platforms_ByUserId',
  Publisher_ByUserId = 'Iam.Users.Publisher_ByUserId',
  User_ByUserId_v2 = 'Iam.Users.User_ByUserId_v2',
  User_ByUserId_v3 = 'Iam.Users.User_ByUserId_v3',
  UserMeHeadlesLinkWithProgression_v3 = 'Iam.Users.UserMeHeadlesLinkWithProgression_v3',
  UserPlatform_v3 = 'Iam.Users.UserPlatform_v3',
  Information_ByUserId = 'Iam.Users.Information_ByUserId',
  Permission_ByUserId = 'Iam.Users.Permission_ByUserId',
  UserBulkBasic_v3 = 'Iam.Users.UserBulkBasic_v3',
  Verification_ByUserId = 'Iam.Users.Verification_ByUserId',
  UserCodeVerify_v3 = 'Iam.Users.UserCodeVerify_v3',
  UserMePassword_v3 = 'Iam.Users.UserMePassword_v3',
  UsersAvailability_v3 = 'Iam.Users.UsersAvailability_v3',
  UserCodeRequest_v3 = 'Iam.Users.UserCodeRequest_v3',
  Role_ByUserId_ByRoleId = 'Iam.Users.Role_ByUserId_ByRoleId',
  Bans_ByUserId_v2 = 'Iam.Users.Bans_ByUserId_v2',
  UserResetPassword_v2 = 'Iam.Users.UserResetPassword_v2',
  Bans_ByUserId_v3 = 'Iam.Users.Bans_ByUserId_v3',
  UserForgotPassword_v2 = 'Iam.Users.UserForgotPassword_v2',
  UserMeCodeVerify_v3 = 'Iam.Users.UserMeCodeVerify_v3',
  LoginsHistories_ByUserId = 'Iam.Users.LoginsHistories_ByUserId',
  Verificationcode_ByUserId = 'Iam.Users.Verificationcode_ByUserId',
  UserMeCodeRequest_v3 = 'Iam.Users.UserMeCodeRequest_v3',
  UserInputValidation_v3 = 'Iam.Users.UserInputValidation_v3',
  Password_ByUserId_v2 = 'Iam.Users.Password_ByUserId_v2',
  Validate_ByUserId_v3 = 'Iam.Users.Validate_ByUserId_v3',
  Enable_ByUserId_ByBanId = 'Iam.Users.Enable_ByUserId_ByBanId',
  Platforms_ByUserId_v3 = 'Iam.Users.Platforms_ByUserId_v3',
  Publisher_ByUserId_v3 = 'Iam.Users.Publisher_ByUserId_v3',
  UserMeHeadlesVerify_v3 = 'Iam.Users.UserMeHeadlesVerify_v3',
  Disable_ByUserId_ByBanId = 'Iam.Users.Disable_ByUserId_ByBanId',
  Information_ByUserId_v3 = 'Iam.Users.Information_ByUserId_v3',
  UpgradeHeadlessAccount_ByUserId = 'Iam.Users.UpgradeHeadlessAccount_ByUserId',
  UserInvite_ByInvitationId_v3 = 'Iam.Users.UserInvite_ByInvitationId_v3',
  User_ByPlatformId_v3 = 'Iam.Users.User_ByPlatformId_v3',
  PlatformLink_ByUserId_v3 = 'Iam.Users.PlatformLink_ByUserId_v3',
  UserMeHeadlesCodeVerify_v3 = 'Iam.Users.UserMeHeadlesCodeVerify_v3',
  LoginsHistories_ByUserId_v3 = 'Iam.Users.LoginsHistories_ByUserId_v3',
  UserMePlatform_ByPlatformId_v3 = 'Iam.Users.UserMePlatform_ByPlatformId_v3',
  Link_ByUserId_ByPlatformId = 'Iam.Users.Link_ByUserId_ByPlatformId',
  PlatformsJustice_ByUserId_v2 = 'Iam.Users.PlatformsJustice_ByUserId_v2',
  DistinctPlatforms_ByUserId_v3 = 'Iam.Users.DistinctPlatforms_ByUserId_v3',
  PlatformsJustice_ByUserId_v3 = 'Iam.Users.PlatformsJustice_ByUserId_v3',
  AsyncStatus_ByRequestId_v3 = 'Iam.Users.AsyncStatus_ByRequestId_v3',
  Unlink_ByUserId_ByPlatformId = 'Iam.Users.Unlink_ByUserId_ByPlatformId',
  AllMeUser_ByPlatformId_v3 = 'Iam.Users.AllMeUser_ByPlatformId_v3',
  Permission_ByUserId_ByResource_ByAction = 'Iam.Users.Permission_ByUserId_ByResource_ByAction',
  ForceMeUser_ByPlatformId_v3 = 'Iam.Users.ForceMeUser_ByPlatformId_v3',
  Agerestrictions_ByCountryCode_v2 = 'Iam.Users.Agerestrictions_ByCountryCode_v2',
  AgerestrictionCountry_ByCountryCode_v3 = 'Iam.Users.AgerestrictionCountry_ByCountryCode_v3',
  PlatformJustice_ByUserId_ByTargetNamespace = 'Iam.Users.PlatformJustice_ByUserId_ByTargetNamespace',
  WebLinkMeUsers_ByPlatformId_v3 = 'Iam.Users.WebLinkMeUsers_ByPlatformId_v3',
  Link_ByUserId_ByPlatformId_v2 = 'Iam.Users.Link_ByUserId_ByPlatformId_v2',
  PlatformLinkWithProgression_ByUserId_v3 = 'Iam.Users.PlatformLinkWithProgression_ByUserId_v3',
  UserMePlatformJustice_ByTargetNamespace_v3 = 'Iam.Users.UserMePlatformJustice_ByTargetNamespace_v3',
  User_ByPlatformId_ByPlatformUserId_v3 = 'Iam.Users.User_ByPlatformId_ByPlatformUserId_v3',
  UpgradeHeadlessAccountWithVerificationCode_ByUserId = 'Iam.Users.UpgradeHeadlessAccountWithVerificationCode_ByUserId',
  WebLinkProcesMeUser_ByPlatformId_v3 = 'Iam.Users.WebLinkProcesMeUser_ByPlatformId_v3',
  WebLinkEstablishMeUsers_ByPlatformId_v3 = 'Iam.Users.WebLinkEstablishMeUsers_ByPlatformId_v3'
}

/**
 * Get my user data __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * account id * display name * avatar * __Xbox(live, xblweb)__ * xuid or pxuid * display name * __Steam(steam, steamopenid)__ * steam id * display name * avatar * __EpicGames(epicgames)__ * epic account id * display name action code : 10147
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersMe_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersMe_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { includeAllPlatforms?: boolean | null } },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersMe_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMe_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersMe_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [POST]_** - **Substitute endpoint: _/iam/v4/public/namespaces/{namespace}/users [POST]_** - **Note:** 1. v3 &amp; v4 introduce optional verification code 2. format difference（Pascal case =&gt; Camel case) Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. 2. **PHONEPASSWD**: an authentication type used for new user registration through phone number. Country use ISO3166-1 alpha-2 two letter, e.g. US.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserCreateResponse) => void
): UseMutationResult<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCreateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User],
    mutationFn,
    ...options
  })
}

/**
 * This API is for user to get self profile update allow status. Note: If the config is not found, this API will return a config with unlimited.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersMeProfileStatus_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersMeProfileStatus_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<UserProfileUpdateAllowStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserProfileUpdateAllowStatus>) => void
): UseQueryResult<UserProfileUpdateAllowStatus, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersMeProfileStatus_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeProfileStatus_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<UserProfileUpdateAllowStatus, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersMeProfileStatus_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/admin/namespaces/{namespace}/roles/{roleId}/users [GET]_** - **Note:** difference in V3 response, format difference: Pascal case =&gt; Camel case This endpoint search admin users which have the roleId Notes : this endpoint only accept admin role. Admin Role is role which have admin status and members. Use endpoint [GET] /roles/{roleId}/admin to check the role status
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersAdmin, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersAdmin = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { after?: number; before?: number; limit?: number; roleId?: string | null } },
  options?: Omit<UseQueryOptions<GetAdminUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAdminUsersResponse>) => void
): UseQueryResult<GetAdminUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersAdmin>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersAdmin(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAdminUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersAdmin, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useUsersApi_GetUsersVerifyLinkVerify_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { code?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersVerifyLinkVerify_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersVerifyLinkVerify_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersVerifyLinkVerify_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/search [GET]_** Search all users that match the query on these fields: all login IDs (email address, phone number, and platform user id), userID, display name, and on the specified namespace. If the query is not defined, then it searches all users on the specified namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersSearch, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersSearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { query?: string | null } },
  options?: Omit<UseQueryOptions<SearchUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SearchUsersResponse>) => void
): UseQueryResult<SearchUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersSearch>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersSearch(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<SearchUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/information [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_DeleteUser_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUser_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/users/{userId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_** - **Note:** format difference in response: Pascal case =&gt; Camel case
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponse>) => void
): UseQueryResult<UserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUser_ByUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint([PUT]): _/iam/v3/public/namespaces/{namespace}/users/me [PUT]_** - **Substitute endpoint([PATCH]): _/iam/v3/public/namespaces/{namespace}/users/me [PATCH]_** - **Substitute endpoint([PATCH]): _/iam/v4/public/namespaces/{namespace}/users/me [PATCH]_** - **Note:** 1. Prefer [PATCH] if client support PATCH method 2. Difference in V3/v4 request body, format difference: Pascal case =&gt; Camel case This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag} Country use ISO3166-1 alpha-2 two letter, e.g. US. **Several case of updating email address** - User want to update email address of which have been verified, NewEmailAddress response field will be filled with new email address - User want to update email address of which have not been verified, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, {LoginId, OldEmailAddress, EmailAddress} response field will be filled with verified email before. NewEmailAddress response field will be filled with newest email address.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateUser_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserResponse) => void
): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserUpdateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUser_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersByLoginId, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersByLoginId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { loginId?: string | null } },
  options?: Omit<UseQueryOptions<PublicUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicUserResponse>) => void
): UseQueryResult<PublicUserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersByLoginId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersByLoginId(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersByLoginId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users [POST]_** - **Substitute endpoint: _/iam/v4/public/namespaces/{namespace}/users [POST]_** - **Note:** 1. v3 &amp; v4 introduce optional verification code 2. format difference（Pascal case =&gt; Camel case) Available Authentication Types: 1. *EMAILPASSWD*: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_v2, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserCreateResponse) => void
): UseMutationResult<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCreateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser_v2(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User_v2],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint search all users on the specified namespace that match the query on these fields: display name, unique display name, username or by 3rd party display name. The query length should between 3-20, otherwise will not query the database. The default limit value is 20. ## Searching by 3rd party platform **Note: searching by 3rd party platform display name will use exact query, not fuzzy query.** Step when searching by 3rd party platform display name: 1. set __by__ to __thirdPartyPlatform__ 2. set __platformId__ to the _supported platform id_ 3. set __platformBy__ to __platformDisplayName__ **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Users_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsers_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      by?: string | null
      limit?: number
      offset?: number
      platformBy?: string | null
      platformId?: string | null
      query?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PublicUserInformationResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicUserInformationResponseV3>) => void
): UseQueryResult<PublicUserInformationResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsers_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicUserInformationResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.Users_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Available Authentication Types: 1. **EMAILPASSWD**: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. * **code**: this is required when mandatoryEmailVerificationEnabled config is true. please refer to the config from /iam/v3/public/namespaces/{namespace}/config/{configKey} [GET] API. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserCreateResponseV3) => void
): UseMutationResult<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCreateRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User_v3],
    mutationFn,
    ...options
  })
}

/**
 * The verification link is sent to email address It will not send request if user email is already verified
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMeVerifyLinkRequest_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMeVerifyLinkRequestMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationLinkRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationLinkRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationLinkRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeVerifyLinkRequest_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMeVerifyLinkRequest_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Ban_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_CreateBan_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BanCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponse) => void
): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BanCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BanCreateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBan_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Ban_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMe_v3, input]
 * }
 * ```
 */
export const useUsersApi_PatchUserMeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchUserMe_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMe_v3],
    mutationFn,
    ...options
  })
}

/**
 * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. **Important notes:** This endpoint provides support for client that doesn&#39;t have PATCH support, i.e. UE4 before v4.23 released. If the client support PATCH method, use [PATCH] /iam/v3/public/namespaces/{namespace}/users/me instead action code : 10103
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMe_v3, input]
 * }
 * ```
 */
export const useUsersApi_UpdateUserMeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUserMe_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMe_v3],
    mutationFn,
    ...options
  })
}

/**
 * Note: 1. My account should be full account 2. My account not linked to request headless account&#39;s third platform. After client resolving the conflict, it will call endpoint &lt;code&gt;/iam/v3/public/users/me/headless/linkWithProgression [POST]&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersMeHeadlessLinkConflict_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersMeHeadlessLinkConflict_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { oneTimeLinkCode: string | null } },
  options?: Omit<UseQueryOptions<GetLinkHeadlessAccountConflictResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLinkHeadlessAccountConflictResponse>) => void
): UseQueryResult<GetLinkHeadlessAccountConflictResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersMeHeadlessLinkConflict_v3>[1]) => async () => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeHeadlessLinkConflict_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLinkHeadlessAccountConflictResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersMeHeadlessLinkConflict_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Bans_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetBans_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserBanResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserBanResponseArray>) => void
): UseQueryResult<UserBanResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetBans_ByUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserBanResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.Bans_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/reset [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserResetPassword, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserResetPasswordMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetPasswordRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserResetPassword(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserResetPassword],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Role_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateRole_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: string[] }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRole_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Role_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/forgot [POST]_** **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserForgotPassword, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserForgotPasswordMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationCodeRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserForgotPassword(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserForgotPassword],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(query by email list): _/iam/v3/public/namespaces/{namespace}/users/bulk/basic [POST]_** - **Substitute endpoint(query by user id list): _/iam/v3/admin/namespaces/{namespace}/users/search/bulk [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersListByLoginIds, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersListByLoginIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { loginIds?: string | null } },
  options?: Omit<UseQueryOptions<PublicUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicUsersResponse>) => void
): UseQueryResult<PublicUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersListByLoginIds>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersListByLoginIds(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersListByLoginIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Enable_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateEnable_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateEnable_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Enable_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10105
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserReset_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserResetMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetPasswordRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserReset_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserReset_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/status [PATCH]_** For **Deletion Account** purpose fill the reason with: - **DeactivateAccount** : if your deletion request comes from user - **AdminDeactivateAccount** : if your deletion request comes from admin
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Disable_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateDisable_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: DisableUserRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: DisableUserRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: DisableUserRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDisable_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Disable_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId} [GET]_** - **Note:** 1. difference in V3 response, format difference: Pascal case =&gt; Camel case
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersByPlatformUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersByPlatformUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { platformID: string | null; platformUserID: string | null } },
  options?: Omit<UseQueryOptions<PublicUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicUserResponse>) => void
): UseQueryResult<PublicUserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersByPlatformUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersByPlatformUserId(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersByPlatformUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address. action code : 10104
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserForgot_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserForgotMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ForgotPasswordRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ForgotPasswordRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ForgotPasswordRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserForgot_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserForgot_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 *  ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/password [PUT]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Password_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdatePassword_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePassword_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Password_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** Access token from original namespace is needed as authorization header. Access token from designated account needed as form parameter to verify the ownership of that account. When platformID (device platfom ID) is specified, platform login method for that specific platform ID is removed. This means to protect account from second hand device usage.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Crosslink_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_PostCrosslink_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: { linkingToken: string | null; platformId?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: { linkingToken: string | null; platformId?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; data: { linkingToken: string | null; platformId?: string | null } }
  ) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postCrosslink_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Crosslink_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms [GET]_** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms [GET]_** ## Justice Platform Account The permission ’ADMIN:NAMESPACE:{namespace}:JUSTICE:USER:{userId}’ [READ] is required in order to read the UserID who linked with the user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Platforms_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatforms_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserLinkedPlatformArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserLinkedPlatformArray>) => void
): UseQueryResult<UserLinkedPlatformArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPlatforms_ByUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlatforms_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserLinkedPlatformArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.Platforms_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/publisher [GET]_** **Restriction:** Path Parameter *namespace* can be provided only with game namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Publisher_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetPublisher_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetPublisherUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetPublisherUserResponse>) => void
): UseQueryResult<GetPublisherUserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPublisher_ByUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPublisher_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetPublisherUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.Publisher_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint(Public): _/iam/v3/public/namespaces/{namespace}/users/{userId} [GET]_** - **Substitute endpoint(Admin): _/iam/v3/admin/namespaces/{namespace}/users/{userId} [GET]_** - **Note:** format difference in response: Pascal case =&gt; Camel case
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponse>) => void
): UseQueryResult<UserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUser_ByUserId_v2>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId_v2(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint([PUT]): _/iam/v3/public/namespaces/{namespace}/users/me [PUT]_** - **Substitute endpoint([PATCH]): _/iam/v3/public/namespaces/{namespace}/users/me [PATCH]_** - **Substitute endpoint([PATCH]): _/iam/v4/public/namespaces/{namespace}/users/me [PATCH]_** - **Note:** 1. Prefer [PATCH] if client support PATCH method 2. Difference in V3/v4 request body, format difference: Pascal case =&gt; Camel case This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {Country, DisplayName, LanguageTag}
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_PatchUser_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseArray) => void
): UseMutationResult<UserResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserUpdateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchUser_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This endpoint retrieve user attributes. action code: 10129 **Substitute endpoint:** /v4/public/namespaces/{namespace}/users/{userId} [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<PublicUserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicUserResponseV3>) => void
): UseQueryResult<PublicUserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUser_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId_v3(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicUserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Note: 1. My account should be full account 2. My account not linked to headless account&#39;s third platform.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMeHeadlesLinkWithProgression_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMeHeadlesLinkWithProgressionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LinkHeadlessAccountRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LinkHeadlessAccountRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LinkHeadlessAccountRequest }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeHeadlesLinkWithProgression_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMeHeadlesLinkWithProgression_v3],
    mutationFn,
    ...options
  })
}

/**
 * Note: 1. the max count of user ids in the request is 100 2. if platform id is not empty, the result will only contain the corresponding platform infos 3. if platform id is empty, the result will contain all the supported platform infos __Supported 3rd platforms:__ * __PSN(ps4web, ps4, ps5)__ * account id * display name * avatar * __Xbox(live, xblweb)__ * xuid or pxuid * display name * __Steam(steam, steamopenid)__ * steam id * display name * avatar * __EpicGames(epicgames)__ * epic account id * display name
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserPlatform_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserPlatformMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UsersPlatformInfosResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersPlatformInfosRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UsersPlatformInfosResponse) => void
): UseMutationResult<UsersPlatformInfosResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersPlatformInfosRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UsersPlatformInfosRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserPlatform_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserPlatform_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/information [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Information_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_DeleteInformation_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteInformation_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Information_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/information [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Information_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetInformation_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserInformation, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserInformation>) => void
): UseQueryResult<UserInformation, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetInformation_ByUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInformation_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserInformation, AxiosError<ApiError>>({
    queryKey: [Key_Users.Information_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions [POST]_** This endpoint will REPLACE user&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Permission_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdatePermission_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: Permissions }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: Permissions }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: Permissions }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePermission_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Permission_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Notes: - This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time - If namespace is game, will search by game user Id, other wise will search by publisher namespace - **Result will include displayName(if it exists)**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserBulkBasic_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserBulkBasicMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ListBulkUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserIDsRequest }>,
    'mutationKey'
  >,
  callback?: (data: ListBulkUserResponse) => void
): UseMutationResult<ListBulkUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserIDsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserIDsRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserBulkBasic_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserBulkBasic_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/code/verify [POST]_** Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : *email* or *phone*
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Verification_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateVerification_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserVerificationRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserVerificationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserVerificationRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateVerification_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Verification_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Verify the registration code
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserCodeVerify_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserCodeVerifyMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: VerifyRegistrationCode }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: VerifyRegistrationCode }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: VerifyRegistrationCode }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserCodeVerify_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserCodeVerify_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10107
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMePassword_v3, input]
 * }
 * ```
 */
export const useUsersApi_UpdateUserMePasswordMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserPasswordUpdateV3Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserPasswordUpdateV3Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserPasswordUpdateV3Request }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUserMePassword_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMePassword_v3],
    mutationFn,
    ...options
  })
}

/**
 * Check user&#39;s account availability. Available field : - displayName - uniqueDisplayName - username If request include access token with user ID data, that user ID will be excluded from availability check. For example, in case user update his emailAddress, he can use his own emailAddress to update his account. Response Code : - Account Available : 404 (not found) - Account Not Available : 204 (no content)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersAvailability_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersAvailability_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { field: string | null; query: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUsersAvailability_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersAvailability_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersAvailability_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint will validate the request&#39;s email address. If it already been used, will response 409. If it is available, we will send a verification code to this email address. This code can be verified by this [endpoint](#operations-Users-PublicVerifyRegistrationCode).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserCodeRequest_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserCodeRequestMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendRegisterVerificationCodeRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendRegisterVerificationCodeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SendRegisterVerificationCodeRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserCodeRequest_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserCodeRequest_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId} [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Role_ByUserId_ByRoleId, input]
 * }
 * ```
 */
export const useUsersApi_DeleteRole_ByUserId_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; roleId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRole_ByUserId_ByRoleId(
      input.userId,
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Role_ByUserId_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId} [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Role_ByUserId_ByRoleId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateRole_ByUserId_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; roleId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRole_ByUserId_ByRoleId(
      input.userId,
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Role_ByUserId_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/bans [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Bans_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetBans_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<UserBanResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserBanResponseArray>) => void
): UseQueryResult<UserBanResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetBans_ByUserId_v2>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserBanResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.Bans_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/reset [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserResetPassword_v2, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserResetPasswordMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetPasswordRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserResetPassword_v2(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserResetPassword_v2],
    mutationFn,
    ...options
  })
}

/**
 * Notes: - This endpoint retrieve the first page of the data if after and before parameters is empty - **The pagination is not working yet** **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Bans_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetBans_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  },
  options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetBans_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_ByUserId_v3(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_Users.Bans_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/forgot [POST]_** **Special note for publisher-game scenario:** Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. The password reset code will be sent to the publisher account&#39;s email address.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserForgotPassword_v2, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserForgotPasswordMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationCodeRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserForgotPassword_v2(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserForgotPassword_v2],
    mutationFn,
    ...options
  })
}

/**
 * Will consume code if validateOnly is set false Redeems a verification code sent to a user to verify the user&#39;s contact address is correct Available ContactType : **email** action code: 10107
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMeCodeVerify_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMeCodeVerifyMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserVerificationRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserVerificationRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserVerificationRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeCodeVerify_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMeCodeVerify_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/logins/histories [GET]_** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/logins/histories [GET]_** Notes for this endpoint: - This endpoint retrieve the first page of the data if &#39;after&#39; and &#39;before&#39; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &#39;after&#39; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &#39;before&#39; parameter with valid data Unix timestamp.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.LoginsHistories_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetLoginsHistories_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { after?: number; before?: number; limit?: number } },
  options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoginHistoriesResponse>) => void
): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetLoginsHistories_ByUserId>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLoginsHistories_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.LoginsHistories_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/code/request [POST]_** The verification code is sent to either the phone number or email address. It depends on the LoginID&#39;s value. Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the loginId field&#39;s value is already used by others by returning HTTP Status Code 409.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Verificationcode_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateVerificationcode_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SendVerificationCodeRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SendVerificationCodeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SendVerificationCodeRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateVerificationcode_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Verificationcode_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * The verification code is sent to email address Available contexts for use : 1. **UserAccountRegistration** a context type used for verifying email address in user account registration. It returns 409 if the email address already verified. **_It is the default context if the Context field is empty_** 2. **UpdateEmailAddress** a context type used for verify user before updating email address.(Without email address verified checking) 3. **upgradeHeadlessAccount** The context is intended to be used whenever the email address wanted to be automatically verified on upgrading a headless account. If this context used, IAM rejects the request if the email address is already used by others by returning HTTP Status Code 409. action code: 10116
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMeCodeRequest_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMeCodeRequestMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationCodeRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeCodeRequest_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMeCodeRequest_v3],
    mutationFn,
    ...options
  })
}

/**
 * Validate user&#39;s input. -------- **note:** - this endpoint will check the input validation and profanity filter service(if this is enabled) - the namespace should be publisher namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserInputValidation_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserInputValidationMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserInputValidationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserInputValidationRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserInputValidationResponse) => void
): UseMutationResult<UserInputValidationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserInputValidationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserInputValidationRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserInputValidation_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserInputValidation_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/password [PUT]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Password_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_UpdatePassword_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserPasswordUpdateRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePassword_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Password_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to validate the user password. This endpoint validate the user password by specifying the userId and password. **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Validate_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_PostValidate_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: { password: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: { password: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: { password: string | null } }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postValidate_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Validate_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId} [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Enable_ByUserId_ByBanId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateEnable_ByUserId_ByBanIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; banId: string }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponse) => void
): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; banId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; banId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateEnable_ByUserId_ByBanId(
      input.userId,
      input.banId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Enable_ByUserId_ByBanId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint retrieves platform accounts linked to user. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 **Authentication:** The _**userId**_ parameter should match the one in the access token. action code: 10128
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Platforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatforms_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { after?: string | null; before?: string | null; limit?: number; platformId?: string | null }
  },
  options?: Omit<UseQueryOptions<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserLinkedPlatformsResponseV3>) => void
): UseQueryResult<UserLinkedPlatformsResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPlatforms_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlatforms_ByUserId_v3(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.Platforms_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * **Restriction:** Path Parameter **namespace** can be provided only with game namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Publisher_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetPublisher_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetPublisherUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetPublisherUserResponse>) => void
): UseQueryResult<GetPublisherUserResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPublisher_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPublisher_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetPublisherUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.Publisher_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * action code : 10124 if set NeedVerificationCode = true, IAM will send verification code into email user can use that verification code to verify user through /iam/v3/public/namespaces/{namespace}/users/me/code/verify
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMeHeadlesVerify_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMeHeadlesVerifyMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: UpgradeHeadlessAccountV3Request; queryParams?: { needVerificationCode?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<
  UserResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: UpgradeHeadlessAccountV3Request; queryParams?: { needVerificationCode?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: UpgradeHeadlessAccountV3Request; queryParams?: { needVerificationCode?: boolean | null } }
  ) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeHeadlesVerify_v3(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMeHeadlesVerify_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId} [PATCH]_** **Notes for using IAM in publisher - game studio scenarios** The endpoint allows: - The admin user in publisher namespace disables user’s ban in publisher namespace. - The admin user in game namespace disables user’s ban in game namespace. - The admin user in publisher namespace disables user’s ban in publisher namespace. Other scenarios are not supported and will return 403: Forbidden.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Disable_ByUserId_ByBanId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateDisable_ByUserId_ByBanIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; banId: string }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponse) => void
): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; banId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; banId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDisable_ByUserId_ByBanId(
      input.userId,
      input.banId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Disable_ByUserId_ByBanId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint retrieves user info and linked platform accounts. **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Information_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetInformation_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserInformationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserInformationV3>) => void
): UseQueryResult<UserInformationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetInformation_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInformation_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserInformationV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.Information_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/headless/verify [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UpgradeHeadlessAccount_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateUpgradeHeadlessAccount_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserResponse) => void
): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountRequest }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateUpgradeHeadlessAccount_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UpgradeHeadlessAccount_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserInvite_ByInvitationId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUserInvite_ByInvitationId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { invitationId: string },
  options?: Omit<UseQueryOptions<UserInvitationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserInvitationV3>) => void
): UseQueryResult<UserInvitationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUserInvite_ByInvitationId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUserInvite_ByInvitationId_v3(
      input.invitationId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserInvitationV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.UserInvite_ByInvitationId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserInvite_ByInvitationId_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserInvite_ByInvitationIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { invitationId: string; data: UserCreateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserCreateResponseV3) => void
): UseMutationResult<
  UserCreateResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { invitationId: string; data: UserCreateRequestV3 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { invitationId: string; data: UserCreateRequestV3 }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserInvite_ByInvitationId_v3(input.invitationId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserInvite_ByInvitationId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUser_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserPlatforms,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        platformId: string
        data: PlatformUserIdRequest
        queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: UserPlatforms) => void
): UseMutationResult<
  UserPlatforms,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    platformId: string
    data: PlatformUserIdRequest
    queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      platformId: string
      data: PlatformUserIdRequest
      queryParams?: { rawPID?: boolean | null; rawPUID?: boolean | null }
    }
  ) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser_ByPlatformId_v3(
      input.platformId,
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.User_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * It is going to be **DEPRECATED**. Update Platform Account relation to current User Account. Note: Game progression data (statistics, reward, etc) associated with previous User Account will not be transferred. If the data is tight to game user ID, the user will have the game progression data. **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.PlatformLink_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreatePlatformLink_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: LinkPlatformAccountRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: LinkPlatformAccountRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: LinkPlatformAccountRequest }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPlatformLink_ByUserId_v3(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.PlatformLink_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * If validateOnly is set false, consume code and upgrade headless account and automatically verified the email address if it is succeeded The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint. This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields : - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMeHeadlesCodeVerify_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMeHeadlesCodeVerifyMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }
    >,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<
  UserResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeHeadlesCodeVerify_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMeHeadlesCodeVerify_v3],
    mutationFn,
    ...options
  })
}

/**
 * Notes for this endpoint: - This endpoint retrieve the first page of the data if &lt;code&gt;after&lt;/code&gt; and &lt;code&gt;before&lt;/code&gt; parameters is empty. - The maximum value of the limit is 100 and the minimum value of the limit is 1. - This endpoint retrieve the next page of the data if we provide &lt;code&gt;after&lt;/code&gt; parameters with valid Unix timestamp. - This endpoint retrieve the previous page of the data if we provide &lt;code&gt;before&lt;/code&gt; parameter with valid data Unix timestamp. **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.LoginsHistories_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetLoginsHistories_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { after?: number; before?: number; limit?: number } },
  options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoginHistoriesResponse>) => void
): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetLoginsHistories_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLoginsHistories_ByUserId_v3(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.LoginsHistories_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **android** - **ios** - **apple** - **device** - **discord** - **awscognito** - **epicgames** - **nintendo** Unlink user&#39;s account from a specific platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. _platformNamespace_ need to be specified when the platform ID is &#39;justice&#39;. Unlink user&#39;s account from justice platform will enable password token grant and password update. If you want to unlink user&#39;s account in a game namespace, you have to specify _platformNamespace_ to that game namespace. action code : 10121
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMePlatform_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_DeleteUserMePlatform_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string; data: UnlinkUserPlatformRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string; data: UnlinkUserPlatformRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: UnlinkUserPlatformRequest }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUserMePlatform_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMePlatform_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **googleplaygames**: The ticket’s value is the authorization code returned by Google play games OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth. - **ps4web**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps4**: The ticket’s value is the authorization code returned by PSN OAuth. - **ps5**: The ticket’s value is the authorization code returned by PSN OAuth. - **xblweb**: The ticket’s value is the authorization code returned by XBox Live OAuth. - **live**: The ticket’s value is the XSTS token. - **awscognito**: The ticket’s value is the aws cognito access token (JWT). - **epicgames**: The ticket’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **nintendo**: The ticket’s value is the id_token returned by Nintendo OAuth. - **netflix**: The ticket’s value is GAT (Gamer Access Token) returned by Netflix backend. - **snapchat**: The ticket’s value is authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken. action code : 10144
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UserMePlatform_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_PostUserMePlatform_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: { ticket: string | null; redirectUri?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: { ticket: string | null; redirectUri?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { platformId: string; data: { ticket: string | null; redirectUri?: string | null } }
  ) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postUserMePlatform_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMePlatform_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **apple**: The ticket’s value is the authorization code returned by Apple OAuth. - **device**: Every device that does’nt run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Link_ByUserId_ByPlatformId, input]
 * }
 * ```
 */
export const useUsersApi_PostLink_ByUserId_ByPlatformIdMutation = (
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
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postLink_ByUserId_ByPlatformId(
      input.userId,
      input.platformId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Link_ByUserId_ByPlatformId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/justice [GET]_** This endpoint gets list justice platform account by providing publisher namespace and publisher userID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.PlatformsJustice_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatformsJustice_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetUserMappingArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserMappingArray>) => void
): UseQueryResult<GetUserMappingArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPlatformsJustice_ByUserId_v2>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlatformsJustice_ByUserId_v2(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserMappingArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.PlatformsJustice_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint retrieves platform accounts linked to user. It will query all linked platform accounts. The results will be distinct and grouped by platform, and for each platform, we will select the oldest linked one. **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.DistinctPlatforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetDistinctPlatforms_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DistinctPlatformResponseV3>) => void
): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetDistinctPlatforms_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDistinctPlatforms_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.DistinctPlatforms_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint gets list justice platform account by providing publisher namespace and publisher userID. **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.PlatformsJustice_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatformsJustice_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetUserMappingV3Array, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserMappingV3Array>) => void
): UseQueryResult<GetUserMappingV3Array, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPlatformsJustice_ByUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlatformsJustice_ByUserId_v3(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserMappingV3Array, AxiosError<ApiError>>({
    queryKey: [Key_Users.PlatformsJustice_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to get linking status. This API need logged user and user can only request its own linking status.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.AsyncStatus_ByRequestId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetAsyncStatus_ByRequestId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { requestId: string },
  options?: Omit<UseQueryOptions<LinkRequest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LinkRequest>) => void
): UseQueryResult<LinkRequest, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetAsyncStatus_ByRequestId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAsyncStatus_ByRequestId_v3(
      input.requestId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LinkRequest, AxiosError<ApiError>>({
    queryKey: [Key_Users.AsyncStatus_ByRequestId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [DELETE]_** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **justice**: A user might have several &#39;justice’ platform on different namespaces. That’s why the platform_namespace need to be specified when the platform ID is ‘justice’. The platform_namespace is the designated user’s namespace. Unlink user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Unlinking justice platform will enable password token grant and password update.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Unlink_ByUserId_ByPlatformId, input]
 * }
 * ```
 */
export const useUsersApi_PostUnlink_ByUserId_ByPlatformIdMutation = (
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
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUnlink_ByUserId_ByPlatformId(
      input.userId,
      input.platformId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Unlink_ByUserId_ByPlatformId],
    mutationFn,
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
 *    queryKey: [Key_Users.AllMeUser_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_DeleteAllMeUser_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteAllMeUser_ByPlatformId_v3(
      input.platformId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.AllMeUser_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action} [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Permission_ByUserId_ByResource_ByAction, input]
 * }
 * ```
 */
export const useUsersApi_DeletePermission_ByUserId_ByResource_ByActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; resource: string; action: number }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByUserId_ByResource_ByAction(input.userId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Permission_ByUserId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions [POST]_** This endpoint will update existing permission (bitwise OR the action) if found one with same resource, otherwise it will append a new permission Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Permission_ByUserId_ByResource_ByAction, input]
 * }
 * ```
 */
export const useUsersApi_UpdatePermission_ByUserId_ByResource_ByActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; resource: string; action: number; data: UpdatePermissionScheduleRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; resource: string; action: number; data: UpdatePermissionScheduleRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; resource: string; action: number; data: UpdatePermissionScheduleRequest }
  ) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByUserId_ByResource_ByAction(input.userId, input.resource, input.action, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Permission_ByUserId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}

/**
 * Force linking user account with platform. If this platform account was already linked to another user account, this endpoint will perform force linking and remove platform from that conflict user, not only from the current request namespace but also include all the enrolled namespaces. If current user have linked to this platform with another platform account (include once linked but it is unlinked now), it will not allow user to perform linking. ## Supported platforms: - **steam**: The platform_token’s value is the binary ticket returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the id_token returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.ForceMeUser_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_PostForceMeUser_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string; data: { ticket: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string; data: { ticket: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: { ticket: string | null } }) => {
    const response = await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postForceMeUser_ByPlatformId_v3(
      input.platformId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.ForceMeUser_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/agerestrictions/countries/{countryCode} [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Agerestrictions_ByCountryCode_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetAgerestrictions_ByCountryCode_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { countryCode: string },
  options?: Omit<UseQueryOptions<Country, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Country>) => void
): UseQueryResult<Country, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetAgerestrictions_ByCountryCode_v2>[1]) => async () => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAgerestrictions_ByCountryCode_v2(input.countryCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<Country, AxiosError<ApiError>>({
    queryKey: [Key_Users.Agerestrictions_ByCountryCode_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get age restriction by country code. It will always get by publisher namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.AgerestrictionCountry_ByCountryCode_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetAgerestrictionCountry_ByCountryCode_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { countryCode: string },
  options?: Omit<UseQueryOptions<CountryV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryV3Response>) => void
): UseQueryResult<CountryV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetAgerestrictionCountry_ByCountryCode_v3>[1]) => async () => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAgerestrictionCountry_ByCountryCode_v3(input.countryCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryV3Response, AxiosError<ApiError>>({
    queryKey: [Key_Users.AgerestrictionCountry_ByCountryCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace} [GET]_** This endpoint requires the client access token as the bearer token This endpoint will support publisher access to game and game access to publisher If targetNamespace filled with publisher namespace then this endpoint will return its publisher user id and publisher namespace. If targetNamespace filled with game namespace then this endpoint will return its game user id and game namespace. **Will create game user id if not exists.**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatformJustice_ByUserId_ByTargetNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; targetNamespace: string },
  options?: Omit<UseQueryOptions<GetUserMapping, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserMapping>) => void
): UseQueryResult<GetUserMapping, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetPlatformJustice_ByUserId_ByTargetNamespace>[1]) => async () => {
      const response = await UsersApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformJustice_ByUserId_ByTargetNamespace(input.userId, input.targetNamespace)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetUserMapping, AxiosError<ApiError>>({
    queryKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace} [GET]_** This endpoint requires the client access token as the bearer token The endpoint returns user Justice platform account linked with the given user. If the user Justice platform account doesn&#39;t exist in the designated namespace, the endpoint is going to *create and return the new Justice platform account.* The newly user Justice platform account is going to be forced to perform token grant through the given user and can&#39;t perform password update ### Read Justice Platform Account UserID Without permission the UserID is going to be censored and replaced with “Redacted” text.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace, input]
 * }
 * ```
 */
export const useUsersApi_UpdatePlatformJustice_ByUserId_ByTargetNamespaceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetUserJusticePlatformAccountResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; targetNamespace: string }
    >,
    'mutationKey'
  >,
  callback?: (data: GetUserJusticePlatformAccountResponse) => void
): UseMutationResult<
  GetUserJusticePlatformAccountResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; targetNamespace: string }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; targetNamespace: string }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePlatformJustice_ByUserId_ByTargetNamespace(input.userId, input.targetNamespace)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to generate third party login page which will redirected to establish endpoint. Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.WebLinkMeUsers_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetWebLinkMeUsers_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string; queryParams?: { clientId?: string | null; redirectUri?: string | null } },
  options?: Omit<UseQueryOptions<WebLinkingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WebLinkingResponse>) => void
): UseQueryResult<WebLinkingResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetWebLinkMeUsers_ByPlatformId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWebLinkMeUsers_ByPlatformId_v3(input.platformId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<WebLinkingResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.WebLinkMeUsers_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [DELETE]_** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all [DELETE]_** ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **oculus** - **twitch** - **android** - **ios** - **device** - **discord** Delete link of user&#39;s account with platform. &#39;justice&#39; platform might have multiple accounts from different namespaces linked. platform_namespace need to be specified when the platform ID is &#39;justice&#39;. Delete link of justice platform will enable password token grant and password update.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Link_ByUserId_ByPlatformId_v2, input]
 * }
 * ```
 */
export const useUsersApi_DeleteLink_ByUserId_ByPlatformIdMutation_v2 = (
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
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLink_ByUserId_ByPlatformId_v2(input.userId, input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Link_ByUserId_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId} [POST]_** **Prerequisite:** Platform client configuration need to be added to database for specific platformId. Namespace service URL need to be specified (refer to required environment variables). ## Supported platforms: - **steam**: The ticket’s value is the authentication code returned by Steam. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The ticket&#39;s value is URL generated by Steam on web authentication - **facebook**: The ticket’s value is the authorization code returned by Facebook OAuth - **google**: The ticket’s value is the authorization code returned by Google OAuth - **oculus**: The ticket’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The ticket’s value is the authorization code returned by Twitch OAuth. - **android**: The ticket&#39;s value is the Android’s device ID - **ios**: The ticket&#39;s value is the iOS’s device ID. - **device**: Every device that doesn&#39;t run Android and iOS is categorized as a device platform. The ticket&#39;s value is the device’s ID. - **discord**: The ticket’s value is the authorization code returned by Discord OAuth.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.Link_ByUserId_ByPlatformId_v2, input]
 * }
 * ```
 */
export const useUsersApi_PostLink_ByUserId_ByPlatformIdMutation_v2 = (
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
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postLink_ByUserId_ByPlatformId_v2(input.userId, input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.Link_ByUserId_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Force update other account&#39;s Platform Account relation to current User Account. This endpoint can transfer progression from 3rd platform binding account&#39;s to current account. This endpoint need the same requestID which also used in [Get link status](#operations-Users-PublicGetAsyncStatus). **Authentication:** The _**userId**_ parameter should match the one in the access token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.PlatformLinkWithProgression_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreatePlatformLinkWithProgression_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: LinkPlatformAccountWithProgressionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: LinkPlatformAccountWithProgressionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: LinkPlatformAccountWithProgressionRequest }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPlatformLinkWithProgression_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.PlatformLinkWithProgression_ByUserId_v3],
    mutationFn,
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
 *    queryKey: [Key_Users.UserMePlatformJustice_ByTargetNamespace_v3, input]
 * }
 * ```
 */
export const useUsersApi_CreateUserMePlatformJustice_ByTargetNamespaceMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { targetNamespace: string }>,
    'mutationKey'
  >,
  callback?: (data: CreateJusticeUserResponse) => void
): UseMutationResult<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { targetNamespace: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { targetNamespace: string }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMePlatformJustice_ByTargetNamespace_v3(input.targetNamespace)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UserMePlatformJustice_ByTargetNamespace_v3],
    mutationFn,
    ...options
  })
}

/**
 * Get User By Platform User ID. This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.User_ByPlatformId_ByPlatformUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByPlatformId_ByPlatformUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string; platformUserId: string },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetUser_ByPlatformId_ByPlatformUserId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUser_ByPlatformId_ByPlatformUserId_v3(input.platformId, input.platformUserId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByPlatformId_ByPlatformUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/public/namespaces/{namespace}/users/me/headless/code/verify [POST]_** The endpoint upgrades a headless account by linking the headless account with the email address and the password. By upgrading the headless account into a full account, the user could use the email address and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the send verification code endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UpgradeHeadlessAccountWithVerificationCode_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_UpdateUpgradeHeadlessAccountWithVerificationCode_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UserResponse) => void
): UseMutationResult<
  UserResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequest }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateUpgradeHeadlessAccountWithVerificationCode_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.UpgradeHeadlessAccountWithVerificationCode_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to process third party account link, this endpoint will return the link status directly instead of redirecting to the original page. The param **state** comes from the response of &lt;code&gt;/users/me/platforms/{platformId}/web/link&lt;/code&gt; Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.WebLinkProcesMeUser_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_PostWebLinkProcesMeUser_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      LinkRequest,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: { state: string | null; code?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: LinkRequest) => void
): UseMutationResult<
  LinkRequest,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: { state: string | null; code?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: { state: string | null; code?: string | null } }) => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postWebLinkProcesMeUser_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Users.WebLinkProcesMeUser_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used by third party to redirect the code for the purpose of linking the account third party to IAM account. Supported platforms: - ps4web - xblweb - steamopenid - epicgames - facebook - twitch - google - apple - snapchat - discord - amazon - oculusweb
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.WebLinkEstablishMeUsers_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetWebLinkEstablishMeUsers_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string; queryParams: { state: string | null; code?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersApi_GetWebLinkEstablishMeUsers_ByPlatformId_v3>[1]) => async () => {
    const response = await UsersApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWebLinkEstablishMeUsers_ByPlatformId_v3(input.platformId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Users.WebLinkEstablishMeUsers_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
