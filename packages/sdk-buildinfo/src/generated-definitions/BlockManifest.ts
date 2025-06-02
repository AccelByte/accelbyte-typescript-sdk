/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BlockManifest = z.object({
  blockSize: z.number().int().nullish(),
  checksum: z.string().nullish(),
  offset: z.number().int().nullish(),
  uuid: z.string().nullish()
})

export interface BlockManifest extends z.TypeOf<typeof BlockManifest> {}
