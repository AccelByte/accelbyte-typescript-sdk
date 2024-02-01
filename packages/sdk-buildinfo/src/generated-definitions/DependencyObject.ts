/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DependencyObject = z.object({ compatibleBuildId: z.array(z.string()).nullish(), dependencyAppId: z.string().nullish() })

export interface DependencyObject extends z.TypeOf<typeof DependencyObject> {}
