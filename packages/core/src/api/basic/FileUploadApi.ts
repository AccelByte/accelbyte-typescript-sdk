/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { FileUpload$ } from '@od-web-sdk/generated-public/basic/FileUpload$'
import { Network } from '@od-web-sdk/utils/Network'
import { Validate } from '@od-web-sdk/utils/Validate'
import { z } from 'zod'

export class FileUploadApi {
  constructor(private conf: SDKRequestConfig, private namespace: string) {}

  newInstance() {
    return new FileUpload$(Network.create(this.conf), this.namespace, false)
  }

  generateFolderUploadFileUrl = ({ folder, queryParams }: { folder: string; queryParams?: { fileType: string | null } }) => {
    return this.newInstance().postV1FoldersByFolderFiles(folder, queryParams)
  }

  uploadFile = (fileInfo: { url: string; contentType: string }, file: File) => {
    const axios = Network.create({
      ...this.conf,
      headers: { 'Content-Type': fileInfo.contentType }
    })
    return Validate.responseType(() => axios.put(fileInfo.url, file), z.string())
  }
}
