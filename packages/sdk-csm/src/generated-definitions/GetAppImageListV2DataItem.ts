/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetAppImageListV2DataItemImageScanResult } from './GetAppImageListV2DataItemImageScanResult.js'
import { GetAppImageListV2DataItemImageScanStatus } from './GetAppImageListV2DataItemImageScanStatus.js'

export const GetAppImageListV2DataItem = z.object({
  IsActive: z.boolean(),
  imageDigest: z.string(),
  imageScanResult: GetAppImageListV2DataItemImageScanResult.nullish(),
  imageScanStatus: GetAppImageListV2DataItemImageScanStatus.nullish(),
  imageTag: z.string(),
  size: z.number().int(),
  updatedAt: z.string().nullish()
})

export interface GetAppImageListV2DataItem extends z.TypeOf<typeof GetAppImageListV2DataItem> {}
