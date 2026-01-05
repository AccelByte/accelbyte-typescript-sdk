/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { UserProfileBulkRequest } from '../../generated-definitions/UserProfileBulkRequest.js'
import { UserProfileCreate } from '../../generated-definitions/UserProfileCreate.js'
import { UserProfileInfo } from '../../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateCreate } from '../../generated-definitions/UserProfilePrivateCreate.js'
import { UserProfilePrivateInfo } from '../../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfo } from '../../generated-definitions/UserProfilePublicInfo.js'
import { UserProfilePublicInfoArray } from '../../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../../generated-definitions/UserProfileStatusUpdate.js'
import { UserProfileUpdate } from '../../generated-definitions/UserProfileUpdate.js'
import { UserZipCode } from '../../generated-definitions/UserZipCode.js'
import { UserZipCodeUpdate } from '../../generated-definitions/UserZipCodeUpdate.js'

export class UserProfile$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11405&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
   */
  getProfilesPublic(queryParams: { userIds: string | null }): Promise<Response<UserProfilePublicInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserProfilePublicInfoArray,
      'UserProfilePublicInfoArray'
    )
  }
  /**
   * Bulk get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
   */
  createProfilePublic(data: UserProfileBulkRequest): Promise<Response<UserProfilePublicInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserProfilePublicInfoArray,
      'UserProfilePublicInfoArray'
    )
  }
  /**
   * Get my profile&lt;br&gt;&lt;b&gt;Client with user token can get user profile in target namespace&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeProfiles(): Promise<Response<UserProfilePrivateInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserProfilePrivateInfo,
      'UserProfilePrivateInfo'
    )
  }
  /**
   * Create my profile.&lt;br&gt;&lt;b&gt;Client with user token can create user profile in target namespace&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11401&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Created user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to create &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to create &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Country&lt;/i&gt; : ISO3166-1 alpha-2 two letter, e.g. US &lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
   */
  createUserMeProfile(data: UserProfilePrivateCreate): Promise<Response<UserProfilePrivateInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserProfilePrivateInfo,
      'UserProfilePrivateInfo'
    )
  }
  /**
   * Update my profile.&lt;br&gt;Updates user profile in the target namespace (namespace in the path). If token&#39;s namespace doesn&#39;t match the target namespace, the service automatically maps the token&#39;s user ID into the user ID in the target namespace. The endpoint returns the updated user profile on a successful call.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to update &lt;b&gt;publisher user profile&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to update &lt;b&gt;game user profile&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;/ul&gt;
   */
  updateUserMeProfile(data: UserProfileUpdate): Promise<Response<UserProfilePrivateInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserProfilePrivateInfo,
      'UserProfilePrivateInfo'
    )
  }
  /**
   * Get user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
   */
  getProfiles_ByUserId(userId: string): Promise<Response<UserProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }
  /**
   * Create user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11401&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Created user profile&lt;/li&gt;&lt;/ul&gt;
   */
  createProfile_ByUserId(userId: string, data: UserProfileCreate): Promise<Response<UserProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }
  /**
   * Update user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Language&lt;/i&gt; : allowed format: en, en-US&lt;/li&gt;&lt;li&gt;&lt;i&gt;Timezone&lt;/i&gt; : IANA time zone, e.g. Asia/Shanghai&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated user profile&lt;/li&gt;&lt;/ul&gt;
   */
  updateProfile_ByUserId(userId: string, data: UserProfileUpdate): Promise<Response<UserProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }
  /**
   * Get my zip code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11407&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user zip code&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeProfilesZipCode(): Promise<Response<UserZipCode>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserZipCode, 'UserZipCode')
  }
  /**
   * Update my zip code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11408&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user zip code&lt;/li&gt;&lt;/ul&gt;
   */
  patchUserMeProfileZipCode(data: UserZipCodeUpdate): Promise<Response<UserZipCode>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserZipCode, 'UserZipCode')
  }
  /**
   * Get user public profile by public id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profile&lt;/li&gt;&lt;/ul&gt;
   */
  getProfilesPublicByPublicId(queryParams: { publicId: string | null }): Promise<Response<UserProfilePublicInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public/byPublicId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserProfilePublicInfo, 'UserProfilePublicInfo')
  }
  /**
   * Get user profile public info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11404&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profile&lt;/li&gt;&lt;/ul&gt;
   */
  getProfilesPublic_ByUserId(userId: string): Promise<Response<UserProfilePublicInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserProfilePublicInfo, 'UserProfilePublicInfo')
  }
  /**
   * Update user profile status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11406&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
   */
  patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<Response<UserProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }
  /**
   * Get custom attributes info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11404&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  getProfilesCustomAttributes_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update partially custom attributes tied to user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt; : allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get my private custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeProfilesPrivateCustomAttributes(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update partially private custom attributes tied to me.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
   */
  updateUserMeProfilePrivateCustomAttribute(data: any): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
