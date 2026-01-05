/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ActionApiRequest = z.object({ actionId: z.string(), actionName: z.string(), eventName: z.string() })

export interface ActionApiRequest extends z.TypeOf<typeof ActionApiRequest> {}
