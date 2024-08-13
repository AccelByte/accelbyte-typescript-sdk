/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleUserDlcRewardContent } from './SimpleUserDlcRewardContent.js'

export const SimpleUserDlcRewardContentsResponse = z.object({ data: z.array(SimpleUserDlcRewardContent).nullish() })

export interface SimpleUserDlcRewardContentsResponse extends z.TypeOf<typeof SimpleUserDlcRewardContentsResponse> {}
