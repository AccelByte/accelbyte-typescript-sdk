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
import { CreatePodConfigRequest } from '../../generated-definitions/CreatePodConfigRequest.js'
import { InstanceSpec } from '../../generated-definitions/InstanceSpec.js'
import { ListPodConfigResponse } from '../../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../../generated-definitions/PodConfigRecord.js'
import { UpdatePodConfigRequest } from '../../generated-definitions/UpdatePodConfigRequest.js'

export class PodConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: ADMIN:NAMESPACE:*:DSM:CONFIG [READ] Required scope: social This endpoint returns the lowest instance spec, both cpu (in Mhz) and memory (in Mb).
   */
  getInstancesSpecLowest(): Promise<Response<InstanceSpec>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/instances/spec/lowest'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InstanceSpec, 'InstanceSpec')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
   */
  getConfigsPods(queryParams: { count: number; offset: number }): Promise<Response<ListPodConfigResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/pods'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListPodConfigResponse, 'ListPodConfigResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
   */
  deleteConfigPod_ByName(name: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/pods/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server pod config in a namespace
   */
  getConfigPod_ByName(name: string): Promise<Response<PodConfigRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/pods/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PodConfigRecord, 'PodConfigRecord')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers pod config in a namespace.
   */
  patchConfigPod_ByName(name: string, data: UpdatePodConfigRequest): Promise<Response<PodConfigRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/pods/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PodConfigRecord, 'PodConfigRecord')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
   */
  createConfigPod_ByName(name: string, data: CreatePodConfigRequest): Promise<Response<PodConfigRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/pods/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PodConfigRecord, 'PodConfigRecord')
  }
}
