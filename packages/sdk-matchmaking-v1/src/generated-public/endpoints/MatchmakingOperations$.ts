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
import { z } from 'zod'
import { AppMessageDeclarationArray } from '../../generated-definitions/AppMessageDeclarationArray.js'

export class MatchmakingOperations$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  getVersion(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/version'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * get the list of messages.
   */
  getMessages(): Promise<Response<AppMessageDeclarationArray>> {
    const params = {} as AxiosRequestConfig
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
