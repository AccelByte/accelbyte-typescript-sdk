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
import { Attribute } from '../../generated-definitions/Attribute.js'
import { GameProfileHeaderArray } from '../../generated-definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../../generated-definitions/GameProfileInfo.js'
import { GameProfileRequest } from '../../generated-definitions/GameProfileRequest.js'
import { UserGameProfilesArray } from '../../generated-definitions/UserGameProfilesArray.js'

export class GameProfile$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns all profiles for specified users.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/ul&gt;
   */
  getProfiles(queryParams: { userIds: string[] }): Promise<Response<UserGameProfilesArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserGameProfilesArray, 'UserGameProfilesArray')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns all profiles&#39; header for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/li&gt;&lt;/ul&gt;
   */
  getProfiles_ByUserId(userId: string): Promise<Response<GameProfileHeaderArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameProfileHeaderArray,
      'GameProfileHeaderArray'
    )
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Create new profile for user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/li&gt;: created game profile&lt;/li&gt;&lt;/ul&gt;
   */
  createProfile_ByUserId(userId: string, data: GameProfileRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes game profile.&lt;br&gt;
   */
  deleteProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns profile for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: game profile info&lt;/li&gt;&lt;/ul&gt;
   */
  getProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<Response<GameProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates user game profile, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated game profile&lt;/li&gt;&lt;/ul&gt;
   */
  updateProfile_ByUserId_ByProfileId(userId: string, profileId: string, data: GameProfileRequest): Promise<Response<GameProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns game profile attribute.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: attribute info&lt;/li&gt;&lt;/ul&gt;
   */
  getAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string
  ): Promise<Response<Attribute>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
      .replace('{attributeName}', attributeName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Attribute, 'Attribute')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates game profile attribute, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated attribute&lt;/li&gt;&lt;/ul&gt;
   */
  updateAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string,
    data: Attribute
  ): Promise<Response<GameProfileInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
      .replace('{attributeName}', attributeName)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }
}
