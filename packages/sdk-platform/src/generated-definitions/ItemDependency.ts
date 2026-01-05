/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FeatureReference } from './FeatureReference.js'

export const ItemDependency = z.object({ references: z.array(FeatureReference).nullish() })

export interface ItemDependency extends z.TypeOf<typeof ItemDependency> {}
