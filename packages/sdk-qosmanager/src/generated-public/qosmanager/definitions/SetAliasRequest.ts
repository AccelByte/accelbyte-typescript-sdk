/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SetAliasRequest = z.object({ alias: z.string() })

export interface SetAliasRequest extends z.TypeOf<typeof SetAliasRequest> {}
