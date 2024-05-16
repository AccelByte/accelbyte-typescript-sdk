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

export class AnonymizationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Anonymize user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11501&lt;/li&gt;&lt;/ul&gt;
   */
  deleteAnonymizationProfile_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
