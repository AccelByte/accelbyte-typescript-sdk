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
import { ChannelResponse } from '../../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../../generated-definitions/PaginatedGetChannelResponse.js'
import { PublicChannelRequest } from '../../generated-definitions/PublicChannelRequest.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export class PublicChannel$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Get user channel paginated
   */
  getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<IResponse<PaginatedGetChannelResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGetChannelResponse,
      'PaginatedGetChannelResponse'
    )
  }

  /**
   * Create user channel
   */
  createChannel_ByUserId(userId: string, data: PublicChannelRequest): Promise<IResponse<ChannelResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelResponse, 'ChannelResponse')
  }

  /**
   * Delete user channel
   */
  deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update user channel
   */
  updateChannel_ByUserId_ByChannelId(userId: string, channelId: string, data: UpdateChannelRequest): Promise<IResponse<ChannelResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelResponse, 'ChannelResponse')
  }
}
