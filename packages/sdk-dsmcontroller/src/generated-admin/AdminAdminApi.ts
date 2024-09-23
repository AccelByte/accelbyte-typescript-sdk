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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AddBufferRequest } from '../generated-definitions/AddBufferRequest.js'
import { AddBufferResponse } from '../generated-definitions/AddBufferResponse.js'
import { CountServerResponse } from '../generated-definitions/CountServerResponse.js'
import { CountSessionResponse } from '../generated-definitions/CountSessionResponse.js'
import { DeleteZombieRequest } from '../generated-definitions/DeleteZombieRequest.js'
import { DetailedCountServerResponse } from '../generated-definitions/DetailedCountServerResponse.js'
import { ListServerResponse } from '../generated-definitions/ListServerResponse.js'
import { ListSessionResponse } from '../generated-definitions/ListSessionResponse.js'
import { ServerDetailsResponse } from '../generated-definitions/ServerDetailsResponse.js'
import { WorkerConfig } from '../generated-definitions/WorkerConfig.js'
import { WorkerConfigRequest } from '../generated-definitions/WorkerConfigRequest.js'
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'

export function AdminAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getWorkers(): Promise<AxiosResponse<WorkerConfig>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWorkers()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createWorker(data: WorkerConfigRequest): Promise<AxiosResponse<WorkerConfig>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createWorker(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateWorker(data: WorkerConfigRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateWorker(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteServer(queryParams: { version: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServer(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServers(queryParams: {
    count: number
    offset: number
    region?: string | null
  }): Promise<AxiosResponse<ListServerResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServers(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSessions(queryParams: {
    count: number
    offset: number
    region?: string | null
    withServer?: boolean | null
  }): Promise<AxiosResponse<ListSessionResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServersCount(): Promise<AxiosResponse<CountServerResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServersCount()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServersLocal(): Promise<AxiosResponse<ListServerResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServersLocal()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWorkersGhost(): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWorkersGhost()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSessionsCount(queryParams?: { region?: string | null }): Promise<AxiosResponse<CountSessionResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSessionsCount(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createWorkerZombie(data: DeleteZombieRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createWorkerZombie(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createManualBufferAdd(data: AddBufferRequest): Promise<AxiosResponse<AddBufferResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createManualBufferAdd(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteServer_ByPodName(podName: string): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServer_ByPodName(podName: string): Promise<AxiosResponse<ServerDetailsResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteServerLocal_ByName(name: string): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServerLocal_ByName(name)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSession_BySessionId(sessionID: string): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServersCountDetailed(queryParams?: { region?: string | null }): Promise<AxiosResponse<DetailedCountServerResponse>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServersCountDetailed(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [READ] Required scope: social This endpoint retrieves a worker configuration to control the worker in the DSMC.
     */
    getWorkers,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [CREATE] Required scope: social This endpoint creates a worker configuration to control the worker in the DSMC.
     */
    createWorker,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [UPDATE] Required scope: social This endpoint updates a worker configuration to control the worker in the DSMC.
     */
    updateWorker,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes all dedicated servers from DB and terminates the DS pod.
     */
    deleteServer,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
     */
    getServers,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint lists all of sessions in a namespace managed by this service. Parameter Offset and Count is Required
     */
    getSessions,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a namespace managed by this service.
     */
    getServersCount,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of local dedicated servers in a namespace managed by this service.
     */
    getServersLocal,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run ghost cleaner once.
     */
    getWorkersGhost,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint count all of sessions in a namespace managed by this service.
     */
    getSessionsCount,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run zombie cleaner once use * as region name to target all regions ```
     */
    createWorkerZombie,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint manually adds buffer for selected namespace and deployment x Job will contain y num of allocs. Region can be filled with comma-separated values. use * as region name to deploy to all region specified in the deployment&#39;s region list if JobPriority set to 0, we will use 80 as default value for job priority OverrideVersion will be used as override version for the new allocations. If OverrideVersion is empty, will use version in the deployment. ```
     */
    createManualBufferAdd,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified dedicated server from DB and terminates the DS pod.
     */
    deleteServer_ByPodName,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint queries a specified dedicated server from DB.
     */
    getServer_ByPodName,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified local dedicated server from DB. Note that DSM has no ability to shutdown local DS.
     */
    deleteServerLocal_ByName,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint deletes a specified session and its corresponding match result from DB.
     */
    deleteSession_BySessionId,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
     */
    getServersCountDetailed
  }
}
