/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { Response } from '@accelbyte/sdk'
import { Validate } from '@accelbyte/sdk'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BanReasons } from '../../generated-definitions/BanReasons.js'
import { Bans } from '../../generated-definitions/Bans.js'

export class Bans$ {
  private axiosInstance: AxiosInstance
  private useSchemaValidation: boolean

  constructor(axiosInstance: AxiosInstance, _namespace: string, useSchemaValidation = true) {
    this.axiosInstance = axiosInstance
    this.useSchemaValidation = useSchemaValidation
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans [GET]_**
   */
  getBans(): Promise<Response<Bans>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/iam/bans'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Bans, 'Bans')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans/reasons [GET]_**
   */
  getBansReasons(): Promise<Response<BanReasons>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/iam/bans/reasons'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BanReasons, 'BanReasons')
  }
}
