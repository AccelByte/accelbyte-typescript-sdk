/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapConfigVersionInfo = z.object({ version: z.enum(['V1', 'V2']).nullish() })

export interface AppleIapConfigVersionInfo extends z.TypeOf<typeof AppleIapConfigVersionInfo> {}
