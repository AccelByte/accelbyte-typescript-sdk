/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { JwkKey } from './JwkKey'

export const JwkSet = z.object({ keys: z.array(JwkKey) })

export type JwkSet = z.TypeOf<typeof JwkSet>
