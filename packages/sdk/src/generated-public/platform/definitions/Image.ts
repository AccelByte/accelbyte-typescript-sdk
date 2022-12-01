/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Image = z.object({
  as: z.string().nullish(),
  caption: z.string().nullish(),
  height: z.number().int(),
  width: z.number().int(),
  imageUrl: z.string(),
  smallImageUrl: z.string()
})

export type Image = z.TypeOf<typeof Image>
