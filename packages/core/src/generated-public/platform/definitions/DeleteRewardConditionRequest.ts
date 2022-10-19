/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteRewardConditionRequest = z.object({ userId: z.string().nullish(), conditionName: z.string().nullish() })

export type DeleteRewardConditionRequest = z.TypeOf<typeof DeleteRewardConditionRequest>
