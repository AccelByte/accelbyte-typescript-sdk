/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequestReconcileMaxActiveSession = z.object({ userID: z.string() })

export interface RequestReconcileMaxActiveSession extends z.TypeOf<typeof RequestReconcileMaxActiveSession> {}
