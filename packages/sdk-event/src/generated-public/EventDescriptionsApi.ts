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
import { MultipleAgentType } from '../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../generated-definitions/MultipleUx.js'
import { EventDescriptions$ } from './endpoints/EventDescriptions$.js'

export function EventDescriptionsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  async function getDescriptionsUx_DEPRECATED(): Promise<MultipleUx> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsUx_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventId_DEPRECATED(): Promise<MultipleEventId> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventId_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsAgentType_DEPRECATED(): Promise<MultipleAgentType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsAgentType_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventType_DEPRECATED(): Promise<MultipleEventType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventType_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventLevel_DEPRECATED(): Promise<MultipleEventLevel> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventLevel_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsUxListByUx_DEPRECATED(queryParams?: { ux?: string | null }): Promise<MultipleUx> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsUxListByUx_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventIdListByEventIds_DEPRECATED(queryParams?: { eventIds?: string | null }): Promise<MultipleEventId> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventIdListByEventIds_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsAgentTypeListByAgentTypes_DEPRECATED(queryParams?: {
    agentTypes?: string | null
  }): Promise<MultipleAgentType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsAgentTypeListByAgentTypes_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventTypeListByEventTypes_DEPRECATED(queryParams?: {
    eventTypes?: string | null
  }): Promise<MultipleEventType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventTypeListByEventTypes_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventLevelListByEventLevels_DEPRECATED(queryParams?: {
    eventLevels?: string | null
  }): Promise<MultipleEventLevel> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventLevelListByEventLevels_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDescriptionsUx_DEPRECATED,
    getDescriptionsEventId_DEPRECATED,
    getDescriptionsAgentType_DEPRECATED,
    getDescriptionsEventType_DEPRECATED,
    getDescriptionsEventLevel_DEPRECATED,
    getDescriptionsUxListByUx_DEPRECATED,
    getDescriptionsEventIdListByEventIds_DEPRECATED,
    getDescriptionsAgentTypeListByAgentTypes_DEPRECATED,
    getDescriptionsEventTypeListByEventTypes_DEPRECATED,
    getDescriptionsEventLevelListByEventLevels_DEPRECATED
  }
}
