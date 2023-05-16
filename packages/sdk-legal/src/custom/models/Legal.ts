/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionWithLocalizedVersionObject } from '../../generated-public/legal/definitions/PolicyVersionWithLocalizedVersionObject.js'
import { RetrieveAcceptedAgreementResponse } from '../../generated-public/legal/definitions/RetrieveAcceptedAgreementResponse.js'

export const DisplayedPolicy = z.object({
  policyName: z.string(),
  policyId: z.string(),
  policyVersionId: z.string(),
  localizedPolicyVersionId: z.string(),
  isMandatory: z.boolean(),
  description: z.string().nullish(),
  policyType: z.string().optional()
})
export type DisplayedPolicy = z.TypeOf<typeof DisplayedPolicy>

// ts-prune-ignore-next
export const LegalPolicyType = {
  LEGAL_DOCUMENT: 'Legal Document',
  MARKETING_PREFERENCE: 'Marketing Preference'
}

// ts-prune-ignore-next
export interface UserAgreementPolicyVersion extends RetrieveAcceptedAgreementResponse {
  policyVersion?: PolicyVersionWithLocalizedVersionObject
}
