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
import { ChannelRequest } from '../../generated-definitions/ChannelRequest.js'
import { ChannelResponse } from '../../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../../generated-definitions/PaginatedGetChannelResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export class ChannelAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get official channel paginated
   */
  getChannels(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedGetChannelResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGetChannelResponse,
      'PaginatedGetChannelResponse'
    )
  }
  /**
   * Create official channel
   */
  createChannel(data: ChannelRequest): Promise<Response<ChannelResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelResponse, 'ChannelResponse')
  }
  /**
   * Delete official channel
   */
  deleteChannel_ByChannelId(channelId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update official channel
   */
  updateChannel_ByChannelId(channelId: string, data: UpdateChannelRequest): Promise<Response<ChannelResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelResponse, 'ChannelResponse')
  }
  /**
   * Get user channel paginated
   */
  getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<Response<PaginatedGetChannelResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels'
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
   * Delete user channel
   */
  deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update user channel
   */
  updateChannel_ByUserId_ByChannelId(userId: string, channelId: string, data: UpdateChannelRequest): Promise<Response<ChannelResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelResponse, 'ChannelResponse')
  }
}
