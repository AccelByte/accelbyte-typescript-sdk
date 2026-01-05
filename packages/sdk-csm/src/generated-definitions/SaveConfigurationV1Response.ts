/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveConfigurationV1Response = z.object({ configId: z.string(), configName: z.string() })

export interface SaveConfigurationV1Response extends z.TypeOf<typeof SaveConfigurationV1Response> {}
