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
import { CreateDependencyLinkRequest } from '../../generated-definitions/CreateDependencyLinkRequest.js'
import { RetrieveDependencyLinkResponse } from '../../generated-definitions/RetrieveDependencyLinkResponse.js'

export class DlcAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to link DLC version(s) against the game version.&lt;p&gt;
   */
  updateDlcLink(data: CreateDependencyLinkRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/dlc/link'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to retrieve DLC versions against the game version.
   */
  getLink_ByBuildId(buildId: string): Promise<Response<RetrieveDependencyLinkResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/dlc/{buildId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveDependencyLinkResponse,
      'RetrieveDependencyLinkResponse'
    )
  }
}
