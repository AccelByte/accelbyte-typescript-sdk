/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { UserProfileCreate } from './definitions/UserProfileCreate'
import { UserProfileInfo } from './definitions/UserProfileInfo'
import { UserProfilePrivateCreate } from './definitions/UserProfilePrivateCreate'
import { UserProfilePrivateInfo } from './definitions/UserProfilePrivateInfo'
import { UserProfilePrivateUpdate } from './definitions/UserProfilePrivateUpdate'
import { UserProfilePublicInfo } from './definitions/UserProfilePublicInfo'
import { UserProfilePublicInfoArray } from './definitions/UserProfilePublicInfoArray'
import { UserProfileStatusUpdate } from './definitions/UserProfileStatusUpdate'
import { UserProfileUpdate } from './definitions/UserProfileUpdate'
import { UserZipCode } from './definitions/UserZipCode'
import { UserZipCodeUpdate } from './definitions/UserZipCodeUpdate'

export class UserProfile$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get user public profile by ids.<br>Other detail info: <ul><li><i>Action code</i>: 11405</li><li><i>Returns</i>: user public profiles</li></ul>
   */
  fetchV1ProfilesPublic<T = UserProfilePublicInfoArray>(queryParams?: { userIds: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePublicInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user public profile by public id.<br>Other detail info: <ul><li><i>Returns</i>: user public profile</li></ul>
   */
  fetchV1ProfilesPublicByPublicId<T = UserProfilePublicInfo>(queryParams?: { publicId: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/profiles/public/byPublicId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePublicInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get my private custom attributes.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Returns</i>: custom attributes</li><li><i>Action code</i>: 11403</li></ul>
   */
  fetchV1UsersMeProfilesPrivateCustomAttributes(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Update partially private custom attributes tied to me.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i>: allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
  putV1UsersMeProfilesPrivateCustomAttributes(data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Get my profile<br><b>Client with user token can get user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  fetchV1UsersMeProfiles<T = UserProfilePrivateInfo>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePrivateInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Create my profile.<br><b>Client with user token can create user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Returns</i>: Created user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to create <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to create <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Country</i>  : ISO3166-1 alpha-2 two letter, e.g. US </li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  postV1UsersMeProfiles<T = UserProfilePrivateInfo>(data: UserProfilePrivateCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfilePrivateInfo)
  }

  /**
   * Update my profile.<br>Updates user profile in the target namespace (namespace in the path). If token's namespace doesn't match the target namespace, the service automatically maps the token's user ID into the user ID in the target namespace. The endpoint returns the updated user profile on a successful call.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to update <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to update <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  putV1UsersMeProfiles<T = UserProfilePrivateInfo>(data: UserProfilePrivateUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfilePrivateInfo)
  }

  /**
   * Get my zip code.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11407</li><li><i>Returns</i>: user zip code</li></ul>
   */
  fetchV1UsersMeProfilesZipCode<T = UserZipCode>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserZipCode)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Update my zip code.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11408</li><li><i>Returns</i>: user zip code</li></ul>
   */
  patchV1UsersMeProfilesZipCode<T = UserZipCode>(data: UserZipCodeUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserZipCode)
  }

  /**
   * Get user profile public info.<br>Other detail info: <ul><li><i>Action code</i>: 11404</li><li><i>Returns</i>: user public profile</li></ul>
   */
  fetchV1UsersByUseridProfilesPublic<T = UserProfilePublicInfo>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfilePublicInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get custom attributes info.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11404</li><li><i>Returns</i>: user custom attributes</li></ul>
   */
  fetchV1UsersByUseridProfilesCustomAttributes(userId: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Update partially custom attributes tied to user id.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i> : allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
  putV1UsersByUseridProfilesCustomAttributes(userId: string, data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Get user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li></ul>
   */
  fetchV1UsersByUseridProfiles<T = UserProfileInfo>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserProfileInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Create user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li><li><i>Returns</i>: Created user profile</li></ul>
   */
  postV1UsersByUseridProfiles<T = UserProfileInfo>(userId: string, data: UserProfileCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfileInfo)
  }

  /**
   * Update user profile.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li><li><i>Returns</i>: Updated user profile</li></ul>
   */
  putV1UsersByUseridProfiles<T = UserProfileInfo>(userId: string, data: UserProfileUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfileInfo)
  }

  /**
   * Update user profile status.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11406</li><li><i>Returns</i>: user profile</li></ul>
   */
  patchV1UsersByUseridProfilesStatus<T = UserProfileInfo>(userId: string, data: UserProfileStatusUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UserProfileInfo)
  }
}
