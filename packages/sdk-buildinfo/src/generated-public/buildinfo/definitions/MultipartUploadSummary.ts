/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MultipartUploadUrl } from './MultipartUploadUrl.js'

export const MultipartUploadSummary = z.object({ parts: z.array(MultipartUploadUrl), uuid: z.string() })

export interface MultipartUploadSummary extends z.TypeOf<typeof MultipartUploadSummary> {}
