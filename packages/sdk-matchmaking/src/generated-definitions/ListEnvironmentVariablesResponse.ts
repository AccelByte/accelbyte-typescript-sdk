/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EnvironmentVariable } from './EnvironmentVariable.js'

export const ListEnvironmentVariablesResponse = z.object({ data: z.array(EnvironmentVariable) })

export interface ListEnvironmentVariablesResponse extends z.TypeOf<typeof ListEnvironmentVariablesResponse> {}
