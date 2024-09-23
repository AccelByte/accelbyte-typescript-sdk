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
import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'

export class StatConfiguration$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;li&gt;Field globalAggregationMethod will be ignored when setAsGlobal field is false&lt;/li&gt;&lt;/ul&gt;
   */
  createStat(data: StatCreate): Promise<Response<StatInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatInfo, 'StatInfo')
  }
}
