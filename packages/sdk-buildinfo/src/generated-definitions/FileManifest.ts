/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockManifest } from './BlockManifest.js'
import { ZsyncFileManifest } from './ZsyncFileManifest.js'

export const FileManifest = z.object({
  blocks: z.array(BlockManifest).nullish(),
  checksum: z.string().nullish(),
  filesize: z.number().int().nullish(),
  path: z.string().nullish(),
  uploadStatus: z.string().nullish(),
  uuid: z.string().nullish(),
  zsyncFile: ZsyncFileManifest.nullish()
})

export interface FileManifest extends z.TypeOf<typeof FileManifest> {}
