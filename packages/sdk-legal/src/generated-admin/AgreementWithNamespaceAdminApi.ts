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
import { AgreementWithNamespaceAdmin$ } from './endpoints/AgreementWithNamespaceAdmin$.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../generated-definitions/UsersAgreementsRequest.js'

export function AgreementWithNamespaceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game accountOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createAgreement(data: UsersAgreementsRequest): Promise<UserAgreementsResponseArray> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreement(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will return all users who has accepted a specific policy version.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    convertGameUserId?: boolean | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<PagedRetrieveUserAcceptedAgreementResponse> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAgreementsPolicyVersionsUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will return all accepted Legal Agreements for specified user. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAgreementPolicyUser_ByUserId(
    userId: string,
    queryParams?: { excludeOtherNamespacesPolicies?: boolean | null }
  ): Promise<RetrieveAcceptedAgreementResponseArray> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAgreementPolicyUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createAgreement,
    getAgreementsPolicyVersionsUsers,
    getAgreementPolicyUser_ByUserId
  }
}
