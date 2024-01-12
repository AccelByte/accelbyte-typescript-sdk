/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CountServerResponse } from '../../generated-definitions/CountServerResponse.js'
import { CountSessionResponse } from '../../generated-definitions/CountSessionResponse.js'
import { DetailedCountServerResponse } from '../../generated-definitions/DetailedCountServerResponse.js'
import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'
import { ListSessionResponse } from '../../generated-definitions/ListSessionResponse.js'
import { Server } from '../../generated-definitions/Server.js'

export class AdminAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
   */
  getServers(queryParams: { count: number; offset: number; region?: string | null }): Promise<IResponseWithSync<ListServerResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListServerResponse, 'ListServerResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint lists all of sessions in a namespace managed by this service. Parameter Offset and Count is Required
   */
  getSessions(queryParams: {
    count: number
    offset: number
    region?: string | null
    withServer?: boolean | null
  }): Promise<IResponseWithSync<ListSessionResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/sessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListSessionResponse, 'ListSessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a namespace managed by this service.
   */
  getServersCount(): Promise<IResponseWithSync<CountServerResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/count'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountServerResponse, 'CountServerResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of local dedicated servers in a namespace managed by this service.
   */
  getServersLocal(): Promise<IResponseWithSync<ListServerResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/local'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListServerResponse, 'ListServerResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint count all of sessions in a namespace managed by this service.
   */
  getSessionsCount(queryParams?: { region?: string | null }): Promise<IResponseWithSync<CountSessionResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/sessions/count'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountSessionResponse, 'CountSessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified dedicated server from DB and terminates the DS pod.
   */
  deleteServer_ByPodName(podName: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/{podName}'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint queries a specified dedicated server from DB.
   */
  getServer_ByPodName(podName: string): Promise<IResponseWithSync<Server>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/{podName}'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Server, 'Server')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified local dedicated server from DB. Note that DSM has no ability to shutdown local DS.
   */
  deleteServerLocal_ByName(name: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/local/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint deletes a specified session and its corresponding match result from DB.
   */
  deleteSession_BySessionId(sessionID: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/sessions/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
   */
  getServersCountDetailed(queryParams?: { region?: string | null }): Promise<IResponseWithSync<DetailedCountServerResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/servers/count/detailed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DetailedCountServerResponse, 'DetailedCountServerResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
