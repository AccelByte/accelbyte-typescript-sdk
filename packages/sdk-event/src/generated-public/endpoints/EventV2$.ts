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
import { EventResponseV2 } from '../../generated-definitions/EventResponseV2.js'

export class EventV2$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Requires valid user access token
   */
  getEvent_ByUserId_v2(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<Response<EventResponseV2>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/event'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponseV2, 'EventResponseV2')
  }
  /**
   * Available Type: * email * password * displayname * dateofbirth * country * language
   */
  getEdithistory_ByUserId_v2(
    userId: string,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null; type?: string | null }
  ): Promise<Response<EventResponseV2>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/edithistory'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponseV2, 'EventResponseV2')
  }
}
