/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateScreenshotRequestItem } from './CreateScreenshotRequestItem.js'

export const CreateScreenshotRequest = z.object({ screenshots: z.array(CreateScreenshotRequestItem) })

export interface CreateScreenshotRequest extends z.TypeOf<typeof CreateScreenshotRequest> {}
