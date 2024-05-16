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
import { NamespaceAdmin$ } from './endpoints/NamespaceAdmin$.js'
import { NamespaceContext } from '../generated-definitions/NamespaceContext.js'
import { NamespaceCreate } from '../generated-definitions/NamespaceCreate.js'
import { NamespaceInfo } from '../generated-definitions/NamespaceInfo.js'
import { NamespaceInfoArray } from '../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceStatusUpdate } from '../generated-definitions/NamespaceStatusUpdate.js'
import { NamespaceUpdate } from '../generated-definitions/NamespaceUpdate.js'

export function NamespaceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  async function getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<NamespaceInfoArray> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getNamespaces(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a namespace.&lt;br&gt;By default the namespace is enabled.&lt;br&gt;In multi tenant mode, parentNamespace will be automatically filled with requester namespace if the requester is using studio or publisher token, and it will be filled with studio namespace if the requester uses game token. An oauth client will also be created and the id will be returned. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11301&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function createNamespace(data: NamespaceCreate): Promise<NamespaceInfo> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createNamespace(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11307&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: deleted namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteNamespace_ByNamespace(): Promise<NamespaceInfo> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteNamespace_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a namespace.&lt;br&gt;In multi tenant mode, parentNamespace will be returned.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11304&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function getNamespace_ByNamespace(queryParams?: { activeOnly?: boolean | null }): Promise<NamespaceInfo> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getNamespace_ByNamespace(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game namespaces.&lt;br&gt;In multi tenant mode, a given super admin namespace will return all game namespaces of studio namespaces&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11308&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGame(queryParams?: { activeOnly?: boolean | null }): Promise<NamespaceInfoArray> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getGame(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update namespace basic info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11302&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchBasic(data: NamespaceUpdate): Promise<NamespaceInfo> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchBasic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get child namespaces.&lt;br&gt;If input namespace is publisher namespace, then it will return its all studio namespace.&lt;br&gt;If input namespace is studio namespace, then it will return its all game namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  async function getChild(queryParams?: { activeOnly?: boolean | null }): Promise<NamespaceInfoArray> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getChild(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Change a namespace status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Action code&lt;i&gt;&lt;/i&gt;: 11306&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStatus(data: NamespaceStatusUpdate): Promise<NamespaceInfo> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchStatus(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get context of namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: context of namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function getContext(): Promise<NamespaceContext> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getContext()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPublisher(): Promise<NamespacePublisherInfo> {
    const $ = new NamespaceAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPublisher()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespaces,
    createNamespace,
    deleteNamespace_ByNamespace,
    getNamespace_ByNamespace,
    getGame,
    patchBasic,
    getChild,
    patchStatus,
    getContext,
    getPublisher
  }
}
