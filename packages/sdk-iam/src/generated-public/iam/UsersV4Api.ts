/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AuthenticatorKeyResponseV4 } from './definitions/AuthenticatorKeyResponseV4'
import { BackupCodesResponseV4 } from './definitions/BackupCodesResponseV4'
import { CreateTestUserRequestV4 } from './definitions/CreateTestUserRequestV4'
import { CreateUserRequestV4 } from './definitions/CreateUserRequestV4'
import { CreateUserResponseV4 } from './definitions/CreateUserResponseV4'
import { EmailUpdateRequestV4 } from './definitions/EmailUpdateRequestV4'
import { EnabledFactorsResponseV4 } from './definitions/EnabledFactorsResponseV4'
import { InviteUserResponseV3 } from './definitions/InviteUserResponseV3'
import { PublicInviteUserRequestV4 } from './definitions/PublicInviteUserRequestV4'
import { UpgradeHeadlessAccountRequestV4 } from './definitions/UpgradeHeadlessAccountRequestV4'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4'
import { UserCreateFromInvitationRequestV4 } from './definitions/UserCreateFromInvitationRequestV4'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserResponseV4 } from './definitions/UserResponseV4'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'
import { UsersV4$ } from './endpoints/UsersV4$'

export function UsersV4Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function createUserInvite(data: PublicInviteUserRequestV4): Promise<InviteUserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUser(data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function patchUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createTestUser(data: CreateTestUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTestUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateUserMeEmail(data: EmailUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeEmail(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deleteUserMeMfaDevice(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaDevice()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeMfaFactor(): Promise<EnabledFactorsResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaFactor()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postUserMeMfaFactor(data: { factor: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaFactor(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeMfaEmailCode(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaEmailCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeHeadlesVerify(data: UpgradeHeadlessAccountRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postUserMeMfaEmailEnable(data: { code: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaEmailEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeMfaEmailDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaEmailDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserInvite_ByInvitationId(
    invitationId: string,
    data: UserCreateFromInvitationRequestV4
  ): Promise<CreateUserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeHeadlesCodeVerify(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<UserResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeHeadlesCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeMfaAuthenticatorKey(): Promise<AuthenticatorKeyResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaAuthenticatorKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeMfaBackupCodeEnable(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeMfaBackupCodeEnable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deleteUserMeMfaBackupCodeDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaBackupCodeDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeMfaBackupCodeDownload(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeMfaBackupCodeDownload()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeMfaAuthenticatorEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deleteUserMeMfaAuthenticatorDisable(): Promise<unknown> {
    const $ = new UsersV4$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserInvite,
    createUser,
    patchUserMe,
    createTestUser,
    updateUserMeEmail,
    deleteUserMeMfaDevice,
    getUsersMeMfaFactor,
    postUserMeMfaFactor,
    getUsersMeMfaBackupCode,
    createUserMeMfaBackupCode,
    createUserMeMfaEmailCode,
    createUserMeHeadlesVerify,
    postUserMeMfaEmailEnable,
    createUserMeMfaEmailDisable,
    createUserInvite_ByInvitationId,
    createUserMeHeadlesCodeVerify,
    createUserMeMfaAuthenticatorKey,
    createUserMeMfaBackupCodeEnable,
    deleteUserMeMfaBackupCodeDisable,
    getUsersMeMfaBackupCodeDownload,
    postUserMeMfaAuthenticatorEnable,
    deleteUserMeMfaAuthenticatorDisable
  }
}
