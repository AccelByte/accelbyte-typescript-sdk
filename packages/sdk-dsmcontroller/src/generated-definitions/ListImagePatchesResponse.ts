/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PatchImageRecord } from './PatchImageRecord.js'

export const ListImagePatchesResponse = z.object({ images: z.array(PatchImageRecord) })

export interface ListImagePatchesResponse extends z.TypeOf<typeof ListImagePatchesResponse> {}
