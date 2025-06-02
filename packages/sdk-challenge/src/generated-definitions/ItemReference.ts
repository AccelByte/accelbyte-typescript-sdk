/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChallengeReference } from './ChallengeReference.js'

export const ItemReference = z.object({ module: z.string(), references: z.array(ChallengeReference) })

export interface ItemReference extends z.TypeOf<typeof ItemReference> {}
