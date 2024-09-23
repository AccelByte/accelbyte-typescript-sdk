/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ZoneTrans = z.object({ index: z.number().int(), isstd: z.boolean(), isutc: z.boolean(), when: z.number().int() })

export interface ZoneTrans extends z.TypeOf<typeof ZoneTrans> {}
