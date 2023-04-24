/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PatchImageRecord } from './PatchImageRecord'

export const GetImagePatchDetailResponse = z.object({ data: PatchImageRecord })

export interface GetImagePatchDetailResponse extends z.TypeOf<typeof GetImagePatchDetailResponse> {}
