/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MachineIdentity = z.object({
  machineId: z.string().nullish(),
  requestDate: z.string().nullish(),
  userId: z.string().nullish()
})

export interface MachineIdentity extends z.TypeOf<typeof MachineIdentity> {}
