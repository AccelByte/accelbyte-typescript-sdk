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
import { FileUploadUrlInfo } from '../../generated-definitions/FileUploadUrlInfo.js'

export class FileUploadAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file count per user&lt;/i&gt;: 10 files&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file size per user&lt;/i&gt;: 104857600 bytes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<Response<FileUploadUrlInfo>> {
    const params = { category: 'default', ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/users/{userId}/files'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FileUploadUrlInfo, 'FileUploadUrlInfo')
  }
  /**
   * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  createFile_ByFolder(folder: string, queryParams: { fileType: string | null }): Promise<Response<FileUploadUrlInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/folders/{folder}/files'
      .replace('{namespace}', this.namespace)
      .replace('{folder}', folder)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FileUploadUrlInfo, 'FileUploadUrlInfo')
  }
}
