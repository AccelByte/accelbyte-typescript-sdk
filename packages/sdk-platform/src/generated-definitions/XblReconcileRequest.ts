/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblReconcileRequest = z.object({
  currencyCode: z.string().nullish(),
  price: z.number().nullish(),
  productId: z.string().nullish(),
  xstsToken: z.string().nullish()
})

export interface XblReconcileRequest extends z.TypeOf<typeof XblReconcileRequest> {}
