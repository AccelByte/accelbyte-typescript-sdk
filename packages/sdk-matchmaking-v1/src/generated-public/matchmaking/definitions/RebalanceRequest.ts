/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RebalanceRequest = z.object({ match_id: z.string() })

export interface RebalanceRequest extends z.TypeOf<typeof RebalanceRequest> {}
