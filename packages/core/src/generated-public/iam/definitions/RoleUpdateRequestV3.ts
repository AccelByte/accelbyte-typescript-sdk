/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleUpdateRequestV3 = z.object({ deletable: z.boolean().nullish(), isWildcard: z.boolean(), roleName: z.string() })

export type RoleUpdateRequestV3 = z.TypeOf<typeof RoleUpdateRequestV3>
