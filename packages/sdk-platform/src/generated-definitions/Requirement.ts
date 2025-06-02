/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Requirement = z.object({
  additionals: z.string().nullish(),
  directXVersion: z.string().nullish(),
  diskSpace: z.string().nullish(),
  graphics: z.string().nullish(),
  label: z.string(),
  osVersion: z.string().nullish(),
  processor: z.string().nullish(),
  ram: z.string().nullish(),
  soundCard: z.string().nullish()
})

export interface Requirement extends z.TypeOf<typeof Requirement> {}
