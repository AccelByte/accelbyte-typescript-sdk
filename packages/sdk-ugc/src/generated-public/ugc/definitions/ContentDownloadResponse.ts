/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreatorFollowState } from './CreatorFollowState.js'
import { LikeState } from './LikeState.js'
import { PayloadUrl } from './PayloadUrl.js'
import { PreviewUrl } from './PreviewUrl.js'
import { ScreenshotResponse } from './ScreenshotResponse.js'

export const ContentDownloadResponse = z.object({
  channelId: z.string(),
  createdTime: z.string(),
  creatorFollowState: CreatorFollowState,
  creatorName: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  downloadCount: z.number().int(),
  fileExtension: z.string(),
  groups: z.array(z.string()).nullish(),
  id: z.string(),
  isHidden: z.boolean(),
  isOfficial: z.boolean(),
  likeCount: z.number().int(),
  likeState: LikeState.nullish(),
  name: z.string(),
  namespace: z.string(),
  payload: z.string().nullish(),
  payloadURL: z.array(PayloadUrl).nullish(),
  previewURL: z.array(PreviewUrl).nullish(),
  screenshots: z.array(ScreenshotResponse).nullish(),
  shareCode: z.string(),
  subType: z.string(),
  tags: z.array(z.string()),
  type: z.string(),
  updatedTime: z.string(),
  userId: z.string()
})

export interface ContentDownloadResponse extends z.TypeOf<typeof ContentDownloadResponse> {}
