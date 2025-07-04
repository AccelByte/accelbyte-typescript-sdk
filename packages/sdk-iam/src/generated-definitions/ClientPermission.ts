/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientPermission = z.object({ Action: z.number().int(), Resource: z.string() })

export interface ClientPermission extends z.TypeOf<typeof ClientPermission> {}
