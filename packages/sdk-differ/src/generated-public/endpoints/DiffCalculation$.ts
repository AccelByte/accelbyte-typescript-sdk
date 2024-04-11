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
import { LateDiffRequest } from '../../generated-definitions/LateDiffRequest.js'
import { PingResponse } from '../../generated-definitions/PingResponse.js'

export class DiffCalculation$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;Every request is registered into the queue first, and will be processed by the available Differ.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt;
   */
  createDiff(data: LateDiffRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/differ/namespaces/{namespace}/diff'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  getPing(): Promise<IResponse<PingResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/differ/namespaces/{namespace}/ping'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PingResponse, 'PingResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;The Diffs calculation will be parallelized between the available Differ instances.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt;
   */
  createDiff_ByNS(data: LateDiffRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/differ/v2/namespaces/{namespace}/diff'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
