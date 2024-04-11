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
import { RetrieveBaseGameResponseArray } from '../../generated-definitions/RetrieveBaseGameResponseArray.js'
import { RetrieveDependencyCompatibilityResponse } from '../../generated-definitions/RetrieveDependencyCompatibilityResponse.js'
import { RetrieveDependencyLinkResponse } from '../../generated-definitions/RetrieveDependencyLinkResponse.js'
import { RetrieveLatestDlcResponseArray } from '../../generated-definitions/RetrieveLatestDlcResponseArray.js'

export class Dlc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * This API is used to retrieve DLC versions against the game version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  getLink_ByBuildId(buildId: string): Promise<IResponse<RetrieveDependencyLinkResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RetrieveDependencyLinkResponse, 'RetrieveDependencyLinkResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  getCompatibility_ByBuildId(buildId: string): Promise<IResponse<RetrieveDependencyCompatibilityResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/compatibility'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RetrieveDependencyCompatibilityResponse, 'RetrieveDependencyCompatibilityResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use game&#39;s appId to query.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of DLC&lt;/li&gt;&lt;/ul&gt;
   */
  getDlcLatestByGameAppId_ByAppId(appId: string): Promise<IResponse<RetrieveLatestDlcResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlcs/latest/byGameAppId/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RetrieveLatestDlcResponseArray, 'RetrieveLatestDlcResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use DLC&#39;s appId to query.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: appId of game and list of its builds by platformId&lt;/li&gt;&lt;/ul&gt;
   */
  getAppLatestByDlcAppId_ByDlcAppId(dlcAppId: string): Promise<IResponse<RetrieveBaseGameResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}'
      .replace('{namespace}', this.namespace)
      .replace('{dlcAppId}', dlcAppId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RetrieveBaseGameResponseArray, 'RetrieveBaseGameResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
