/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { PlatformCredentialAdmin$ } from './endpoints/PlatformCredentialAdmin$.js'
import { PlatformCredentials } from '../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../generated-definitions/PutPlatformCredentialsRequest.js'

export function PlatformCredentialAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Delete platform credentials used for Native Session sync.
   */
  async function deletePlatformCredential(): Promise<unknown> {
    const $ = new PlatformCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deletePlatformCredential()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get platform credentials used for Native Session sync. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret. For security, only the first few characters are shown. - scope: should be psn:s2s.service (For Sync non PSN member to PSN Session)
   */
  async function getPlatformCredentials(): Promise<PlatformCredentials> {
    const $ = new PlatformCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPlatformCredentials()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update platform credentials for Native Session sync. Currently supports PSN platform. Send an empty body to clear data. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret - scope: psn:s2s.service (For Sync non PSN member to PSN Session)
   */
  async function updatePlatformCredential(data: PutPlatformCredentialsRequest): Promise<PlatformCredentials> {
    const $ = new PlatformCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updatePlatformCredential(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deletePlatformCredential,
    getPlatformCredentials,
    updatePlatformCredential
  }
}
