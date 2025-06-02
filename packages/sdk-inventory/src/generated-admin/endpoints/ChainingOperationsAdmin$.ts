/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ChainingOperationReq } from '../../generated-definitions/ChainingOperationReq.js'
import { ChainingOperationResp } from '../../generated-definitions/ChainingOperationResp.js'

export class ChainingOperationsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  Create chaining Operations. This process will run sequentially 1. remove item process 2. consume item process 3. update item process 4. create item process if toSpecificInventory set as true, then inventoryId field will be mandatory, vice versa The behavior of each process is same with current admin level endpoint requestId: Request id(Optional), client should provide a unique request id to perform at most once execution, When a request id is resubmitted, it will return original successful response replayed : replayed, if true,the response is original successful response. This will not be included in response if client have not pass request id. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  createChainingOperation(data: ChainingOperationReq): Promise<Response<ChainingOperationResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/chainingOperations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChainingOperationResp, 'ChainingOperationResp')
  }
}
