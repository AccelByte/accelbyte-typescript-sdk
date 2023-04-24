/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Session } from './Session'

export const SessionResponse = z.object({ session: Session })

export interface SessionResponse extends z.TypeOf<typeof SessionResponse> {}
