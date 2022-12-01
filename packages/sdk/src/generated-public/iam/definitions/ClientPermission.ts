/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientPermission = z.object({ Action: z.number().int(), Resource: z.string() })

export type ClientPermission = z.TypeOf<typeof ClientPermission>
