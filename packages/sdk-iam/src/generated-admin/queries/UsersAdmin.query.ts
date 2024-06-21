/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { UsersAdminApi } from '../UsersAdminApi.js'

import { AgeRestrictionRequestV3 } from '../../generated-definitions/AgeRestrictionRequestV3.js'
import { AgeRestrictionResponseV3 } from '../../generated-definitions/AgeRestrictionResponseV3.js'
import { BanCreateRequest } from '../../generated-definitions/BanCreateRequest.js'
import { BanUpdateRequest } from '../../generated-definitions/BanUpdateRequest.js'
import { CountryAgeRestrictionV3Request } from '../../generated-definitions/CountryAgeRestrictionV3Request.js'
import { CountryV3Response } from '../../generated-definitions/CountryV3Response.js'
import { CountryV3ResponseArray } from '../../generated-definitions/CountryV3ResponseArray.js'
import { CreateJusticeUserResponse } from '../../generated-definitions/CreateJusticeUserResponse.js'
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
import { SearchUsersResponseWithPaginationV3 } from '../../generated-definitions/SearchUsersResponseWithPaginationV3.js'
import { SendVerificationCodeRequestV3 } from '../../generated-definitions/SendVerificationCodeRequestV3.js'
import { UnlinkUserPlatformRequest } from '../../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdateUserDeletionStatusRequest } from '../../generated-definitions/UpdateUserDeletionStatusRequest.js'
import { UpdateUserStatusRequest } from '../../generated-definitions/UpdateUserStatusRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponseV3 } from '../../generated-definitions/UserBanResponseV3.js'
import { UserDeletionStatusResponse } from '../../generated-definitions/UserDeletionStatusResponse.js'
import { UserIDsRequest } from '../../generated-definitions/UserIDsRequest.js'
import { UserIdentityUpdateRequestV3 } from '../../generated-definitions/UserIdentityUpdateRequestV3.js'
import { UserLinkedPlatformsResponseV3 } from '../../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateV3Request } from '../../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatformMetadata } from '../../generated-definitions/UserPlatformMetadata.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'
import { UserVerificationRequest } from '../../generated-definitions/UserVerificationRequest.js'
import { UsersUpdateRequestV3 } from '../../generated-definitions/UsersUpdateRequestV3.js'
import { VerificationCodeResponse } from '../../generated-definitions/VerificationCodeResponse.js'

export enum Key_UsersAdmin {
  UsersMe = 'UsersAdmin.UsersMe',
  Users_ByNS = 'UsersAdmin.Users_ByNS',
  User = 'UsersAdmin.User',
  Admins = 'UsersAdmin.Admins',
  UserBan = 'UsersAdmin.UserBan',
  UserBulk = 'UsersAdmin.UserBulk',
  UserInvite = 'UsersAdmin.UserInvite',
  UsersSearch = 'UsersAdmin.UsersSearch',
  User_ByUserId_ByNS = 'UsersAdmin.User_ByUserId_ByNS',
  Agerestrictions_ByNS = 'UsersAdmin.Agerestrictions_ByNS',
  Agerestriction_ByNS = 'UsersAdmin.Agerestriction_ByNS',
  UserSearchBulk = 'UsersAdmin.UserSearchBulk',
  Bans_ByUserId_ByNS = 'UsersAdmin.Bans_ByUserId_ByNS',
  Ban_ByUserId_ByNS = 'UsersAdmin.Ban_ByUserId_ByNS',
  UsersLinkhistories = 'UsersAdmin.UsersLinkhistories',
  Users_ByRoleId = 'UsersAdmin.Users_ByRoleId',
  Codes_ByUserId = 'UsersAdmin.Codes_ByUserId',
  Role_ByUserId = 'UsersAdmin.Role_ByUserId',
  UserBulkPlatform = 'UsersAdmin.UserBulkPlatform',
  Status_ByUserId = 'UsersAdmin.Status_ByUserId',
  Verify_ByUserId = 'UsersAdmin.Verify_ByUserId',
  Password_ByUserId_ByNS = 'UsersAdmin.Password_ByUserId_ByNS',
  UsersPlatformsJustice = 'UsersAdmin.UsersPlatformsJustice',
  Platforms_ByUserId = 'UsersAdmin.Platforms_ByUserId',
  AgerestrictionsCountries = 'UsersAdmin.AgerestrictionsCountries',
  CodeVerify_ByUserId = 'UsersAdmin.CodeVerify_ByUserId',
  Information_ByUserId = 'UsersAdmin.Information_ByUserId',
  Permission_ByUserId = 'UsersAdmin.Permission_ByUserId',
  Ban_ByUserId_ByBanId = 'UsersAdmin.Ban_ByUserId_ByBanId',
  BansSummary_ByUserId = 'UsersAdmin.BansSummary_ByUserId',
  CodeRequest_ByUserId = 'UsersAdmin.CodeRequest_ByUserId',
  User_ByPlatformId = 'UsersAdmin.User_ByPlatformId',
  PlatformLink_ByUserId = 'UsersAdmin.PlatformLink_ByUserId',
  Role_ByUserId_ByRoleId = 'UsersAdmin.Role_ByUserId_ByRoleId',
  DeletionStatus_ByUserId = 'UsersAdmin.DeletionStatus_ByUserId',
  LoginsHistories_ByUserId = 'UsersAdmin.LoginsHistories_ByUserId',
  TrustlyIdentity_ByUserId = 'UsersAdmin.TrustlyIdentity_ByUserId',
  DistinctPlatforms_ByUserId = 'UsersAdmin.DistinctPlatforms_ByUserId',
  PlatformsJustice_ByUserId = 'UsersAdmin.PlatformsJustice_ByUserId',
  HeadlesCodeVerify_ByUserId = 'UsersAdmin.HeadlesCodeVerify_ByUserId',
  Platform_ByUserId_ByPlatformId = 'UsersAdmin.Platform_ByUserId_ByPlatformId',
  AgerestrictionCountry_ByCountryCode = 'UsersAdmin.AgerestrictionCountry_ByCountryCode',
  All_ByUserId_ByPlatformId = 'UsersAdmin.All_ByUserId_ByPlatformId',
  postLink_ByUserId_ByPlatformId = 'UsersAdmin.postLink_ByUserId_ByPlatformId',
  User_ByPlatformId_ByPlatformUserId = 'UsersAdmin.User_ByPlatformId_ByPlatformUserId',
  Permission_ByUserId_ByResource_ByAction = 'UsersAdmin.Permission_ByUserId_ByResource_ByAction',
  Metadata_ByUserId_ByPlatformId = 'UsersAdmin.Metadata_ByUserId_ByPlatformId',
  postLinkStatu_ByUserId_ByPlatformId = 'UsersAdmin.postLinkStatu_ByUserId_ByPlatformId',
  PlatformJustice_ByUserId_ByTargetNamespace = 'UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace',
  LinkHistory_ByUserId_ByPlatformId = 'UsersAdmin.LinkHistory_ByUserId_ByPlatformId'
}

export const useAdmUsersMe = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserResponseV3) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersMe>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUsersMe()
    callback && callback(data)
    return data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersMe, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUsers_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { emailAddress?: string | null } },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserResponseV3) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsers_ByNS>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUsers_ByNS(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateUserMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: UsersUpdateRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: UsersUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UsersUpdateRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateUser(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.User],
    mutationFn,
    ...options
  })
}

export const useAdmAdmins = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: GetUsersResponseWithPaginationV3) => void
): UseQueryResult<GetUsersResponseWithPaginationV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdmins>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getAdmins(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Admins, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUserBanMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GetUserBanV3Response,
      AxiosError<ApiError>,
      ApiArgs & { data: GetBulkUserBansRequest; queryParams?: { activeOnly?: boolean | null; banType?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: GetUserBanV3Response) => void
): UseMutationResult<
  GetUserBanV3Response,
  AxiosError<ApiError>,
  ApiArgs & { data: GetBulkUserBansRequest; queryParams?: { activeOnly?: boolean | null; banType?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { data: GetBulkUserBansRequest; queryParams?: { activeOnly?: boolean | null; banType?: string | null } }
  ) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserBan(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserBan],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ListUserInformationResult, AxiosError<ApiError>, ApiArgs & { data: UserIDsRequest }>, 'mutationKey'>,
  callback?: (data: ListUserInformationResult) => void
): UseMutationResult<ListUserInformationResult, AxiosError<ApiError>, ApiArgs & { data: UserIDsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UserIDsRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserBulk],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserInviteMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, ApiArgs & { data: InviteUserRequestV3 }>, 'mutationKey'>,
  callback?: (data: InviteUserResponseV3) => void
): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, ApiArgs & { data: InviteUserRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: InviteUserRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserInvite(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserInvite],
    mutationFn,
    ...options
  })
}

export const useAdmUsersSearch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
      skipLoginQueue?: boolean | null
      startDate?: string | null
      testAccount?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SearchUsersResponseWithPaginationV3) => void
): UseQueryResult<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersSearch>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUsersSearch(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUser_ByUserId_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserResponseV3) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUser_ByUserId_ByNS>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUser_ByUserId_ByNS(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByUserId_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchUser_ByUserId_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserUpdateRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchUser_ByUserId_ByNS(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.User_ByUserId_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmAgerestrictions_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<AgeRestrictionResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AgeRestrictionResponseV3) => void
): UseQueryResult<AgeRestrictionResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgerestrictions_ByNS>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getAgerestrictions_ByNS()
    callback && callback(data)
    return data
  }

  return useQuery<AgeRestrictionResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Agerestrictions_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchAgerestriction_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AgeRestrictionResponseV3, AxiosError<ApiError>, ApiArgs & { data: AgeRestrictionRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: AgeRestrictionResponseV3) => void
): UseMutationResult<AgeRestrictionResponseV3, AxiosError<ApiError>, ApiArgs & { data: AgeRestrictionRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AgeRestrictionRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchAgerestriction_ByNS(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Agerestriction_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserSearchBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ListUserResponseV3, AxiosError<ApiError>, ApiArgs & { data: ListEmailAddressRequest }>, 'mutationKey'>,
  callback?: (data: ListUserResponseV3) => void
): UseMutationResult<ListUserResponseV3, AxiosError<ApiError>, ApiArgs & { data: ListEmailAddressRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ListEmailAddressRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserSearchBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserSearchBulk],
    mutationFn,
    ...options
  })
}

export const useAdmBans_ByUserId_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: { activeOnly?: boolean | null; after?: string | null; before?: string | null; limit?: number }
  },
  options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserBanV3Response) => void
): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBans_ByUserId_ByNS>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getBans_ByUserId_ByNS(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Bans_ByUserId_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBan_ByUserId_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; data: BanCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponseV3) => void
): UseMutationResult<UserBanResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; data: BanCreateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BanCreateRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBan_ByUserId_ByNS(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmUsersLinkhistories = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { platformId: string | null; limit?: number; offset?: number; platformUserId?: string | null } },
  options?: Omit<UseQueryOptions<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: LinkingHistoryResponseWithPaginationV3) => void
): UseQueryResult<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersLinkhistories>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUsersLinkhistories(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersLinkhistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUsers_ByRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string; queryParams?: { after?: number; before?: number; limit?: number } },
  options?: Omit<UseQueryOptions<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUsersResponseWithPaginationV3) => void
): UseQueryResult<GetUsersResponseWithPaginationV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsers_ByRoleId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUsers_ByRoleId(input.roleId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCodes_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<VerificationCodeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: VerificationCodeResponse) => void
): UseQueryResult<VerificationCodeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCodes_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getCodes_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<VerificationCodeResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Codes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteRole_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: string[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: string[] }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRole_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchRole_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: NamespaceRoleRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: NamespaceRoleRequest[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: NamespaceRoleRequest[] }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchRole_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserBulkPlatformMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ListBulkUserPlatformsResponse, AxiosError<ApiError>, ApiArgs & { data: UserIDsRequest }>,
    'mutationKey'
  >,
  callback?: (data: ListBulkUserPlatformsResponse) => void
): UseMutationResult<ListBulkUserPlatformsResponse, AxiosError<ApiError>, ApiArgs & { data: UserIDsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UserIDsRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserBulkPlatform(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.UserBulkPlatform],
    mutationFn,
    ...options
  })
}

export const useAdmPatchStatus_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UpdateUserStatusRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UpdateUserStatusRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UpdateUserStatusRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchStatus_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Status_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateVerify_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateVerify_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Verify_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePassword_ByUserId_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserPasswordUpdateV3Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserPasswordUpdateV3Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserPasswordUpdateV3Request }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePassword_ByUserId_ByNS(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Password_ByUserId_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmUsersPlatformsJustice = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListUsersWithPlatformAccountsResponse) => void
): UseQueryResult<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersPlatformsJustice>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUsersPlatformsJustice(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersPlatformsJustice, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPlatforms_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: UserLinkedPlatformsResponseV3) => void
): UseQueryResult<UserLinkedPlatformsResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatforms_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getPlatforms_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Platforms_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAgerestrictionsCountries = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<CountryV3ResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CountryV3ResponseArray) => void
): UseQueryResult<CountryV3ResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgerestrictionsCountries>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getAgerestrictionsCountries()
    callback && callback(data)
    return data
  }

  return useQuery<CountryV3ResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.AgerestrictionsCountries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCodeVerify_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserVerificationRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserVerificationRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserVerificationRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCodeVerify_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.CodeVerify_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteInformation_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteInformation_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Information_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePermission_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: PermissionDeleteRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: PermissionDeleteRequest[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: PermissionDeleteRequest[] }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePermission_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePermission_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: Permissions }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: Permissions }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: Permissions }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPermission_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePermission_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: Permissions }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: Permissions }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: Permissions }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePermission_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchBan_ByUserId_ByBanIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserBanResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; banId: string; data: BanUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserBanResponseV3) => void
): UseMutationResult<UserBanResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; banId: string; data: BanUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; banId: string; data: BanUpdateRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchBan_ByUserId_ByBanId(
      input.userId,
      input.banId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_ByBanId],
    mutationFn,
    ...options
  })
}

export const useAdmBansSummary_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<GetUserBanSummaryV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserBanSummaryV3) => void
): UseQueryResult<GetUserBanSummaryV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBansSummary_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getBansSummary_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<GetUserBanSummaryV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.BansSummary_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCodeRequest_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: SendVerificationCodeRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: SendVerificationCodeRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: SendVerificationCodeRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCodeRequest_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.CodeRequest_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUser_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UserPlatforms,
      AxiosError<ApiError>,
      ApiArgs & { platformId: string; data: PlatformUserIdRequest; queryParams?: { rawPID?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: UserPlatforms) => void
): UseMutationResult<
  UserPlatforms,
  AxiosError<ApiError>,
  ApiArgs & { platformId: string; data: PlatformUserIdRequest; queryParams?: { rawPID?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { platformId: string; data: PlatformUserIdRequest; queryParams?: { rawPID?: boolean | null } }
  ) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUser_ByPlatformId(
      input.platformId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.User_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePlatformLink_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: LinkPlatformAccountRequest; queryParams?: { skipConflict?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: LinkPlatformAccountRequest; queryParams?: { skipConflict?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; data: LinkPlatformAccountRequest; queryParams?: { skipConflict?: boolean | null } }
  ) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPlatformLink_ByUserId(
      input.userId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.PlatformLink_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRole_ByUserId_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; roleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; roleId: string }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRole_ByUserId_ByRoleId(
      input.userId,
      input.roleId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateRole_ByUserId_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; roleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; roleId: string }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRole_ByUserId_ByRoleId(
      input.userId,
      input.roleId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletionStatus_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<UserDeletionStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserDeletionStatusResponse) => void
): UseQueryResult<UserDeletionStatusResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDeletionStatus_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getDeletionStatus_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<UserDeletionStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.DeletionStatus_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchDeletionStatus_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UpdateUserDeletionStatusRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UpdateUserDeletionStatusRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UpdateUserDeletionStatusRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchDeletionStatus_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.DeletionStatus_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmLoginsHistories_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { after?: number; before?: number; limit?: number } },
  options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: LoginHistoriesResponse) => void
): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLoginsHistories_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getLoginsHistories_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.LoginsHistories_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchTrustlyIdentity_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserIdentityUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserIdentityUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserIdentityUpdateRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchTrustlyIdentity_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.TrustlyIdentity_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDistinctPlatforms_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DistinctPlatformResponseV3) => void
): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDistinctPlatforms_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getDistinctPlatforms_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.DistinctPlatforms_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPlatformsJustice_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<GetUserMappingArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserMappingArray) => void
): UseQueryResult<GetUserMappingArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformsJustice_ByUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getPlatformsJustice_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<GetUserMappingArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsJustice_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateHeadlesCodeVerify_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UserResponseV3,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }
    >,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<
  UserResponseV3,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).createHeadlesCodeVerify_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.HeadlesCodeVerify_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePlatform_ByUserId_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; platformId: string; data: UnlinkUserPlatformRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; platformId: string; data: UnlinkUserPlatformRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; platformId: string; data: UnlinkUserPlatformRequest }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePlatform_ByUserId_ByPlatformId(
      input.userId,
      input.platformId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Platform_ByUserId_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchAgerestrictionCountry_ByCountryCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CountryV3Response, AxiosError<ApiError>, ApiArgs & { countryCode: string; data: CountryAgeRestrictionV3Request }>,
    'mutationKey'
  >,
  callback?: (data: CountryV3Response) => void
): UseMutationResult<CountryV3Response, AxiosError<ApiError>, ApiArgs & { countryCode: string; data: CountryAgeRestrictionV3Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { countryCode: string; data: CountryAgeRestrictionV3Request }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchAgerestrictionCountry_ByCountryCode(
      input.countryCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.AgerestrictionCountry_ByCountryCode],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAll_ByUserId_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; platformId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; platformId: string }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAll_ByUserId_ByPlatformId(
      input.userId,
      input.platformId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.All_ByUserId_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmUser_ByPlatformId_ByPlatformUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platformId: string; platformUserId: string },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserResponseV3) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUser_ByPlatformId_ByPlatformUserId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getUser_ByPlatformId_ByPlatformUserId(
      input.platformId,
      input.platformUserId
    )
    callback && callback(data)
    return data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByPlatformId_ByPlatformUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeletePermission_ByUserId_ByResource_ByActionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; resource: string; action: number }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; resource: string; action: number }) => {
    const data = await UsersAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deletePermission_ByUserId_ByResource_ByAction(input.userId, input.resource, input.action)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}

export const useAdmMetadata_ByUserId_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; platformId: string },
  options?: Omit<UseQueryOptions<UserPlatformMetadata, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserPlatformMetadata) => void
): UseQueryResult<UserPlatformMetadata, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMetadata_ByUserId_ByPlatformId>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getMetadata_ByUserId_ByPlatformId(input.userId, input.platformId)
    callback && callback(data)
    return data
  }

  return useQuery<UserPlatformMetadata, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Metadata_ByUserId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPlatformJustice_ByUserId_ByTargetNamespace = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; targetNamespace: string },
  options?: Omit<UseQueryOptions<GetUserMappingV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserMappingV3) => void
): UseQueryResult<GetUserMappingV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformJustice_ByUserId_ByTargetNamespace>[1]) => async () => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace }).getPlatformJustice_ByUserId_ByTargetNamespace(
      input.userId,
      input.targetNamespace
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetUserMappingV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePlatformJustice_ByUserId_ByTargetNamespaceMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateJusticeUserResponse, AxiosError<ApiError>, ApiArgs & { userId: string; targetNamespace: string }>,
    'mutationKey'
  >,
  callback?: (data: CreateJusticeUserResponse) => void
): UseMutationResult<CreateJusticeUserResponse, AxiosError<ApiError>, ApiArgs & { userId: string; targetNamespace: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; targetNamespace: string }) => {
    const data = await UsersAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPlatformJustice_ByUserId_ByTargetNamespace(input.userId, input.targetNamespace)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteLinkHistory_ByUserId_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; platformId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; platformId: string }) => {
    const data = await UsersAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteLinkHistory_ByUserId_ByPlatformId(
      input.userId,
      input.platformId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkHistory_ByUserId_ByPlatformId],
    mutationFn,
    ...options
  })
}
