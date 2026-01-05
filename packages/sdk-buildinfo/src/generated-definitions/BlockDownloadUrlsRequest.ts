/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BlockDownloadUrlsRequest = z.object({ uuids: z.array(z.string()) })

export interface BlockDownloadUrlsRequest extends z.TypeOf<typeof BlockDownloadUrlsRequest> {}
