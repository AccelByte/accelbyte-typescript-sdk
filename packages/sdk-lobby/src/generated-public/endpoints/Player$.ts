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
import { BlockPlayerRequest } from '../../generated-definitions/BlockPlayerRequest.js'
import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { UnblockPlayerRequest } from '../../generated-definitions/UnblockPlayerRequest.js'

export class Player$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;add blocked players in a namespace based on user id &lt;br/&gt;
   */
  createPlayerUserMeBlock(data: BlockPlayerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/block'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load blocked players in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  getPlayerUsersMeBlocked(): Promise<Response<GetAllPlayerBlockedUsersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/blocked'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllPlayerBlockedUsersResponse,
      'GetAllPlayerBlockedUsersResponse'
    )
  }
  /**
   * Required valid user authorization &lt;br/&gt; unblock player in a namespace based on user id &lt;br/&gt;
   */
  createPlayerUserMeUnblock(data: UnblockPlayerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/unblock'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load get players who blocked this player in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  getPlayerUsersMeBlockedBy(): Promise<Response<GetAllPlayerBlockedByUsersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/blocked-by'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllPlayerBlockedByUsersResponse,
      'GetAllPlayerBlockedByUsersResponse'
    )
  }
}
