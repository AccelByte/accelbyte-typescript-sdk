/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BannedByV3 = z.object({ displayName: z.string(), userId: z.string() })

export type BannedByV3 = z.TypeOf<typeof BannedByV3>
