/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationReconcileRequest = z.object({
  currencyCode: z.string().nullish(),
  price: z.number().nullish(),
  productId: z.string().nullish(),
  serviceLabel: z.number().int().nullish()
})

export interface PlayStationReconcileRequest extends z.TypeOf<typeof PlayStationReconcileRequest> {}
