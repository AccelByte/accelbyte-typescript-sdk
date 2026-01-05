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
import { EventResponse } from '../../generated-definitions/EventResponse.js'
import { UserLastActivity } from '../../generated-definitions/UserLastActivity.js'

export class UserInformation$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  deleteActivity_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/activities'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getActivities_ByUserId(userId: string, queryParams: { pageSize: number; offset?: number }): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/activities'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getLastActivityTime_ByUserId(userId: string): Promise<Response<UserLastActivity>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/lastActivityTime'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserLastActivity, 'UserLastActivity')
  }
}
