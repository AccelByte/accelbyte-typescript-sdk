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
import { RetrieveBaseGameResponseArray } from '../../generated-definitions/RetrieveBaseGameResponseArray.js'
import { RetrieveDependencyCompatibilityResponse } from '../../generated-definitions/RetrieveDependencyCompatibilityResponse.js'
import { RetrieveDependencyLinkResponse } from '../../generated-definitions/RetrieveDependencyLinkResponse.js'
import { RetrieveLatestDlcResponseArray } from '../../generated-definitions/RetrieveLatestDlcResponseArray.js'

export class Dlc$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to retrieve DLC versions against the game version.
   */
  getLink_ByBuildId(buildId: string): Promise<Response<RetrieveDependencyLinkResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/link'
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
  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version.
   */
  getCompatibility_ByBuildId(buildId: string): Promise<Response<RetrieveDependencyCompatibilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/compatibility'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveDependencyCompatibilityResponse,
      'RetrieveDependencyCompatibilityResponse'
    )
  }
  /**
   * Retrieve the list of DLC available on specific game. Use game&#39;s appId to query.
   */
  getDlcLatestByGameAppId_ByAppId(appId: string): Promise<Response<RetrieveLatestDlcResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlcs/latest/byGameAppId/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveLatestDlcResponseArray,
      'RetrieveLatestDlcResponseArray'
    )
  }
  /**
   * Retrieve the list of DLC available on specific game. Use DLC&#39;s appId to query.
   */
  getAppLatestByDlcAppId_ByDlcAppId(dlcAppId: string): Promise<Response<RetrieveBaseGameResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}'
      .replace('{namespace}', this.namespace)
      .replace('{dlcAppId}', dlcAppId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveBaseGameResponseArray,
      'RetrieveBaseGameResponseArray'
    )
  }
}
