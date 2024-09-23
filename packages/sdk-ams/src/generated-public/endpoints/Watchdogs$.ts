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
import { z } from 'zod'

export class Watchdogs$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This is to support local ds development scenarios Required Permission: NAMESPACE:{namespace}:AMS:LOCALDS [CREATE]
   */
  getConnect_ByWatchdogId(watchdogID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/namespaces/{namespace}/local/{watchdogID}/connect'
      .replace('{namespace}', this.namespace)
      .replace('{watchdogID}', watchdogID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required Permission: NAMESPACE:{namespace}:ARMADA:WATCHDOG [CREATE]
   */
  getConnect_ByWatchdogId_ByNS(watchdogID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/namespaces/{namespace}/watchdogs/{watchdogID}/connect'
      .replace('{namespace}', this.namespace)
      .replace('{watchdogID}', watchdogID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
