/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BlockManifest = z.object({
  uuid: z.string().nullish(),
  checksum: z.string().nullish(),
  blockSize: z.number().int().nullish(),
  offset: z.number().int().nullish()
})

export type BlockManifest = z.TypeOf<typeof BlockManifest>
