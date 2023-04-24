/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentDownloadResponse } from './ContentDownloadResponse'

export const ContentDownloadResponseArray = z.array(ContentDownloadResponse)

export interface ContentDownloadResponseArray extends z.TypeOf<typeof ContentDownloadResponseArray> {}
