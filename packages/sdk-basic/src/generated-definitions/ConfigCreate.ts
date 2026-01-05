/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigCreate = z.object({ key: z.string(), value: z.string() })

export interface ConfigCreate extends z.TypeOf<typeof ConfigCreate> {}
