/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetImageLimitResponseData = z.object({
  image_count: z.number().int(),
  image_limit: z.number().int(),
  non_persistent_image_number: z.number().int(),
  non_persistent_image_used_in_deployment_number: z.number().int()
})

export interface GetImageLimitResponseData extends z.TypeOf<typeof GetImageLimitResponseData> {}
