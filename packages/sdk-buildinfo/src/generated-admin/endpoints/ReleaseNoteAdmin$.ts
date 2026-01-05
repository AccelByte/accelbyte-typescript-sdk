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
import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { ReleaseNoteDto } from '../../generated-definitions/ReleaseNoteDto.js'
import { ReleaseNoteManifest } from '../../generated-definitions/ReleaseNoteManifest.js'

export class ReleaseNoteAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to commit release note file that has been uploaded to signal completion.
   */
  patchReleasenoteUploadCommit_ByHash(hash: string): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/upload/commit/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to start release note upload and get the presigned URL.
   */
  createReleasenoteUploadStart_ByUploaderId(uploaderId: string, data: BinaryUpload): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/upload/start/{uploaderId}'
      .replace('{namespace}', this.namespace)
      .replace('{uploaderId}', uploaderId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to save release note manifest.&lt;p&gt;It will update the existing release note manifest if exist (based on namespace, appId, platformId and version).&lt;br/&gt;Otherwise, it will create a new release note manifest.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Upload Mode for existing release note manifest:&lt;/b&gt;&lt;br/&gt;0 = update, will merge the old localizations with the new localizations.&lt;br/&gt;1 = replace, will replace the old localizations with the new localizations.
   */
  createReleasenoteManifestSave_ByUploadMode(uploadMode: string, data: ReleaseNoteManifest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/manifest/save/{uploadMode}'
      .replace('{namespace}', this.namespace)
      .replace('{uploadMode}', uploadMode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to get release note manifest.
   */
  getReleasenoteManifestGet_ByAppId_ByPlatformId(
    appId: string,
    platformId: string,
    queryParams?: { version?: string | null }
  ): Promise<Response<ReleaseNoteDto>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/releasenote/manifest/get/{appId}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ReleaseNoteDto, 'ReleaseNoteDto')
  }
}
