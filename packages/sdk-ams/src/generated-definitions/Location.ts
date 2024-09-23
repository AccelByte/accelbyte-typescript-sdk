/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Zone } from './Zone.js'
import { ZoneTrans } from './ZoneTrans.js'

export const Location = z.object({
  cacheEnd: z.number().int(),
  cacheStart: z.number().int(),
  cacheZone: Zone,
  extend: z.string(),
  name: z.string(),
  tx: z.array(ZoneTrans),
  zone: z.array(Zone)
})

export interface Location extends z.TypeOf<typeof Location> {}
