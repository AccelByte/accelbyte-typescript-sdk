/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateLocalizedPolicyVersionRequest = z.object({
  contentType: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentChecksum: z.string().nullish(),
  attachmentVersionIdentifier: z.string().nullish(),
  description: z.string().nullish()
})

export type UpdateLocalizedPolicyVersionRequest = z.TypeOf<typeof UpdateLocalizedPolicyVersionRequest>
