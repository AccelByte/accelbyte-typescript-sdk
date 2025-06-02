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
import { Ownership } from '../../generated-definitions/Ownership.js'
import { PlatformOwnership } from '../../generated-definitions/PlatformOwnership.js'
import { PsnEntitlementOwnershipRequest } from '../../generated-definitions/PsnEntitlementOwnershipRequest.js'
import { XblEntitlementOwnershipRequest } from '../../generated-definitions/XblEntitlementOwnershipRequest.js'

export class PlatformAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get Xbox entitlement ownership by product sku.
   */
  createOwnershipXblPlatform_ByProductSku(productSku: string, data: XblEntitlementOwnershipRequest): Promise<Response<PlatformOwnership>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/xbl/entitlements/{productSku}/ownership'
      .replace('{namespace}', this.namespace)
      .replace('{productSku}', productSku)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlatformOwnership, 'PlatformOwnership')
  }
  /**
   * Get user psn entitlement ownership by entitlement label.
   */
  createOwnershipPsnPlatform_ByEntitlementLabel(
    entitlementLabel: string,
    data: PsnEntitlementOwnershipRequest
  ): Promise<Response<Ownership>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/psn/entitlements/{entitlementLabel}/ownership'
      .replace('{namespace}', this.namespace)
      .replace('{entitlementLabel}', entitlementLabel)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Ownership, 'Ownership')
  }
}
