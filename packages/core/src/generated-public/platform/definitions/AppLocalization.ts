/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppLocalization = z.object({ slogan: z.string().nullish(), announcement: z.string().nullish() })

export type AppLocalization = z.TypeOf<typeof AppLocalization>
