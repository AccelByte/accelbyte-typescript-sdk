/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageRecord } from './ImageRecord.js'

export const GetImageDetailResponse = z.object({ data: ImageRecord })

export interface GetImageDetailResponse extends z.TypeOf<typeof GetImageDetailResponse> {}
