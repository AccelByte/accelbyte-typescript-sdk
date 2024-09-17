/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyObject } from './PolicyObject.js'
import { PolicyVersionObject } from './PolicyVersionObject.js'

export const RetrieveLocalizedPolicyVersionResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  localeCode: z.string(),
  contentType: z.string().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentChecksum: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  description: z.string().nullish(),
  policyVersion: PolicyVersionObject,
  policy: PolicyObject.nullish()
})

export interface RetrieveLocalizedPolicyVersionResponse extends z.TypeOf<typeof RetrieveLocalizedPolicyVersionResponse> {}
