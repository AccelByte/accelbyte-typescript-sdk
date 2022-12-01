/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePolicyRequest = z.object({
  readableId: z.string().nullish(),
  policyName: z.string(),
  shouldNotifyOnUpdate: z.boolean(),
  description: z.string().nullish(),
  isMandatory: z.boolean(),
  isDefaultOpted: z.boolean()
})

export type UpdatePolicyRequest = z.TypeOf<typeof UpdatePolicyRequest>
