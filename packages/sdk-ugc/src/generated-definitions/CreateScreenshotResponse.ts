/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ScreenshotResponse } from './ScreenshotResponse.js'

export const CreateScreenshotResponse = z.object({ screenshots: z.array(ScreenshotResponse) })

export interface CreateScreenshotResponse extends z.TypeOf<typeof CreateScreenshotResponse> {}
