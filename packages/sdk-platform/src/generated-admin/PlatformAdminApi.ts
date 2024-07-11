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
import { Ownership } from '../generated-definitions/Ownership.js'
import { PlatformOwnership } from '../generated-definitions/PlatformOwnership.js'
import { PsnEntitlementOwnershipRequest } from '../generated-definitions/PsnEntitlementOwnershipRequest.js'
import { XblEntitlementOwnershipRequest } from '../generated-definitions/XblEntitlementOwnershipRequest.js'
import { PlatformAdmin$ } from './endpoints/PlatformAdmin$.js'

export function PlatformAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get Xbox entitlement ownership by product sku.
   */
  async function createOwnershipXblPlatform_ByProductSku(
    productSku: string,
    data: XblEntitlementOwnershipRequest
  ): Promise<PlatformOwnership> {
    const $ = new PlatformAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createOwnershipXblPlatform_ByProductSku(productSku, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user psn entitlement ownership by entitlement label.
   */
  async function createOwnershipPsnPlatform_ByEntitlementLabel(
    entitlementLabel: string,
    data: PsnEntitlementOwnershipRequest
  ): Promise<Ownership> {
    const $ = new PlatformAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createOwnershipPsnPlatform_ByEntitlementLabel(entitlementLabel, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createOwnershipXblPlatform_ByProductSku,
    createOwnershipPsnPlatform_ByEntitlementLabel
  }
}
