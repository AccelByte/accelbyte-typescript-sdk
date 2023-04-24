/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoObjectForUserStatItemValue = z.object({
  profileId: z.string().nullish(),
  statCode: z.string().nullish(),
  value: z.number().nullish()
})

export interface ADtoObjectForUserStatItemValue extends z.TypeOf<typeof ADtoObjectForUserStatItemValue> {}
