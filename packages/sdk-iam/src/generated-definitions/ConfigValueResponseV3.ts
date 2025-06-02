/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigValueResponseV3 = z.object({ result: z.record(z.any()) })

export interface ConfigValueResponseV3 extends z.TypeOf<typeof ConfigValueResponseV3> {}
