/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageRecord } from './ImageRecord.js'

export const ImageRecordArray = z.array(ImageRecord)

export interface ImageRecordArray extends z.TypeOf<typeof ImageRecordArray> {}
