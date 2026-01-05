/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAppImageListV1DataItemImageScanStatus = z.object({ description: z.string().nullish(), status: z.string().nullish() })

export interface GetAppImageListV1DataItemImageScanStatus extends z.TypeOf<typeof GetAppImageListV1DataItemImageScanStatus> {}
