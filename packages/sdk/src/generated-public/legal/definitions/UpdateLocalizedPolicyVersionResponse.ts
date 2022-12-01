/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateLocalizedPolicyVersionResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  localeCode: z.string().nullish(),
  contentType: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentChecksum: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  description: z.string().nullish()
})

export type UpdateLocalizedPolicyVersionResponse = z.TypeOf<typeof UpdateLocalizedPolicyVersionResponse>
