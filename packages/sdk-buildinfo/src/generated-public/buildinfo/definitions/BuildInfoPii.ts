/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MachineIdentity } from './MachineIdentity.js'

export const BuildInfoPii = z.object({
  createdAt: z.string().nullish(),
  identity: MachineIdentity.nullish(),
  machineId: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface BuildInfoPii extends z.TypeOf<typeof BuildInfoPii> {}
