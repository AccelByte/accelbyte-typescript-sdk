/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { ReleaseNoteDto } from '../../generated-definitions/ReleaseNoteDto.js'
import { ReleaseNoteManifest } from '../../generated-definitions/ReleaseNoteManifest.js'

export class ReleaseNoteAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to commit release note file that has been uploaded to signal completion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchReleasenoteUploadCommit_ByHash(hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/upload/commit/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start release note upload and get the presigned URL.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createReleasenoteUploadStart_ByUploaderId(uploaderId: string, data: BinaryUpload): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/upload/start/{uploaderId}'
      .replace('{namespace}', this.namespace)
      .replace('{uploaderId}', uploaderId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to save release note manifest.&lt;p&gt;It will update the existing release note manifest if exist (based on namespace, appId, platformId and version).&lt;br/&gt;Otherwise, it will create a new release note manifest.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Upload Mode for existing release note manifest:&lt;/b&gt;&lt;br/&gt;0 = update, will merge the old localizations with the new localizations.&lt;br/&gt;1 = replace, will replace the old localizations with the new localizations.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createReleasenoteManifestSave_ByUploadMode(uploadMode: string, data: ReleaseNoteManifest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/manifest/save/{uploadMode}'
      .replace('{namespace}', this.namespace)
      .replace('{uploadMode}', uploadMode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get release note manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getReleasenoteManifestGet_ByAppId_ByPlatformId(
    appId: string,
    platformId: string,
    queryParams?: { version?: string | null }
  ): Promise<IResponseWithSync<ReleaseNoteDto>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/manifest/get/{appId}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ReleaseNoteDto, 'ReleaseNoteDto')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
