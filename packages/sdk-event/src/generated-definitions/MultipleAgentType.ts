/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AgentType } from './AgentType.js'

export const MultipleAgentType = z.object({ AgentTypes: z.array(AgentType) })

export interface MultipleAgentType extends z.TypeOf<typeof MultipleAgentType> {}
