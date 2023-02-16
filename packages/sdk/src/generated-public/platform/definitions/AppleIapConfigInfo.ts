/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapConfigInfo = z.object({ namespace: z.string(), bundleId: z.string(), password: z.string().nullish() })

export interface AppleIapConfigInfo extends z.TypeOf<typeof AppleIapConfigInfo> {}
