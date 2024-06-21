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
import { z } from 'zod'
import { AppMessageDeclarationArray } from '../../generated-definitions/AppMessageDeclarationArray.js'

export class MatchmakingOperations$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  getVersion(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/version'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * get the list of messages.
   */
  getMessages(): Promise<IResponse<AppMessageDeclarationArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/messages'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AppMessageDeclarationArray,
      'AppMessageDeclarationArray'
    )
  }
}
