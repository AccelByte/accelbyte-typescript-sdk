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
import { DeregisterLocalServerRequest } from './definitions/DeregisterLocalServerRequest'
import { DsHeartbeatRequest } from './definitions/DsHeartbeatRequest'
import { RegisterLocalServerRequest } from './definitions/RegisterLocalServerRequest'
import { RegisterServerRequest } from './definitions/RegisterServerRequest'
import { Server } from './definitions/Server'
import { Server$ } from './endpoints/Server$'
import { ServerDeploymentConfigSessionTimeoutResponse } from './definitions/ServerDeploymentConfigSessionTimeoutResponse'
import { ServerSessionResponse } from './definitions/ServerSessionResponse'
import { ShutdownServerRequest } from './definitions/ShutdownServerRequest'

export function ServerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to let DSM know that it is ready for use. This MUST be called by DS after it is ready to accept match data and incoming client connections. Upon successfully calling this endpoint, the dedicated server is listed under READY servers.```
   */
  async function createServerRegister(data: RegisterServerRequest): Promise<Server> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createServerRegister(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to let DSM know that it is shutting down. Calling this will remove the server and session records from DB.Set 'kill_me' in request to 'true' if the DS cannot shut itself down.
   */
  async function createServerShutdown(data: ShutdownServerRequest): Promise<unknown> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createServerShutdown(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server which already has claimed to extend its lifetime. DS should call this periodically after it claimed. The timeframe between 2 heartbeat call should be smaller than the session timout in the deployment configuration. If the last heartbeat is longer than the session timout, the server. will be considered as expired and will be terminated by DSMC.```
   */
  async function updateServerHeartbeat(data: DsHeartbeatRequest): Promise<unknown> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateServerHeartbeat(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social Use the alternative GET of the same endpoint to upgrade DS connection to DSM via websocket. This endpoint is intended to be called by local dedicated server to let DSM know that it is ready for use. Use local DS only for development purposes since DSM wouldn't be able to properly manage local DS in production. This MUST be called by DS after it is ready to accept match data and incoming client connections. Upon successfully calling this endpoint, the dedicated server is listed under READY local servers.```
   */
  async function createServerLocalRegister(data: RegisterLocalServerRequest): Promise<Server> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createServerLocalRegister(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by local dedicated server to let DSM know that it is shutting down. Calling this will remove the server records from DB.```
   */
  async function createServerLocalDeregister(data: DeregisterLocalServerRequest): Promise<unknown> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createServerLocalDeregister(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to query its session ID. DS should call this when it first receive player connection, to see if it is actually claimed```
   */
  async function getSession_ByPodName(podName: string): Promise<ServerSessionResponse> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSession_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint is intended to be called by dedicated server to get the session timeout that will be used for the DS. DS will use this session timeout to make sure it regularly make heartbeat call to the DSMC, before the session timeout.```
   */
  async function getConfigSessiontimeout_ByPodName(podName: string): Promise<ServerDeploymentConfigSessionTimeoutResponse> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getConfigSessiontimeout_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createServerRegister,
    createServerShutdown,
    updateServerHeartbeat,
    createServerLocalRegister,
    createServerLocalDeregister,
    getSession_ByPodName,
    getConfigSessiontimeout_ByPodName
  }
}
