/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AddBufferRequest } from '../../generated-definitions/AddBufferRequest.js'
import { AddBufferResponse } from '../../generated-definitions/AddBufferResponse.js'
import { CountServerResponse } from '../../generated-definitions/CountServerResponse.js'
import { CountSessionResponse } from '../../generated-definitions/CountSessionResponse.js'
import { DeleteZombieRequest } from '../../generated-definitions/DeleteZombieRequest.js'
import { DetailedCountServerResponse } from '../../generated-definitions/DetailedCountServerResponse.js'
import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'
import { ListSessionResponse } from '../../generated-definitions/ListSessionResponse.js'
import { ServerDetailsResponse } from '../../generated-definitions/ServerDetailsResponse.js'
import { WorkerConfig } from '../../generated-definitions/WorkerConfig.js'
import { WorkerConfigRequest } from '../../generated-definitions/WorkerConfigRequest.js'

export class AdminAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [READ] Required scope: social This endpoint retrieves a worker configuration to control the worker in the DSMC.
   */
  getWorkers(): Promise<Response<WorkerConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespace/{namespace}/workers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, WorkerConfig, 'WorkerConfig')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [CREATE] Required scope: social This endpoint creates a worker configuration to control the worker in the DSMC.
   */
  createWorker(data: WorkerConfigRequest): Promise<Response<WorkerConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespace/{namespace}/workers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, WorkerConfig, 'WorkerConfig')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [UPDATE] Required scope: social This endpoint updates a worker configuration to control the worker in the DSMC.
   */
  updateWorker(data: WorkerConfigRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespace/{namespace}/workers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes all dedicated servers from DB and terminates the DS pod.
   */
  deleteServer(queryParams: { version: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
   */
  getServers(queryParams: { count: number; offset: number; region?: string | null }): Promise<Response<ListServerResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListServerResponse, 'ListServerResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint lists all of sessions in a namespace managed by this service. Parameter Offset and Count is Required
   */
  getSessions(queryParams: {
    count: number
    offset: number
    region?: string | null
    withServer?: boolean | null
  }): Promise<Response<ListSessionResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/sessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListSessionResponse, 'ListSessionResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a namespace managed by this service.
   */
  getServersCount(): Promise<Response<CountServerResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/count'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CountServerResponse, 'CountServerResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of local dedicated servers in a namespace managed by this service.
   */
  getServersLocal(): Promise<Response<ListServerResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/local'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListServerResponse, 'ListServerResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run ghost cleaner once.
   */
  getWorkersGhost(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/workers/ghost'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint count all of sessions in a namespace managed by this service.
   */
  getSessionsCount(queryParams?: { region?: string | null }): Promise<Response<CountSessionResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/sessions/count'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CountSessionResponse, 'CountSessionResponse')
  }
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run zombie cleaner once use * as region name to target all regions ```
   */
  createWorkerZombie(data: DeleteZombieRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/workers/zombie'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint manually adds buffer for selected namespace and deployment x Job will contain y num of allocs. Region can be filled with comma-separated values. use * as region name to deploy to all region specified in the deployment&#39;s region list if JobPriority set to 0, we will use 80 as default value for job priority OverrideVersion will be used as override version for the new allocations. If OverrideVersion is empty, will use version in the deployment. ```
   */
  createManualBufferAdd(data: AddBufferRequest): Promise<Response<AddBufferResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/manual/buffer/add'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AddBufferResponse, 'AddBufferResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified dedicated server from DB and terminates the DS pod.
   */
  deleteServer_ByPodName(podName: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/{podName}'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint queries a specified dedicated server from DB.
   */
  getServer_ByPodName(podName: string): Promise<Response<ServerDetailsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/{podName}'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ServerDetailsResponse, 'ServerDetailsResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified local dedicated server from DB. Note that DSM has no ability to shutdown local DS.
   */
  deleteServerLocal_ByName(name: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/local/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint deletes a specified session and its corresponding match result from DB.
   */
  deleteSession_BySessionId(sessionID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/sessions/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
   */
  getServersCountDetailed(queryParams?: { region?: string | null }): Promise<Response<DetailedCountServerResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/count/detailed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DetailedCountServerResponse,
      'DetailedCountServerResponse'
    )
  }
}
