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
import { MultipleAgentType } from '../../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../../generated-definitions/MultipleUx.js'

export class EventDescriptions$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  getDescriptionsUx(): Promise<IResponse<MultipleUx>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/ux'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleUx, 'MultipleUx')
  }

  getDescriptionsEventId(): Promise<IResponse<MultipleEventId>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/eventId'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleEventId, 'MultipleEventId')
  }

  getDescriptionsAgentType(): Promise<IResponse<MultipleAgentType>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/agentType'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleAgentType, 'MultipleAgentType')
  }

  getDescriptionsEventType(): Promise<IResponse<MultipleEventType>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/eventType'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleEventType, 'MultipleEventType')
  }

  getDescriptionsEventLevel(): Promise<IResponse<MultipleEventLevel>> {
    const params = {} as SDKRequestConfig
    const url = '/event/descriptions/eventLevel'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleEventLevel, 'MultipleEventLevel')
  }

  getDescriptionsUxListByUx(queryParams?: { ux?: string | null }): Promise<IResponse<MultipleUx>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/ux/listByUx'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleUx, 'MultipleUx')
  }

  getDescriptionsEventIdListByEventIds(queryParams?: { eventIds?: string | null }): Promise<IResponse<MultipleEventId>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/eventId/listByEventIds'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleEventId, 'MultipleEventId')
  }

  getDescriptionsAgentTypeListByAgentTypes(queryParams?: { agentTypes?: string | null }): Promise<IResponse<MultipleAgentType>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/agentType/listByAgentTypes'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleAgentType, 'MultipleAgentType')
  }

  getDescriptionsEventTypeListByEventTypes(queryParams?: { eventTypes?: string | null }): Promise<IResponse<MultipleEventType>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/eventType/listByEventTypes'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleEventType, 'MultipleEventType')
  }

  getDescriptionsEventLevelListByEventLevels(queryParams?: { eventLevels?: string | null }): Promise<IResponse<MultipleEventLevel>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/descriptions/eventLevel/listByEventLevels'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, MultipleEventLevel, 'MultipleEventLevel')
  }
}
