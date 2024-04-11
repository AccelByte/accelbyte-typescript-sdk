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
import { DownloadExportedAgreementsInCsvResponse } from '../generated-definitions/DownloadExportedAgreementsInCsvResponse.js'
import { InitiateExportAgreementsToCsvResponse } from '../generated-definitions/InitiateExportAgreementsToCsvResponse.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../generated-definitions/UsersAgreementsRequest.js'

export function AgreementWithNamespaceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createAgreement(data: UsersAgreementsRequest): Promise<UserAgreementsResponseArray> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createAgreement(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will return all users who has accepted a specific policy version.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    convertGameUserId?: boolean | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<PagedRetrieveUserAcceptedAgreementResponse> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getAgreementsPolicyVersionsUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will return all accepted Legal Agreements for specified user. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAgreementPolicyUser_ByUserId(
    userId: string,
    queryParams?: { excludeOtherNamespacesPolicies?: boolean | null }
  ): Promise<RetrieveAcceptedAgreementResponseArray> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getAgreementPolicyUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will check the status of export process.&lt;br&gt;If the export process has been completed, the response body will include the download url.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAgreementsPolicyVersionsUsersExportCsvDownload(queryParams: {
    policyVersionId: string | null
  }): Promise<DownloadExportedAgreementsInCsvResponse> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getAgreementsPolicyVersionsUsersExportCsvDownload(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will initiate a worker to export list of users who has accepted a specific policy version into a CSV file.&lt;br&gt;To check the export state after initialize it, use `GET /admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download` API.&lt;br/&gt;&lt;br/&gt;This Initiate API is &lt;b&gt;not allow&lt;/b&gt; multiple export worker running for the same namespace, it will return 409 http error if so.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createAgreementPolicyVersionUserExportCsvInitiate(queryParams: {
    policyVersionId: string | null
  }): Promise<InitiateExportAgreementsToCsvResponse> {
    const $ = new AgreementWithNamespaceAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createAgreementPolicyVersionUserExportCsvInitiate(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createAgreement,
    getAgreementsPolicyVersionsUsers,
    getAgreementPolicyUser_ByUserId,
    getAgreementsPolicyVersionsUsersExportCsvDownload,
    createAgreementPolicyVersionUserExportCsvInitiate
  }
}
