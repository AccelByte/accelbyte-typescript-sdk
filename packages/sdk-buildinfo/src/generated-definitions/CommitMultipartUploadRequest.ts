/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MultipartUploadedPart } from './MultipartUploadedPart.js'

export const CommitMultipartUploadRequest = z.object({ parts: z.array(MultipartUploadedPart) })

export interface CommitMultipartUploadRequest extends z.TypeOf<typeof CommitMultipartUploadRequest> {}
