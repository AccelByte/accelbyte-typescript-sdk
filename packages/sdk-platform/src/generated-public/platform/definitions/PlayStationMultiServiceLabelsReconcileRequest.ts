/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationMultiServiceLabelsReconcileRequest = z.object({
  productId: z.string().nullish(),
  price: z.number().nullish(),
  currencyCode: z.string().nullish(),
  serviceLabels: z.array(z.number().int()).nullish()
})

export interface PlayStationMultiServiceLabelsReconcileRequest extends z.TypeOf<typeof PlayStationMultiServiceLabelsReconcileRequest> {}
