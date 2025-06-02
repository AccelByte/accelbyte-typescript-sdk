/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Description } from './Description.js'

export const BanV3 = z.object({ ban: z.string(), description: z.string().nullish(), descriptions: Description.nullish(), type: z.string() })

export interface BanV3 extends z.TypeOf<typeof BanV3> {}
