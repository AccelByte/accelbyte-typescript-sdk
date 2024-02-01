/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BlockDownloadUrls = z.object({ urls: z.record(z.string()) })

export interface BlockDownloadUrls extends z.TypeOf<typeof BlockDownloadUrls> {}
