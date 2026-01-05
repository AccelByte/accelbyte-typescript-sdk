/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadLocalizedPolicyVersionAttachmentResponse = z.object({
  attachmentChecksum: z.string().nullish(),
  attachmentLocation: z.string().nullish(),
  attachmentUploadUrl: z.string().nullish()
})

export interface UploadLocalizedPolicyVersionAttachmentResponse extends z.TypeOf<typeof UploadLocalizedPolicyVersionAttachmentResponse> {}
