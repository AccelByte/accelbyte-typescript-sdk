/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MachineIdentity } from './MachineIdentity'

export const BuildInfoPii = z.object({
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  machineId: z.string().nullish(),
  identity: MachineIdentity.nullish()
})

export type BuildInfoPii = z.TypeOf<typeof BuildInfoPii>
