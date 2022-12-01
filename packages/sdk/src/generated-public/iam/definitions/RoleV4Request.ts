/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleV4Request = z.object({
  adminRole: z.boolean(),
  deletable: z.boolean().nullish(),
  isWildcard: z.boolean(),
  roleName: z.string()
})

export type RoleV4Request = z.TypeOf<typeof RoleV4Request>
