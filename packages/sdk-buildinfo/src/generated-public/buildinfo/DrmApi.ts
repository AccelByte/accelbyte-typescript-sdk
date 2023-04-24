/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Drm$ } from './endpoints/Drm$'
import { EncryptedIdentity } from './definitions/EncryptedIdentity'
import { PublicKeyPresignedUrl } from './definitions/PublicKeyPresignedUrl'

export function DrmApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get encrypted userId and machineId for entitled user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:BUILDINFO", action=2 (READ)</li><li><i>Returns</i>: data field containing encrypted userId and machineId separated by comma</li></ul>
   */
  async function getDrmlicenseEncrypt(queryParams: { appId: string | null; machineId: string | null }): Promise<EncryptedIdentity> {
    const $ = new Drm$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDrmlicenseEncrypt(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get public key.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:BUILDINFO", action=2 (READ)</li><li><i>Returns</i>: url to download the key</li></ul>
   */
  async function getDrmlicenseRetrievePublicKey(): Promise<PublicKeyPresignedUrl> {
    const $ = new Drm$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDrmlicenseRetrievePublicKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDrmlicenseEncrypt,
    getDrmlicenseRetrievePublicKey
  }
}
