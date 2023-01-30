/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientPermissionV3 = z.object({ action: z.number().int(), resource: z.string() })

export type ClientPermissionV3 = z.TypeOf<typeof ClientPermissionV3>
