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
import { ChatSnapshots } from '../../generated-definitions/ChatSnapshots.js'

export class Moderation$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get the chat snapshot
   */
  getSnapshot_ByTopic_ByChatId(topic: string, chatId: string): Promise<Response<ChatSnapshots>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/public/namespaces/{namespace}/topic/{topic}/snapshot/{chatId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChatSnapshots, 'ChatSnapshots')
  }
}
