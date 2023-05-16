/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteRewardConditionRequest = z.object({ conditionName: z.string().nullish(), userId: z.string().nullish() })

export interface DeleteRewardConditionRequest extends z.TypeOf<typeof DeleteRewardConditionRequest> {}
