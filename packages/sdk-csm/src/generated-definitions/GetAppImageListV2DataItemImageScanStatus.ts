/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAppImageListV2DataItemImageScanStatus = z.object({ description: z.string().nullish(), status: z.string() })

export interface GetAppImageListV2DataItemImageScanStatus extends z.TypeOf<typeof GetAppImageListV2DataItemImageScanStatus> {}
