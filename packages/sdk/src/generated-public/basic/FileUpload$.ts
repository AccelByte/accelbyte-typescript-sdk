/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { FileUploadUrlInfo } from './definitions/FileUploadUrlInfo'

export class FileUpload$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Generate an upload URL. It's valid for 10 minutes.<br/>Other detail info: <ul><li><i>Required permission</i>: resource = <b>"NAMESPACE:{namespace}:FILEUPLOAD"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11101</li><li><i>Returns</i>: URL data</li></ul>
   */
  postV1FoldersByFolderFiles<T = FileUploadUrlInfo>(folder: string, queryParams: { fileType: string | null }): Promise<IResponse<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/folders/{folder}/files'
      .replace('{namespace}', this.namespace)
      .replace('{folder}', folder)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, FileUploadUrlInfo)
  }

  /**
   * Generate an upload URL for user content. It's valid for 10 minutes.<br/>There are 2 kinds of storage limitation per user : maximum file count and maximum file size.<br/>The threshold of those limitations is different between upload category that is used.<br/>Other detail info: <ul><li><i>Required permission</i>: resource = <b>"NAMESPACE:{namespace}:USER:{userId}:FILEUPLOAD"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11102</li><li><i>Default maximum file count per user</i>: 10 files</li><li><i>Default maximum file size per user</i>: 104857600 bytes</li><li><i>Returns</i>: URL data</li></ul>
   */
  postV1UsersByUseridFiles<T = FileUploadUrlInfo>(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<IResponse<T>> {
    const params = { category: 'default', ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/files'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, FileUploadUrlInfo)
  }
}
