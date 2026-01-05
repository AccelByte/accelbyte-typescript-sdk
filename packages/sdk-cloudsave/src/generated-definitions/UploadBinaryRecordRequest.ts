/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadBinaryRecordRequest = z.object({ file_type: z.string() })

export interface UploadBinaryRecordRequest extends z.TypeOf<typeof UploadBinaryRecordRequest> {}
