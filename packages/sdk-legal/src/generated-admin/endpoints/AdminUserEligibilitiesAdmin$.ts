/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RetrieveUserEligibilitiesIndirectResponse } from '../../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'

export class AdminUserEligibilitiesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.
   */
  getEligibilities_ByUserId(
    userId: string,
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  ): Promise<IResponse<RetrieveUserEligibilitiesIndirectResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/users/{userId}/eligibilities'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrieveUserEligibilitiesIndirectResponse,
      'RetrieveUserEligibilitiesIndirectResponse'
    )
  }
}
