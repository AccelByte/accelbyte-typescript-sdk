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

import { ExportAdmin$ } from './endpoints/ExportAdmin$.js'

export function ExportAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to export all of season service data files with csv format.
   */
  async function getExport(): Promise<unknown> {
    const $ = new ExportAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getExport
  }
}
