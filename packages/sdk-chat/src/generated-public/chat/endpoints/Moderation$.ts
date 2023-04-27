/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { ChatSnapshots } from '../definitions/ChatSnapshots.js'

export class Moderation$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required group permission : <code> NAMESPACE:{namespace}:CHAT:TOPIC [READ]</code> <br>Get the chat snapshot
   */
  getSnapshot_ByTopic_ByChatId(topic: string, chatId: string): Promise<IResponseWithSync<ChatSnapshots>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/public/namespaces/{namespace}/topic/{topic}/snapshot/{chatId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ChatSnapshots, 'ChatSnapshots')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
