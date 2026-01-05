/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadPolicyVersionAttachmentRequest = z.object({ contentMD5: z.string().nullish(), contentType: z.string().nullish() })

export interface UploadPolicyVersionAttachmentRequest extends z.TypeOf<typeof UploadPolicyVersionAttachmentRequest> {}
