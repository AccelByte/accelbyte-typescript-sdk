/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveConfigurationV2Response = z.object({ configId: z.string(), configName: z.string() })

export interface SaveConfigurationV2Response extends z.TypeOf<typeof SaveConfigurationV2Response> {}
