/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { MultipleAgentType } from '../../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../../generated-definitions/MultipleUx.js'

export class EventDescriptions$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  getDescriptionsUx(): Promise<IResponseWithSync<MultipleUx>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/ux'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleUx, 'MultipleUx')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsEventId(): Promise<IResponseWithSync<MultipleEventId>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/eventId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleEventId, 'MultipleEventId')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsAgentType(): Promise<IResponseWithSync<MultipleAgentType>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/agentType'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleAgentType, 'MultipleAgentType')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsEventType(): Promise<IResponseWithSync<MultipleEventType>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/eventType'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleEventType, 'MultipleEventType')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsEventLevel(): Promise<IResponseWithSync<MultipleEventLevel>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/eventLevel'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleEventLevel, 'MultipleEventLevel')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsUxListByUx(queryParams?: { ux?: string | null }): Promise<IResponseWithSync<MultipleUx>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/ux/listByUx'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleUx, 'MultipleUx')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsEventIdListByEventIds(queryParams?: { eventIds?: string | null }): Promise<IResponseWithSync<MultipleEventId>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/eventId/listByEventIds'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleEventId, 'MultipleEventId')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsAgentTypeListByAgentTypes(queryParams?: { agentTypes?: string | null }): Promise<IResponseWithSync<MultipleAgentType>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/agentType/listByAgentTypes'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleAgentType, 'MultipleAgentType')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsEventTypeListByEventTypes(queryParams?: { eventTypes?: string | null }): Promise<IResponseWithSync<MultipleEventType>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/eventType/listByEventTypes'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleEventType, 'MultipleEventType')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getDescriptionsEventLevelListByEventLevels(queryParams?: {
    eventLevels?: string | null
  }): Promise<IResponseWithSync<MultipleEventLevel>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/eventLevel/listByEventLevels'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MultipleEventLevel, 'MultipleEventLevel')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
