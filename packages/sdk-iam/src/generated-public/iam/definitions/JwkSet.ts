/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { JwkKey } from './JwkKey.js'

export const JwkSet = z.object({ keys: z.array(JwkKey) })

export interface JwkSet extends z.TypeOf<typeof JwkSet> {}
