/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TtlConfigDto = z.object({ action: z.enum(['DELETE']), expires_at: z.string() })

export interface TtlConfigDto extends z.TypeOf<typeof TtlConfigDto> {}
