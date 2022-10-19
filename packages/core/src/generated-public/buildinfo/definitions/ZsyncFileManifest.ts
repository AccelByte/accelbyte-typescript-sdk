/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ZsyncFileManifest = z.object({
  zsyncVersion: z.string().nullish(),
  uuid: z.string().nullish(),
  filename: z.string().nullish(),
  modifiedTime: z.string().nullish(),
  blockSize: z.number().int().nullish(),
  length: z.number().int().nullish(),
  seqMatches: z.number().int().nullish(),
  weaksumLength: z.number().int().nullish(),
  strongsumLength: z.number().int().nullish(),
  url: z.string().nullish(),
  fileChecksum: z.string().nullish(),
  checksum: z.string().nullish(),
  uploadStatus: z.string().nullish()
})

export type ZsyncFileManifest = z.TypeOf<typeof ZsyncFileManifest>
