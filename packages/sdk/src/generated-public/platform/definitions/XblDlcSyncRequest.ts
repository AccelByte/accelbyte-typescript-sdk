/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblDlcSyncRequest = z.object({ xstsToken: z.string().nullish() })

export interface XblDlcSyncRequest extends z.TypeOf<typeof XblDlcSyncRequest> {}
