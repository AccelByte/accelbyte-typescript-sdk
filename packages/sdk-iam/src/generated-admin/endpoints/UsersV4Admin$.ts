/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
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

export class UsersV4Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. action code : 10103
   */
  patchUserMe_v4(data: UserUpdateRequestV3): Promise<Response<UserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - **emailAddresses** is required, List of email addresses that will be invited - **isAdmin** is required, true if user is admin, false if user is not admin - **namespace** is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - **roleId** is optional, if not specified then it will only assign User role. - **assignedNamespaces** is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default.
   */
  createUserInvite_v4(data: InviteUserRequestV4): Promise<Response<InviteUserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/invite'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
  }
  /**
   * @deprecated
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - Email Address is required, List of email addresses that will be invited - isAdmin is required, true if user is admin, false if user is not admin - Namespace is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - Role is optional, if not specified then it will only assign User role. - Assigned Namespaces is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default. Substitute endpoint: /iam/v4/admin/users/invite
   */
  createUserUserInvite_v4(data: InviteUserRequestV4): Promise<Response<InviteUserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/users/invite'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')
  }
  /**
   * This endpoint is to list all Invitation Histories for new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Accepted Query: - namespace - offset - limit
   */
  getInvitationHistories_v4(queryParams?: {
    limit?: number
    namespace?: string | null
    offset?: number
  }): Promise<Response<ListInvitationHistoriesV4Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/invitationHistories'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListInvitationHistoriesV4Response,
      'ListInvitationHistoriesV4Response'
    )
  }
  /**
   * This endpoint is used to get user enabled factors.
   */
  getUsersMeMfaFactor_v4(): Promise<Response<EnabledFactorsResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/factor'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EnabledFactorsResponseV4,
      'EnabledFactorsResponseV4'
    )
  }
  /**
   * This endpoint is used to make 2FA factor default.
   */
  postUserMeMfaFactor_v4(data: { factor: string | null }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/factor'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will get user&#39;s&#39; MFA status.
   */
  getUsersMeMfaStatus_v4(): Promise<Response<UserMfaStatusResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/status'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserMfaStatusResponseV4,
      'UserMfaStatusResponseV4'
    )
  }
  /**
   * @deprecated
   * This endpoint will get user&#39;s&#39; MFA status. ------------ **Substitute endpoint**: /iam/v4/admin/users/me/mfa/status [GET]
   */
  createUserMeMfaStatus_v4(): Promise<Response<UserMfaStatusResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/status'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserMfaStatusResponseV4,
      'UserMfaStatusResponseV4'
    )
  }
  /**
   * @deprecated
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  getUsersMeMfaBackupCode_v4(): Promise<Response<BackupCodesResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCode'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }
  /**
   * @deprecated
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  createUserMeMfaBackupCode_v4(): Promise<Response<BackupCodesResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCode'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }
  /**
   * This endpoint is used to send email code. -------------- Supported actions: * ChangePassword * DisableMFAEmail
   */
  postUserMeMfaEmailCode_v4(data: { action?: string | null; languageTag?: string | null }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/email/code'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  getUsersMeMfaBackupCodes_v4(queryParams?: { languageTag?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCodes'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  createUserMeMfaBackupCode_admin_v4(queryParams?: { languageTag?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCodes'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to enable 2FA email.
   */
  postUserMeMfaEmailEnable_v4(data: { code: string | null }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/email/enable'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to disable 2FA email. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  createUserMeMfaEmailDisable_v4(data: DisableMfaRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/email/disable'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  createUser_v4(data: CreateUserRequestV4): Promise<Response<CreateUserResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateUserResponseV4, 'CreateUserResponseV4')
  }
  /**
   * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token.
   */
  postUserMeMfaChallengeVerify_v4(data: { code?: string | null; factor?: string | null }): Promise<Response<UserMfaTokenResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/challenge/verify'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserMfaTokenResponseV4,
      'UserMfaTokenResponseV4'
    )
  }
  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
   */
  createUserMeMfaAuthenticatorKey_v4(): Promise<Response<AuthenticatorKeyResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/authenticator/key'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AuthenticatorKeyResponseV4,
      'AuthenticatorKeyResponseV4'
    )
  }
  /**
   * @deprecated
   * This endpoint is used to enable 2FA backup codes.
   */
  createUserMeMfaBackupCodeEnable_v4(): Promise<Response<BackupCodesResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCode/enable'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackupCodesResponseV4, 'BackupCodesResponseV4')
  }
  /**
   * This endpoint is used to disable 2FA backup codes. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  deleteUserMeMfaBackupCodeDisable_v4(data: DisableMfaRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCode/disable'
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  createUserMeMfaBackupCodeEnable_admin_v4(queryParams?: { languageTag?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCodes/enable'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * This endpoint is used to download backup codes.
   */
  getUsersMeMfaBackupCodeDownload_v4(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/backupCode/download'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Create test users and not send verification code email. Note: - count : Enter the number of test users you want to create in the count field. The maximum value of the user count is 100. - userInfo(optional) : - country: you can specify country for the test user. Country use ISO3166-1 alpha-2 two letter, e.g. US
   */
  createTestUser_v4(data: CreateTestUsersRequestV4): Promise<Response<CreateTestUsersResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/test_users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateTestUsersResponseV4,
      'CreateTestUsersResponseV4'
    )
  }
  /**
   * This endpoint is used to enable 2FA authenticator. ---------- Prerequisites: - Generate the secret key/QR code uri by **_/iam/v4/admin/users/me/mfa/authenticator/key_** - Consume the secret key/QR code by an authenticator app - Get the code from the authenticator app
   */
  postUserMeMfaAuthenticatorEnable_v4(data: { code: string | null }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/authenticator/enable'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to disable 2FA authenticator. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA
   */
  deleteUserMeMfaAuthenticatorDisable_v4(data: DisableMfaRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/users/me/mfa/authenticator/disable'
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  updateUser_ByUserId_v4(userId: string, data: UserUpdateRequestV3): Promise<Response<UserResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserResponseV3, 'UserResponseV3')
  }
  /**
   * This endpoint is to Invitation Historiy for specific new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false.
   */
  getInvitationHistories_ByNS_v4(): Promise<Response<InvitationHistoryResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/invitationHistories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InvitationHistoryResponse,
      'InvitationHistoryResponse'
    )
  }
  /**
   * Use this endpoint to check if userID exists or not Maximum number of userID to be checked is 50
   */
  fetchUserBulkValidate_v4(data: CheckValidUserIdRequestV4): Promise<Response<ListValidUserIdResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/bulk/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListValidUserIdResponseV4,
      'ListValidUserIdResponseV4'
    )
  }
  /**
   * This is the endpoint for an admin to update a user email address. This endpoint need a valid user token from an admin to verify its identity (email) before updating a user.
   */
  updateEmail_ByUserId_v4(userId: string, data: EmailUpdateRequestV4): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/email'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Remove a role from user&#39;s roles.
   */
  deleteRole_ByUserId_v4(userId: string, data: RemoveUserRoleV4Request): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * List roles assigned to a user
   */
  getRoles_ByUserId_v4(userId: string): Promise<Response<ListUserRolesV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUserRolesV4Response,
      'ListUserRolesV4Response'
    )
  }
  /**
   * New role will be appended to user&#39;s current roles. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.
   */
  updateRole_ByUserId_v4(userId: string, data: AddUserRoleV4Request): Promise<Response<ListUserRolesV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUserRolesV4Response,
      'ListUserRolesV4Response'
    )
  }
  /**
   * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.
   */
  updateRole_ByUserId_ByNS_v4(userId: string, data: AddUserRoleV4Request): Promise<Response<ListUserRolesV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/roles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUserRolesV4Response,
      'ListUserRolesV4Response'
    )
  }
  /**
   * This endpoint is used to change users account type - set **testAccount** to &lt;code&gt;true&lt;/code&gt; to mark user as test account type - set **testAccount** to &lt;code&gt;false&lt;/code&gt; to mark user as default account type
   */
  patchUserBulkAccountType_v4(data: BulkAccountTypeUpdateRequestV4): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/bulk/accountType'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is to Get list of users Invitation History for specific new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Accepted Query: - offset - limit
   */
  getInvitationHistoriesUsers_v4(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<Response<NamespaceInvitationHistoryUserV4Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/invitationHistories/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NamespaceInvitationHistoryUserV4Response,
      'NamespaceInvitationHistoryUserV4Response'
    )
  }
  /**
   * **This endpoint is used to get user&#39;s 2FA status.**
   */
  getMfaStatus_ByUserId_v4(userId: string): Promise<Response<UserMfaStatusResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/mfa/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserMfaStatusResponseV4,
      'UserMfaStatusResponseV4'
    )
  }
  /**
   * This endpoint is used to disable user 2FA. ----------- **Note**: if the factor is not specified, will disable all 2FA methods.
   */
  deleteMfaDisable_ByUserId_v4(userId: string, data: DisableMfaRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/users/{userId}/mfa/disable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
