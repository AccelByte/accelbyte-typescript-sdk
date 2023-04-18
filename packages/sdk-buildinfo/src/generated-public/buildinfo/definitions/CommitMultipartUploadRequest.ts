/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MultipartUploadedPart } from './MultipartUploadedPart'

export const CommitMultipartUploadRequest = z.object({ parts: z.array(MultipartUploadedPart) })

export interface CommitMultipartUploadRequest extends z.TypeOf<typeof CommitMultipartUploadRequest> {}
