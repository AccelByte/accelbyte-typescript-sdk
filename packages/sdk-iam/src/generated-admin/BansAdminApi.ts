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
import { BanReasonsV3 } from '../generated-definitions/BanReasonsV3.js'
import { BansAdmin$ } from './endpoints/BansAdmin$.js'
import { BansV3 } from '../generated-definitions/BansV3.js'
import { BulkBanCreateRequestV3 } from '../generated-definitions/BulkBanCreateRequestV3.js'
import { BulkUnbanCreateRequestV3 } from '../generated-definitions/BulkUnbanCreateRequestV3.js'
import { GetUserBanV3Response } from '../generated-definitions/GetUserBanV3Response.js'
import { ListBulkUserBanResponseV3 } from '../generated-definitions/ListBulkUserBanResponseV3.js'

export function BansAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  async function getBans(): Promise<BansV3> {
    const $ = new BansAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getBans()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ban reasons is the code available to justify ban assignment. It is applicable globally for any namespace. action code : 10202
   */
  async function getBansReasons(): Promise<BanReasonsV3> {
    const $ = new BansAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getBansReasons()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  async function getBantypes(): Promise<BansV3> {
    const $ = new BansAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getBantypes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  async function getBansUsers(queryParams?: {
    activeOnly?: boolean | null
    banType?: string | null
    limit?: number
    offset?: number
  }): Promise<GetUserBanV3Response> {
    const $ = new BansAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getBansUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk ban user with specific type of ban. Ban types and reason can be queried. The maximum limit value is 100 userIDs action code : 10141
   */
  async function createBanUser(data: BulkBanCreateRequestV3): Promise<ListBulkUserBanResponseV3> {
    const $ = new BansAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createBanUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * disable bulk ban user. The maximum limit value is 100 action code : 10142
   */
  async function patchBanUserDisabled(data: BulkUnbanCreateRequestV3): Promise<ListBulkUserBanResponseV3> {
    const $ = new BansAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.patchBanUserDisabled(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBans,
    getBansReasons,
    getBantypes,
    getBansUsers,
    createBanUser,
    patchBanUserDisabled
  }
}
