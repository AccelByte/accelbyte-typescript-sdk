/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceFlexingRule } from './AllianceFlexingRule.js'
import { AllianceRule } from './AllianceRule.js'

export const SubGameMode = z.object({
  alliance: AllianceRule,
  alliance_flexing_rule: z.array(AllianceFlexingRule).nullish(),
  name: z.string()
})

export interface SubGameMode extends z.TypeOf<typeof SubGameMode> {}
