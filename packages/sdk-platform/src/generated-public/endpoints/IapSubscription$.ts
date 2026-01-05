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
import { ThirdPartyUserSubscriptionPagingSlicedResult } from '../../generated-definitions/ThirdPartyUserSubscriptionPagingSlicedResult.js'

export class IapSubscription$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query user subscription, default sort by updatedAtOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  getIapSubscriptionPlatform_ByUserId_ByPlatform(
    userId: string,
    platform: string,
    queryParams?: { activeOnly?: boolean | null; groupId?: string | null; limit?: number; offset?: number; productId?: string | null }
  ): Promise<Response<ThirdPartyUserSubscriptionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/subscriptions/platforms/{platform}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyUserSubscriptionPagingSlicedResult,
      'ThirdPartyUserSubscriptionPagingSlicedResult'
    )
  }
}
