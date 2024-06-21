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
import { UsersV4AdminApi } from '../UsersV4AdminApi.js'

import { AddUserRoleV4Request } from '../../generated-definitions/AddUserRoleV4Request.js'
import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BulkAccountTypeUpdateRequestV4 } from '../../generated-definitions/BulkAccountTypeUpdateRequestV4.js'
import { CheckValidUserIdRequestV4 } from '../../generated-definitions/CheckValidUserIdRequestV4.js'
import { CreateTestUsersRequestV4 } from '../../generated-definitions/CreateTestUsersRequestV4.js'
import { CreateTestUsersResponseV4 } from '../../generated-definitions/CreateTestUsersResponseV4.js'
import { CreateUserRequestV4 } from '../../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../../generated-definitions/EnabledFactorsResponseV4.js'
import { InvitationHistoryResponse } from '../../generated-definitions/InvitationHistoryResponse.js'
import { InviteUserRequestV4 } from '../../generated-definitions/InviteUserRequestV4.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { ListInvitationHistoriesV4Response } from '../../generated-definitions/ListInvitationHistoriesV4Response.js'
import { ListUserRolesV4Response } from '../../generated-definitions/ListUserRolesV4Response.js'
import { ListValidUserIdResponseV4 } from '../../generated-definitions/ListValidUserIdResponseV4.js'
import { NamespaceInvitationHistoryUserV4Response } from '../../generated-definitions/NamespaceInvitationHistoryUserV4Response.js'
import { RemoveUserRoleV4Request } from '../../generated-definitions/RemoveUserRoleV4Request.js'
import { UserMfaStatusResponseV4 } from '../../generated-definitions/UserMfaStatusResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'

export enum Key_UsersV4Admin {
  UserMe = 'UsersV4Admin.UserMe',
  UserInvite = 'UsersV4Admin.UserInvite',
  InvitationHistories = 'UsersV4Admin.InvitationHistories',
  UsersMeMfaFactor = 'UsersV4Admin.UsersMeMfaFactor',
  postUserMeMfaFactor = 'UsersV4Admin.postUserMeMfaFactor',
  UserMeMfaStatus = 'UsersV4Admin.UserMeMfaStatus',
  postUserMeMfaEmailCode = 'UsersV4Admin.postUserMeMfaEmailCode',
  UsersMeMfaBackupCodes = 'UsersV4Admin.UsersMeMfaBackupCodes',
  UserMeMfaBackupCode_v4 = 'UsersV4Admin.UserMeMfaBackupCode_v4',
  postUserMeMfaEmailEnable = 'UsersV4Admin.postUserMeMfaEmailEnable',
  UserMeMfaEmailDisable = 'UsersV4Admin.UserMeMfaEmailDisable',
  User = 'UsersV4Admin.User',
  postUserMeMfaChallengeVerify = 'UsersV4Admin.postUserMeMfaChallengeVerify',
  UserMeMfaAuthenticatorKey = 'UsersV4Admin.UserMeMfaAuthenticatorKey',
  UserMeMfaBackupCodeDisable = 'UsersV4Admin.UserMeMfaBackupCodeDisable',
  UserMeMfaBackupCodeEnable_v4 = 'UsersV4Admin.UserMeMfaBackupCodeEnable_v4',
  TestUser = 'UsersV4Admin.TestUser',
  postUserMeMfaAuthenticatorEnable = 'UsersV4Admin.postUserMeMfaAuthenticatorEnable',
  UserMeMfaAuthenticatorDisable = 'UsersV4Admin.UserMeMfaAuthenticatorDisable',
  User_ByUserId = 'UsersV4Admin.User_ByUserId',
  InvitationHistories_ByNS = 'UsersV4Admin.InvitationHistories_ByNS',
  UserBulkValidate = 'UsersV4Admin.UserBulkValidate',
  Email_ByUserId = 'UsersV4Admin.Email_ByUserId',
  Role_ByUserId = 'UsersV4Admin.Role_ByUserId',
  Roles_ByUserId = 'UsersV4Admin.Roles_ByUserId',
  UserBulkAccountType = 'UsersV4Admin.UserBulkAccountType',
  InvitationHistoriesUsers = 'UsersV4Admin.InvitationHistoriesUsers',
  MfaDisable_ByUserId = 'UsersV4Admin.MfaDisable_ByUserId'
}

export const useAdmPatchUserMeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, ApiArgs & { data: UserUpdateRequestV3 }>, 'mutationKey'>,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, ApiArgs & { data: UserUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UserUpdateRequestV3 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchUserMe(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMe],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserInviteMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, ApiArgs & { data: InviteUserRequestV4 }>, 'mutationKey'>,
  callback?: (data: InviteUserResponseV3) => void
): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, ApiArgs & { data: InviteUserRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: InviteUserRequestV4 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserInvite(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserInvite],
    mutationFn,
    ...options
  })
}

export const useAdmInvitationHistories = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; namespace?: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<ListInvitationHistoriesV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListInvitationHistoriesV4Response) => void
): UseQueryResult<ListInvitationHistoriesV4Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInvitationHistories>[1]) => async () => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace }).getInvitationHistories(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListInvitationHistoriesV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUsersMeMfaFactor = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<EnabledFactorsResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EnabledFactorsResponseV4) => void
): UseQueryResult<EnabledFactorsResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersMeMfaFactor>[1]) => async () => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace }).getUsersMeMfaFactor()
    callback && callback(data)
    return data
  }

  return useQuery<EnabledFactorsResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaFactor, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUserMeMfaStatusMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<UserMfaStatusResponseV4, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: UserMfaStatusResponseV4) => void
): UseMutationResult<UserMfaStatusResponseV4, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserMeMfaStatus()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaStatus],
    mutationFn,
    ...options
  })
}

export const useAdmUsersMeMfaBackupCodes = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { languageTag?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersMeMfaBackupCodes>[1]) => async () => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace }).getUsersMeMfaBackupCodes(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUserMeMfaBackupCode_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { queryParams?: { languageTag?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { queryParams?: { languageTag?: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { queryParams?: { languageTag?: string | null } }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserMeMfaBackupCode_v4(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCode_v4],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserMeMfaEmailDisableMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DisableMfaRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DisableMfaRequest }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserMeMfaEmailDisable(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailDisable],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, ApiArgs & { data: CreateUserRequestV4 }>, 'mutationKey'>,
  callback?: (data: CreateUserResponseV4) => void
): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, ApiArgs & { data: CreateUserRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateUserRequestV4 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUser(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.User],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserMeMfaAuthenticatorKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<AuthenticatorKeyResponseV4, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: AuthenticatorKeyResponseV4) => void
): UseMutationResult<AuthenticatorKeyResponseV4, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserMeMfaAuthenticatorKey()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorKey],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteUserMeMfaBackupCodeDisableMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DisableMfaRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DisableMfaRequest }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteUserMeMfaBackupCodeDisable(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeDisable],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUserMeMfaBackupCodeEnable_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { queryParams?: { languageTag?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { queryParams?: { languageTag?: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { queryParams?: { languageTag?: string | null } }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserMeMfaBackupCodeEnable_v4(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_v4],
    mutationFn,
    ...options
  })
}

export const useAdmCreateTestUserMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateTestUsersResponseV4, AxiosError<ApiError>, ApiArgs & { data: CreateTestUsersRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: CreateTestUsersResponseV4) => void
): UseMutationResult<CreateTestUsersResponseV4, AxiosError<ApiError>, ApiArgs & { data: CreateTestUsersRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateTestUsersRequestV4 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createTestUser(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.TestUser],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteUserMeMfaAuthenticatorDisableMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DisableMfaRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DisableMfaRequest }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteUserMeMfaAuthenticatorDisable(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorDisable],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateUser_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserUpdateRequestV3 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateUser_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.User_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmInvitationHistories_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<InvitationHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: InvitationHistoryResponse) => void
): UseQueryResult<InvitationHistoryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInvitationHistories_ByNS>[1]) => async () => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace }).getInvitationHistories_ByNS()
    callback && callback(data)
    return data
  }

  return useQuery<InvitationHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistories_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUserBulkValidateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ListValidUserIdResponseV4, AxiosError<ApiError>, ApiArgs & { data: CheckValidUserIdRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: ListValidUserIdResponseV4) => void
): UseMutationResult<ListValidUserIdResponseV4, AxiosError<ApiError>, ApiArgs & { data: CheckValidUserIdRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CheckValidUserIdRequestV4 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserBulkValidate(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserBulkValidate],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateEmail_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: EmailUpdateRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: EmailUpdateRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: EmailUpdateRequestV4 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEmail_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Email_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRole_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: RemoveUserRoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: RemoveUserRoleV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: RemoveUserRoleV4Request }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRole_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmRoles_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<ListUserRolesV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListUserRolesV4Response) => void
): UseQueryResult<ListUserRolesV4Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRoles_ByUserId>[1]) => async () => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace }).getRoles_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<ListUserRolesV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.Roles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRole_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ListUserRolesV4Response, AxiosError<ApiError>, ApiArgs & { userId: string; data: AddUserRoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: ListUserRolesV4Response) => void
): UseMutationResult<ListUserRolesV4Response, AxiosError<ApiError>, ApiArgs & { userId: string; data: AddUserRoleV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: AddUserRoleV4Request }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createRole_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRole_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ListUserRolesV4Response, AxiosError<ApiError>, ApiArgs & { userId: string; data: AddUserRoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: ListUserRolesV4Response) => void
): UseMutationResult<ListUserRolesV4Response, AxiosError<ApiError>, ApiArgs & { userId: string; data: AddUserRoleV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: AddUserRoleV4Request }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRole_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchUserBulkAccountTypeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: BulkAccountTypeUpdateRequestV4 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: BulkAccountTypeUpdateRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkAccountTypeUpdateRequestV4 }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchUserBulkAccountType(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserBulkAccountType],
    mutationFn,
    ...options
  })
}

export const useAdmInvitationHistoriesUsers = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespaceInvitationHistoryUserV4Response) => void
): UseQueryResult<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInvitationHistoriesUsers>[1]) => async () => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace }).getInvitationHistoriesUsers(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistoriesUsers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteMfaDisable_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await UsersV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteMfaDisable_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.MfaDisable_ByUserId],
    mutationFn,
    ...options
  })
}
