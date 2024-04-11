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
import { AddBufferRequest } from '../generated-definitions/AddBufferRequest.js'
import { AddBufferResponse } from '../generated-definitions/AddBufferResponse.js'
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'
import { CountServerResponse } from '../generated-definitions/CountServerResponse.js'
import { CountSessionResponse } from '../generated-definitions/CountSessionResponse.js'
import { DeleteZombieRequest } from '../generated-definitions/DeleteZombieRequest.js'
import { DetailedCountServerResponse } from '../generated-definitions/DetailedCountServerResponse.js'
import { ListServerResponse } from '../generated-definitions/ListServerResponse.js'
import { ListSessionResponse } from '../generated-definitions/ListSessionResponse.js'
import { ServerDetailsResponse } from '../generated-definitions/ServerDetailsResponse.js'
import { WorkerConfig } from '../generated-definitions/WorkerConfig.js'
import { WorkerConfigRequest } from '../generated-definitions/WorkerConfigRequest.js'

export function AdminAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [READ] Required scope: social This endpoint retrieves a worker configuration to control the worker in the DSMC.
   */
  async function getWorkers(): Promise<WorkerConfig> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWorkers()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [CREATE] Required scope: social This endpoint creates a worker configuration to control the worker in the DSMC.
   */
  async function createWorker(data: WorkerConfigRequest): Promise<WorkerConfig> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createWorker(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [UPDATE] Required scope: social This endpoint updates a worker configuration to control the worker in the DSMC.
   */
  async function updateWorker(data: WorkerConfigRequest): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateWorker(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
   */
  async function getServers(queryParams: { count: number; offset: number; region?: string | null }): Promise<ListServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
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
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a namespace managed by this service.
   */
  async function getServersCount(): Promise<CountServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getServersCount()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of local dedicated servers in a namespace managed by this service.
   */
  async function getServersLocal(): Promise<ListServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getServersLocal()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run ghost cleaner once.
   */
  async function getWorkersGhost(): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWorkersGhost()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint count all of sessions in a namespace managed by this service.
   */
  async function getSessionsCount(queryParams?: { region?: string | null }): Promise<CountSessionResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSessionsCount(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run zombie cleaner once use * as region name to target all regions ```
   */
  async function createWorkerZombie(data: DeleteZombieRequest): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createWorkerZombie(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint manually adds buffer for selected namespace and deployment x Job will contain y num of allocs. Region can be filled with comma-separated values. use * as region name to deploy to all region specified in the deployment&#39;s region list if JobPriority set to 0, we will use 80 as default value for job priority OverrideVersion will be used as override version for the new allocations. If OverrideVersion is empty, will use version in the deployment. ```
   */
  async function createManualBufferAdd(data: AddBufferRequest): Promise<AddBufferResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createManualBufferAdd(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified dedicated server from DB and terminates the DS pod.
   */
  async function deleteServer_ByPodName(podName: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint queries a specified dedicated server from DB.
   */
  async function getServer_ByPodName(podName: string): Promise<ServerDetailsResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified local dedicated server from DB. Note that DSM has no ability to shutdown local DS.
   */
  async function deleteServerLocal_ByName(name: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteServerLocal_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint deletes a specified session and its corresponding match result from DB.
   */
  async function deleteSession_BySessionId(sessionID: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteSession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
   */
  async function getServersCountDetailed(queryParams?: { region?: string | null }): Promise<DetailedCountServerResponse> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getServersCountDetailed(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getWorkers,
    createWorker,
    updateWorker,
    getServers,
    getSessions,
    getServersCount,
    getServersLocal,
    getWorkersGhost,
    getSessionsCount,
    createWorkerZombie,
    createManualBufferAdd,
    deleteServer_ByPodName,
    getServer_ByPodName,
    deleteServerLocal_ByName,
    deleteSession_BySessionId,
    getServersCountDetailed
  }
}
