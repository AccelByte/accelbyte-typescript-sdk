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
import { MultipleAgentType } from '../../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../../generated-definitions/MultipleUx.js'

export class EventDescriptions$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  getDescriptionsUx(): Promise<Response<MultipleUx>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/descriptions/ux'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleUx, 'MultipleUx')
  }

  getDescriptionsEventId(): Promise<Response<MultipleEventId>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/descriptions/eventId'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleEventId, 'MultipleEventId')
  }

  getDescriptionsAgentType(): Promise<Response<MultipleAgentType>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/descriptions/agentType'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleAgentType, 'MultipleAgentType')
  }

  getDescriptionsEventType(): Promise<Response<MultipleEventType>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/descriptions/eventType'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleEventType, 'MultipleEventType')
  }

  getDescriptionsEventLevel(): Promise<Response<MultipleEventLevel>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/descriptions/eventLevel'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleEventLevel, 'MultipleEventLevel')
  }

  getDescriptionsUxListByUx(queryParams?: { ux?: string | null }): Promise<Response<MultipleUx>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/descriptions/ux/listByUx'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleUx, 'MultipleUx')
  }

  getDescriptionsEventIdListByEventIds(queryParams?: { eventIds?: string | null }): Promise<Response<MultipleEventId>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/descriptions/eventId/listByEventIds'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleEventId, 'MultipleEventId')
  }

  getDescriptionsAgentTypeListByAgentTypes(queryParams?: { agentTypes?: string | null }): Promise<Response<MultipleAgentType>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/descriptions/agentType/listByAgentTypes'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleAgentType, 'MultipleAgentType')
  }

  getDescriptionsEventTypeListByEventTypes(queryParams?: { eventTypes?: string | null }): Promise<Response<MultipleEventType>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/descriptions/eventType/listByEventTypes'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleEventType, 'MultipleEventType')
  }

  getDescriptionsEventLevelListByEventLevels(queryParams?: { eventLevels?: string | null }): Promise<Response<MultipleEventLevel>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/descriptions/eventLevel/listByEventLevels'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MultipleEventLevel, 'MultipleEventLevel')
  }
}
