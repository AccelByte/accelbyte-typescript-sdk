/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPermissionsResponseV4 = z.object({
  action: z.number().int(),
  resource: z.string(),
  schedAction: z.number().int().nullish(),
  schedCron: z.string().nullish(),
  schedRange: z.array(z.string()).nullish()
})

export type UserPermissionsResponseV4 = z.TypeOf<typeof UserPermissionsResponseV4>
