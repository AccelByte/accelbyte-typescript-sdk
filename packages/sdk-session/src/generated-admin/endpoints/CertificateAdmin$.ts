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
import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'

export class CertificateAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Upload certificates for xbox. Certificate must be in the valid form of PFX format.
   */
  updateCertificatePfxPlatformXbl(data: {
    file: File
    password: string | null
    certname: string | null
    description?: string | null
  }): Promise<IResponse<PlatformCredentials>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/certificates/pfx/platforms/xbl'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlatformCredentials, 'PlatformCredentials')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
