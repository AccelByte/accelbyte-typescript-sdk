/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AgentType } from './AgentType'

export const MultipleAgentType = z.object({ AgentTypes: z.array(AgentType) })

export type MultipleAgentType = z.TypeOf<typeof MultipleAgentType>
