/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionWithLocalizedVersionObject } from './PolicyVersionWithLocalizedVersionObject'

export const RetrieveUserEligibilitiesResponse = z.object({
  readableId: z.string().nullish(),
  policyName: z.string(),
  policyType: z.string(),
  namespace: z.string(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  policyVersions: z.array(PolicyVersionWithLocalizedVersionObject).nullish(),
  description: z.string().nullish(),
  policyId: z.string(),
  isMandatory: z.boolean(),
  isAccepted: z.boolean()
})

export type RetrieveUserEligibilitiesResponse = z.TypeOf<typeof RetrieveUserEligibilitiesResponse>
