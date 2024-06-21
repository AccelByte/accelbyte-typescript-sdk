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
import { BulkCreatePsnEventResponse } from '../generated-definitions/BulkCreatePsnEventResponse.js'
import { BulkCreatePsnEvents } from '../generated-definitions/BulkCreatePsnEvents.js'
import { PlatformAchievementAdmin$ } from './endpoints/PlatformAchievementAdmin$.js'

export function PlatformAchievementAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Create PSN UDS events. Player need to login first using playstation token to IAM service.
   */
  async function createPlatformPsnBulk(data: BulkCreatePsnEvents): Promise<BulkCreatePsnEventResponse> {
    const $ = new PlatformAchievementAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPlatformPsnBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createPlatformPsnBulk
  }
}
