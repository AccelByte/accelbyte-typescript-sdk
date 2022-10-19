/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward'

export const DlcItem = z.object({ id: z.string().nullish(), rewards: z.array(PlatformReward).nullish() })

export type DlcItem = z.TypeOf<typeof DlcItem>
