/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImportResponse = z.object({ affected: z.array(z.string()), failed: z.array(z.string()).nullish() })

export interface ImportResponse extends z.TypeOf<typeof ImportResponse> {}
