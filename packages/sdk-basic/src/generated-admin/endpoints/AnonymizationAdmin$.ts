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

export class AnonymizationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Anonymize user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11501&lt;/li&gt;&lt;/ul&gt;
   */
  deleteAnonymizationProfile_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
