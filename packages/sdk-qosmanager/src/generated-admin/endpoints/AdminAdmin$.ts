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
import { SetAliasRequest } from '../../generated-definitions/SetAliasRequest.js'
import { UpdateServerRequest } from '../../generated-definitions/UpdateServerRequest.js'

export class AdminAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * ``` Required permission: ADMIN:QOS:SERVER [DELETE] Required scope: social This endpoint delete a registered QoS service record. ```
   */
  deleteServer_ByRegion(region: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/qosm/admin/servers/{region}'.replace('{region}', region)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: ADMIN:QOS:SERVER [UDPATE] Required scope: social This endpoint modifies a registered QoS service&#39;s region alias. ```
   */
  createAlia_ByRegion(region: string, data: SetAliasRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/qosm/admin/servers/{region}/alias'.replace('{region}', region)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] Required scope: social This endpoint updates the registered QoS service&#39;s configurable configuration&#39;. ```
   */
  patchServer_ByRegion(region: string, data: UpdateServerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/qosm/admin/namespaces/{namespace}/servers/{region}'.replace('{namespace}', this.namespace).replace('{region}', region)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
