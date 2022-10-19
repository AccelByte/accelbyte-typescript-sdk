/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationReconcileRequest = z.object({
  productId: z.string().nullish(),
  price: z.number().nullish(),
  currencyCode: z.string().nullish(),
  serviceLabel: z.number().int().nullish()
})

export type PlayStationReconcileRequest = z.TypeOf<typeof PlayStationReconcileRequest>
