/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockManifest } from './BlockManifest'
import { ZsyncFileManifest } from './ZsyncFileManifest'

export const FileManifest = z.object({
  path: z.string().nullish(),
  filesize: z.number().int().nullish(),
  uuid: z.string().nullish(),
  blocks: z.array(BlockManifest).nullish(),
  zsyncFile: ZsyncFileManifest.nullish(),
  checksum: z.string().nullish(),
  uploadStatus: z.string().nullish()
})

export type FileManifest = z.TypeOf<typeof FileManifest>
