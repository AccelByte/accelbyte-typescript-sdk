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
import { NotificationPagingSlicedResult } from '../../generated-definitions/NotificationPagingSlicedResult.js'

export class IapNotificationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query third party notifications.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Third Party Platform notifications&lt;/li&gt;&lt;/ul&gt;
   */
  getIapNotifications(queryParams?: {
    endDate?: string | null
    externalId?: string | null
    limit?: number
    offset?: number
    source?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    startDate?: string | null
    status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'
    type?: string | null
  }): Promise<Response<NotificationPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/notifications'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NotificationPagingSlicedResult,
      'NotificationPagingSlicedResult'
    )
  }
}
