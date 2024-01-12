/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionWithLocalizedVersionObject } from './PolicyVersionWithLocalizedVersionObject.js'

export const RetrieveUserEligibilitiesResponse = z.object({
  baseUrls: z.array(z.string()).nullish(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  description: z.string().nullish(),
  isAccepted: z.boolean(),
  isMandatory: z.boolean(),
  namespace: z.string(),
  policyId: z.string(),
  policyName: z.string(),
  policyType: z.string(),
  policyVersions: z.array(PolicyVersionWithLocalizedVersionObject).nullish(),
  readableId: z.string().nullish()
})

export interface RetrieveUserEligibilitiesResponse extends z.TypeOf<typeof RetrieveUserEligibilitiesResponse> {}
