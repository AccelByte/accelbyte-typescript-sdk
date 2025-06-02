/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePermissionScheduleRequest = z.object({
  SchedAction: z.number().int().nullish(),
  SchedCron: z.string().nullish(),
  SchedRange: z.array(z.string()).nullish()
})

export interface UpdatePermissionScheduleRequest extends z.TypeOf<typeof UpdatePermissionScheduleRequest> {}
