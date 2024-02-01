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
import { UserProfileAdmin } from '../generated-definitions/UserProfileAdmin.js'
import { UserProfileAdmin$ } from './endpoints/UserProfileAdmin$.js'
import { UserProfileBulkRequest } from '../generated-definitions/UserProfileBulkRequest.js'
import { UserProfileInfo } from '../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateInfo } from '../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfoArray } from '../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../generated-definitions/UserProfileStatusUpdate.js'

export function UserProfileAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Admin get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(GET)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11405&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
   */
  async function createProfilePublic(data: UserProfileBulkRequest): Promise<UserProfilePublicInfoArray> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createProfilePublic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user profile by public id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesByPublicId(queryParams: { publicId: string | null }): Promise<UserProfileInfo> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getProfilesByPublicId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11407&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Delete user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteProfile_ByUserId(userId: string): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteProfile_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfiles_ByUserId(userId: string): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateProfile_ByUserId(userId: string, data: UserProfileAdmin): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user profile status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11406&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<UserProfilePrivateInfo> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchProfileStatus_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesCustomAttributes_ByUserId(userId: string): Promise<unknown> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getProfilesCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update partially custom attributes tied to the user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<unknown> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateProfileCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user private custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfilesPrivateCustomAttributes_ByUserId(userId: string): Promise<unknown> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getProfilesPrivateCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update partially private custom attributes tied to the user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PROFILE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateProfilePrivateCustomAttribute_ByUserId(userId: string, data: any): Promise<unknown> {
    const $ = new UserProfileAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateProfilePrivateCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createProfilePublic,
    getProfilesByPublicId,
    deleteProfile_ByUserId,
    getProfiles_ByUserId,
    updateProfile_ByUserId,
    patchProfileStatus_ByUserId,
    getProfilesCustomAttributes_ByUserId,
    updateProfileCustomAttribute_ByUserId,
    getProfilesPrivateCustomAttributes_ByUserId,
    updateProfilePrivateCustomAttribute_ByUserId
  }
}
