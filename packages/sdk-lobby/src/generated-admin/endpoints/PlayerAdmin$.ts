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
import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { GetAllPlayerSessionAttributeResponse } from '../../generated-definitions/GetAllPlayerSessionAttributeResponse.js'
import { GetBulkAllPlayerBlockedUsersRequest } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersRequest.js'
import { GetBulkAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersResponse.js'
import { GetLobbyCcuResponse } from '../../generated-definitions/GetLobbyCcuResponse.js'
import { GetPlayerSessionAttributeResponse } from '../../generated-definitions/GetPlayerSessionAttributeResponse.js'
import { ListBlockedPlayerRequest } from '../../generated-definitions/ListBlockedPlayerRequest.js'
import { SetPlayerSessionAttributeRequest } from '../../generated-definitions/SetPlayerSessionAttributeRequest.js'

export class PlayerAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Get the number of players connected to the Lobby in the given namespace.
   */
  getPlayerCcu(): Promise<IResponse<GetLobbyCcuResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/ccu'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetLobbyCcuResponse, 'GetLobbyCcuResponse')
  }

  /**
   * Get blocked players data by bulk user ids in a namespace.
   */
  createPlayerUserBulkBlocked(data: GetBulkAllPlayerBlockedUsersRequest): Promise<IResponse<GetBulkAllPlayerBlockedUsersResponse>> {
    const params = {} as SDKRequestConfig
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
  getBlockedPlayer_ByUserId(userId: string): Promise<IResponse<GetAllPlayerBlockedUsersResponse>> {
    const params = {} as SDKRequestConfig
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
   * Get all player&#39;s session attribute by user id in a namespace.
   */
  getAttributesPlayer_ByUserId(userId: string): Promise<IResponse<GetAllPlayerSessionAttributeResponse>> {
    const params = {} as SDKRequestConfig
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
   * Set player&#39;s session attribute by user id in a namespace.
   */
  updateAttributePlayer_ByUserId(userId: string, data: SetPlayerSessionAttributeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Load get players who blocked this player in a namespace based on user id
   */
  getBlockedByPlayer_ByUserId(userId: string): Promise<IResponse<GetAllPlayerBlockedByUsersResponse>> {
    const params = {} as SDKRequestConfig
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
  createBulkBlockPlayer_ByUserId(userId: string, data: ListBlockedPlayerRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/player/namespaces/{namespace}/users/{userId}/bulk/block'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get player&#39;s specific session attribute by user id in a namespace.
   */
  getAttributePlayer_ByUserId_ByAttribute(userId: string, attribute: string): Promise<IResponse<GetPlayerSessionAttributeResponse>> {
    const params = {} as SDKRequestConfig
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
