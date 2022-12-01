/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DisableUserRequest = z.object({ Reason: z.string().nullish() })

export type DisableUserRequest = z.TypeOf<typeof DisableUserRequest>
