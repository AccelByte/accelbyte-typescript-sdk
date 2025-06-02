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
import { CsmAppLimitsResponse } from '../../generated-definitions/CsmAppLimitsResponse.js'

export class ResourcesLimitsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint return the Extend Apps Configurable Limits for front end to use for initial validation before app creation e.g. Replica Limit will be used to check max replica that can be created for the said environment by default CPU Limit will be used to validate max allowed CPU for the extend app that hasn&#39;t been created Memory Limit will be used to validate max allowed Memory for the extend app that hasn&#39;t been created MaxAppNotificationSubscription will be used to validate the maximum number of subscriber for an app status notification
   */
  getResourcesLimits_v2(): Promise<Response<CsmAppLimitsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/resources/limits'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CsmAppLimitsResponse, 'CsmAppLimitsResponse')
  }
}
