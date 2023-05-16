/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateLocalizedPolicyVersionResponse = z.object({
  attachmentChecksum: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  contentType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  localeCode: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface UpdateLocalizedPolicyVersionResponse extends z.TypeOf<typeof UpdateLocalizedPolicyVersionResponse> {}
