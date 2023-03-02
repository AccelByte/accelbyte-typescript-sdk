/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AcceptedPoliciesRequest } from '@accelbyte/sdk/generated-public/iam/definitions/AcceptedPoliciesRequest'
import { PolicyVersionWithLocalizedVersionObject } from '@accelbyte/sdk/generated-public/legal/definitions/PolicyVersionWithLocalizedVersionObject'
import { RetrievePolicyPublicResponse } from '@accelbyte/sdk/generated-public/legal/definitions/RetrievePolicyPublicResponse'
import { RetrieveUserEligibilitiesResponse } from '@accelbyte/sdk/generated-public/legal/definitions/RetrieveUserEligibilitiesResponse'
import { RetrieveUserEligibilitiesResponseArray } from '@accelbyte/sdk/generated-public/legal/definitions/RetrieveUserEligibilitiesResponseArray'
import { DisplayedPolicy } from '@accelbyte/sdk/models/Legal'
import { UrlHelper } from '@accelbyte/sdk/utils/UrlHelper'
import isURL from 'validator/lib/isURL.js'

export class LegalHelper {
  static getUnsignedPolicies = (userEligibilities: RetrieveUserEligibilitiesResponseArray): RetrieveUserEligibilitiesResponseArray => {
    const legals: RetrieveUserEligibilitiesResponseArray = []

    for (const legal of userEligibilities) {
      const policyVersions = LegalHelper.getDefaultLocalizedPolicy(legal)

      if (!legal.isAccepted && legal.isMandatory && policyVersions.length > 0) {
        legals.push({ ...legal, policyVersions })
      }
    }

    return legals
  }

  static convertPoliciesToDisplayedPolicies(policies: RetrievePolicyPublicResponse[], namespace: string): DisplayedPolicy[] {
    const displayedPolicies: DisplayedPolicy[] = []

    for (const policy of policies) {
      if (policy.namespace === namespace && policy.policyVersions?.length) {
        const policyVersion = policy.policyVersions[0]
        if (policyVersion.localizedPolicyVersions?.length) {
          const localizedPolicyVersion = policyVersion.localizedPolicyVersions.find(localization => localization.isDefaultSelection)
          if (localizedPolicyVersion) {
            displayedPolicies.push({
              policyName: policy.policyName,
              policyId: policy.id,
              policyVersionId: policyVersion.id,
              localizedPolicyVersionId: localizedPolicyVersion.id,
              isMandatory: policy.isMandatory,
              description: policy.description,
              policyType: policy.policyType
            })
          }
        }
      }
    }

    return displayedPolicies
  }

  static createLegalURL(legalWebURL?: string, policyId?: string): string {
    if (!legalWebURL) return `/legal${policyId ? `/${policyId}` : ''}`

    if (isURL(legalWebURL)) return UrlHelper.combineURLPaths(legalWebURL, policyId || '')

    return UrlHelper.combinePaths(legalWebURL, policyId || '')
  }

  static getAcceptedPolicies(eligibilities: RetrieveUserEligibilitiesResponseArray): AcceptedPoliciesRequest[] {
    const acceptedPolicies: AcceptedPoliciesRequest[] = []
    for (const legalEligibility of eligibilities) {
      if (legalEligibility.policyVersions) {
        for (const policyVersion of legalEligibility.policyVersions) {
          if (policyVersion.localizedPolicyVersions) {
            for (const localizedPolicyVersion of policyVersion.localizedPolicyVersions) {
              acceptedPolicies.push({
                policyId: legalEligibility.policyId,
                policyVersionId: policyVersion.id,
                localizedPolicyVersionId: localizedPolicyVersion.id,
                isAccepted: true
              })
            }
          }
        }
      }
    }
    return acceptedPolicies
  }

  static currentUserIsBlockedByLegal = (eligibilities?: RetrieveUserEligibilitiesResponseArray | null): boolean => {
    return eligibilities ? eligibilities.length > 0 : false
  }

  private static getDefaultLocalizedPolicy = (
    legalEligibility: RetrieveUserEligibilitiesResponse
  ): PolicyVersionWithLocalizedVersionObject[] => {
    const lastVersions = legalEligibility.policyVersions?.slice(0, 1) || []
    let localizedPolicyVersions = lastVersions[0].localizedPolicyVersions || []
    localizedPolicyVersions = localizedPolicyVersions.filter(item => item.isDefaultSelection)

    if (localizedPolicyVersions.length === 0) return []

    lastVersions[0].localizedPolicyVersions = localizedPolicyVersions
    return lastVersions
  }
}
