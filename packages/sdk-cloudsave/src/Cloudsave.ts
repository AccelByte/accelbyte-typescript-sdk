/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ConcurrentRecordAdminApi } from './generated-admin/ConcurrentRecordAdminApi.js'
import { GameBinaryRecordAdminApi } from './generated-admin/GameBinaryRecordAdminApi.js'
import { GameRecordAdminApi } from './generated-admin/GameRecordAdminApi.js'
import { PlayerBinaryRecordAdminApi } from './generated-admin/PlayerBinaryRecordAdminApi.js'
import { PlayerRecordAdminApi } from './generated-admin/PlayerRecordAdminApi.js'
import { PluginConfigAdminApi } from './generated-admin/PluginConfigAdminApi.js'
import { RecordAdminApi } from './generated-admin/RecordAdminApi.js'
import { TagsAdminApi } from './generated-admin/TagsAdminApi.js'
import { TtlConfigAdminApi } from './generated-admin/TtlConfigAdminApi.js'
import { ConcurrentRecordApi } from './generated-public/ConcurrentRecordApi.js'
import { PublicGameBinaryRecordApi } from './generated-public/PublicGameBinaryRecordApi.js'
import { PublicGameRecordApi } from './generated-public/PublicGameRecordApi.js'
import { PublicPlayerBinaryRecordApi } from './generated-public/PublicPlayerBinaryRecordApi.js'
import { PublicPlayerRecordApi } from './generated-public/PublicPlayerRecordApi.js'
import { PublicTagsApi } from './generated-public/PublicTagsApi.js'

console.log(`${name}@${version}`)

const apis = {
  TagsAdminApi,
  PluginConfigAdminApi,
  GameRecordAdminApi,
  GameBinaryRecordAdminApi,
  RecordAdminApi,
  PlayerRecordAdminApi,
  TtlConfigAdminApi,
  PlayerBinaryRecordAdminApi,
  ConcurrentRecordAdminApi,
  PublicTagsApi,
  PublicGameBinaryRecordApi,
  PublicGameRecordApi,
  PublicPlayerRecordApi,
  PublicPlayerBinaryRecordApi,
  ConcurrentRecordApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Cloudsave = apis
