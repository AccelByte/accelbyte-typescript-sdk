/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ChallengeConfigurationAdminApi } from './generated-admin/ChallengeConfigurationAdminApi.js'
import { ChallengeProgressionAdminApi } from './generated-admin/ChallengeProgressionAdminApi.js'
import { GoalConfigurationAdminApi } from './generated-admin/GoalConfigurationAdminApi.js'
import { PlayerRewardAdminApi } from './generated-admin/PlayerRewardAdminApi.js'
import { PluginsAdminApi } from './generated-admin/PluginsAdminApi.js'
import { ChallengeListApi } from './generated-public/ChallengeListApi.js'
import { ChallengeProgressionApi } from './generated-public/ChallengeProgressionApi.js'
import { PlayerRewardApi } from './generated-public/PlayerRewardApi.js'

console.log(`${name}@${version}`)

const apis = {
  ChallengeConfigurationAdminApi,
  ChallengeProgressionAdminApi,
  PluginsAdminApi,
  PlayerRewardAdminApi,
  GoalConfigurationAdminApi,
  ChallengeListApi,
  PlayerRewardApi,
  ChallengeProgressionApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Challenge = apis
