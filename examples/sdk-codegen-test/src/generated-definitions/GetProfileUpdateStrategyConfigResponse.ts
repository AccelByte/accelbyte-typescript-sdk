/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleProfileUpdateStrategyConfigs } from './SimpleProfileUpdateStrategyConfigs.js'

export const GetProfileUpdateStrategyConfigResponse = z.object({ data: z.array(SimpleProfileUpdateStrategyConfigs) })

export interface GetProfileUpdateStrategyConfigResponse extends z.TypeOf<typeof GetProfileUpdateStrategyConfigResponse> {}
