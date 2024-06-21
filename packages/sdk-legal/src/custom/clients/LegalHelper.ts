/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UrlHelper } from '@accelbyte/sdk'
import isURL from 'validator/lib/isURL.js'
import { RetrieveUserEligibilitiesResponseArray } from '../../generated-definitions/RetrieveUserEligibilitiesResponseArray.js'
import { DisplayedPolicy } from '../models/Legal.js'
import { RetrievePolicyPublicResponse } from '../../generated-definitions/RetrievePolicyPublicResponse.js'
import { AcceptedPoliciesRequest } from '@accelbyte/sdk-iam'
import { RetrieveUserEligibilitiesResponse } from '../../generated-definitions/RetrieveUserEligibilitiesResponse.js'
import { PolicyVersionWithLocalizedVersionObject } from '../../generated-definitions/PolicyVersionWithLocalizedVersionObject.js'
import DOMPurify from 'dompurify'

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

  static createLegalURL({ legalBaseUrl, policyId, languageId }: { legalBaseUrl?: string; policyId?: string; languageId?: string }): string {
    if (!legalBaseUrl) return `${languageId ? `/${languageId}` : ''}/legal${policyId ? `/${policyId}` : ''}`

    if (isURL(legalBaseUrl)) {
      const { origin, pathname } = new URL(legalBaseUrl)
      const legalUrl = UrlHelper.combineURLPaths(origin, languageId || '', pathname)
      return UrlHelper.combineURLPaths(legalUrl, policyId || '')
    }

    return UrlHelper.combinePaths(legalBaseUrl, policyId || '')
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

  static sanitizeHTML = (document: string) => {
    const domPurifyOption: DOMPurify.Config = {
      WHOLE_DOCUMENT: true,
      ADD_TAGS: ['head', 'meta', 'link'],
      ADD_ATTR: ['content', 'property', 'http-equiv', 'charset', 'target']
    }
    const sanitizedHTML = DOMPurify.sanitize(document, domPurifyOption)
    return sanitizedHTML
  }
}
