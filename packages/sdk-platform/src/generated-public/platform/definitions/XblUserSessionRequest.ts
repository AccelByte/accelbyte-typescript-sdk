/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblUserSessionRequest = z.object({
  gameSessionId: z.string(),
  payload: z.record(z.any()),
  scid: z.string(),
  sessionTemplateName: z.string()
})

export interface XblUserSessionRequest extends z.TypeOf<typeof XblUserSessionRequest> {}
