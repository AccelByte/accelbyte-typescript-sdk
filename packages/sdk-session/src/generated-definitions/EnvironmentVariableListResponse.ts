/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EnvironmentVariableResponse } from './EnvironmentVariableResponse.js'

export const EnvironmentVariableListResponse = z.object({ data: z.array(EnvironmentVariableResponse) })

export interface EnvironmentVariableListResponse extends z.TypeOf<typeof EnvironmentVariableListResponse> {}
