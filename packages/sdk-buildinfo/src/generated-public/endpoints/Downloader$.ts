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
import { BasicBuildManifestArray } from '../../generated-definitions/BasicBuildManifestArray.js'
import { BlockDownloadUrls } from '../../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../../generated-definitions/BlockDownloadUrlsRequest.js'
import { BuildAvailabilityArray } from '../../generated-definitions/BuildAvailabilityArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { DiffStatusReport } from '../../generated-definitions/DiffStatusReport.js'
import { VersionChain } from '../../generated-definitions/VersionChain.js'

export class Downloader$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get version history.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: version chain from specified build&lt;/li&gt;&lt;/ul&gt;
   */
  getVersionHistory(queryParams: { appId: string | null; comparedBuildId: string | null }): Promise<Response<VersionChain>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/versionHistory'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, VersionChain, 'VersionChain')
  }
  /**
   * This API is used to check whether supplied list of appId has valid buildmanifest and at least one of its build set as latest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of build availability&lt;/li&gt;&lt;/ul&gt;
   */
  getBulkCheckLatest(queryParams: { appIds: string[] }): Promise<Response<BuildAvailabilityArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/bulkCheckLatest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BuildAvailabilityArray,
      'BuildAvailabilityArray'
    )
  }
  /**
   * @deprecated
   * This API is used to get build manifest of release version of the application. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getUpdategame_ByAppId(appId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/updategame/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to get simple build manifest that contains list of current build in various platform.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getAvailablebuild_ByAppId(appId: string): Promise<Response<BasicBuildManifestArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/availablebuilds/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BasicBuildManifestArray,
      'BasicBuildManifestArray'
    )
  }
  /**
   * @deprecated
   * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and generate chunks difference and obsolete files list between two version. Only works for builds uploaded with BuildInfo v1 [DEPRECATED}&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getUpdategameBuild_ByBuildId(buildId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/updategame/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.&lt;br/&gt;Before processing the URL generation, it will validate the user entitlement first, if not entitled then the request will be refused.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Block Download URLs&lt;/li&gt;&lt;/ul&gt;
   */
  createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<Response<BlockDownloadUrls>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/builds/{buildId}/blocks/urls'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockDownloadUrls, 'BlockDownloadUrls')
  }
  /**
   * @deprecated
   * This API is used to get build manifest that contains file difference between requested version and release version. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getUpdategame_ByAppId_ByVersion(appId: string, version: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/updategame/{appId}/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and obsolete files list between two version. Only works for builds uploaded with BuildInfo v2&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getUpdategameBuild_ByBuildId_v2(buildId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/v2/updategame/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to get build manifest of release version of the application.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getUpdategame_ByAppId_ByPlatformId_v2(appId: string, platformId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API fetch the diff status between two builds. The diff generated by diff wrapper and saved in the database. Return 404 if no diff found.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Simple diff status containing where to fetch diff manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId: string, destinationBuildId: string): Promise<Response<DiffStatusReport>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/diff/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DiffStatusReport, 'DiffStatusReport')
  }
  /**
   * This API is used to get build manifest. The binary diff will be calculated in the client side, while obsolete file list will be generated by server side.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getVersion_ByAppId_ByVersion_ByPlatformId_v2(appId: string, version: string, platformId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{version}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
}
