/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Role = z.object({ max: z.number().int(), min: z.number().int(), name: z.string() })

export interface Role extends z.TypeOf<typeof Role> {}
