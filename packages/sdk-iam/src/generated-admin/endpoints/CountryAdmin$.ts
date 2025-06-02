/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CountryBlacklistRequest } from '../../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export class CountryAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Admin get country list
   */
  getCountries_v3(queryParams?: { filterBlacklist?: boolean | null }): Promise<Response<CountryResponseArray>> {
    const params = { filterBlacklist: true, ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CountryResponseArray, 'CountryResponseArray')
  }
  /**
   * Admin get country blacklist
   */
  getCountriesBlacklist_v3(): Promise<Response<CountryBlacklistResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/countries/blacklist'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CountryBlacklistResponse,
      'CountryBlacklistResponse'
    )
  }
  /**
   * Admin update country blacklist
   */
  updateCountryBlacklist_v3(data: CountryBlacklistRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/countries/blacklist'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
