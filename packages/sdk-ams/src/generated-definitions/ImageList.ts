/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageListItem } from './ImageListItem.js'
import { PagingInfo } from './PagingInfo.js'

export const ImageList = z.object({ images: z.array(ImageListItem), paging: PagingInfo })

export interface ImageList extends z.TypeOf<typeof ImageList> {}
