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
import { AdminChainingOperationsAdmin$ } from './endpoints/AdminChainingOperationsAdmin$.js'
import { ChainingOperationReq } from '../generated-definitions/ChainingOperationReq.js'
import { ChainingOperationResp } from '../generated-definitions/ChainingOperationResp.js'

export function AdminChainingOperationsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  Create chaining Operations. This process will run sequentially 1. remove item process 2. consume item process 3. update item process 4. create item process if toSpecificInventory set as true, then inventoryId field will be mandatory, vice versa The behavior of each process is same with current admin level endpoint requestId: Request id(Optional), client should provide a unique request id to perform at most once execution, When a request id is resubmitted, it will return original successful response replayed : replayed, if true,the response is original successful response. This will not be included in response if client have not pass request id. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createChainingOperation(data: ChainingOperationReq): Promise<ChainingOperationResp> {
    const $ = new AdminChainingOperationsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createChainingOperation(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createChainingOperation
  }
}
