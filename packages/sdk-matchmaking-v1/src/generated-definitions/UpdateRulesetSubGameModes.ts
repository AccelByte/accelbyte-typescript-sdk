/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SubGameMode } from './SubGameMode.js'

export const UpdateRulesetSubGameModes = z.record(SubGameMode)

export interface UpdateRulesetSubGameModes extends z.TypeOf<typeof UpdateRulesetSubGameModes> {}
