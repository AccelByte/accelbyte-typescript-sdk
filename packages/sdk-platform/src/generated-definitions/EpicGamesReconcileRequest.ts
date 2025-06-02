/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EpicGamesReconcileRequest = z.object({ epicGamesJwtToken: z.string().nullish() })

export interface EpicGamesReconcileRequest extends z.TypeOf<typeof EpicGamesReconcileRequest> {}
