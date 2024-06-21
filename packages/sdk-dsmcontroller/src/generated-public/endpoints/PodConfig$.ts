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
import { CreatePodConfigRequest } from '../../generated-definitions/CreatePodConfigRequest.js'
import { ListPodConfigResponse } from '../../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../../generated-definitions/PodConfigRecord.js'

export class PodConfig$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
   */
  getConfigsPods(queryParams: { count: number; offset: number }): Promise<IResponse<ListPodConfigResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/pods'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListPodConfigResponse, 'ListPodConfigResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
   */
  deleteConfigPod_ByName(name: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/pods/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
   */
  createConfigPod_ByName(name: string, data: CreatePodConfigRequest): Promise<IResponse<PodConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/pods/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PodConfigRecord, 'PodConfigRecord')
  }
}
