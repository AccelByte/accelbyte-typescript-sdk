/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentDownloadResponseV2 } from './ContentDownloadResponseV2.js'

export const ContentDownloadResponseV2Array = z.array(ContentDownloadResponseV2)

export interface ContentDownloadResponseV2Array extends z.TypeOf<typeof ContentDownloadResponseV2Array> {}
