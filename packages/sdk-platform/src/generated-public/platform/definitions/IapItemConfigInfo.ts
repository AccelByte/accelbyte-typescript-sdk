/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapItemEntry } from './IapItemEntry'

export const IapItemConfigInfo = z.object({ data: z.array(IapItemEntry).nullish() })

export interface IapItemConfigInfo extends z.TypeOf<typeof IapItemConfigInfo> {}