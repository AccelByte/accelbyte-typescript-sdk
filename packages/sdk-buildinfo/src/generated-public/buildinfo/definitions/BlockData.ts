/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BlockData = z.object({ blockSize: z.number().int().nullish(), checksum: z.string().nullish(), uuid: z.string().nullish() })

export interface BlockData extends z.TypeOf<typeof BlockData> {}
