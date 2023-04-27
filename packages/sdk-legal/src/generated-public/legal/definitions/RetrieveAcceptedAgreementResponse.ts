/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const RetrieveAcceptedAgreementResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  policyId: z.string().nullish(),
  policyType: z.string().nullish(),
  policyName: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  displayVersion: z.string().nullish(),
  namespace: z.string().nullish(),
  countryCode: z.string().nullish(),
  description: z.string().nullish(),
  localizedPolicyVersion: LocalizedPolicyVersionObject.nullish(),
  signingDate: z.string().nullish(),
  isAccepted: z.boolean().nullish()
})

export interface RetrieveAcceptedAgreementResponse extends z.TypeOf<typeof RetrieveAcceptedAgreementResponse> {}
