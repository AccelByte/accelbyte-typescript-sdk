/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EpicGamesIapConfigInfo = z.object({ namespace: z.string(), sandboxId: z.string().nullish() })

export interface EpicGamesIapConfigInfo extends z.TypeOf<typeof EpicGamesIapConfigInfo> {}
