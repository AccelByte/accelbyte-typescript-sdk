/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePolicyRequest = z.object({
  countries: z.array(z.string()).nullish(),
  countryGroupName: z.string().nullish(),
  description: z.string().nullish(),
  isDefaultOpted: z.boolean(),
  isMandatory: z.boolean(),
  policyName: z.string(),
  readableId: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean()
})

export interface UpdatePolicyRequest extends z.TypeOf<typeof UpdatePolicyRequest> {}
