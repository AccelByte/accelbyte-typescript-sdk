/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetGroupListRequestV2 = z.object({ groupIDs: z.array(z.string()) })

export interface GetGroupListRequestV2 extends z.TypeOf<typeof GetGroupListRequestV2> {}
