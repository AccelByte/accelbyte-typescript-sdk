/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Permission = z.object({ action: z.number().int().nullish(), resource: z.string().nullish() })

export interface Permission extends z.TypeOf<typeof Permission> {}
