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
import { BuildInfoPii } from '../../generated-definitions/BuildInfoPii.js'

export class GdprAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to remove all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
   */
  deleteGdprRemove(queryParams: { userId: string | null }): Promise<Response<BuildInfoPii>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/gdpr/remove'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildInfoPii, 'BuildInfoPii')
  }
  /**
   * This API is used to get all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
   */
  getGdprRetrieve(queryParams: { userId: string | null }): Promise<Response<BuildInfoPii>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/gdpr/retrieve'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildInfoPii, 'BuildInfoPii')
  }
}
