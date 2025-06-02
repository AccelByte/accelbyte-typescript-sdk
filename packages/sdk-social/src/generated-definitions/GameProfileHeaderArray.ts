/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameProfileHeader } from './GameProfileHeader.js'

export const GameProfileHeaderArray = z.array(GameProfileHeader)

export interface GameProfileHeaderArray extends z.TypeOf<typeof GameProfileHeaderArray> {}
