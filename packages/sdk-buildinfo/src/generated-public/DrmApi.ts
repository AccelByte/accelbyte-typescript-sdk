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
import { Drm$ } from './endpoints/Drm$.js'
import { EncryptedIdentity } from '../generated-definitions/EncryptedIdentity.js'
import { PublicKeyPresignedUrl } from '../generated-definitions/PublicKeyPresignedUrl.js'

export function DrmApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to get encrypted userId and machineId for entitled user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: data field containing encrypted userId and machineId separated by comma&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDrmlicenseEncrypt(queryParams: { appId: string | null; machineId: string | null }): Promise<EncryptedIdentity> {
    const $ = new Drm$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getDrmlicenseEncrypt(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get public key.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: url to download the key&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDrmlicenseRetrievePublicKey(): Promise<PublicKeyPresignedUrl> {
    const $ = new Drm$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getDrmlicenseRetrievePublicKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDrmlicenseEncrypt,
    getDrmlicenseRetrievePublicKey
  }
}
