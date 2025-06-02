/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ChainingOperationsAdminApi } from '../ChainingOperationsAdminApi.js'

import { ChainingOperationReq } from '../../generated-definitions/ChainingOperationReq.js'
import { ChainingOperationResp } from '../../generated-definitions/ChainingOperationResp.js'

export enum Key_ChainingOperationsAdmin {
  ChainingOperation = 'Inventory.ChainingOperationsAdmin.ChainingOperation'
}

/**
 *  Create chaining Operations. This process will run sequentially 1. remove item process 2. consume item process 3. update item process 4. create item process if toSpecificInventory set as true, then inventoryId field will be mandatory, vice versa The behavior of each process is same with current admin level endpoint requestId: Request id(Optional), client should provide a unique request id to perform at most once execution, When a request id is resubmitted, it will return original successful response replayed : replayed, if true,the response is original successful response. This will not be included in response if client have not pass request id. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChainingOperationsAdmin.ChainingOperation, input]
 * }
 * ```
 */
export const useChainingOperationsAdminApi_CreateChainingOperationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ChainingOperationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: ChainingOperationReq }>,
    'mutationKey'
  >,
  callback?: (data: ChainingOperationResp) => void
): UseMutationResult<ChainingOperationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: ChainingOperationReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ChainingOperationReq }) => {
    const response = await ChainingOperationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createChainingOperation(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChainingOperationsAdmin.ChainingOperation],
    mutationFn,
    ...options
  })
}
