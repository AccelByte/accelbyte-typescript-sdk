/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyObject } from './PolicyObject.js'
import { PolicyVersionObject } from './PolicyVersionObject.js'

export const RetrieveLocalizedPolicyVersionResponse = z.object({
  attachmentChecksum: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  contentType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  localeCode: z.string(),
  policy: PolicyObject.nullish(),
  policyVersion: PolicyVersionObject,
  updatedAt: z.string().nullish()
})

export interface RetrieveLocalizedPolicyVersionResponse extends z.TypeOf<typeof RetrieveLocalizedPolicyVersionResponse> {}
