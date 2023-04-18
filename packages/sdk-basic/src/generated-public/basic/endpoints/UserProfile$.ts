/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { UserProfileCreate } from '../definitions/UserProfileCreate'
import { UserProfileInfo } from '../definitions/UserProfileInfo'
import { UserProfilePrivateCreate } from '../definitions/UserProfilePrivateCreate'
import { UserProfilePrivateInfo } from '../definitions/UserProfilePrivateInfo'
import { UserProfilePublicInfo } from '../definitions/UserProfilePublicInfo'
import { UserProfilePublicInfoArray } from '../definitions/UserProfilePublicInfoArray'
import { UserProfileStatusUpdate } from '../definitions/UserProfileStatusUpdate'
import { UserProfileUpdate } from '../definitions/UserProfileUpdate'
import { UserZipCode } from '../definitions/UserZipCode'
import { UserZipCodeUpdate } from '../definitions/UserZipCodeUpdate'

export class UserProfile$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get user public profile by ids.<br>Other detail info: <ul><li><i>Action code</i>: 11405</li><li><i>Returns</i>: user public profiles</li></ul>
   */
  getProfilesPublic(queryParams: { userIds: string | null }): Promise<IResponseWithSync<UserProfilePublicInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePublicInfoArray, 'UserProfilePublicInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my profile<br><b>Client with user token can get user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  getUsersMeProfiles(): Promise<IResponseWithSync<UserProfilePrivateInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePrivateInfo, 'UserProfilePrivateInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create my profile.<br><b>Client with user token can create user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Returns</i>: Created user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to create <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to create <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Country</i> : ISO3166-1 alpha-2 two letter, e.g. US </li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  createUserMeProfile(data: UserProfilePrivateCreate): Promise<IResponse<UserProfilePrivateInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfilePrivateInfo, 'UserProfilePrivateInfo')
  }

  /**
   * Update my profile.<br>Updates user profile in the target namespace (namespace in the path). If token's namespace doesn't match the target namespace, the service automatically maps the token's user ID into the user ID in the target namespace. The endpoint returns the updated user profile on a successful call.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to update <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to update <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  updateUserMeProfile(data: UserProfileUpdate): Promise<IResponse<UserProfilePrivateInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfilePrivateInfo, 'UserProfilePrivateInfo')
  }

  /**
   * Get user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li></ul>
   */
  getProfiles_ByUserId(userId: string): Promise<IResponseWithSync<UserProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfileInfo, 'UserProfileInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li><li><i>Returns</i>: Created user profile</li></ul>
   */
  createProfile_ByUserId(userId: string, data: UserProfileCreate): Promise<IResponse<UserProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }

  /**
   * Update user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li><li><i>Returns</i>: Updated user profile</li></ul>
   */
  updateProfile_ByUserId(userId: string, data: UserProfileUpdate): Promise<IResponse<UserProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }

  /**
   * Get my zip code.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11407</li><li><i>Returns</i>: user zip code</li></ul>
   */
  getUsersMeProfilesZipCode(): Promise<IResponseWithSync<UserZipCode>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserZipCode, 'UserZipCode')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update my zip code.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11408</li><li><i>Returns</i>: user zip code</li></ul>
   */
  patchUserMeProfileZipCode(data: UserZipCodeUpdate): Promise<IResponse<UserZipCode>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserZipCode, 'UserZipCode')
  }

  /**
   * Get user public profile by public id.<br>Other detail info: <ul><li><i>Returns</i>: user public profile</li></ul>
   */
  getProfilesPublicByPublicId(queryParams: { publicId: string | null }): Promise<IResponseWithSync<UserProfilePublicInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public/byPublicId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePublicInfo, 'UserProfilePublicInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user profile public info.<br>Other detail info: <ul><li><i>Action code</i>: 11404</li><li><i>Returns</i>: user public profile</li></ul>
   */
  getProfilesPublic_ByUserId(userId: string): Promise<IResponseWithSync<UserProfilePublicInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePublicInfo, 'UserProfilePublicInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update user profile status.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11406</li><li><i>Returns</i>: user profile</li></ul>
   */
  patchProfileStatus_ByUserId(userId: string, data: UserProfileStatusUpdate): Promise<IResponse<UserProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfileInfo, 'UserProfileInfo')
  }

  /**
   * Get custom attributes info.<br>Other detail info: <ul><li><i>Action code</i>: 11404</li><li><i>Returns</i>: user custom attributes</li></ul>
   */
  getProfilesCustomAttributes_ByUserId(userId: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update partially custom attributes tied to user id.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i> : allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
  updateProfileCustomAttribute_ByUserId(userId: string, data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get my private custom attributes.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Returns</i>: custom attributes</li><li><i>Action code</i>: 11403</li></ul>
   */
  getUsersMeProfilesPrivateCustomAttributes(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update partially private custom attributes tied to me.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i>: allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
  updateUserMeProfilePrivateCustomAttribute(data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
