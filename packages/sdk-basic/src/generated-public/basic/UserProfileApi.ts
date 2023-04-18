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
import { UserProfile$ } from './endpoints/UserProfile$'
import { UserProfileCreate } from './definitions/UserProfileCreate'
import { UserProfileInfo } from './definitions/UserProfileInfo'
import { UserProfilePrivateCreate } from './definitions/UserProfilePrivateCreate'
import { UserProfilePrivateInfo } from './definitions/UserProfilePrivateInfo'
import { UserProfilePublicInfo } from './definitions/UserProfilePublicInfo'
import { UserProfilePublicInfoArray } from './definitions/UserProfilePublicInfoArray'
import { UserProfileStatusUpdate } from './definitions/UserProfileStatusUpdate'
import { UserProfileUpdate } from './definitions/UserProfileUpdate'
import { UserZipCode } from './definitions/UserZipCode'
import { UserZipCodeUpdate } from './definitions/UserZipCodeUpdate'

export function UserProfileApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getProfilesPublic(queryParams: { userIds: string | null }): Promise<UserProfilePublicInfoArray> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeProfiles(): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfiles()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createUserMeProfile(data: UserProfilePrivateCreate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateUserMeProfile(data: UserProfileUpdate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getProfiles_ByUserId(userId: string): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createProfile_ByUserId(userId: string, data: UserProfileCreate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateProfile_ByUserId(userId: string, data: UserProfileUpdate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeProfilesZipCode(): Promise<UserZipCode> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfilesZipCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function patchUserMeProfileZipCode(data: UserZipCodeUpdate): Promise<UserZipCode> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMeProfileZipCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getProfilesPublicByPublicId(queryParams: { publicId: string | null }): Promise<UserProfilePublicInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublicByPublicId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getProfilesPublic_ByUserId(userId: string): Promise<UserProfilePublicInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublic_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchProfileStatus_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getProfilesCustomAttributes_ByUserId(userId: string): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfileCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeProfilesPrivateCustomAttributes(): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfilesPrivateCustomAttributes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateUserMeProfilePrivateCustomAttribute(data: any): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeProfilePrivateCustomAttribute(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProfilesPublic,
    getUsersMeProfiles,
    createUserMeProfile,
    updateUserMeProfile,
    getProfiles_ByUserId,
    createProfile_ByUserId,
    updateProfile_ByUserId,
    getUsersMeProfilesZipCode,
    patchUserMeProfileZipCode,
    getProfilesPublicByPublicId,
    getProfilesPublic_ByUserId,
    patchProfileStatus_ByUserId,
    getProfilesCustomAttributes_ByUserId,
    updateProfileCustomAttribute_ByUserId,
    getUsersMeProfilesPrivateCustomAttributes,
    updateUserMeProfilePrivateCustomAttribute
  }
}
