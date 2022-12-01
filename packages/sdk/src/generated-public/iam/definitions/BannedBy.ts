/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BannedBy = z.object({ DisplayName: z.string(), userId: z.string() })

export type BannedBy = z.TypeOf<typeof BannedBy>
