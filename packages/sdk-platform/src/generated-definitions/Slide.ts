/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Slide = z.object({
  alt: z.string().nullish(),
  previewUrl: z.string().nullish(),
  thumbnailUrl: z.string().nullish(),
  type: z.enum(['image', 'video']).nullish(),
  url: z.string().nullish(),
  videoSource: z.enum(['generic', 'vimeo', 'youtube']).nullish()
})

export interface Slide extends z.TypeOf<typeof Slide> {}
