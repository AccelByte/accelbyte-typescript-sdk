/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { LegalReadinessStatusResponse } from '../../generated-definitions/LegalReadinessStatusResponse.js'

export class Utility$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Readiness status defined as at least one legal basePolicy is present and having active basePolicy.
   */
  getReadiness(): Promise<Response<LegalReadinessStatusResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/public/readiness'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LegalReadinessStatusResponse,
      'LegalReadinessStatusResponse'
    )
  }
}
