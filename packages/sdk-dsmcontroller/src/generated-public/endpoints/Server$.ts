/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { DeregisterLocalServerRequest } from '../../generated-definitions/DeregisterLocalServerRequest.js'
import { DetailedCountServerResponse } from '../../generated-definitions/DetailedCountServerResponse.js'
import { DsHeartbeatRequest } from '../../generated-definitions/DsHeartbeatRequest.js'
import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'
import { RegisterLocalServerRequest } from '../../generated-definitions/RegisterLocalServerRequest.js'
import { RegisterServerRequest } from '../../generated-definitions/RegisterServerRequest.js'
import { Server } from '../../generated-definitions/Server.js'
import { ServerDeploymentConfigSessionTimeoutResponse } from '../../generated-definitions/ServerDeploymentConfigSessionTimeoutResponse.js'
import { ServerSessionResponse } from '../../generated-definitions/ServerSessionResponse.js'
import { ShutdownServerRequest } from '../../generated-definitions/ShutdownServerRequest.js'

export class Server$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
   */
  getServers(queryParams: { count: number; offset: number; region?: string | null }): Promise<Response<ListServerResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListServerResponse, 'ListServerResponse')
  }
  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to let DSM know that it is ready for use. This MUST be called by DS after it is ready to accept match data and incoming client connections. Upon successfully calling this endpoint, the dedicated server is listed under READY servers.```
   */
  createServerRegister(data: RegisterServerRequest): Promise<Response<Server>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/register'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Server, 'Server')
  }
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to let DSM know that it is shutting down. Calling this will remove the server and session records from DB.Set &#39;kill_me&#39; in request to &#39;true&#39; if the DS cannot shut itself down.
   */
  createServerShutdown(data: ShutdownServerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/shutdown'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server which already has claimed to extend its lifetime. DS should call this periodically after it claimed. The timeframe between 2 heartbeat call should be smaller than the session timout in the deployment configuration. If the last heartbeat is longer than the session timout, the server. will be considered as expired and will be terminated by DSMC.```
   */
  updateServerHeartbeat(data: DsHeartbeatRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/heartbeat'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
   */
  getServersCountDetailed(queryParams?: { region?: string | null }): Promise<Response<DetailedCountServerResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/count/detailed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DetailedCountServerResponse,
      'DetailedCountServerResponse'
    )
  }
  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social Use the alternative GET of the same endpoint to upgrade DS connection to DSM via websocket. This endpoint is intended to be called by local dedicated server to let DSM know that it is ready for use. Use local DS only for development purposes since DSM wouldn&#39;t be able to properly manage local DS in production. This MUST be called by DS after it is ready to accept match data and incoming client connections. Upon successfully calling this endpoint, the dedicated server is listed under READY local servers.```
   */
  createServerLocalRegister(data: RegisterLocalServerRequest): Promise<Response<Server>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/local/register'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Server, 'Server')
  }
  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by local dedicated server to let DSM know that it is shutting down. Calling this will remove the server records from DB.```
   */
  createServerLocalDeregister(data: DeregisterLocalServerRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/local/deregister'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to query its session ID. DS should call this when it first receive player connection, to see if it is actually claimed```
   */
  getSession_ByPodName(podName: string): Promise<Response<ServerSessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/{podName}/session'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ServerSessionResponse, 'ServerSessionResponse')
  }
  /**
   * ``` Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint is intended to be called by dedicated server to get the session timeout that will be used for the DS. DS will use this session timeout to make sure it regularly make heartbeat call to the DSMC, before the session timeout.```
   */
  getConfigSessiontimeout_ByPodName(podName: string): Promise<Response<ServerDeploymentConfigSessionTimeoutResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/servers/{podName}/config/sessiontimeout'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServerDeploymentConfigSessionTimeoutResponse,
      'ServerDeploymentConfigSessionTimeoutResponse'
    )
  }
}
