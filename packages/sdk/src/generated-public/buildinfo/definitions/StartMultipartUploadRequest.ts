/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StartMultipartUploadRequest = z.object({ hash: z.string(), contentLength: z.number().int(), partSize: z.number().int() })

export type StartMultipartUploadRequest = z.TypeOf<typeof StartMultipartUploadRequest>
