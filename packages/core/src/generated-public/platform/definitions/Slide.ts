/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Slide = z.object({
  type: z.enum(['image', 'video']).nullish(),
  videoSource: z.enum(['generic', 'youtube', 'vimeo']).nullish(),
  url: z.string().nullish(),
  alt: z.string().nullish(),
  thumbnailUrl: z.string().nullish(),
  previewUrl: z.string().nullish()
})

export type Slide = z.TypeOf<typeof Slide>
