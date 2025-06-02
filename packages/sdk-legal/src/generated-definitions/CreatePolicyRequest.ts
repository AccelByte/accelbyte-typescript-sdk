/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreatePolicyRequest = z.object({
  countries: z.array(z.string()).nullish(),
  countryCode: z.string().nullish(),
  countryGroupName: z.string().nullish(),
  countryType: z.enum(['COUNTRY', 'COUNTRY_GROUP']).nullish(),
  description: z.string().nullish(),
  isDefaultSelection: z.boolean().nullish(),
  isMandatory: z.boolean().nullish(),
  policyName: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean().nullish()
})

export interface CreatePolicyRequest extends z.TypeOf<typeof CreatePolicyRequest> {}
