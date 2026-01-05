/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentDomainWhitelistConfigInfo = z.object({ domains: z.array(z.string()), namespace: z.string() })

export interface PaymentDomainWhitelistConfigInfo extends z.TypeOf<typeof PaymentDomainWhitelistConfigInfo> {}
