/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapItemEntry } from './IapItemEntry'

export const IapItemConfigUpdate = z.object({ data: z.array(IapItemEntry).nullish() })

export type IapItemConfigUpdate = z.TypeOf<typeof IapItemConfigUpdate>
