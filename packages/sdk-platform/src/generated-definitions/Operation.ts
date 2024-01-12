/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditPayload } from './CreditPayload.js'
import { DebitPayload } from './DebitPayload.js'
import { FulFillItemPayload } from './FulFillItemPayload.js'
import { RevokeEntitlementPayload } from './RevokeEntitlementPayload.js'

export const Operation = z.object({
  creditPayload: CreditPayload.nullish(),
  debitPayload: DebitPayload.nullish(),
  fulFillItemPayload: FulFillItemPayload.nullish(),
  resultId: z.string().nullish(),
  revokeEntitlementPayload: RevokeEntitlementPayload.nullish(),
  status: z.enum(['FAILED', 'INIT', 'SKIPPED', 'SUCCESS']).nullish(),
  statusReason: z.string().nullish(),
  type: z.enum(['CREDIT_WALLET', 'DEBIT_WALLET', 'FULFILL_ITEM', 'REVOKE_ENTITLEMENT'])
})

export interface Operation extends z.TypeOf<typeof Operation> {}
