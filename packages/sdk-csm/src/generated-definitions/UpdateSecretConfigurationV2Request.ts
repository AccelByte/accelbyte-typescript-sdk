/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateSecretConfigurationV2Request = z.object({ description: z.string().nullish(), value: z.string() })

export interface UpdateSecretConfigurationV2Request extends z.TypeOf<typeof UpdateSecretConfigurationV2Request> {}
