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
import { CreateDeploymentRequest } from '../../generated-definitions/CreateDeploymentRequest.js'
import { DeploymentWithOverride } from '../../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../../generated-definitions/ListDeploymentResponse.js'

export class DeploymentConfig$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
   */
  getConfigsDeployments(queryParams: { count: number; offset: number; name?: string | null }): Promise<Response<ListDeploymentResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListDeploymentResponse,
      'ListDeploymentResponse'
    )
  }
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
   */
  deleteConfigDeployment_ByDeployment(deployment: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
   */
  getConfigDeployment_ByDeployment(deployment: string): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
   */
  createConfigDeployment_ByDeployment(deployment: string, data: CreateDeploymentRequest): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
}
