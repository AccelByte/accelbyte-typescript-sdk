/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PolicyObject = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  readableId: z.string().nullish(),
  policyName: z.string(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean(),
  description: z.string().nullish(),
  isMandatory: z.boolean(),
  isDefaultOpted: z.boolean(),
  isDefaultSelection: z.boolean()
})

export interface PolicyObject extends z.TypeOf<typeof PolicyObject> {}
