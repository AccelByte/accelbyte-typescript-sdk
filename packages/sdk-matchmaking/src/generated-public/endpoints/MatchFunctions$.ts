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
import { ListMatchFunctionsResponse } from '../../generated-definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../../generated-definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../../generated-definitions/MatchFunctionRequest.js'

export class MatchFunctions$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * List existing match functions.
   */
  getMatchFunctions(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<ListMatchFunctionsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListMatchFunctionsResponse,
      'ListMatchFunctionsResponse'
    )
  }

  /**
   * Creates a new matchmaking function.
   */
  createMatchFunction(data: MatchFunctionRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Deletes an existing match function.
   */
  deleteMatchFunction_ByName(name: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update existing matchmaking function.
   */
  updateMatchFunction_ByName(name: string, data: MatchFunctionRequest): Promise<IResponse<MatchFunctionConfig>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchFunctionConfig, 'MatchFunctionConfig')
  }
}
