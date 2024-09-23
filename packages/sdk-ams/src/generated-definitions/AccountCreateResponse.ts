/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AccountLimits } from './AccountLimits.js'

export const AccountCreateResponse = z.object({ Limits: AccountLimits, id: z.string(), name: z.string(), namespaces: z.array(z.string()) })

export interface AccountCreateResponse extends z.TypeOf<typeof AccountCreateResponse> {}
