/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetAppImageListV1DataItemImageScanStatus } from './GetAppImageListV1DataItemImageScanStatus.js'

export const GetAppImageListV1DataItem = z.object({
  imageDigest: z.string(),
  imageScanStatus: GetAppImageListV1DataItemImageScanStatus.nullish(),
  imageTag: z.string(),
  size: z.number().int().nullish(),
  updatedAt: z.string().nullish()
})

export interface GetAppImageListV1DataItem extends z.TypeOf<typeof GetAppImageListV1DataItem> {}
