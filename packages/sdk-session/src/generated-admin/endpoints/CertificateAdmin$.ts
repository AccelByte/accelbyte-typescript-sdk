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
import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'

export class CertificateAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Upload certificates for XBox. Certificate must be in the valid form of PFX format. &#39;certname&#39;&#39; must be specified to &#39;xbl-pfx&#39; for Session Sync to work
   */
  updateCertificatePfxPlatformXbl(data: {
    file: File
    password: string | null
    certname: string | null
    description?: string | null
  }): Promise<Response<PlatformCredentials>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/certificates/pfx/platforms/xbl'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlatformCredentials, 'PlatformCredentials')
  }
}
