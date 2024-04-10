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
import { EventDescriptions$ } from './endpoints/EventDescriptions$.js'
import { MultipleAgentType } from '../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../generated-definitions/MultipleUx.js'

export function EventDescriptionsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  async function getDescriptionsUx(): Promise<MultipleUx> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsUx()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventId(): Promise<MultipleEventId> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsEventId()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsAgentType(): Promise<MultipleAgentType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsAgentType()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventType(): Promise<MultipleEventType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsEventType()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventLevel(): Promise<MultipleEventLevel> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsEventLevel()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsUxListByUx(queryParams?: { ux?: string | null }): Promise<MultipleUx> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsUxListByUx(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventIdListByEventIds(queryParams?: { eventIds?: string | null }): Promise<MultipleEventId> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsEventIdListByEventIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsAgentTypeListByAgentTypes(queryParams?: { agentTypes?: string | null }): Promise<MultipleAgentType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsAgentTypeListByAgentTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventTypeListByEventTypes(queryParams?: { eventTypes?: string | null }): Promise<MultipleEventType> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsEventTypeListByEventTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDescriptionsEventLevelListByEventLevels(queryParams?: { eventLevels?: string | null }): Promise<MultipleEventLevel> {
    const $ = new EventDescriptions$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescriptionsEventLevelListByEventLevels(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDescriptionsUx,
    getDescriptionsEventId,
    getDescriptionsAgentType,
    getDescriptionsEventType,
    getDescriptionsEventLevel,
    getDescriptionsUxListByUx,
    getDescriptionsEventIdListByEventIds,
    getDescriptionsAgentTypeListByAgentTypes,
    getDescriptionsEventTypeListByEventTypes,
    getDescriptionsEventLevelListByEventLevels
  }
}
