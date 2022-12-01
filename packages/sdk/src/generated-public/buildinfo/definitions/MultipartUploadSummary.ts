/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MultipartUploadUrl } from './MultipartUploadUrl'

export const MultipartUploadSummary = z.object({ uuid: z.string(), parts: z.array(MultipartUploadUrl) })

export type MultipartUploadSummary = z.TypeOf<typeof MultipartUploadSummary>
