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
import { CreateDeploymentV2Request } from '../../generated-definitions/CreateDeploymentV2Request.js'
import { CreateDeploymentV2Response } from '../../generated-definitions/CreateDeploymentV2Response.js'
import { GetDeploymentListV2DataItem } from '../../generated-definitions/GetDeploymentListV2DataItem.js'
import { GetDeploymentListV2Request } from '../../generated-definitions/GetDeploymentListV2Request.js'
import { GetDeploymentListV2Response } from '../../generated-definitions/GetDeploymentListV2Response.js'

export class DeploymentV2Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Filters the List of Deployments This endpoint intended to get list of Deployment done for the given publisher and game. Request : - appIds : list of app ids - deploymentIds: list of deployment ids - statuses: deployment-in-progress deployment-failed deployment-timeout deployment-running deployment-down Required: Valid Access Token
   */
  createDeployment_v2(
    data: GetDeploymentListV2Request,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetDeploymentListV2Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/deployments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetDeploymentListV2Response,
      'GetDeploymentListV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [CREATE]&lt;/code&gt; Creates Deployment for extend service This Endpoint will create new deployment and apply all of the secrets and variable as environment variable Required: - Valid Access Token - Valid Image Version Created on Uploading image with docker or other method - Valid App name - Valid Namespace name
   */
  createDeployment_ByApp_v2(app: string, data: CreateDeploymentV2Request): Promise<Response<CreateDeploymentV2Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/deployments'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateDeploymentV2Response,
      'CreateDeploymentV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [DELETE]&lt;/code&gt; Delete Deployment information by given DeploymentID This endpoint will delete release object for the service deployment in the cluster Required: Valid Access Token
   */
  deleteDeployment_ByDeploymentId_v2(deploymentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/deployments/{deploymentId}'
      .replace('{namespace}', this.namespace)
      .replace('{deploymentId}', deploymentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Get Deployment information by given DeploymentID This endpoint intended to get Deployment information. Required: Valid Access Token
   */
  getDeployment_ByDeploymentId_v2(deploymentId: string): Promise<Response<GetDeploymentListV2DataItem>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/deployments/{deploymentId}'
      .replace('{namespace}', this.namespace)
      .replace('{deploymentId}', deploymentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetDeploymentListV2DataItem,
      'GetDeploymentListV2DataItem'
    )
  }
}
