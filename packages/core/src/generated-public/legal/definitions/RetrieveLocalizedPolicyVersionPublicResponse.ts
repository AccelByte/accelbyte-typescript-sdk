/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyObject } from './PolicyObject'
import { PolicyVersionObject } from './PolicyVersionObject'

export const RetrieveLocalizedPolicyVersionPublicResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  localeCode: z.string(),
  namespace: z.string(),
  contentType: z.string().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  basePolicyId: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentChecksum: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  description: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  policyVersion: PolicyVersionObject,
  policy: PolicyObject
})

export type RetrieveLocalizedPolicyVersionPublicResponse = z.TypeOf<typeof RetrieveLocalizedPolicyVersionPublicResponse>
