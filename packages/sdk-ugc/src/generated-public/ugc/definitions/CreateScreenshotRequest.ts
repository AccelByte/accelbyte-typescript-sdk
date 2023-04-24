/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateScreenshotRequest: z.ZodType<CreateScreenshotRequest> = z.lazy(() =>
  z.object({ screenshots: z.array(CreateScreenshotRequest) })
)

export interface CreateScreenshotRequest {
  screenshots: CreateScreenshotRequest[]
}
