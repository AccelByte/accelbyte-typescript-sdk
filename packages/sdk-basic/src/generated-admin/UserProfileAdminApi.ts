/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { UserProfileAdmin } from '../generated-definitions/UserProfileAdmin.js'
import { UserProfileBulkRequest } from '../generated-definitions/UserProfileBulkRequest.js'
import { UserProfileInfo } from '../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateInfo } from '../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfoArray } from '../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../generated-definitions/UserProfileStatusUpdate.js'
import { UserProfileAdmin$ } from './endpoints/UserProfileAdmin$.js'

export function UserProfileAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createProfilePublic(data: UserProfileBulkRequest): Promise<AxiosResponse<UserProfilePublicInfoArray>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfilePublic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfilesByPublicId(queryParams: { publicId: string | null }): Promise<AxiosResponse<UserProfileInfo>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesByPublicId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteProfile_ByUserId(userId: string): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteProfile_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfiles_ByUserId(userId: string): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfile_ByUserId(userId: string, data: UserProfileAdmin): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchProfileStatus_ByUserId(
    userId: string,
    data: UserProfileStatusUpdate
  ): Promise<AxiosResponse<UserProfilePrivateInfo>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchProfileStatus_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfilesCustomAttributes_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfileCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfilesPrivateCustomAttributes_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfilesPrivateCustomAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfilePrivateCustomAttribute_ByUserId(userId: string, data: any): Promise<AxiosResponse<unknown>> {
    const $ = new UserProfileAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfilePrivateCustomAttribute_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Admin get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(GET)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11405&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
     */
    createProfilePublic,
    /**
     * Get user profile by public id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile info&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesByPublicId,
    /**
     * Delete user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11407&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Delete user profile&lt;/li&gt;&lt;/ul&gt;
     */
    deleteProfile_ByUserId,
    /**
     * Get user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
     */
    getProfiles_ByUserId,
    /**
     * Update user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated user profile&lt;/li&gt;&lt;/ul&gt;
     */
    updateProfile_ByUserId,
    /**
     * Update user profile status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11406&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
     */
    patchProfileStatus_ByUserId,
    /**
     * Get user custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesCustomAttributes_ByUserId,
    /**
     * Update partially custom attributes tied to the user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
     */
    updateProfileCustomAttribute_ByUserId,
    /**
     * Get user private custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
     */
    getProfilesPrivateCustomAttributes_ByUserId,
    /**
     * Update partially private custom attributes tied to the user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
     */
    updateProfilePrivateCustomAttribute_ByUserId
  }
}
