/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BanReason = z.object({ Description: z.string(), Reason: z.string() })

export interface BanReason extends z.TypeOf<typeof BanReason> {}
