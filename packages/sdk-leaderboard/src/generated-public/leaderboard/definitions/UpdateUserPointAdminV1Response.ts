/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateUserPointAdminV1Response = z.object({ point: z.number(), userId: z.string() })

export interface UpdateUserPointAdminV1Response extends z.TypeOf<typeof UpdateUserPointAdminV1Response> {}
