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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'
import { CreateDsmConfigRequest } from '../generated-definitions/CreateDsmConfigRequest.js'
import { CreatePortRequest } from '../generated-definitions/CreatePortRequest.js'
import { DsmConfigRecord } from '../generated-definitions/DsmConfigRecord.js'
import { ImportResponse } from '../generated-definitions/ImportResponse.js'
import { ListConfigResponse } from '../generated-definitions/ListConfigResponse.js'
import { UpdateDsmConfigRequest } from '../generated-definitions/UpdateDsmConfigRequest.js'
import { UpdatePortRequest } from '../generated-definitions/UpdatePortRequest.js'

export function ConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers configs.
   */
  async function getConfigs(): Promise<ListConfigResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigs()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint adds/modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, &#34;image_version_mapping&#34;: { &#34;1.4.0&#34;: &#34;accelbyte/sample-ds-go:1.4.0&#34; }, &#34;default_version&#34;: &#34;1.4.0&#34;, &#34;cpu_limit&#34;: &#34;100&#34;, &#34;mem_limit&#34;: &#34;64&#34;, &#34;params&#34;: &#34;&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 0, &#34;configurations&#34;: { &#34;1player&#34;: { &#34;cpu_limit&#34;: &#34;100&#34;, &#34;mem_limit&#34;: &#34;64&#34;, &#34;params&#34;: &#34;-gamemode 1p&#34;, }, &#34;50players&#34;: { &#34;cpu_limit&#34;: &#34;200&#34;, &#34;mem_limit&#34;: &#34;512&#34;, &#34;params&#34;: &#34;-gamemode 50p&#34;, } }, &#34;deployments&#34;: { &#34;global-1p&#34;: { &#34;game_version&#34;: &#34;1.4.0&#34;&#34;, &#34;regions&#34;: [&#34;us-west&#34;, &#34;ap-southeast&#34;], &#34;configuration&#34;: &#34;1player&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 2 }, &#34;us-50p&#34;: { &#34;game_version&#34;: &#34;1.4.0&#34;&#34;, &#34;regions&#34;: [&#34;us-west&#34;], &#34;configuration&#34;: &#34;50players&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 5 }, }, } ```
   */
  async function createConfig_DEPRECATED(data: DsmConfigRecord): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfig_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint removes config. When there are ready servers, those servers will be removed. ```
   */
  async function deleteConfig(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers config in a namespace.
   */
  async function getConfigs_ByNS(): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigs_ByNS()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
   */
  async function patchConfig(data: UpdateDsmConfigRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates config. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
   */
  async function createConfig_ByNS(data: CreateDsmConfigRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfig_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint clears config cache in a namespace
   */
  async function deleteConfigCache(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfigCache()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint export a dedicated servers config in a namespace.
   */
  async function getConfigsExport(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigsExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint import a dedicated servers config in a namespace. If there is an existing configuration, the configuration would be replaced.
   */
  async function createConfigImport(data: { file?: File }): Promise<ImportResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server port config in a namespace
   */
  async function deleteConfigPort_ByName(name: string): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfigPort_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers port config in a namespace.
   */
  async function patchConfigPort_ByName(name: string, data: UpdatePortRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchConfigPort_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers port config in a namespace.
   */
  async function createConfigPort_ByName(name: string, data: CreatePortRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfigPort_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigs,
    createConfig_DEPRECATED,
    deleteConfig,
    getConfigs_ByNS,
    patchConfig,
    createConfig_ByNS,
    deleteConfigCache,
    getConfigsExport,
    createConfigImport,
    deleteConfigPort_ByName,
    patchConfigPort_ByName,
    createConfigPort_ByName
  }
}
