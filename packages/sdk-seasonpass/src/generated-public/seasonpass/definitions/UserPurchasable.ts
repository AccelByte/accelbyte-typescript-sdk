/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPurchasable = z.object({
  passItemId: z.string().nullish(),
  tierItemCount: z.number().int().nullish(),
  tierItemId: z.string().nullish()
})

export interface UserPurchasable extends z.TypeOf<typeof UserPurchasable> {}
