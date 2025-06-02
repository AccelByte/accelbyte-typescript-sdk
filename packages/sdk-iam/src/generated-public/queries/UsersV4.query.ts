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
import { UsersV4Api } from '../UsersV4Api.js'

import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../../generated-definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../../generated-definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { PlatformUserIdRequestV4 } from '../../generated-definitions/PlatformUserIdRequestV4.js'
import { PublicInviteUserRequestV4 } from '../../generated-definitions/PublicInviteUserRequestV4.js'
import { PublicUserUpdateRequestV3 } from '../../generated-definitions/PublicUserUpdateRequestV3.js'
import { UpgradeHeadlessAccountRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserMfaStatusResponseV4 } from '../../generated-definitions/UserMfaStatusResponseV4.js'
import { UserMfaTokenResponseV4 } from '../../generated-definitions/UserMfaTokenResponseV4.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserPublicInfoResponseV4 } from '../../generated-definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserResponseV4 } from '../../generated-definitions/UserResponseV4.js'

export enum Key_UsersV4 {
  UserInvite_v4 = 'Iam.UsersV4.UserInvite_v4',
  User_v4 = 'Iam.UsersV4.User_v4',
  UserMe_v4 = 'Iam.UsersV4.UserMe_v4',
  TestUser_v4 = 'Iam.UsersV4.TestUser_v4',
  User_ByUserId_v4 = 'Iam.UsersV4.User_ByUserId_v4',
  UserMeEmail_v4 = 'Iam.UsersV4.UserMeEmail_v4',
  UserMeHeadlesCodeVerifyForward_v4 = 'Iam.UsersV4.UserMeHeadlesCodeVerifyForward_v4',
  UserMeMfaDevice_v4 = 'Iam.UsersV4.UserMeMfaDevice_v4',
  UsersMeMfaFactor_v4 = 'Iam.UsersV4.UsersMeMfaFactor_v4',
  UserMeMfaFactor_v4 = 'Iam.UsersV4.UserMeMfaFactor_v4',
  UsersMeMfaStatus_v4 = 'Iam.UsersV4.UsersMeMfaStatus_v4',
  UserMeMfaStatus_v4 = 'Iam.UsersV4.UserMeMfaStatus_v4',
  UsersMeMfaBackupCode_v4 = 'Iam.UsersV4.UsersMeMfaBackupCode_v4',
  UserMeMfaBackupCode_v4 = 'Iam.UsersV4.UserMeMfaBackupCode_v4',
  UserMeMfaEmailCode_v4 = 'Iam.UsersV4.UserMeMfaEmailCode_v4',
  UserMeHeadlesVerify_v4 = 'Iam.UsersV4.UserMeHeadlesVerify_v4',
  UsersMeMfaBackupCodes_v4 = 'Iam.UsersV4.UsersMeMfaBackupCodes_v4',
  UserMeMfaBackupCode_ByNS_v4 = 'Iam.UsersV4.UserMeMfaBackupCode_ByNS_v4',
  UserMeMfaEmailEnable_v4 = 'Iam.UsersV4.UserMeMfaEmailEnable_v4',
  UserMeMfaEmailDisable_v4 = 'Iam.UsersV4.UserMeMfaEmailDisable_v4',
  UserInvite_ByInvitationId_v4 = 'Iam.UsersV4.UserInvite_ByInvitationId_v4',
  User_ByPlatformId_v4 = 'Iam.UsersV4.User_ByPlatformId_v4',
  UserMeHeadlesCodeVerify_v4 = 'Iam.UsersV4.UserMeHeadlesCodeVerify_v4',
  UserMeMfaChallengeVerify_v4 = 'Iam.UsersV4.UserMeMfaChallengeVerify_v4',
  UserMeMfaAuthenticatorKey_v4 = 'Iam.UsersV4.UserMeMfaAuthenticatorKey_v4',
  UserMeMfaBackupCodeEnable_v4 = 'Iam.UsersV4.UserMeMfaBackupCodeEnable_v4',
  UserMeMfaBackupCodeDisable_v4 = 'Iam.UsersV4.UserMeMfaBackupCodeDisable_v4',
  UserMeMfaBackupCodeEnable_ByNS_v4 = 'Iam.UsersV4.UserMeMfaBackupCodeEnable_ByNS_v4',
  UsersMeMfaBackupCodeDownload_v4 = 'Iam.UsersV4.UsersMeMfaBackupCodeDownload_v4',
  UserMeMfaAuthenticatorEnable_v4 = 'Iam.UsersV4.UserMeMfaAuthenticatorEnable_v4',
  UserMeMfaAuthenticatorDisable_v4 = 'Iam.UsersV4.UserMeMfaAuthenticatorDisable_v4',
  User_ByPlatformId_ByPlatformUserId_v4 = 'Iam.UsersV4.User_ByPlatformId_ByPlatformUserId_v4'
}

/**
 * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace - additionalData(optional): for utm parameter data The invited users will also be assigned with &#34;User&#34; role by default.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserInvite_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserInviteMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicInviteUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: InviteUserResponseV3) => void
): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicInviteUserRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicInviteUserRequestV4 }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserInvite_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserInvite_v4],
    mutationFn,
    ...options
  })
}

/**
 * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. - code: required when mandatoryEmailVerificationEnabled config is true, please refer to the config from /iam/v3/public/namespaces/{namespace}/config/{configKey} [GET] API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.User_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: CreateUserResponseV4) => void
): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateUserRequestV4 }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.User_v4],
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
 *    queryKey: [Key_UsersV4.UserMe_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_PatchUserMeMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV3) => void
): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchUserMe_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMe_v4],
    mutationFn,
    ...options
  })
}

/**
 * Create a test user and not send verification code email **Required attributes:** - verified: this new user is verified or not - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.TestUser_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateTestUserMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: CreateUserResponseV4) => void
): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUserRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTestUserRequestV4 }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTestUser_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.TestUser_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint only returns user&#39;s public information. action code: 10129
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.User_ByUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUser_ByUserId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserPublicInfoResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPublicInfoResponseV4>) => void
): UseQueryResult<UserPublicInfoResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUser_ByUserId_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId_v4(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserPublicInfoResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.User_ByUserId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * The endpoint to update my email address. It requires a verification code from &lt;code&gt;/users/me/code/request&lt;/code&gt; with **UpdateEmailAddress** context.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeEmail_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_UpdateUserMeEmailMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EmailUpdateRequestV4 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EmailUpdateRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: EmailUpdateRequestV4 }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUserMeEmail_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeEmail_v4],
    mutationFn,
    ...options
  })
}

/**
 * This is a forward version for code verify. The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendCodeForwardV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeHeadlesCodeVerifyForward_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeHeadlesCodeVerifyForwardMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4 }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4 }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeHeadlesCodeVerifyForward_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeHeadlesCodeVerifyForward_v4],
    mutationFn,
    ...options
  })
}

/**
 * (Only for test)This endpoint is used to remove trusted device. This endpoint Requires device_token in cookie
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeMfaDevice_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_DeleteUserMeMfaDeviceMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUserMeMfaDevice_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaDevice_v4],
    mutationFn,
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
 *    queryKey: [Key_UsersV4.UsersMeMfaFactor_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUsersMeMfaFactor_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<EnabledFactorsResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EnabledFactorsResponseV4>) => void
): UseQueryResult<EnabledFactorsResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUsersMeMfaFactor_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeMfaFactor_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<EnabledFactorsResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaFactor_v4, input],
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
 *    queryKey: [Key_UsersV4.UserMeMfaFactor_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_PostUserMeMfaFactorMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { factor: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { factor: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { factor: string | null } }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUserMeMfaFactor_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaFactor_v4],
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
 *    queryKey: [Key_UsersV4.UsersMeMfaStatus_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUsersMeMfaStatus_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<UserMfaStatusResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserMfaStatusResponseV4>) => void
): UseQueryResult<UserMfaStatusResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUsersMeMfaStatus_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeMfaStatus_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<UserMfaStatusResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaStatus_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * This endpoint will get user&#39;s&#39; MFA status. --------- **Substitute endpoint**: /iam/v4/public/namespaces/{namespace}/users/me/mfa/status [GET]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeMfaStatus_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaStatusMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: UserMfaStatusResponseV4) => void
): UseMutationResult<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeMfaStatus_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaStatus_v4],
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
 *    queryKey: [Key_UsersV4.UsersMeMfaBackupCode_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUsersMeMfaBackupCode_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<BackupCodesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BackupCodesResponseV4>) => void
): UseQueryResult<BackupCodesResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUsersMeMfaBackupCode_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeMfaBackupCode_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<BackupCodesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaBackupCode_v4, input],
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
 *    queryKey: [Key_UsersV4.UserMeMfaBackupCode_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaBackupCodeMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: BackupCodesResponseV4) => void
): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeMfaBackupCode_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCode_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to send email code. ---------------- Supported values of action: * ChangePassword * DisableMFAEmail
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeMfaEmailCode_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_PostUserMeMfaEmailCodeMutation_v4 = (
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
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUserMeMfaEmailCode_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaEmailCode_v4],
    mutationFn,
    ...options
  })
}

/**
 * Upgrade headless account to full account without verifying email address. Client does not need to provide verification code which sent to email address. action code : 10124
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeHeadlesVerify_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeHeadlesVerifyMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: UserResponseV4) => void
): UseMutationResult<UserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountRequestV4 }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeHeadlesVerify_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeHeadlesVerify_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to get existing 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UsersMeMfaBackupCodes_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUsersMeMfaBackupCodes_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { languageTag?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUsersMeMfaBackupCodes_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeMfaBackupCodes_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaBackupCodes_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to generate 8-digits backup codes. Each codes is a one-time code and will be deleted once used. The codes will be sent through linked email.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeMfaBackupCode_ByNS_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaBackupCode_ByNSMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCode_ByNS_v4(input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCode_ByNS_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaEmailEnable_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_PostUserMeMfaEmailEnableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { code: string | null } }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUserMeMfaEmailEnable_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaEmailEnable_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaEmailDisable_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaEmailDisableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeMfaEmailDisable_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaEmailDisable_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. **Note**: * **uniqueDisplayName**: this is required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. Required attributes: - authType: possible value is EMAILPASSWD (see above) - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - displayName: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserInvite_ByInvitationId_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserInvite_ByInvitationIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { invitationId: string; data: CreateUserRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: CreateUserResponseV4) => void
): UseMutationResult<
  CreateUserResponseV4,
  AxiosError<ApiError>,
  SdkSetConfigParam & { invitationId: string; data: CreateUserRequestV4 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { invitationId: string; data: CreateUserRequestV4 }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserInvite_ByInvitationId_v4(input.invitationId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserInvite_ByInvitationId_v4],
    mutationFn,
    ...options
  })
}

/**
 * List User ID By Platform User ID This endpoint intended to list game user ID from the given namespace This endpoint return list of user ID by given platform ID and list of platform user ID, the max count is 100. Supported platform: - steam - steamopenid - ps4web - ps4 - ps5 - live - xblweb - oculus - if query by app user id, please set the param **pidType** to **OCULUS_APP_USER_ID** - oculusweb - facebook - google - googleplaygames - twitch - discord - apple - device - justice - epicgames - nintendo - awscognito - netflix - snapchat - oidc platform id Note: **nintendo platform user ID**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1 &lt;br&gt; If the request body exceed the max limitation, the max count will be in response body&#39;s messageVariables: &#34;messageVariables&#34;: {&#34;maxCount&#34;: &#34;100&#34;}
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.User_ByPlatformId_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUser_ByPlatformIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserPlatforms,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: PlatformUserIdRequestV4; queryParams?: { rawPUID?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: UserPlatforms) => void
): UseMutationResult<
  UserPlatforms,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: PlatformUserIdRequestV4; queryParams?: { rawPUID?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { platformId: string; data: PlatformUserIdRequestV4; queryParams?: { rawPUID?: boolean | null } }
  ) => {
    const response = await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUser_ByPlatformId_v4(
      input.platformId,
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.User_ByPlatformId_v4],
    mutationFn,
    ...options
  })
}

/**
 *  The endpoint upgrades a headless account by linking the headless account with the email address, username, and password. By upgrading the headless account into a full account, the user could use the email address, username, and password for using Justice IAM. The endpoint is a shortcut for upgrading a headless account and verifying the email address in one call. In order to get a verification code for the endpoint, please check the [send verification code endpoint](#operations-Users-PublicSendVerificationCodeV3). This endpoint also have an ability to update user data (if the user data field is specified) right after the upgrade account process is done. Supported user data fields: - displayName - dateOfBirth : format YYYY-MM-DD, e.g. 2019-04-29 - country : format ISO3166-1 alpha-2 two letter, e.g. US action code : 10124
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeHeadlesCodeVerify_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeHeadlesCodeVerifyMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserResponseV4,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV4 }
    >,
    'mutationKey'
  >,
  callback?: (data: UserResponseV4) => void
): UseMutationResult<
  UserResponseV4,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV4 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV4 }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeHeadlesCodeVerify_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeHeadlesCodeVerify_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token for the action.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeMfaChallengeVerify_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_PostUserMeMfaChallengeVerifyMutation_v4 = (
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
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postUserMeMfaChallengeVerify_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaChallengeVerify_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaAuthenticatorKey_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaAuthenticatorKeyMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: AuthenticatorKeyResponseV4) => void
): UseMutationResult<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaAuthenticatorKey_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaAuthenticatorKey_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaBackupCodeEnable_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaBackupCodeEnableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: BackupCodesResponseV4) => void
): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCodeEnable_v4()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCodeEnable_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaBackupCodeDisable_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_DeleteUserMeMfaBackupCodeDisableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUserMeMfaBackupCodeDisable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCodeDisable_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaBackupCodeEnable_ByNS_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_CreateUserMeMfaBackupCodeEnable_ByNSMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams?: { languageTag?: string | null } }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeMfaBackupCodeEnable_ByNS_v4(input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCodeEnable_ByNS_v4],
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
 *    queryKey: [Key_UsersV4.UsersMeMfaBackupCodeDownload_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUsersMeMfaBackupCodeDownload_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUsersMeMfaBackupCodeDownload_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeMfaBackupCodeDownload_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaBackupCodeDownload_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to enable 2FA authenticator. ---------- Prerequisites: - Generate the secret key/QR code uri by **_/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key_** - Consume the secret key/QR code by an authenticator app - Get the code from the authenticator app
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.UserMeMfaAuthenticatorEnable_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_PostUserMeMfaAuthenticatorEnableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: { code: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { code: string | null } }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postUserMeMfaAuthenticatorEnable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaAuthenticatorEnable_v4],
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
 *    queryKey: [Key_UsersV4.UserMeMfaAuthenticatorDisable_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_DeleteUserMeMfaAuthenticatorDisableMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUserMeMfaAuthenticatorDisable_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaAuthenticatorDisable_v4],
    mutationFn,
    ...options
  })
}

/**
 * Get User By Platform User ID. This endpoint return user information by given platform ID and platform user ID. Several platforms are grouped under account groups, you can use either platform ID or platform group as platformId path parameter. example: for steam network platform, you can use steamnetwork / steam / steamopenid as platformId path parameter. If the target platform is not linked to the current user, will only return public information. ---------- **Supported Platforms:** - Steam group (steamnetwork): - steam - steamopenid - PSN group (psn): - ps4web - ps4 - ps5 - XBOX group(xbox): - live - xblweb - Oculus group (oculusgroup): - oculus - oculusweb - Google group (google): - google - googleplaygames: - epicgames - facebook - twitch - discord - android - ios - apple - device - nintendo - awscognito - amazon - netflix - snapchat - _oidc platform id_ Note: - You can use either platform id or platform group as **platformId** parameter. - **Nintendo platform user id**: NSA ID need to be appended with Environment ID using colon as separator. e.g kmzwa8awaa:dd1
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersV4.User_ByPlatformId_ByPlatformUserId_v4, input]
 * }
 * ```
 */
export const useUsersV4Api_GetUser_ByPlatformId_ByPlatformUserId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string; platformUserId: string },
  options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserResponseV3>) => void
): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUsersV4Api_GetUser_ByPlatformId_ByPlatformUserId_v4>[1]) => async () => {
    const response = await UsersV4Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUser_ByPlatformId_ByPlatformUserId_v4(input.platformId, input.platformUserId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.User_ByPlatformId_ByPlatformUserId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
