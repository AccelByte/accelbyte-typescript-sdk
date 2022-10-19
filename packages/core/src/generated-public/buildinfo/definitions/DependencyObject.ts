/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DependencyObject = z.object({ dependencyAppId: z.string().nullish(), compatibleBuildId: z.array(z.string()).nullish() })

export type DependencyObject = z.TypeOf<typeof DependencyObject>
