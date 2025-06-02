/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DependencyObject } from './DependencyObject.js'

export const CreateDependencyLinkRequest = z.object({ buildId: z.string().nullish(), dependencies: z.array(DependencyObject).nullish() })

export interface CreateDependencyLinkRequest extends z.TypeOf<typeof CreateDependencyLinkRequest> {}
