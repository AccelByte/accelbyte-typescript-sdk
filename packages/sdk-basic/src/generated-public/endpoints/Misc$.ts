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
import { CountryObjectArray } from '../../generated-definitions/CountryObjectArray.js'
import { RetrieveTimeResponse } from '../../generated-definitions/RetrieveTimeResponse.js'

export class Misc$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get server time
   */
  getMiscTime(): Promise<Response<RetrieveTimeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/misc/time'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RetrieveTimeResponse, 'RetrieveTimeResponse')
  }
  /**
   * @deprecated
   * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscCountries(queryParams?: { lang?: string | null }): Promise<Response<CountryObjectArray>> {
    const params = { lang: 'en', ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CountryObjectArray, 'CountryObjectArray')
  }
  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscLanguages(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/languages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscTimezones(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/timezones'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
