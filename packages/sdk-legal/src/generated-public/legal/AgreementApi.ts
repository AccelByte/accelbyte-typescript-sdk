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
import { AcceptAgreementRequest } from './definitions/AcceptAgreementRequest'
import { AcceptAgreementResponse } from './definitions/AcceptAgreementResponse'
import { Agreement$ } from './endpoints/Agreement$'
import { RetrieveAcceptedAgreementResponseArray } from './definitions/RetrieveAcceptedAgreementResponseArray'

export function AgreementApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Retrieve accepted Legal Agreements.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function getAgreementsPolicies(): Promise<RetrieveAcceptedAgreementResponseArray> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAgreementsPolicies()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreementPolicy(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.<br><br/>Available Extra Information to return: <br/><ul><li><b>userIds</b> : List of userId mapping (<b>IMPORTANT: GOING TO DEPRECATE</b>)</li></ul>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function createAgreementPolicyUser_ByUserId(userId: string, data: AcceptAgreementRequest[]): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreementPolicyUser_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Change marketing preference consent.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<unknown> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreference(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<unknown> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <b>IMPORTANT: GOING TO DEPRECATE</b><br/><br/>Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:LEGAL", action=1 (CREATE)</li></ul>
   */
  async function createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(
    userId: string,
    countryCode: string,
    clientId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AcceptAgreementResponse> {
    const $ = new Agreement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(userId, countryCode, clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAgreementsPolicies,
    createAgreementPolicy,
    createAgreementPolicyUser_ByUserId,
    patchAgreementLocalizedPolicyVersionPreference,
    createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId
  }
}
