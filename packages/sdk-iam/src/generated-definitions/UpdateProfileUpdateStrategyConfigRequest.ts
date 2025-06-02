/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ProfileUpdateConfig } from './ProfileUpdateConfig.js'

export const UpdateProfileUpdateStrategyConfigRequest = z.object({ config: ProfileUpdateConfig.nullish(), type: z.string().nullish() })

export interface UpdateProfileUpdateStrategyConfigRequest extends z.TypeOf<typeof UpdateProfileUpdateStrategyConfigRequest> {}
