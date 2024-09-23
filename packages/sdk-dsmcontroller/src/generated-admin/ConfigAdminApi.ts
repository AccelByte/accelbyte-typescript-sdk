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
import { CreateDsmConfigRequest } from '../generated-definitions/CreateDsmConfigRequest.js'
import { CreatePortRequest } from '../generated-definitions/CreatePortRequest.js'
import { DsmConfigRecord } from '../generated-definitions/DsmConfigRecord.js'
import { ImportResponse } from '../generated-definitions/ImportResponse.js'
import { ListConfigResponse } from '../generated-definitions/ListConfigResponse.js'
import { UpdateDsmConfigRequest } from '../generated-definitions/UpdateDsmConfigRequest.js'
import { UpdatePortRequest } from '../generated-definitions/UpdatePortRequest.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'

export function ConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getConfigs(): Promise<AxiosResponse<ListConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigs()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfig(data: DsmConfigRecord): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfig(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigs_ByNS(): Promise<AxiosResponse<DsmConfigRecord>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigs_ByNS()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfig(data: UpdateDsmConfigRequest): Promise<AxiosResponse<DsmConfigRecord>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfig_ByNS(data: CreateDsmConfigRequest): Promise<AxiosResponse<DsmConfigRecord>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfig_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfigCache(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigCache()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigsExport(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigsExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfigImport(data: { file?: File }): Promise<AxiosResponse<ImportResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfigPort_ByName(name: string): Promise<AxiosResponse<DsmConfigRecord>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigPort_ByName(name)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfigPort_ByName(name: string, data: UpdatePortRequest): Promise<AxiosResponse<DsmConfigRecord>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfigPort_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfigPort_ByName(name: string, data: CreatePortRequest): Promise<AxiosResponse<DsmConfigRecord>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigPort_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers configs.
     */
    getConfigs,
    /**
     * @deprecated
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint adds/modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, &#34;image_version_mapping&#34;: { &#34;1.4.0&#34;: &#34;accelbyte/sample-ds-go:1.4.0&#34; }, &#34;default_version&#34;: &#34;1.4.0&#34;, &#34;cpu_limit&#34;: &#34;100&#34;, &#34;mem_limit&#34;: &#34;64&#34;, &#34;params&#34;: &#34;&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 0, &#34;configurations&#34;: { &#34;1player&#34;: { &#34;cpu_limit&#34;: &#34;100&#34;, &#34;mem_limit&#34;: &#34;64&#34;, &#34;params&#34;: &#34;-gamemode 1p&#34;, }, &#34;50players&#34;: { &#34;cpu_limit&#34;: &#34;200&#34;, &#34;mem_limit&#34;: &#34;512&#34;, &#34;params&#34;: &#34;-gamemode 50p&#34;, } }, &#34;deployments&#34;: { &#34;global-1p&#34;: { &#34;game_version&#34;: &#34;1.4.0&#34;&#34;, &#34;regions&#34;: [&#34;us-west&#34;, &#34;ap-southeast&#34;], &#34;configuration&#34;: &#34;1player&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 2 }, &#34;us-50p&#34;: { &#34;game_version&#34;: &#34;1.4.0&#34;&#34;, &#34;regions&#34;: [&#34;us-west&#34;], &#34;configuration&#34;: &#34;50players&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 5 }, }, } ```
     */
    createConfig,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint removes config. When there are ready servers, those servers will be removed. ```
     */
    deleteConfig,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers config in a namespace.
     */
    getConfigs_ByNS,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
     */
    patchConfig,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates config. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
     */
    createConfig_ByNS,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint clears config cache in a namespace
     */
    deleteConfigCache,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint export a dedicated servers config in a namespace.
     */
    getConfigsExport,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint import a dedicated servers config in a namespace. If there is an existing configuration, the configuration would be replaced.
     */
    createConfigImport,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server port config in a namespace
     */
    deleteConfigPort_ByName,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers port config in a namespace.
     */
    patchConfigPort_ByName,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers port config in a namespace.
     */
    createConfigPort_ByName
  }
}
