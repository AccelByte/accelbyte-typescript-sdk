/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockManifest } from './BlockManifest.js'
import { ZsyncFileManifest } from './ZsyncFileManifest.js'

export const FileManifest = z.object({
  path: z.string().nullish(),
  filesize: z.number().int().nullish(),
  uuid: z.string().nullish(),
  blocks: z.array(BlockManifest).nullish(),
  zsyncFile: ZsyncFileManifest.nullish(),
  checksum: z.string().nullish(),
  uploadStatus: z.string().nullish()
})

export interface FileManifest extends z.TypeOf<typeof FileManifest> {}
