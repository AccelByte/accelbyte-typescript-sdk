/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Description } from './Description'

export const BanV3 = z.object({ ban: z.string(), description: z.string().nullish(), descriptions: Description.nullish(), type: z.string() })

export type BanV3 = z.TypeOf<typeof BanV3>
