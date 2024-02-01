/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DlcConfigRewardShortInfo = z.object({
  data: z.record(z.array(z.string())).nullish(),
  dlcType: z.enum(['EPICGAMES', 'OCULUS', 'PSN', 'STEAM', 'XBOX']).nullish()
})

export interface DlcConfigRewardShortInfo extends z.TypeOf<typeof DlcConfigRewardShortInfo> {}
