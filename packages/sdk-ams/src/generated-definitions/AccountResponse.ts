/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AccountLimits } from './AccountLimits.js'

export const AccountResponse = z.object({ Limits: AccountLimits, id: z.string(), name: z.string(), namespaces: z.array(z.string()) })

export interface AccountResponse extends z.TypeOf<typeof AccountResponse> {}
