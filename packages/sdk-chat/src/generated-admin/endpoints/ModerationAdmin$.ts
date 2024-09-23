/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ChatSnapshots } from '../../generated-definitions/ChatSnapshots.js'

export class ModerationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Delete the chat snapshot
   */
  deleteSnapshot_ByChatId(chatId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/namespaces/{namespace}/snapshot/{chatId}'.replace('{namespace}', this.namespace).replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get the chat snapshot
   */
  getSnapshot_ByChatId(chatId: string): Promise<Response<ChatSnapshots>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/namespaces/{namespace}/snapshot/{chatId}'.replace('{namespace}', this.namespace).replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChatSnapshots, 'ChatSnapshots')
  }
}
