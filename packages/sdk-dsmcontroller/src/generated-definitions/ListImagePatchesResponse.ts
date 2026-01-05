/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PatchImageRecordResponse } from './PatchImageRecordResponse.js'

export const ListImagePatchesResponse = z.object({ images: z.array(PatchImageRecordResponse) })

export interface ListImagePatchesResponse extends z.TypeOf<typeof ListImagePatchesResponse> {}
