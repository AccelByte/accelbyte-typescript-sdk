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

import { AnonymizationAdmin$ } from './endpoints/AnonymizationAdmin$.js'

export function AnonymizationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Anonymize order. At current it will only anonymize order, order history.
   */
  async function deleteAnonymizationOrder_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationOrder_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize payment. At current it will only anonymize payment order, payment order history.
   */
  async function deleteAnonymizationPayment_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationPayment_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize wallet. At current it will only anonymize wallet, wallet transaction.
   */
  async function deleteAnonymizationWallet_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationWallet_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize campaign. At current it will only anonymize redeem history.
   */
  async function deleteAnonymizationCampaign_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationCampaign_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize revocation. At current it will only anonymize revocation history.
   */
  async function deleteAnonymizationRevocation_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationRevocation_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize fulfillment. At current it will only anonymize fulfillment history.
   */
  async function deleteAnonymizationFulfillment_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationFulfillment_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize entitlement. At current it will only anonymize entitlement, entitlement history.
   */
  async function deleteAnonymizationEntitlement_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationEntitlement_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize integrations. At current it will only anonymize iap histories.
   */
  async function deleteAnonymizationIntegration_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationIntegration_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Anonymize subscription. At current it will anonymize subscription, billing history and subscription activity.
   */
  async function deleteAnonymizationSubscription_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationSubscription_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteAnonymizationOrder_ByUserId,
    deleteAnonymizationPayment_ByUserId,
    deleteAnonymizationWallet_ByUserId,
    deleteAnonymizationCampaign_ByUserId,
    deleteAnonymizationRevocation_ByUserId,
    deleteAnonymizationFulfillment_ByUserId,
    deleteAnonymizationEntitlement_ByUserId,
    deleteAnonymizationIntegration_ByUserId,
    deleteAnonymizationSubscription_ByUserId
  }
}
