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
import { NativeUserBlockRequest } from '../../generated-definitions/NativeUserBlockRequest.js'
import { NativeUserBlockResponseArray } from '../../generated-definitions/NativeUserBlockResponseArray.js'

export class Blocks$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Sync blocked user using server to server call to native first party server. Supported platforms: ps5, ps4 and pspc : the default environment would be sp-int, can be override using psnEnv. psnEnv consist of sp-int (default), prod-qa, np
   */
  patchSyncMeBlock(data: NativeUserBlockRequest[]): Promise<Response<NativeUserBlockResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/sync/namespaces/{namespace}/me/block'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NativeUserBlockResponseArray,
      'NativeUserBlockResponseArray'
    )
  }
}
