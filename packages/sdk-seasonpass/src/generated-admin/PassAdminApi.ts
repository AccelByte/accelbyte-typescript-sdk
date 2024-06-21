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
import { PassCreate } from '../generated-definitions/PassCreate.js'
import { PassInfo } from '../generated-definitions/PassInfo.js'
import { PassInfoArray } from '../generated-definitions/PassInfoArray.js'
import { PassUpdate } from '../generated-definitions/PassUpdate.js'
import { UserPassGrant } from '../generated-definitions/UserPassGrant.js'
import { UserSeasonSummary } from '../generated-definitions/UserSeasonSummary.js'
import { PassAdmin$ } from './endpoints/PassAdmin$.js'

export function PassAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to query all passes for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPasses_BySeasonId(seasonId: string): Promise<PassInfoArray> {
    const $ = new PassAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPasses_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create a pass for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created pass&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPasse_BySeasonId(seasonId: string, data: PassCreate): Promise<PassInfo> {
    const $ = new PassAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPasse_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete a pass permanently, only draft season pass can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deletePasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<unknown> {
    const $ = new PassAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deletePasse_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a pass for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: pass data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<PassInfo> {
    const $ = new PassAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPasse_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update a pass. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated pass&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchPasse_BySeasonId_ByCode(seasonId: string, code: string, data: PassUpdate): Promise<PassInfo> {
    const $ = new PassAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchPasse_BySeasonId_ByCode(seasonId, code, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to grant pass to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentPasse_ByUserId(userId: string, data: UserPassGrant): Promise<UserSeasonSummary> {
    const $ = new PassAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentPasse_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPasses_BySeasonId,
    createPasse_BySeasonId,
    deletePasse_BySeasonId_ByCode,
    getPasse_BySeasonId_ByCode,
    patchPasse_BySeasonId_ByCode,
    createSeasonCurrentPasse_ByUserId
  }
}
