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
import { PlayerAttributesResponseBody } from '../../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayerAttributesResponseBodyArray } from '../../generated-definitions/PlayerAttributesResponseBodyArray.js'

export class PlayerAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Admin get attributes of players. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  getUsersAttributes(queryParams?: { users?: string | null }): Promise<Response<PlayerAttributesResponseBodyArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/users/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerAttributesResponseBodyArray,
      'PlayerAttributesResponseBodyArray'
    )
  }
  /**
   * Admin get attributes of a player. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  getAttributes_ByUserId(userId: string): Promise<Response<PlayerAttributesResponseBody>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/users/{userId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerAttributesResponseBody,
      'PlayerAttributesResponseBody'
    )
  }
}
