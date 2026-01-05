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
import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { GetAllPlayerSessionAttributeResponse } from '../../generated-definitions/GetAllPlayerSessionAttributeResponse.js'
import { GetBulkAllPlayerBlockedUsersRequest } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersRequest.js'
import { GetBulkAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersResponse.js'
import { GetLobbyCcuResponse } from '../../generated-definitions/GetLobbyCcuResponse.js'
import { GetPlayerSessionAttributeResponse } from '../../generated-definitions/GetPlayerSessionAttributeResponse.js'
import { ListBlockedPlayerRequest } from '../../generated-definitions/ListBlockedPlayerRequest.js'
import { ListUnblockPlayerRequest } from '../../generated-definitions/ListUnblockPlayerRequest.js'
import { SetPlayerSessionAttributeRequest } from '../../generated-definitions/SetPlayerSessionAttributeRequest.js'

export class PlayerAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get the number of players connected to the Lobby in the given namespace.
   */
  getPlayerCcu(): Promise<Response<GetLobbyCcuResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/ccu'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetLobbyCcuResponse, 'GetLobbyCcuResponse')
  }
  /**
   * Get blocked players data by bulk user ids in a namespace.
   */
  fetchPlayerUserBulkBlocked(data: GetBulkAllPlayerBlockedUsersRequest): Promise<Response<GetBulkAllPlayerBlockedUsersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/bulk/blocked'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetBulkAllPlayerBlockedUsersResponse,
      'GetBulkAllPlayerBlockedUsersResponse'
    )
  }
  /**
   * Get blocked players data by user id in a namespace.
   */
  getBlockedPlayer_ByUserId(userId: string): Promise<Response<GetAllPlayerBlockedUsersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/blocked'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllPlayerBlockedUsersResponse,
      'GetAllPlayerBlockedUsersResponse'
    )
  }
  /**
   * @deprecated
   * Get all player&#39;s session attribute by user id in a namespace.
   */
  getAttributesPlayer_ByUserId(userId: string): Promise<Response<GetAllPlayerSessionAttributeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllPlayerSessionAttributeResponse,
      'GetAllPlayerSessionAttributeResponse'
    )
  }
  /**
   * @deprecated
   * Set player&#39;s session attribute by user id in a namespace.
   */
  updateAttributePlayer_ByUserId(userId: string, data: SetPlayerSessionAttributeRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Load get players who blocked this player in a namespace based on user id
   */
  getBlockedByPlayer_ByUserId(userId: string): Promise<Response<GetAllPlayerBlockedByUsersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/blocked-by'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllPlayerBlockedByUsersResponse,
      'GetAllPlayerBlockedByUsersResponse'
    )
  }
  /**
   * Bulk block player in a namespace by list of user id
   */
  createBulkBlockPlayer_ByUserId(userId: string, data: ListBlockedPlayerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/bulk/block'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Bulk unblock player in a namespace by list of user id
   */
  deleteBulkUnblockPlayer_ByUserId(userId: string, data: ListUnblockPlayerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/bulk/unblock'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Get player&#39;s specific session attribute by user id in a namespace.
   */
  getAttributePlayer_ByUserId_ByAttribute(userId: string, attribute: string): Promise<Response<GetPlayerSessionAttributeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes/{attribute}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{attribute}', attribute)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetPlayerSessionAttributeResponse,
      'GetPlayerSessionAttributeResponse'
    )
  }
}
