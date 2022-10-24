/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { IResponse, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { FileUploadUrlInfo } from './definitions/FileUploadUrlInfo'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class FileUpload$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postV1FoldersByFolderFiles<T = FileUploadUrlInfo>(folder: string, queryParams?: { fileType: string | null }): Promise<IResponse<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/folders/' + folder + '/files'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, FileUploadUrlInfo)
  }

  postV1UsersByUseridFiles<T = FileUploadUrlInfo>(
    userId: string,
    queryParams?: { fileType: string | null; category?: string | null }
  ): Promise<IResponse<T>> {
    const params = { category: 'default', ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/files'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, FileUploadUrlInfo)
  }
}
