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
import { GetProfileUpdateStrategyConfigResponse } from '../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'
import { SimpleProfileUpdateStrategyConfigs } from '../generated-definitions/SimpleProfileUpdateStrategyConfigs.js'
import { UpdateProfileUpdateStrategyConfigRequest } from '../generated-definitions/UpdateProfileUpdateStrategyConfigRequest.js'
import { ProfileUpdateStrategyAdmin$ } from './endpoints/ProfileUpdateStrategyAdmin$.js'

export function ProfileUpdateStrategyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is for admin to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
   */
  async function getProfileUpdateStrategies(queryParams?: {
    field?: 'country' | 'display_name' | 'dob' | 'username'
  }): Promise<GetProfileUpdateStrategyConfigResponse> {
    const $ = new ProfileUpdateStrategyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getProfileUpdateStrategies(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API includes upsert behavior. Note: 1. field &#39;config&#39;&#39; in request body will only work when type is limited
   */
  async function updateProfileUpdateStrategy(
    data: UpdateProfileUpdateStrategyConfigRequest,
    queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
  ): Promise<SimpleProfileUpdateStrategyConfigs> {
    const $ = new ProfileUpdateStrategyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateProfileUpdateStrategy(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProfileUpdateStrategies,
    updateProfileUpdateStrategy
  }
}
