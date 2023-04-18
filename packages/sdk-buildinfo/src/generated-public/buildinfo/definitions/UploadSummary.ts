/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadSummary = z.object({ presignedUrl: z.string().nullish(), uuid: z.string().nullish() })

export interface UploadSummary extends z.TypeOf<typeof UploadSummary> {}
