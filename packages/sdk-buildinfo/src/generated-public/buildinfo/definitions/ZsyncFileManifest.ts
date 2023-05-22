/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ZsyncFileManifest = z.object({
  blockSize: z.number().int().nullish(),
  checksum: z.string().nullish(),
  fileChecksum: z.string().nullish(),
  filename: z.string().nullish(),
  length: z.number().int().nullish(),
  modifiedTime: z.string().nullish(),
  seqMatches: z.number().int().nullish(),
  strongsumLength: z.number().int().nullish(),
  uploadStatus: z.string().nullish(),
  url: z.string().nullish(),
  uuid: z.string().nullish(),
  weaksumLength: z.number().int().nullish(),
  zsyncVersion: z.string().nullish()
})

export interface ZsyncFileManifest extends z.TypeOf<typeof ZsyncFileManifest> {}
