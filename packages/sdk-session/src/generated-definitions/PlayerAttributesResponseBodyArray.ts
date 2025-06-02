/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerAttributesResponseBody } from './PlayerAttributesResponseBody.js'

export const PlayerAttributesResponseBodyArray = z.array(PlayerAttributesResponseBody)

export interface PlayerAttributesResponseBodyArray extends z.TypeOf<typeof PlayerAttributesResponseBodyArray> {}
