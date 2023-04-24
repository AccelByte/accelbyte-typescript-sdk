/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { StatCreate } from '../definitions/StatCreate'
import { StatInfo } from '../definitions/StatInfo'

export class StatConfiguration$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Create stat.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=1 (CREATE)</li><li><i>Returns</i>: created stat template</li><li>default minimum value is 0</li><li>default maximum value is 1.7976931348623157e+308</li></ul>
   */
  createStat(data: StatCreate): Promise<IResponse<StatInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, StatInfo, 'StatInfo')
  }
}
