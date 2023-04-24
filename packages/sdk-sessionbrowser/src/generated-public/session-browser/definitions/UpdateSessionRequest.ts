/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateSessionRequest = z.object({ game_max_player: z.number().int() })

export interface UpdateSessionRequest extends z.TypeOf<typeof UpdateSessionRequest> {}
