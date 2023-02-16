/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BackgroundOverlay, PageConfig } from './base-configs'

export const LauncherPageConfig = PageConfig.extend({
  loginPage: z.object({
    template: z.string(),
    background: z.string(),
    boxLogo: z.string(),
    boxTitle: z.string(),
    boxInfo: z.string(),
    boxButtonText: z.string(),
    backgroundOverlay: BackgroundOverlay
  }),
  mainPage: z.object({
    gameTitle: z.string(),
    background: z.string(),
    gameID: z.string(),
    backgroundOverlay: BackgroundOverlay
  })
})
export interface LauncherPageConfig extends z.infer<typeof LauncherPageConfig> {}
