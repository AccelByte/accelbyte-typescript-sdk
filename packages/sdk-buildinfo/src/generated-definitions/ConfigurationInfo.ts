/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigurationInfo = z.object({ entitlementValidation: z.boolean() })

export interface ConfigurationInfo extends z.TypeOf<typeof ConfigurationInfo> {}
