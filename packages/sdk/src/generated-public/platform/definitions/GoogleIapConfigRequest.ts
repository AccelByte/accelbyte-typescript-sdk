/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapConfigRequest = z.object({ applicationName: z.string(), serviceAccountId: z.string() })

export type GoogleIapConfigRequest = z.TypeOf<typeof GoogleIapConfigRequest>
