/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { UserProfile$ } from './endpoints/UserProfile$.js'
import { UserProfileCreate } from '../generated-definitions/UserProfileCreate.js'
import { UserProfileInfo } from '../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateCreate } from '../generated-definitions/UserProfilePrivateCreate.js'
import { UserProfilePrivateInfo } from '../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfo } from '../generated-definitions/UserProfilePublicInfo.js'
import { UserProfilePublicInfoArray } from '../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../generated-definitions/UserProfileStatusUpdate.js'
import { UserProfileUpdate } from '../generated-definitions/UserProfileUpdate.js'
import { UserZipCode } from '../generated-definitions/UserZipCode.js'
import { UserZipCodeUpdate } from '../generated-definitions/UserZipCodeUpdate.js'

export function UserProfileApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11405&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesPublic(queryParams: { userIds: string | null }): Promise<UserProfilePublicInfoArray> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my profile&lt;br&gt;&lt;b&gt;Client with user token can get user profile in target namespace&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeProfiles(): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfiles()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create my profile.&lt;br&gt;&lt;b&gt;Client with user token can create user profile in target namespace&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11401&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Created user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to create &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to create &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Country&lt;/i&gt; : ISO3166-1 alpha-2 two letter, e.g. US &lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
   */
  async function createUserMeProfile(data: UserProfilePrivateCreate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update my profile.&lt;br&gt;Updates user profile in the target namespace (namespace in the path). If token&#39;s namespace doesn&#39;t match the target namespace, the service automatically maps the token&#39;s user ID into the user ID in the target namespace. The endpoint returns the updated user profile on a successful call.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to update &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to update &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateUserMeProfile(data: UserProfileUpdate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfiles_ByUserId(userId: string): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11401&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Created user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function createProfile_ByUserId(userId: string, data: UserProfileCreate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateProfile_ByUserId(userId: string, data: UserProfileUpdate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my zip code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11407&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user zip code&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeProfilesZipCode(): Promise<UserZipCode> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfilesZipCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update my zip code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11408&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user zip code&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchUserMeProfileZipCode(data: UserZipCodeUpdate): Promise<UserZipCode> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUserMeProfileZipCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user public profile by public id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesPublicByPublicId(queryParams: { publicId: string | null }): Promise<UserProfilePublicInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublicByPublicId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user profile public info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11404&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesPublic_ByUserId(userId: string): Promise<UserProfilePublicInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesPublic_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user profile status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11406&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<UserProfileInfo> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchProfileStatus_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get custom attributes info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11404&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesCustomAttributes_ByUserId(userId: string): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfilesCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update partially custom attributes tied to user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt; : allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfileCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my private custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeProfilesPrivateCustomAttributes(): Promise<unknown> {
    const $ = new UserProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeProfilesPrivateCustomAttributes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update partially private custom attributes tied to me.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
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
