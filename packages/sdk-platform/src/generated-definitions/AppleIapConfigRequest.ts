/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapConfigRequest = z.object({ bundleId: z.string(), password: z.string().nullish() })

export interface AppleIapConfigRequest extends z.TypeOf<typeof AppleIapConfigRequest> {}
