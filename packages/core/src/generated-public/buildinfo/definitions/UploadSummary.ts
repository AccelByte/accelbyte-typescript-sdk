/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadSummary = z.object({ presignedUrl: z.string().nullish(), uuid: z.string().nullish() })

export type UploadSummary = z.TypeOf<typeof UploadSummary>
