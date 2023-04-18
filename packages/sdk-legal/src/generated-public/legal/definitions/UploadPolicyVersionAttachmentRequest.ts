/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadPolicyVersionAttachmentRequest = z.object({ contentType: z.string().nullish(), contentMD5: z.string().nullish() })

export interface UploadPolicyVersionAttachmentRequest extends z.TypeOf<typeof UploadPolicyVersionAttachmentRequest> {}