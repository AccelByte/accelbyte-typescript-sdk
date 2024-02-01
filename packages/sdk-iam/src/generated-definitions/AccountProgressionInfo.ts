/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AccountProgressionInfo = z.object({
  displayName: z.string().nullish(),
  email: z.string().nullish(),
  linkedGames: z.array(z.string()),
  userName: z.string().nullish()
})

export interface AccountProgressionInfo extends z.TypeOf<typeof AccountProgressionInfo> {}
