/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ChannelV1 } from '../../generated-definitions/ChannelV1.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponse } from '../../generated-definitions/GetSessionHistorySearchResponse.js'
import { GetSessionHistorySearchResponseV2 } from '../../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { MatchAddUserIntoSessionRequest } from '../../generated-definitions/MatchAddUserIntoSessionRequest.js'
import { MatchingPartyArray } from '../../generated-definitions/MatchingPartyArray.js'
import { MatchmakingResultArray } from '../../generated-definitions/MatchmakingResultArray.js'
import { StatResumeResponse } from '../../generated-definitions/StatResumeResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export class MatchmakingAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Export channels configuration to file. Action Code: 510114
   */
  getChannelsExport(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Import channels configuration from file. It will merge with existing channels. Available import strategy: - leaveOut: if channel with same key exist, the existing will be used and imported one will be ignored (default) - replace: if channel with same key exist, the imported channel will be used and existing one will be removed Action Code: 510113
   */
  createChannelImport(data: { file?: File; strategy?: string | null }): Promise<IResponse<ImportConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
  }

  /**
   * Get all parties queueing in all channels.
   */
  getChannelsAllParties(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/all/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Reads single channel based on namespace and channel name Action Code: 510112
   */
  getChannel_ByChannelName(channelName: string): Promise<IResponse<ChannelV1>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelV1, 'ChannelV1')
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   *  &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Search sessions.
   */
  getSessionsHistorySearch_DEPRECATED(queryParams: {
    limit: number
    offset: number
    channel?: string | null
    deleted?: boolean | null
    matchID?: string | null
    partyID?: string | null
    userID?: string | null
  }): Promise<IResponse<GetSessionHistorySearchResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/sessions/history/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetSessionHistorySearchResponse,
      'GetSessionHistorySearchResponse'
    )
  }

  /**
   * @deprecated
   * &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data.
   */
  getSessionsHistorySearch_ByNS_DEPRECATED(queryParams: {
    limit: number
    offset: number
    channel?: string | null
    deleted?: boolean | null
    matchID?: string | null
    partyID?: string | null
    userID?: string | null
  }): Promise<IResponse<GetSessionHistorySearchResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/matchmaking/v2/admin/namespaces/{namespace}/sessions/history/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetSessionHistorySearchResponseV2,
      'GetSessionHistorySearchResponseV2'
    )
  }

  /**
   * Bulk get sessions.
   */
  getChannelsAllSessionsBulk(queryParams?: { matchIDs?: string | null }): Promise<IResponse<MatchmakingResultArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/all/sessions/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MatchmakingResultArray,
      'MatchmakingResultArray'
    )
  }

  /**
   *  Get a channel&#39;s stat data (mean, stddev, min, max) according to the stats collected from statistics service. &#39;
   */
  getStats_ByChannelName(channelName: string): Promise<IResponse<StatResumeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/stats'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatResumeResponse, 'StatResumeResponse')
  }

  /**
   * Get all parties queueing in a channel.
   */
  getParties_ByChannelName(channelName: string): Promise<IResponse<MatchingPartyArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/parties'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchingPartyArray, 'MatchingPartyArray')
  }

  /**
   * Get all sessions in a channel. if party_id value empty/null, field will not show in response body.
   */
  getSessions_ByChannelName(channelName: string): Promise<IResponse<MatchmakingResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/sessions'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MatchmakingResultArray,
      'MatchmakingResultArray'
    )
  }

  /**
   * @deprecated
   *  &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/{sessionId}/history/detailed [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Get session history detailed. if party_id value empty/null, field will not show in response body.
   */
  getHistoryDetailed_ByMatchId_DEPRECATED(matchID: string): Promise<IResponse<GetSessionHistoryDetailedResponseItemArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/sessions/{matchID}/history/detailed'
      .replace('{namespace}', this.namespace)
      .replace('{matchID}', matchID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetSessionHistoryDetailedResponseItemArray,
      'GetSessionHistoryDetailedResponseItemArray'
    )
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
