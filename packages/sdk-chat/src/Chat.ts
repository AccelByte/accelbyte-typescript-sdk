/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { InboxAdminApi } from './generated-admin/InboxAdminApi.js'
import { ModerationAdminApi } from './generated-admin/ModerationAdminApi.js'
import { ProfanityAdminApi } from './generated-admin/ProfanityAdminApi.js'
import { TopicAdminApi } from './generated-admin/TopicAdminApi.js'
import { ConfigApi } from './generated-public/ConfigApi.js'
import { ModerationApi } from './generated-public/ModerationApi.js'
import { TopicApi } from './generated-public/TopicApi.js'

console.log(`${name}@${version}`)

const apis = {
  ConfigAdminApi,
  TopicAdminApi,
  InboxAdminApi,
  ModerationAdminApi,
  ProfanityAdminApi,
  TopicApi,
  ConfigApi,
  ModerationApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Chat = apis
