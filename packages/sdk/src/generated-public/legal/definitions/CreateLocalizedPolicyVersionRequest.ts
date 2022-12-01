/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateLocalizedPolicyVersionRequest = z.object({
  localeCode: z.string().nullish(),
  contentType: z.string().nullish(),
  description: z.string().nullish()
})

export type CreateLocalizedPolicyVersionRequest = z.TypeOf<typeof CreateLocalizedPolicyVersionRequest>
