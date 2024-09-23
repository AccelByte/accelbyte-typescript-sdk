/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Action = z.object({ actionDisplayName: z.string(), actionName: z.string() })

export interface Action extends z.TypeOf<typeof Action> {}
