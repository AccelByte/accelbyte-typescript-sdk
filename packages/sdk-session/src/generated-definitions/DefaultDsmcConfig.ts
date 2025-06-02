/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DefaultDsmcConfig = z.object({ claim_timeout: z.number().int(), creation_timeout: z.number().int() })

export interface DefaultDsmcConfig extends z.TypeOf<typeof DefaultDsmcConfig> {}
