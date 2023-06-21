/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { DataDeletion$ } from './endpoints/DataDeletion$.js'
import { DeletionStatus } from './definitions/DeletionStatus.js'
import { RequestDeleteResponse } from './definitions/RequestDeleteResponse.js'

export function DataDeletionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Requires valid user access token&lt;br&gt; This is for in-game only and require a valid platformId and platform token. If a full account is not logged by 3rd platform, then please use &lt;a href=&#39;#operations-Data_Deletion-PublicSubmitUserAccountDeletionRequest&#39;&gt;/gdpr/public/namespaces/{namespace}/users/{userId}/deletions&lt;/a&gt;
   */
  async function postUserMeDeletion(data: { platformId: string | null; platformToken: string | null }): Promise<RequestDeleteResponse> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postUserMeDeletion(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  async function deleteDeletion_ByUserId(userId: string): Promise<unknown> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user access token and password
   */
  async function postDeletion_ByUserId(userId: string, data: { password: string | null }): Promise<RequestDeleteResponse> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postDeletion_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  async function getDeletionsStatus_ByUserId(userId: string): Promise<DeletionStatus> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDeletionsStatus_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    postUserMeDeletion,
    deleteDeletion_ByUserId,
    postDeletion_ByUserId,
    getDeletionsStatus_ByUserId
  }
}
