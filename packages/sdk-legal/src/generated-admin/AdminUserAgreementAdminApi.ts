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
import { AdminUserAgreementAdmin$ } from './endpoints/AdminUserAgreementAdmin$.js'

export function AdminUserAgreementAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement.
   */
  async function createAgreementPolicy_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[],
    queryParams: { countryCode: string | null; clientId: string | null; publisherUserId?: string | null }
  ): Promise<AcceptAgreementResponse> {
    const $ = new AdminUserAgreementAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicy_ByUserId(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createAgreementPolicy_ByUserId
  }
}
