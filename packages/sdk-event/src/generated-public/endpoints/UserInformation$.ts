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
import { EventResponse } from '../../generated-definitions/EventResponse.js'
import { UserLastActivity } from '../../generated-definitions/UserLastActivity.js'

export class UserInformation$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  deleteActivity_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/activities'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getActivities_ByUserId(userId: string, queryParams: { pageSize: number; offset?: number }): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/activities'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EventResponse, 'EventResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getLastActivityTime_ByUserId(userId: string): Promise<IResponse<UserLastActivity>> {
    const params = {} as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/lastActivityTime'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserLastActivity, 'UserLastActivity')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
