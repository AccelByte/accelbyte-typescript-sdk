/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LinkHeadlessAccountRequest = z.object({ chosenNamespaces: z.array(z.string()), oneTimeLinkCode: z.string() })

export interface LinkHeadlessAccountRequest extends z.TypeOf<typeof LinkHeadlessAccountRequest> {}
