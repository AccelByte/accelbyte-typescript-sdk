/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateLocalizedPolicyVersionRequest = z.object({
  attachmentChecksum: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  contentType: z.string().nullish(),
  description: z.string().nullish()
})

export interface UpdateLocalizedPolicyVersionRequest extends z.TypeOf<typeof UpdateLocalizedPolicyVersionRequest> {}
