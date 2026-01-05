/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MultipartUploadedPart = z.object({ etag: z.string(), partNumber: z.number().int() })

export interface MultipartUploadedPart extends z.TypeOf<typeof MultipartUploadedPart> {}
