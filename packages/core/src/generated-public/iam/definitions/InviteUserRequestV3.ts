/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InviteUserRequestV3 = z.object({ emailAddresses: z.array(z.string()), isAdmin: z.boolean(), roles: z.array(z.string()) })

export type InviteUserRequestV3 = z.TypeOf<typeof InviteUserRequestV3>
