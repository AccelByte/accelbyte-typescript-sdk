/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PlayerAttributesRequestBody } from '../../generated-definitions/PlayerAttributesRequestBody.js'
import { PlayerAttributesResponseBody } from '../../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayersCurrentPlatformRequest } from '../../generated-definitions/PlayersCurrentPlatformRequest.js'
import { PlayersCurrentPlatformResponse } from '../../generated-definitions/PlayersCurrentPlatformResponse.js'

export class Player$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get bulk players current platform.
   */
  fetchUserBulkPlatform(data: PlayersCurrentPlatformRequest): Promise<Response<PlayersCurrentPlatformResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/bulk/platform'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayersCurrentPlatformResponse,
      'PlayersCurrentPlatformResponse'
    )
  }
  /**
   * Reset player attributes.
   */
  deleteUserMeAttribute(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get player attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  getUsersMeAttributes(): Promise<Response<PlayerAttributesResponseBody>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerAttributesResponseBody,
      'PlayerAttributesResponseBody'
    )
  }
  /**
   * This API behaves to upsert player&#39;s attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  createUserMeAttribute(data: PlayerAttributesRequestBody): Promise<Response<PlayerAttributesResponseBody>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerAttributesResponseBody,
      'PlayerAttributesResponseBody'
    )
  }
}
