/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UpdateScreenshot } from './UpdateScreenshot.js'

export const UpdateScreenshotResponse = z.object({ screenshots: z.array(UpdateScreenshot) })

export interface UpdateScreenshotResponse extends z.TypeOf<typeof UpdateScreenshotResponse> {}
