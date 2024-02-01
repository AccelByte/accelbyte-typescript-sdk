/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateContentShareCodeRequest = z.object({ shareCode: z.string() })

export interface UpdateContentShareCodeRequest extends z.TypeOf<typeof UpdateContentShareCodeRequest> {}
