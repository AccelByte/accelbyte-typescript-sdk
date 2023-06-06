/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SeasonCloneRequest = z.object({ end: z.string(), name: z.string(), start: z.string() })

export interface SeasonCloneRequest extends z.TypeOf<typeof SeasonCloneRequest> {}
