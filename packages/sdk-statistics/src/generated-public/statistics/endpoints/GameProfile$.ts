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
import { Attribute } from '../definitions/Attribute.js'
import { GameProfileHeaderArray } from '../definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../definitions/GameProfileInfo.js'
import { GameProfileRequest } from '../definitions/GameProfileRequest.js'
import { UserGameProfilesArray } from '../definitions/UserGameProfilesArray.js'

export class GameProfile$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Returns all profiles for specified users.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:GAMEPROFILE", action=2 (READ) <li><i>Returns</i>: list of profiles</ul>
   */
  getProfiles(queryParams: { userIds: string[] }): Promise<IResponseWithSync<UserGameProfilesArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserGameProfilesArray, 'UserGameProfilesArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Returns all profiles' header for a user.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=2 (READ)</li><li><i>Returns</i>: list of profiles</li></ul>
   */
  getProfiles_ByUserId(userId: string): Promise<IResponseWithSync<GameProfileHeaderArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameProfileHeaderArray, 'GameProfileHeaderArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create new profile for user.<br>Other detail info:<ul><li><i>Required permission</li>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=1 (CREATE)</li><li><i>Returns</li>: created game profile</li></ul>
   */
  createProfile_ByUserId(userId: string, data: GameProfileRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Returns profile for a user.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=2 (READ)</li><li><i>Returns</i>: game profile info</li></ul>
   */
  getProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<IResponseWithSync<GameProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameProfileInfo, 'GameProfileInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates user game profile, returns updated profile.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=4 (UPDATE)</li><li><i>Returns</i>: updated game profile</li></ul>
   */
  updateProfile_ByUserId_ByProfileId(userId: string, profileId: string, data: GameProfileRequest): Promise<IResponse<GameProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }

  /**
   * Deletes game profile.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=8 (DELETE)</li></ul>
   */
  deleteProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Returns game profile attribute.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=2 (READ)</li><li><i>Returns</i>: attribute info</li></ul>
   */
  getAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string
  ): Promise<IResponseWithSync<Attribute>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
      .replace('{attributeName}', attributeName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Attribute, 'Attribute')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates game profile attribute, returns updated profile.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=4 (UPDATE)</li><li><i>Returns</i>: updated attribute</li></ul>
   */
  updateAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string,
    data: Attribute
  ): Promise<IResponse<GameProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
      .replace('{attributeName}', attributeName)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }
}
