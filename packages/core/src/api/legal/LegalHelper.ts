/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AcceptedPoliciesRequest } from '@od-web-sdk/generated-public/iam/definitions/AcceptedPoliciesRequest'
import { LocalizedPolicyVersionObject } from '@od-web-sdk/generated-public/legal/definitions/LocalizedPolicyVersionObject'
import { PolicyVersionWithLocalizedVersionObject } from '@od-web-sdk/generated-public/legal/definitions/PolicyVersionWithLocalizedVersionObject'
import { RetrievePolicyPublicResponse } from '@od-web-sdk/generated-public/legal/definitions/RetrievePolicyPublicResponse'
import { RetrieveUserEligibilitiesResponse } from '@od-web-sdk/generated-public/legal/definitions/RetrieveUserEligibilitiesResponse'
import { RetrieveUserEligibilitiesResponseArray } from '@od-web-sdk/generated-public/legal/definitions/RetrieveUserEligibilitiesResponseArray'
import { DisplayedPolicy } from '@od-web-sdk/models/Legal'
import { UrlHelper } from '@od-web-sdk/utils/UrlHelper'

export class LegalHelper {
  static getDefaultLocalizedPolicy = (legalEligibility: RetrieveUserEligibilitiesResponse): PolicyVersionWithLocalizedVersionObject[] => {
    const lastVersions: PolicyVersionWithLocalizedVersionObject[] = legalEligibility.policyVersions?.slice(0, 1) || []

    return lastVersions
      .map((policyVersion: PolicyVersionWithLocalizedVersionObject) => {
        policyVersion.localizedPolicyVersions = policyVersion.localizedPolicyVersions?.filter(
          (localizedPolicyVersion: LocalizedPolicyVersionObject) => localizedPolicyVersion.isDefaultSelection
        )
        return policyVersion
      })
      .filter(
        (policyVersion: PolicyVersionWithLocalizedVersionObject) =>
          policyVersion.localizedPolicyVersions && policyVersion.localizedPolicyVersions.length > 0
      )
  }

  static getUnsignedPolicies = (userEligibilities: RetrieveUserEligibilitiesResponseArray): RetrieveUserEligibilitiesResponseArray => {
    const notAcceptedMandatoryLegal: RetrieveUserEligibilitiesResponseArray = userEligibilities.filter(
      (legalEligibility: RetrieveUserEligibilitiesResponse) => !legalEligibility.isAccepted && legalEligibility.isMandatory
    )

    return notAcceptedMandatoryLegal
      .map((legalEligibility: RetrieveUserEligibilitiesResponse) => {
        legalEligibility.policyVersions = LegalHelper.getDefaultLocalizedPolicy(legalEligibility)
        return legalEligibility
      })
      .filter(
        (legalEligibility: RetrieveUserEligibilitiesResponse) =>
          legalEligibility.policyVersions && legalEligibility.policyVersions.length > 0
      )
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
    if (legalWebURL) {
      return UrlHelper.combineURLPaths(legalWebURL, policyId || '')
    }
    return `/legal${policyId ? `/${policyId}` : ''}`
  }

  static getAcceptedPolicies(eligibilities: RetrieveUserEligibilitiesResponseArray): AcceptedPoliciesRequest[] {
    const localizedPolicyVersionIds: AcceptedPoliciesRequest[] = []
    for (const legalEligibility of eligibilities) {
      if (legalEligibility.policyVersions) {
        for (const policyVersion of legalEligibility.policyVersions) {
          if (policyVersion.localizedPolicyVersions) {
            for (const localizedPolicyVersion of policyVersion.localizedPolicyVersions) {
              localizedPolicyVersionIds.push({
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
    return localizedPolicyVersionIds
  }

  static currentUserIsBlockedByLegal = (eligibilities?: RetrieveUserEligibilitiesResponseArray | null): boolean => {
    return !!eligibilities?.length
  }
}
