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
import { AppMessageDeclarationArray } from '../../generated-definitions/AppMessageDeclarationArray.js'

export class DsmcOperations$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * get the list of messages.
   */
  getMessages(): Promise<IResponse<AppMessageDeclarationArray>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/v1/messages'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AppMessageDeclarationArray, 'AppMessageDeclarationArray')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
