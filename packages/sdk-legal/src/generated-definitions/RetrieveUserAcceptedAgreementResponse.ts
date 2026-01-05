/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const RetrieveUserAcceptedAgreementResponse = z.object({
  createdAt: z.string().nullish(),
  displayName: z.string().nullish(),
  email: z.string().nullish(),
  id: z.string(),
  isAccepted: z.boolean().nullish(),
  localizedPolicyVersion: LocalizedPolicyVersionObject.nullish(),
  namespace: z.string().nullish(),
  policyName: z.string().nullish(),
  policyType: z.string().nullish(),
  publisherUserId: z.string().nullish(),
  signingDate: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  username: z.string().nullish()
})

export interface RetrieveUserAcceptedAgreementResponse extends z.TypeOf<typeof RetrieveUserAcceptedAgreementResponse> {}
