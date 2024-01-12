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
import { CreateDsmConfigRequest } from '../../generated-definitions/CreateDsmConfigRequest.js'
import { CreatePortRequest } from '../../generated-definitions/CreatePortRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { ImportResponse } from '../../generated-definitions/ImportResponse.js'
import { ListConfigResponse } from '../../generated-definitions/ListConfigResponse.js'
import { UpdateDsmConfigRequest } from '../../generated-definitions/UpdateDsmConfigRequest.js'
import { UpdatePortRequest } from '../../generated-definitions/UpdatePortRequest.js'

export class ConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers configs.
   */
  getConfigs(): Promise<IResponseWithSync<ListConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/configs'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListConfigResponse, 'ListConfigResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint removes config. When there are ready servers, those servers will be removed. ```
   */
  deleteConfig(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers config in a namespace.
   */
  getConfigs_ByNS(): Promise<IResponseWithSync<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
   */
  patchConfig(data: UpdateDsmConfigRequest): Promise<IResponse<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates config. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
   */
  createConfig(data: CreateDsmConfigRequest): Promise<IResponse<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint clears config cache in a namespace
   */
  deleteConfigCache(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/cache'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint export a dedicated servers config in a namespace.
   */
  getConfigsExport(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/v1/namespaces/{namespace}/configs/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint import a dedicated servers config in a namespace. If there is an existing configuration, the configuration would be replaced.
   */
  createConfigImport(data: { file?: File }): Promise<IResponse<ImportResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/v1/namespaces/{namespace}/configs/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ImportResponse, 'ImportResponse')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server port config in a namespace
   */
  deleteConfigPort_ByName(name: string): Promise<IResponse<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/ports/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers port config in a namespace.
   */
  patchConfigPort_ByName(name: string, data: UpdatePortRequest): Promise<IResponse<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/ports/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers port config in a namespace.
   */
  createConfigPort_ByName(name: string, data: CreatePortRequest): Promise<IResponse<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/configs/ports/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
  }
}
