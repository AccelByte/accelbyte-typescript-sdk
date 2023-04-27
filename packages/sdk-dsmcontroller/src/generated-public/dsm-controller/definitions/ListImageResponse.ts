/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageRecord } from './ImageRecord.js'
import { PagingCursor } from './PagingCursor.js'

export const ListImageResponse = z.object({ images: z.array(ImageRecord), paging: PagingCursor })

export interface ListImageResponse extends z.TypeOf<typeof ListImageResponse> {}
