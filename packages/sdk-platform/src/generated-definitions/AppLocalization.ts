/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppLocalization = z.object({ announcement: z.string().nullish(), slogan: z.string().nullish() })

export interface AppLocalization extends z.TypeOf<typeof AppLocalization> {}
