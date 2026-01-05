/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ChainingOperationReq } from '../generated-definitions/ChainingOperationReq.js'
import { ChainingOperationResp } from '../generated-definitions/ChainingOperationResp.js'
import { ChainingOperationsAdmin$ } from './endpoints/ChainingOperationsAdmin$.js'

export function ChainingOperationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function createChainingOperation(data: ChainingOperationReq): Promise<AxiosResponse<ChainingOperationResp>> {
    const $ = new ChainingOperationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createChainingOperation(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Create chaining Operations. This process will run sequentially 1. remove item process 2. consume item process 3. update item process 4. create item process if toSpecificInventory set as true, then inventoryId field will be mandatory, vice versa The behavior of each process is same with current admin level endpoint requestId: Request id(Optional), client should provide a unique request id to perform at most once execution, When a request id is resubmitted, it will return original successful response replayed : replayed, if true,the response is original successful response. This will not be included in response if client have not pass request id. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
     */
    createChainingOperation
  }
}
