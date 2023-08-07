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
import { AcceptAgreementRequest } from './definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from './definitions/AcceptAgreementResponse.js'
import { Agreement$ } from './endpoints/Agreement$.js'
import { RetrieveAcceptedAgreementResponseArray } from './definitions/RetrieveAcceptedAgreementResponseArray.js'

export function AgreementApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Retrieve accepted Legal Agreements.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAgreementsPolicies(): Promise<RetrieveAcceptedAgreementResponseArray> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAgreementsPolicies()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreementPolicy(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function createAgreementPolicyUser_ByUserId(userId: string, data: AcceptAgreementRequest[]): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreementPolicyUser_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Change marketing preference consent.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<unknown> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreference(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<unknown> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAgreementsPolicies,
    createAgreementPolicy,
    createAgreementPolicyUser_ByUserId,
    patchAgreementLocalizedPolicyVersionPreference,
    createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId
  }
}
