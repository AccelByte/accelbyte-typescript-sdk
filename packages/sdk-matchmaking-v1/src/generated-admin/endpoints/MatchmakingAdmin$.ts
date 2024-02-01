/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ChannelV1 } from '../../generated-definitions/ChannelV1.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { MatchAddUserIntoSessionRequest } from '../../generated-definitions/MatchAddUserIntoSessionRequest.js'
import { MatchingPartyArray } from '../../generated-definitions/MatchingPartyArray.js'
import { MatchmakingResultArray } from '../../generated-definitions/MatchmakingResultArray.js'
import { StatResumeResponse } from '../../generated-definitions/StatResumeResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export class MatchmakingAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Export channels configuration to file. Action Code: 510114
   */
  getChannelsExport(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Import channels configuration from file. It will merge with existing channels. Available import strategy: - leaveOut: if channel with same key exist, the existing will be used and imported one will be ignored (default) - replace: if channel with same key exist, the imported channel will be used and existing one will be removed Action Code: 510113
   */
  createChannelImport(data: { file?: File; strategy?: string | null }): Promise<IResponse<ImportConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
  }

  /**
   * Get all parties queueing in all channels.
   */
  getChannelsAllParties(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/all/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Reads single channel based on namespace and channel name Action Code: 510112
   */
  getChannel_ByChannelName(channelName: string): Promise<IResponseWithSync<ChannelV1>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ChannelV1, 'ChannelV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update channel based on namespace and channel name Action Code: 510111
   */
  patchChannel_ByChannelName(channelName: string, data: UpdateChannelRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Bulk get sessions.
   */
  getChannelsAllSessionsBulk(queryParams?: { matchIDs?: string | null }): Promise<IResponseWithSync<MatchmakingResultArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/all/sessions/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, MatchmakingResultArray, 'MatchmakingResultArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Get a channel&#39;s stat data (mean, stddev, min, max) according to the stats collected from statistics service. &#39;
   */
  getStats_ByChannelName(channelName: string): Promise<IResponseWithSync<StatResumeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/stats'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, StatResumeResponse, 'StatResumeResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get all parties queueing in a channel.
   */
  getParties_ByChannelName(channelName: string): Promise<IResponseWithSync<MatchingPartyArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/parties'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, MatchingPartyArray, 'MatchingPartyArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get all sessions in a channel. if party_id value empty/null, field will not show in response body.
   */
  getSessions_ByChannelName(channelName: string): Promise<IResponseWithSync<MatchmakingResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/sessions'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, MatchmakingResultArray, 'MatchmakingResultArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete a session in a channel.
   */
  deleteSession_ByChannelName_ByMatchId(channelName: string, matchID: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/sessions/{matchID}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
      .replace('{matchID}', matchID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Add user into the session in a channel.
   */
  createSession_ByChannelName_ByMatchId(
    channelName: string,
    matchID: string,
    data: MatchAddUserIntoSessionRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/sessions/{matchID}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
      .replace('{matchID}', matchID)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Delete a user from a session in the channel.
   */
  deleteUser_ByChannelName_ByMatchId_ByUserId(channelName: string, matchID: string, userID: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/sessions/{matchID}/users/{userID}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
      .replace('{matchID}', matchID)
      .replace('{userID}', userID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
