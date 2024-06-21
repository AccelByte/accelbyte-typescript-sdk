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
import { TicketAcquireRequest } from '../generated-definitions/TicketAcquireRequest.js'
import { TicketAcquireResult } from '../generated-definitions/TicketAcquireResult.js'
import { TicketBoothId } from '../generated-definitions/TicketBoothId.js'
import { TicketDynamicInfo } from '../generated-definitions/TicketDynamicInfo.js'
import { TicketSaleDecrementRequest } from '../generated-definitions/TicketSaleDecrementRequest.js'
import { TicketSaleIncrementRequest } from '../generated-definitions/TicketSaleIncrementRequest.js'
import { TicketSaleIncrementResult } from '../generated-definitions/TicketSaleIncrementResult.js'
import { TicketAdmin$ } from './endpoints/TicketAdmin$.js'

export function TicketAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get ticket(code/key) dynamic based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket dynamic&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTicket_ByBoothName(boothName: string): Promise<TicketDynamicInfo> {
    const $ = new TicketAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicket_ByBoothName(boothName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get ticket(code/key) booth ID.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket booth id&lt;/li&gt;&lt;/ul&gt;
   */
  async function getId_ByBoothName(boothName: string): Promise<TicketBoothId> {
    const $ = new TicketAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getId_ByBoothName(boothName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Decrease ticket(code/key) sale if requested orderNo is already increased.
   */
  async function updateDecrement_ByBoothName(boothName: string, data: TicketSaleDecrementRequest): Promise<unknown> {
    const $ = new TicketAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDecrement_ByBoothName(boothName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; increase ticket(code/key) sale.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Ticket sale increment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIncrement_ByBoothName(boothName: string, data: TicketSaleIncrementRequest): Promise<TicketSaleIncrementResult> {
    const $ = new TicketAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIncrement_ByBoothName(boothName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Acquire ticket(code/key) based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: acquire result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createTicket_ByUserId_ByBoothName(
    userId: string,
    boothName: string,
    data: TicketAcquireRequest
  ): Promise<TicketAcquireResult> {
    const $ = new TicketAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createTicket_ByUserId_ByBoothName(userId, boothName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTicket_ByBoothName,
    getId_ByBoothName,
    updateDecrement_ByBoothName,
    updateIncrement_ByBoothName,
    createTicket_ByUserId_ByBoothName
  }
}
