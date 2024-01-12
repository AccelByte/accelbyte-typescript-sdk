/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EnvironmentVariable = z.object({
  actualValue: z.string().nullish(),
  defaultValue: z.string().nullish(),
  description: z.string().nullish(),
  name: z.string()
})

export interface EnvironmentVariable extends z.TypeOf<typeof EnvironmentVariable> {}
