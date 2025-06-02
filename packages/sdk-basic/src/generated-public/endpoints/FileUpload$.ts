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
import { FileUploadUrlInfo } from '../../generated-definitions/FileUploadUrlInfo.js'

export class FileUpload$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;There are two types of storage limits per user: maximum file count and maximum total file size.&lt;br/&gt;These limits vary depending on the upload category used.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Default category:&lt;/b&gt;&lt;br/&gt;- Maximum file count per user: 10 files&lt;br/&gt;- Maximum total file size per user: 100MB&lt;br/&gt;&lt;b&gt;2. Reporting category:&lt;/b&gt;&lt;br/&gt;- Maximum file count per user: 3 files every 1 hour&lt;br/&gt;- Maximum total file size per user: 30MB every 1 hour&lt;br/&gt;&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<Response<FileUploadUrlInfo>> {
    const params = { category: 'default', ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/files'
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
    const url = '/basic/v1/public/namespaces/{namespace}/folders/{folder}/files'
      .replace('{namespace}', this.namespace)
      .replace('{folder}', folder)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FileUploadUrlInfo, 'FileUploadUrlInfo')
  }
}
