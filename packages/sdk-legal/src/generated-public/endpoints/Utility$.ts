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
import { LegalReadinessStatusResponse } from '../../generated-definitions/LegalReadinessStatusResponse.js'

export class Utility$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Readiness status defined as at least one legal basePolicy is present and having active basePolicy.
   */
  getReadiness(): Promise<IResponse<LegalReadinessStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/readiness'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      LegalReadinessStatusResponse,
      'LegalReadinessStatusResponse'
    )
  }
}
