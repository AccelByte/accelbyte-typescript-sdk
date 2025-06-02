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
import { CreateDeploymentV1Request } from '../../generated-definitions/CreateDeploymentV1Request.js'
import { CreateDeploymentV1Response } from '../../generated-definitions/CreateDeploymentV1Response.js'
import { GetDeploymentListV1Request } from '../../generated-definitions/GetDeploymentListV1Request.js'
import { GetDeploymentListV1Response } from '../../generated-definitions/GetDeploymentListV1Response.js'
import { GetDeploymentV1Response } from '../../generated-definitions/GetDeploymentV1Response.js'

export class DeploymentAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Filters the List of Deployments This endpoint intended to get list of Deployment done for the given publisher and game. Required: Valid Access Token
   */
  createDeployment(
    data: GetDeploymentListV1Request,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetDeploymentListV1Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/deployments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetDeploymentListV1Response,
      'GetDeploymentListV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [CREATE]&lt;/code&gt; Creates Deployment for extend service This endpoint intended to apply the helm release or deploying the custom service image. Logic in this endpoint: - Getting the repo from AppHistory table and image tag from request - Getting the Helm Manifest template from S3 - Filling the Helm Manifest values - Installing the Helm Manifest to deploy the custom service image into K8s based on given namespace - Storing the filled Helm Manifest to S3 - Storing the Deployment information to Database Required: Valid Access Token
   */
  createDeployment_ByApp(app: string, data: CreateDeploymentV1Request): Promise<Response<CreateDeploymentV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/deployments'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateDeploymentV1Response,
      'CreateDeploymentV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [DELETE]&lt;/code&gt; Delete Deployment information by given DeploymentID This endpoint intended to delete helm release object and update the deleted_at in DB by given Deployment ID. Required: Valid Access Token
   */
  deleteDeployment_ByDeploymentId(deploymentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/deployments/{deploymentId}'
      .replace('{namespace}', this.namespace)
      .replace('{deploymentId}', deploymentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Get Deployment information by given DeploymentID This endpoint intended to get Deployment information by given Deployment ID from Deployment Table. Required: Valid Access Token
   */
  getDeployment_ByDeploymentId(deploymentId: string): Promise<Response<GetDeploymentV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/deployments/{deploymentId}'
      .replace('{namespace}', this.namespace)
      .replace('{deploymentId}', deploymentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetDeploymentV1Response,
      'GetDeploymentV1Response'
    )
  }
}
