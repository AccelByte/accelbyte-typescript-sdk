/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MultipartUploadedPart = z.object({ partNumber: z.number().int(), etag: z.string() })

export type MultipartUploadedPart = z.TypeOf<typeof MultipartUploadedPart>
