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
import { UserProfile$ } from './endpoints/UserProfile$.js'
import { UserProfileCreate } from './definitions/UserProfileCreate.js'
import { UserProfileInfo } from './definitions/UserProfileInfo.js'
import { UserProfilePrivateCreate } from './definitions/UserProfilePrivateCreate.js'
import { UserProfilePrivateInfo } from './definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfo } from './definitions/UserProfilePublicInfo.js'
import { UserProfilePublicInfoArray } from './definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from './definitions/UserProfileStatusUpdate.js'
import { UserProfileUpdate } from './definitions/UserProfileUpdate.js'
import { UserZipCode } from './definitions/UserZipCode.js'
import { UserZipCodeUpdate } from './definitions/UserZipCodeUpdate.js'

export function UserProfileApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get user public profile by ids.<br>Other detail info: <ul><li><i>Action code</i>: 11405</li><li><i>Returns</i>: user public profiles</li></ul>
   */
  async function getProfilesPublic(queryParams: { userIds: string | null }): Promise<UserProfilePublicInfoArray> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my profile<br><b>Client with user token can get user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  async function getUsersMeProfiles(): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfiles()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create my profile.<br><b>Client with user token can create user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Returns</i>: Created user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to create <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to create <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Country</i> : ISO3166-1 alpha-2 two letter, e.g. US </li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  async function createUserMeProfile(data: UserProfilePrivateCreate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update my profile.<br>Updates user profile in the target namespace (namespace in the path). If token's namespace doesn't match the target namespace, the service automatically maps the token's user ID into the user ID in the target namespace. The endpoint returns the updated user profile on a successful call.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to update <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to update <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  async function updateUserMeProfile(data: UserProfileUpdate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li></ul>
   */
  async function getProfiles_ByUserId(userId: string): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li><li><i>Returns</i>: Created user profile</li></ul>
   */
  async function createProfile_ByUserId(userId: string, data: UserProfileCreate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li><li><i>Returns</i>: Updated user profile</li></ul>
   */
  async function updateProfile_ByUserId(userId: string, data: UserProfileUpdate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my zip code.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11407</li><li><i>Returns</i>: user zip code</li></ul>
   */
  async function getUsersMeProfilesZipCode(): Promise<UserZipCode> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfilesZipCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update my zip code.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11408</li><li><i>Returns</i>: user zip code</li></ul>
   */
  async function patchUserMeProfileZipCode(data: UserZipCodeUpdate): Promise<UserZipCode> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMeProfileZipCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user public profile by public id.<br>Other detail info: <ul><li><i>Returns</i>: user public profile</li></ul>
   */
  async function getProfilesPublicByPublicId(queryParams: { publicId: string | null }): Promise<UserProfilePublicInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublicByPublicId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user profile public info.<br>Other detail info: <ul><li><i>Action code</i>: 11404</li><li><i>Returns</i>: user public profile</li></ul>
   */
  async function getProfilesPublic_ByUserId(userId: string): Promise<UserProfilePublicInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublic_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user profile status.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11406</li><li><i>Returns</i>: user profile</li></ul>
   */
  async function patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchProfileStatus_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get custom attributes info.<br>Other detail info: <ul><li><i>Action code</i>: 11404</li><li><i>Returns</i>: user custom attributes</li></ul>
   */
  async function getProfilesCustomAttributes_ByUserId(userId: string): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update partially custom attributes tied to user id.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i> : allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
  async function updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfileCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my private custom attributes.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Returns</i>: custom attributes</li><li><i>Action code</i>: 11403</li></ul>
   */
  async function getUsersMeProfilesPrivateCustomAttributes(): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfilesPrivateCustomAttributes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update partially private custom attributes tied to me.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i>: allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
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
