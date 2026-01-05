/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageScanFinding } from './ImageScanFinding.js'

export const GetAppImageListV2DataItemImageScanResult = z.object({
  findingSeverityCounts: z.record(z.number().int()),
  findings: z.array(ImageScanFinding)
})

export interface GetAppImageListV2DataItemImageScanResult extends z.TypeOf<typeof GetAppImageListV2DataItemImageScanResult> {}
