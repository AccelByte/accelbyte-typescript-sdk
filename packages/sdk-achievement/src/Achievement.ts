/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AchievementsAdminApi } from './generated-admin/AchievementsAdminApi.js'
import { AnonymizationAdminApi } from './generated-admin/AnonymizationAdminApi.js'
import { GlobalAchievementsAdminApi } from './generated-admin/GlobalAchievementsAdminApi.js'
import { PlatformAchievementAdminApi } from './generated-admin/PlatformAchievementAdminApi.js'
import { TagsAdminApi } from './generated-admin/TagsAdminApi.js'
import { UserAchievementsAdminApi } from './generated-admin/UserAchievementsAdminApi.js'
import { AchievementsApi } from './generated-public/AchievementsApi.js'
import { GlobalAchievementsApi } from './generated-public/GlobalAchievementsApi.js'
import { TagsApi } from './generated-public/TagsApi.js'
import { UserAchievementsApi } from './generated-public/UserAchievementsApi.js'

console.log(`${name}@${version}`)

const apis = {
  TagsAdminApi,
  AchievementsAdminApi,
  PlatformAchievementAdminApi,
  GlobalAchievementsAdminApi,
  UserAchievementsAdminApi,
  AnonymizationAdminApi,
  TagsApi,
  AchievementsApi,
  GlobalAchievementsApi,
  UserAchievementsApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Achievement = apis
