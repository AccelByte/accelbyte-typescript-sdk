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
import { AcceptAgreementRequest } from '../generated-definitions/AcceptAgreementRequest.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { AgreementAdmin$ } from './endpoints/AgreementAdmin$.js'

export function AgreementAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API will return users who has accepted a specific policy version.
   */
  async function getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    keyword?: string | null
    offset?: number
    limit?: number
  }): Promise<PagedRetrieveUserAcceptedAgreementResponse> {
    const $ = new AgreementAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicyVersionsUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will return all accepted Legal Agreements for specified user
   */
  async function getAgreementPolicyUser_ByUserId(userId: string): Promise<RetrieveAcceptedAgreementResponseArray> {
    const $ = new AgreementAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAgreementPolicyUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API will Update Preference Consent
   */
  async function patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<unknown> {
    const $ = new AgreementAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAgreementsPolicyVersionsUsers,
    getAgreementPolicyUser_ByUserId,
    patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId
  }
}
