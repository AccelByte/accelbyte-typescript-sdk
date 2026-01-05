/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AddMemberParams = z.object({ isAdmin: z.boolean() })

export interface AddMemberParams extends z.TypeOf<typeof AddMemberParams> {}
