/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Agreement$ } from '@od-web-sdk/generated-public/legal/Agreement$'
import { AcceptAgreementRequest } from '@od-web-sdk/generated-public/legal/definitions/AcceptAgreementRequest'
import { Network } from '@od-web-sdk/utils/Network'

export class AgreementApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Agreement$(Network.create(this.conf), this.namespace, this.cache)
  }

  acceptLegalPolicies(acceptAgreements: AcceptAgreementRequest[]) {
    return this.newInstance().postPublicAgreementsPolicies(acceptAgreements)
  }

  getAgreements() {
    return this.newInstance().fetchPublicAgreementsPolicies()
  }

  updateMarketingPreferences(acceptAgreements: AcceptAgreementRequest[]) {
    return this.newInstance().patchPublicAgreementsLocalizedPolicyVersionsPreferences(acceptAgreements)
  }
}
