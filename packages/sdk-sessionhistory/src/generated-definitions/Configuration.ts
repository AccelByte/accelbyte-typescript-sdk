/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Configuration = z.object({ logLevel: z.enum(['debug', 'error', 'fatal', 'info', 'panic', 'trace', 'warning']).nullish() })

export interface Configuration extends z.TypeOf<typeof Configuration> {}
