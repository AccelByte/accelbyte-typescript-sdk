/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const RetrieveAcceptedAgreementResponse = z.object({
  countryCode: z.string().nullish(),
  countryGroupName: z.string().nullish(),
  countryType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  displayVersion: z.string().nullish(),
  id: z.string(),
  isAccepted: z.boolean().nullish(),
  localizedPolicyVersion: LocalizedPolicyVersionObject.nullish(),
  namespace: z.string().nullish(),
  policyId: z.string().nullish(),
  policyName: z.string().nullish(),
  policyType: z.string().nullish(),
  signingDate: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish()
})

export interface RetrieveAcceptedAgreementResponse extends z.TypeOf<typeof RetrieveAcceptedAgreementResponse> {}
