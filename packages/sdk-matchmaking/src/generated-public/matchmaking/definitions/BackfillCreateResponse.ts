/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BackfillCreateResponse = z.object({ id: z.string() })

export interface BackfillCreateResponse extends z.TypeOf<typeof BackfillCreateResponse> {}
