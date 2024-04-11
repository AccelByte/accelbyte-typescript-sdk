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
import { ChatSnapshots } from '../../generated-definitions/ChatSnapshots.js'

export class ModerationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Delete the chat snapshot
   */
  deleteSnapshot_ByChatId(chatId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/namespaces/{namespace}/snapshot/{chatId}'.replace('{namespace}', this.namespace).replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get the chat snapshot
   */
  getSnapshot_ByChatId(chatId: string): Promise<IResponse<ChatSnapshots>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/namespaces/{namespace}/snapshot/{chatId}'.replace('{namespace}', this.namespace).replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ChatSnapshots, 'ChatSnapshots')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
