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
import { AcceptAgreementResponse } from '../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { Agreement$ } from './endpoints/Agreement$.js'

export function AgreementApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Retrieve accepted Legal Agreements.
   */
  async function getAgreementsPolicies(): Promise<RetrieveAcceptedAgreementResponseArray> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicies()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.
   */
  async function createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicy(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.
   */
  async function createAgreementPolicyUser_ByUserId_DEPRECATED(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicyUser_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Change marketing preference consent.
   */
  async function patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<unknown> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreference(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement
   */
  async function createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<unknown> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.
   */
  async function createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId_DEPRECATED(
    countryCode: string,
    clientId: string,
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId_DEPRECATED(countryCode, clientId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAgreementsPolicies,
    createAgreementPolicy,
    createAgreementPolicyUser_ByUserId_DEPRECATED,
    patchAgreementLocalizedPolicyVersionPreference,
    createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId_DEPRECATED
  }
}
