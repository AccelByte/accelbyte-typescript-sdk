/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameTokenCodeResponse = z.object({ code: z.string() })

export interface GameTokenCodeResponse extends z.TypeOf<typeof GameTokenCodeResponse> {}
