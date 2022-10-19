/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DependencyObject } from './DependencyObject'

export const CreateDependencyLinkRequest = z.object({ buildId: z.string().nullish(), dependencies: z.array(DependencyObject).nullish() })

export type CreateDependencyLinkRequest = z.TypeOf<typeof CreateDependencyLinkRequest>
