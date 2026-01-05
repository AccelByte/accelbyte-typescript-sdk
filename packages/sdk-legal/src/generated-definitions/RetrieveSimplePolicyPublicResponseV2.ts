/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimplePolicyVersionWithLocalizedVersionObject } from './SimplePolicyVersionWithLocalizedVersionObject.js'

export const RetrieveSimplePolicyPublicResponseV2 = z.object({
  basePolicyId: z.string(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isDefaultSelection: z.boolean(),
  isMandatory: z.boolean(),
  namespace: z.string(),
  policyName: z.string(),
  policyType: z.string(),
  policyVersions: z.array(SimplePolicyVersionWithLocalizedVersionObject).nullish(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string().nullish()
})

export interface RetrieveSimplePolicyPublicResponseV2 extends z.TypeOf<typeof RetrieveSimplePolicyPublicResponseV2> {}
