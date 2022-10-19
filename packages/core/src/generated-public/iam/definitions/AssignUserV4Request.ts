/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AssignUserV4Request = z.object({ assignedNamespaces: z.array(z.string()), namespace: z.string(), userId: z.string() })

export type AssignUserV4Request = z.TypeOf<typeof AssignUserV4Request>
