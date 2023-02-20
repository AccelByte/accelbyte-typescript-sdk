/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Agreement$ } from '@accelbyte/sdk/generated-public/legal/Agreement$'
import { AcceptAgreementRequest } from '@accelbyte/sdk/generated-public/legal/definitions/AcceptAgreementRequest'
import { Network } from '@accelbyte/sdk/utils/Network'

export class AgreementApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * POST [/agreement/public/agreements/policies](api)
   *
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.
   *
   * _Required permission_: login user
   */
  acceptLegalPolicies = (acceptAgreements: AcceptAgreementRequest[]) => {
    return this.newInstance().postPublicAgreementsPolicies(acceptAgreements)
  }

  /**
   * GET [/agreement/public/agreements/policies](api)
   *
   * Retrieve accepted Legal Agreements.
   *
   * _Required permission_: login user
   */
  getAgreements = () => {
    return this.newInstance().fetchPublicAgreementsPolicies()
  }

  /**
   * PATCH [/agreement/public/agreements/localized-policy-versions/preferences](api)
   *
   * Change marketing preference consent
   *
   * _Required permission_: login user
   */
  updateMarketingPreferences = (acceptAgreements: AcceptAgreementRequest[]) => {
    return this.newInstance().patchPublicAgreementsLocalizedPolicyVersionsPreferences(acceptAgreements)
  }

  private newInstance() {
    return new Agreement$(Network.create(this.conf), this.namespace, this.cache)
  }
}
