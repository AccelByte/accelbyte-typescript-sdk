/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreatePolicyVersionRequest = z.object({
  displayVersion: z.string().nullish(),
  description: z.string().nullish(),
  isCommitted: z.boolean().nullish()
})

export type CreatePolicyVersionRequest = z.TypeOf<typeof CreatePolicyVersionRequest>
