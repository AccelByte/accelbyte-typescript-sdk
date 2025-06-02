/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegisterLocalServerRequest = z.object({
  custom_attribute: z.string(),
  ip: z.string(),
  name: z.string(),
  port: z.number().int()
})

export interface RegisterLocalServerRequest extends z.TypeOf<typeof RegisterLocalServerRequest> {}
