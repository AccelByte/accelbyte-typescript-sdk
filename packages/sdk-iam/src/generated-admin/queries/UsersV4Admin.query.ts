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
import { UsersV4AdminApi } from '../UsersV4AdminApi.js'

import { AddUserRoleV4Request } from '../../generated-definitions/AddUserRoleV4Request.js'
import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../../generated-definitions/BackupCodesResponseV4.js'
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
import { UserMfaTokenResponseV4 } from '../../generated-definitions/UserMfaTokenResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'

export enum Key_UsersV4Admin {
  UserMe_v4 = 'Iam.UsersV4Admin.UserMe_v4',
  UserInvite_v4 = 'Iam.UsersV4Admin.UserInvite_v4',
  UserUserInvite_v4 = 'Iam.UsersV4Admin.UserUserInvite_v4',
  InvitationHistories_v4 = 'Iam.UsersV4Admin.InvitationHistories_v4',
  UsersMeMfaFactor_v4 = 'Iam.UsersV4Admin.UsersMeMfaFactor_v4',
  UserMeMfaFactor_v4 = 'Iam.UsersV4Admin.UserMeMfaFactor_v4',
  UsersMeMfaStatus_v4 = 'Iam.UsersV4Admin.UsersMeMfaStatus_v4',
  UserMeMfaStatus_v4 = 'Iam.UsersV4Admin.UserMeMfaStatus_v4',
  UsersMeMfaBackupCode_v4 = 'Iam.UsersV4Admin.UsersMeMfaBackupCode_v4',
  UserMeMfaBackupCode_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCode_v4',
  UserMeMfaEmailCode_v4 = 'Iam.UsersV4Admin.UserMeMfaEmailCode_v4',
  UsersMeMfaBackupCodes_v4 = 'Iam.UsersV4Admin.UsersMeMfaBackupCodes_v4',
  UserMeMfaBackupCode_admin_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCode_admin_v4',
  UserMeMfaEmailEnable_v4 = 'Iam.UsersV4Admin.UserMeMfaEmailEnable_v4',
  UserMeMfaEmailDisable_v4 = 'Iam.UsersV4Admin.UserMeMfaEmailDisable_v4',
  User_v4 = 'Iam.UsersV4Admin.User_v4',
  UserMeMfaChallengeVerify_v4 = 'Iam.UsersV4Admin.UserMeMfaChallengeVerify_v4',
  UserMeMfaAuthenticatorKey_v4 = 'Iam.UsersV4Admin.UserMeMfaAuthenticatorKey_v4',
  UserMeMfaBackupCodeEnable_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCodeEnable_v4',
  UserMeMfaBackupCodeDisable_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCodeDisable_v4',
  UserMeMfaBackupCodeEnable_admin_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCodeEnable_admin_v4',
  UsersMeMfaBackupCodeDownload_v4 = 'Iam.UsersV4Admin.UsersMeMfaBackupCodeDownload_v4',
  TestUser_v4 = 'Iam.UsersV4Admin.TestUser_v4',
  UserMeMfaAuthenticatorEnable_v4 = 'Iam.UsersV4Admin.UserMeMfaAuthenticatorEnable_v4',
  UserMeMfaAuthenticatorDisable_v4 = 'Iam.UsersV4Admin.UserMeMfaAuthenticatorDisable_v4',
  User_ByUserId_v4 = 'Iam.UsersV4Admin.User_ByUserId_v4',
  InvitationHistories_ByNS_v4 = 'Iam.UsersV4Admin.InvitationHistories_ByNS_v4',
  UserBulkValidate_v4 = 'Iam.UsersV4Admin.UserBulkValidate_v4',
  Email_ByUserId_v4 = 'Iam.UsersV4Admin.Email_ByUserId_v4',
  Role_ByUserId_v4 = 'Iam.UsersV4Admin.Role_ByUserId_v4',
  Roles_ByUserId_v4 = 'Iam.UsersV4Admin.Roles_ByUserId_v4',
  Role_ByUserId_ByNS_v4 = 'Iam.UsersV4Admin.Role_ByUserId_ByNS_v4',
  UserBulkAccountType_v4 = 'Iam.UsersV4Admin.UserBulkAccountType_v4',
  InvitationHistoriesUsers_v4 = 'Iam.UsersV4Admin.InvitationHistoriesUsers_v4',
  MfaStatus_ByUserId_v4 = 'Iam.UsersV4Admin.MfaStatus_ByUserId_v4',
  MfaDisable_ByUserId_v4 = 'Iam.UsersV4Admin.MfaDisable_ByUserId_v4'
}

/**
 * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. action code : 10103
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMe_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PatchUserMeMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserUpdateRequestV3 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchUserMe_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMe_v4],
    mutationFn,
    ...options
  })
}

/**
 * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - **emailAddresses** is required, List of email addresses that will be invited - **isAdmin** is required, true if user is admin, false if user is not admin - **namespace** is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - **roleId** is optional, if not specified then it will only assign User role. - **assignedNamespaces** is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserInvite_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserInviteMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: InviteUserResponseV3) => void
): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: InviteUserRequestV4 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserInvite_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserInvite_v4],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - Email Address is required, List of email addresses that will be invited - isAdmin is required, true if user is admin, false if user is not admin - Namespace is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - Role is optional, if not specified then it will only assign User role. - Assigned Namespaces is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default. Substitute endpoint: /iam/v4/admin/users/invite
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserUserInvite_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserUserInviteMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: InviteUserResponseV3) => void
): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: InviteUserRequestV4 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserUserInvite_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserUserInvite_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is to list all Invitation Histories for new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Accepted Query: - namespace - offset - limit
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.InvitationHistories_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetInvitationHistories_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; namespace?: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<ListInvitationHistoriesV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListInvitationHistoriesV4Response>) => void
): UseQueryResult<ListInvitationHistoriesV4Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetInvitationHistories_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInvitationHistories_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListInvitationHistoriesV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistories_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to get user enabled factors.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UsersMeMfaFactor_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetUsersMeMfaFactor_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<EnabledFactorsResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EnabledFactorsResponseV4>) => void
): UseQueryResult<EnabledFactorsResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaFactor_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeMfaFactor_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<EnabledFactorsResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaFactor_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to make 2FA factor default.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaFactor_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PostUserMeMfaFactorMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { factor: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { factor: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { factor: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUserMeMfaFactor_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaFactor_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will get user&#39;s&#39; MFA status.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UsersMeMfaStatus_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetUsersMeMfaStatus_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<UserMfaStatusResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserMfaStatusResponseV4>) => void
): UseQueryResult<UserMfaStatusResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaStatus_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeMfaStatus_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<UserMfaStatusResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaStatus_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * This endpoint will get user&#39;s&#39; MFA status. ------------ **Substitute endpoint**: /iam/v4/admin/users/me/mfa/status [GET]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaStatus_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaStatusMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: UserMfaStatusResponseV4) => void
): UseMutationResult<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeMfaStatus_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaStatus_v4],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCode_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetUsersMeMfaBackupCode_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<BackupCodesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BackupCodesResponseV4>) => void
): UseQueryResult<BackupCodesResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaBackupCode_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeMfaBackupCode_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<BackupCodesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCode_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaBackupCode_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaBackupCodeMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: BackupCodesResponseV4) => void
): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCode_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCode_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to send email code. -------------- Supported actions: * ChangePassword * DisableMFAEmail
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaEmailCode_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PostUserMeMfaEmailCodeMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { action?: string | null; languageTag?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { action?: string | null; languageTag?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { action?: string | null; languageTag?: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUserMeMfaEmailCode_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailCode_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodes_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetUsersMeMfaBackupCodes_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { languageTag?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaBackupCodes_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeMfaBackupCodes_v4(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodes_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaBackupCode_admin_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaBackupCode_adminMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCode_admin_v4(input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCode_admin_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to enable 2FA email.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaEmailEnable_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PostUserMeMfaEmailEnableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { code: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postUserMeMfaEmailEnable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailEnable_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to disable 2FA email. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaEmailDisable_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaEmailDisableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaEmailDisable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailDisable_v4],
    mutationFn,
    ...options
  })
}

/**
 * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.User_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: CreateUserResponseV4) => void
): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateUserRequestV4 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.User_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaChallengeVerify_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PostUserMeMfaChallengeVerifyMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserMfaTokenResponseV4,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { code?: string | null; factor?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: UserMfaTokenResponseV4) => void
): UseMutationResult<
  UserMfaTokenResponseV4,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { code?: string | null; factor?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { code?: string | null; factor?: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postUserMeMfaChallengeVerify_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaChallengeVerify_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorKey_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaAuthenticatorKeyMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: AuthenticatorKeyResponseV4) => void
): UseMutationResult<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaAuthenticatorKey_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorKey_v4],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This endpoint is used to enable 2FA backup codes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaBackupCodeEnableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: BackupCodesResponseV4) => void
): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCodeEnable_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to disable 2FA backup codes. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaBackupCodeDisable_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_DeleteUserMeMfaBackupCodeDisableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUserMeMfaBackupCodeDisable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeDisable_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to enable 2FA backup codes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_admin_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateUserMeMfaBackupCodeEnable_adminMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCodeEnable_admin_v4(input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_admin_v4],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This endpoint is used to download backup codes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodeDownload_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetUsersMeMfaBackupCodeDownload_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaBackupCodeDownload_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeMfaBackupCodeDownload_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodeDownload_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create test users and not send verification code email. Note: - count : Enter the number of test users you want to create in the count field. The maximum value of the user count is 100. - userInfo(optional) : - country: you can specify country for the test user. Country use ISO3166-1 alpha-2 two letter, e.g. US
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.TestUser_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_CreateTestUserMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTestUsersResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUsersRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: CreateTestUsersResponseV4) => void
): UseMutationResult<CreateTestUsersResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUsersRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTestUsersRequestV4 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTestUser_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.TestUser_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to enable 2FA authenticator. ---------- Prerequisites: - Generate the secret key/QR code uri by **_/iam/v4/admin/users/me/mfa/authenticator/key_** - Consume the secret key/QR code by an authenticator app - Get the code from the authenticator app
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorEnable_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PostUserMeMfaAuthenticatorEnableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { code: string | null } }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postUserMeMfaAuthenticatorEnable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorEnable_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to disable 2FA authenticator. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorDisable_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_DeleteUserMeMfaAuthenticatorDisableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUserMeMfaAuthenticatorDisable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorDisable_v4],
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
 *    queryKey: [Key_UsersV4Admin.User_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_UpdateUser_ByUserIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserUpdateRequestV3 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUser_ByUserId_v4(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.User_ByUserId_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is to Invitation Historiy for specific new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.InvitationHistories_ByNS_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetInvitationHistories_ByNS_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<InvitationHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InvitationHistoryResponse>) => void
): UseQueryResult<InvitationHistoryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetInvitationHistories_ByNS_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInvitationHistories_ByNS_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<InvitationHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistories_ByNS_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Use this endpoint to check if userID exists or not Maximum number of userID to be checked is 50
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserBulkValidate_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_FetchUserBulkValidate_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: CheckValidUserIdRequestV4 },
  options?: Omit<UseQueryOptions<ListValidUserIdResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListValidUserIdResponseV4>) => void
): UseQueryResult<ListValidUserIdResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_FetchUserBulkValidate_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUserBulkValidate_v4(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListValidUserIdResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UserBulkValidate_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to update a user email address. This endpoint need a valid user token from an admin to verify its identity (email) before updating a user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.Email_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_UpdateEmail_ByUserIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: EmailUpdateRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: EmailUpdateRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: EmailUpdateRequestV4 }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateEmail_ByUserId_v4(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Email_ByUserId_v4],
    mutationFn,
    ...options
  })
}

/**
 * Remove a role from user&#39;s roles.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.Role_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_DeleteRole_ByUserIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RemoveUserRoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RemoveUserRoleV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: RemoveUserRoleV4Request }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRole_ByUserId_v4(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId_v4],
    mutationFn,
    ...options
  })
}

/**
 * List roles assigned to a user
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.Roles_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetRoles_ByUserId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<ListUserRolesV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListUserRolesV4Response>) => void
): UseQueryResult<ListUserRolesV4Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetRoles_ByUserId_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRoles_ByUserId_v4(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListUserRolesV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.Roles_ByUserId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * New role will be appended to user&#39;s current roles. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.Role_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_UpdateRole_ByUserIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AddUserRoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: ListUserRolesV4Response) => void
): UseMutationResult<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AddUserRoleV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: AddUserRoleV4Request }) => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRole_ByUserId_v4(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId_v4],
    mutationFn,
    ...options
  })
}

/**
 * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.Role_ByUserId_ByNS_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_UpdateRole_ByUserId_ByNSMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AddUserRoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: ListUserRolesV4Response) => void
): UseMutationResult<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AddUserRoleV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: AddUserRoleV4Request }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRole_ByUserId_ByNS_v4(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId_ByNS_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to change users account type - set **testAccount** to &lt;code&gt;true&lt;/code&gt; to mark user as test account type - set **testAccount** to &lt;code&gt;false&lt;/code&gt; to mark user as default account type
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.UserBulkAccountType_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_PatchUserBulkAccountTypeMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkAccountTypeUpdateRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkAccountTypeUpdateRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkAccountTypeUpdateRequestV4 }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchUserBulkAccountType_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserBulkAccountType_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is to Get list of users Invitation History for specific new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Accepted Query: - offset - limit
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.InvitationHistoriesUsers_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetInvitationHistoriesUsers_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceInvitationHistoryUserV4Response>) => void
): UseQueryResult<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetInvitationHistoriesUsers_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInvitationHistoriesUsers_v4(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistoriesUsers_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * **This endpoint is used to get user&#39;s 2FA status.**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.MfaStatus_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_GetMfaStatus_ByUserId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserMfaStatusResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserMfaStatusResponseV4>) => void
): UseQueryResult<UserMfaStatusResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4AdminApi_GetMfaStatus_ByUserId_v4>[1]) => async () => {
    const response = await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMfaStatus_ByUserId_v4(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserMfaStatusResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.MfaStatus_ByUserId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to disable user 2FA. ----------- **Note**: if the factor is not specified, will disable all 2FA methods.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4Admin.MfaDisable_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4AdminApi_DeleteMfaDisable_ByUserIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: DisableMfaRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: DisableMfaRequest }) => {
    const response = await UsersV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteMfaDisable_ByUserId_v4(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4Admin.MfaDisable_ByUserId_v4],
    mutationFn,
    ...options
  })
}
