/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { UserProfileBulkRequest } from '../generated-definitions/UserProfileBulkRequest.js'
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
import { UserProfile$ } from './endpoints/UserProfile$.js'

export function UserProfileApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getProfilesPublic(queryParams: { userIds: string | null }): Promise<AxiosResponse<UserProfilePublicInfoArray>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesPublic(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createProfilePublic(data: UserProfileBulkRequest): Promise<AxiosResponse<UserProfilePublicInfoArray>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfilePublic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeProfiles(): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeProfiles()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeProfile(data: UserProfilePrivateCreate): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMeProfile(data: UserProfileUpdate): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMeProfile(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfiles_ByUserId(userId: string): Promise<AxiosResponse<UserProfileInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createProfile_ByUserId(userId: string, data: UserProfileCreate): Promise<AxiosResponse<UserProfileInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfile_ByUserId(userId: string, data: UserProfileUpdate): Promise<AxiosResponse<UserProfileInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeProfilesZipCode(): Promise<AxiosResponse<UserZipCode>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeProfilesZipCode()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUserMeProfileZipCode(data: UserZipCodeUpdate): Promise<AxiosResponse<UserZipCode>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUserMeProfileZipCode(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfilesPublicByPublicId(queryParams: { publicId: string | null }): Promise<AxiosResponse<UserProfilePublicInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesPublicByPublicId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfilesPublic_ByUserId(userId: string): Promise<AxiosResponse<UserProfilePublicInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesPublic_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<AxiosResponse<UserProfileInfo>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchProfileStatus_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfilesCustomAttributes_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfileCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeProfilesPrivateCustomAttributes(): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeProfilesPrivateCustomAttributes()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMeProfilePrivateCustomAttribute(data: any): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMeProfilePrivateCustomAttribute(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11405&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesPublic,
    /**
     * Bulk get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
     */
    createProfilePublic,
    /**
     * Get my profile&lt;br&gt;&lt;b&gt;Client with user token can get user profile in target namespace&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeProfiles,
    /**
     * Create my profile.&lt;br&gt;&lt;b&gt;Client with user token can create user profile in target namespace&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11401&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Created user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to create &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to create &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Country&lt;/i&gt; : ISO3166-1 alpha-2 two letter, e.g. US &lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
     */
    createUserMeProfile,
    /**
     * Update my profile.&lt;br&gt;Updates user profile in the target namespace (namespace in the path). If token&#39;s namespace doesn&#39;t match the target namespace, the service automatically maps the token&#39;s user ID into the user ID in the target namespace. The endpoint returns the updated user profile on a successful call.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to update &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to update &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
     */
    updateUserMeProfile,
    /**
     * Get user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
     */
    getProfiles_ByUserId,
    /**
     * Create user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11401&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Created user profile&lt;/li&gt;&lt;/ul&gt;
     */
    createProfile_ByUserId,
    /**
     * Update user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated user profile&lt;/li&gt;&lt;/ul&gt;
     */
    updateProfile_ByUserId,
    /**
     * Get my zip code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11407&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user zip code&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeProfilesZipCode,
    /**
     * Update my zip code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11408&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user zip code&lt;/li&gt;&lt;/ul&gt;
     */
    patchUserMeProfileZipCode,
    /**
     * Get user public profile by public id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profile&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesPublicByPublicId,
    /**
     * Get user profile public info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11404&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profile&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesPublic_ByUserId,
    /**
     * Update user profile status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11406&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
     */
    patchProfileStatus_ByUserId,
    /**
     * Get custom attributes info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11404&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user custom attributes&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesCustomAttributes_ByUserId,
    /**
     * Update partially custom attributes tied to user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt; : allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
     */
    updateProfileCustomAttribute_ByUserId,
    /**
     * Get my private custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeProfilesPrivateCustomAttributes,
    /**
     * Update partially private custom attributes tied to me.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
     */
    updateUserMeProfilePrivateCustomAttribute
  }
}
