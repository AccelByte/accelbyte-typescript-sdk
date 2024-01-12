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
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'
import { CountServerResponse } from '../generated-definitions/CountServerResponse.js'
import { CountSessionResponse } from '../generated-definitions/CountSessionResponse.js'
import { DetailedCountServerResponse } from '../generated-definitions/DetailedCountServerResponse.js'
import { ListServerResponse } from '../generated-definitions/ListServerResponse.js'
import { ListSessionResponse } from '../generated-definitions/ListSessionResponse.js'
import { Server } from '../generated-definitions/Server.js'

export function AdminAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
   */
  async function getServers(queryParams: { count: number; offset: number; region?: string | null }): Promise<ListServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getServers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint lists all of sessions in a namespace managed by this service. Parameter Offset and Count is Required
   */
  async function getSessions(queryParams: {
    count: number
    offset: number
    region?: string | null
    withServer?: boolean | null
  }): Promise<ListSessionResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a namespace managed by this service.
   */
  async function getServersCount(): Promise<CountServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getServersCount()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of local dedicated servers in a namespace managed by this service.
   */
  async function getServersLocal(): Promise<ListServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getServersLocal()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint count all of sessions in a namespace managed by this service.
   */
  async function getSessionsCount(queryParams?: { region?: string | null }): Promise<CountSessionResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSessionsCount(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified dedicated server from DB and terminates the DS pod.
   */
  async function deleteServer_ByPodName(podName: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint queries a specified dedicated server from DB.
   */
  async function getServer_ByPodName(podName: string): Promise<Server> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified local dedicated server from DB. Note that DSM has no ability to shutdown local DS.
   */
  async function deleteServerLocal_ByName(name: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteServerLocal_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint deletes a specified session and its corresponding match result from DB.
   */
  async function deleteSession_BySessionId(sessionID: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteSession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
   */
  async function getServersCountDetailed(queryParams?: { region?: string | null }): Promise<DetailedCountServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getServersCountDetailed(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getServers,
    getSessions,
    getServersCount,
    getServersLocal,
    getSessionsCount,
    deleteServer_ByPodName,
    getServer_ByPodName,
    deleteServerLocal_ByName,
    deleteSession_BySessionId,
    getServersCountDetailed
  }
}
