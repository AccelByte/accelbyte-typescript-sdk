/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject'

export const RetrieveAcceptedAgreementResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  policyId: z.string().nullish(),
  policyType: z.string().nullish(),
  policyName: z.string().nullish(),
  displayVersion: z.string().nullish(),
  namespace: z.string().nullish(),
  countryCode: z.string().nullish(),
  description: z.string().nullish(),
  localizedPolicyVersion: LocalizedPolicyVersionObject.nullish(),
  signingDate: z.string().nullish(),
  isAccepted: z.boolean().nullish()
})

export type RetrieveAcceptedAgreementResponse = z.TypeOf<typeof RetrieveAcceptedAgreementResponse>
