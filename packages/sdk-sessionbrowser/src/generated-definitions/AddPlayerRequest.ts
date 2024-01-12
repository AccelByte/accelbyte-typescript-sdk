/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AddPlayerRequest = z.object({ as_spectator: z.boolean(), user_id: z.string() })

export interface AddPlayerRequest extends z.TypeOf<typeof AddPlayerRequest> {}
