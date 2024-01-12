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
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers configs.
   */
  async function getConfigs(): Promise<ListConfigResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getConfigs()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint removes config. When there are ready servers, those servers will be removed. ```
   */
  async function deleteConfig(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers config in a namespace.
   */
  async function getConfigs_ByNS(): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getConfigs_ByNS()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
   */
  async function patchConfig(data: UpdateDsmConfigRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates config. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
   */
  async function createConfig(data: CreateDsmConfigRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint clears config cache in a namespace
   */
  async function deleteConfigCache(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteConfigCache()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint export a dedicated servers config in a namespace.
   */
  async function getConfigsExport(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getConfigsExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint import a dedicated servers config in a namespace. If there is an existing configuration, the configuration would be replaced.
   */
  async function createConfigImport(data: { file?: File }): Promise<ImportResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server port config in a namespace
   */
  async function deleteConfigPort_ByName(name: string): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteConfigPort_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers port config in a namespace.
   */
  async function patchConfigPort_ByName(name: string, data: UpdatePortRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchConfigPort_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers port config in a namespace.
   */
  async function createConfigPort_ByName(name: string, data: CreatePortRequest): Promise<DsmConfigRecord> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createConfigPort_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigs,
    deleteConfig,
    getConfigs_ByNS,
    patchConfig,
    createConfig,
    deleteConfigCache,
    getConfigsExport,
    createConfigImport,
    deleteConfigPort_ByName,
    patchConfigPort_ByName,
    createConfigPort_ByName
  }
}
