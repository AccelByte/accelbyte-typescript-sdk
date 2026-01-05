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
import { RefreshTicketResponse } from '../../generated-definitions/RefreshTicketResponse.js'

export class TicketV1$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Cancel ticket. This endpoint requires ticket to be placed in the authorization header with this format: &#34;Bearer ticketID&#34;
   */
  deleteTicket(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/login-queue/v1/namespaces/{namespace}/ticket'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Refresh ticket. This endpoint requires ticket to be placed in the authorization header with this format: &#34;Bearer ticketID&#34;. When the ticketID is empty or not found the response status will be 401
   */
  getTicket(): Promise<Response<RefreshTicketResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/login-queue/v1/namespaces/{namespace}/ticket'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RefreshTicketResponse, 'RefreshTicketResponse')
  }
}
