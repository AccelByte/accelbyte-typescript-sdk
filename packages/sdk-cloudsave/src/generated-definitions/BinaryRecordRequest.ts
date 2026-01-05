/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BinaryRecordRequest = z.object({ content_type: z.string(), file_location: z.string() })

export interface BinaryRecordRequest extends z.TypeOf<typeof BinaryRecordRequest> {}
