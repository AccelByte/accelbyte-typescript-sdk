/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockManifest } from './BlockManifest.js'
import { ZsyncFileManifest } from './ZsyncFileManifest.js'

export const DifferentialFileManifest = z.object({
  blocks: z.array(BlockManifest).nullish(),
  checksum: z.string().nullish(),
  filesize: z.number().int().nullish(),
  path: z.string().nullish(),
  status: z.number().int().nullish(),
  uuid: z.string().nullish(),
  zsyncFile: ZsyncFileManifest.nullish()
})

export interface DifferentialFileManifest extends z.TypeOf<typeof DifferentialFileManifest> {}
