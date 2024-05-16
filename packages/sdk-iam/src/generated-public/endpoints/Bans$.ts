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
import { BanReasons } from '../../generated-definitions/BanReasons.js'
import { Bans } from '../../generated-definitions/Bans.js'

export class Bans$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans [GET]_**
   */
  getBans_DEPRECATED(): Promise<IResponse<Bans>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/bans'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, Bans, 'Bans')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans/reasons [GET]_**
   */
  getBansReasons_DEPRECATED(): Promise<IResponse<BanReasons>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/bans/reasons'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, BanReasons, 'BanReasons')
  }
}
