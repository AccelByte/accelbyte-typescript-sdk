/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadLocalizedPolicyVersionAttachmentResponse = z.object({
  attachmentLocation: z.string().nullish(),
  attachmentChecksum: z.string().nullish(),
  attachmentUploadUrl: z.string().nullish()
})

export type UploadLocalizedPolicyVersionAttachmentResponse = z.TypeOf<typeof UploadLocalizedPolicyVersionAttachmentResponse>
