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
import { CreateDeploymentOverrideRequest } from '../../generated-definitions/CreateDeploymentOverrideRequest.js'
import { CreateDeploymentRequest } from '../../generated-definitions/CreateDeploymentRequest.js'
import { CreateRegionOverrideRequest } from '../../generated-definitions/CreateRegionOverrideRequest.js'
import { DeploymentWithOverride } from '../../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../../generated-definitions/ListDeploymentResponse.js'
import { UpdateDeploymentOverrideRequest } from '../../generated-definitions/UpdateDeploymentOverrideRequest.js'
import { UpdateDeploymentRequest } from '../../generated-definitions/UpdateDeploymentRequest.js'
import { UpdateRegionOverrideRequest } from '../../generated-definitions/UpdateRegionOverrideRequest.js'

export class DeploymentConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
   */
  getConfigsDeployments(queryParams: { count: number; offset: number; name?: string | null }): Promise<Response<ListDeploymentResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListDeploymentResponse,
      'ListDeploymentResponse'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
   */
  deleteConfigDeployment_ByDeployment(deployment: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
   */
  getConfigDeployment_ByDeployment(deployment: string): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}'
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
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment in a namespace.
   */
  patchConfigDeployment_ByDeployment(deployment: string, data: UpdateDeploymentRequest): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
   */
  createConfigDeployment_ByDeployment(deployment: string, data: CreateDeploymentRequest): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}'
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
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint deletes the deployment creating server count queue in a namespace in all registered region for the selected version
   */
  deleteQueueConfig_ByDeployment_ByVersion(deployment: string, version: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/versions/{version}/queues'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for root deployment
   */
  deleteOverrideRegionConfig_ByDeployment_ByRegion(deployment: string, region: string): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/regions/{region}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{region}', region)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for root deployment.
   */
  patchOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string,
    data: UpdateRegionOverrideRequest
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/regions/{region}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{region}', region)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for root deployment.
   */
  createOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string,
    data: CreateRegionOverrideRequest
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/regions/{region}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{region}', region)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment override in a namespace.
   */
  createOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string,
    data: CreateDeploymentOverrideRequest
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/version/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace
   */
  deleteOverrideVersionConfig_ByDeployment_ByVersion(deployment: string, version: string): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/versions/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace.
   */
  patchOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string,
    data: UpdateDeploymentOverrideRequest
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/versions/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for deployment overrides
   */
  deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/versions/{version}/regions/{region}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
      .replace('{region}', region)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for deployment overrides.
   */
  patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string,
    data: UpdateRegionOverrideRequest
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/versions/{version}/regions/{region}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
      .replace('{region}', region)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for deployment overrides.
   */
  createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string,
    data: CreateRegionOverrideRequest
  ): Promise<Response<DeploymentWithOverride>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/deployments/{deployment}/overrides/versions/{version}/regions/{region}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
      .replace('{version}', version)
      .replace('{region}', region)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeploymentWithOverride,
      'DeploymentWithOverride'
    )
  }
}
