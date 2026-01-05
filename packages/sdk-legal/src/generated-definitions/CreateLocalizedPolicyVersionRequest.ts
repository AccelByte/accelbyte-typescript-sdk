/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateLocalizedPolicyVersionRequest = z.object({
  contentType: z.string().nullish(),
  description: z.string().nullish(),
  localeCode: z.string().nullish()
})

export interface CreateLocalizedPolicyVersionRequest extends z.TypeOf<typeof CreateLocalizedPolicyVersionRequest> {}
