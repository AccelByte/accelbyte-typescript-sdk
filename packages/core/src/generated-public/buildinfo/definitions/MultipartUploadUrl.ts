/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MultipartUploadUrl = z.object({ partNumber: z.number().int(), presignedUrl: z.string() })

export type MultipartUploadUrl = z.TypeOf<typeof MultipartUploadUrl>
