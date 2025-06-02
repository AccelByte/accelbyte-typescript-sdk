/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChallengeReference = z.object({ challengeCode: z.string(), goalCode: z.string() })

export interface ChallengeReference extends z.TypeOf<typeof ChallengeReference> {}
