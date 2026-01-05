/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LocalizedPolicyVersionObject = z.object({
  attachmentChecksum: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  contentType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isDefaultSelection: z.boolean(),
  localeCode: z.string(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface LocalizedPolicyVersionObject extends z.TypeOf<typeof LocalizedPolicyVersionObject> {}
