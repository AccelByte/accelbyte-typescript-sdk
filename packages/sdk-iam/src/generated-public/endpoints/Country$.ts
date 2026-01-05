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
import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export class Country$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Public get country list, will filter out countries in black list
   */
  getCountries_v3(): Promise<Response<CountryResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CountryResponseArray, 'CountryResponseArray')
  }
}
