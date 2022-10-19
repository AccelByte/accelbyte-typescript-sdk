/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject'

export const RetrieveUserAcceptedAgreementResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  publisherUserId: z.string().nullish(),
  policyName: z.string().nullish(),
  policyType: z.string().nullish(),
  namespace: z.string().nullish(),
  localizedPolicyVersion: LocalizedPolicyVersionObject.nullish(),
  signingDate: z.string().nullish(),
  username: z.string().nullish(),
  displayName: z.string().nullish(),
  email: z.string().nullish(),
  isAccepted: z.boolean().nullish()
})

export type RetrieveUserAcceptedAgreementResponse = z.TypeOf<typeof RetrieveUserAcceptedAgreementResponse>
