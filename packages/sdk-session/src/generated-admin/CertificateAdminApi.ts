/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CertificateAdmin$ } from './endpoints/CertificateAdmin$.js'
import { PlatformCredentials } from '../generated-definitions/PlatformCredentials.js'

export function CertificateAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Upload certificates for xbox. Certificate must be in the valid form of PFX format.
   */
  async function updateCertificatePfxPlatformXbl(data: {
    file: File
    password: string | null
    certname: string | null
    description?: string | null
  }): Promise<PlatformCredentials> {
    const $ = new CertificateAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCertificatePfxPlatformXbl(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateCertificatePfxPlatformXbl
  }
}
