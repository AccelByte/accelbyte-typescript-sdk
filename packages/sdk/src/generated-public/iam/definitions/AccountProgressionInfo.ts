/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AccountProgressionInfo = z.object({
  displayName: z.string().nullish(),
  email: z.string().nullish(),
  linkedGames: z.array(z.string()).nullish(),
  userName: z.string().nullish()
})

export type AccountProgressionInfo = z.TypeOf<typeof AccountProgressionInfo>
