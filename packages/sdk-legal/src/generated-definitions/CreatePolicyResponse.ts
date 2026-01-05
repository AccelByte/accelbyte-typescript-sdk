/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionObject } from './PolicyVersionObject.js'

export const CreatePolicyResponse = z.object({
  countries: z.array(z.string()).nullish(),
  countryCode: z.string(),
  countryGroupName: z.string().nullish(),
  countryType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isDefaultSelection: z.boolean(),
  isMandatory: z.boolean(),
  policyName: z.string(),
  policyVersions: z.array(PolicyVersionObject).nullish(),
  readableId: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean(),
  updatedAt: z.string().nullish()
})

export interface CreatePolicyResponse extends z.TypeOf<typeof CreatePolicyResponse> {}
