/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AdminAdminApi } from './generated-admin/AdminAdminApi.js'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { FriendsAdminApi } from './generated-admin/FriendsAdminApi.js'
import { LobbyOperationsAdminApi } from './generated-admin/LobbyOperationsAdminApi.js'
import { NotificationAdminApi } from './generated-admin/NotificationAdminApi.js'
import { PartyAdminApi } from './generated-admin/PartyAdminApi.js'
import { PlayerAdminApi } from './generated-admin/PlayerAdminApi.js'
import { ProfanityAdminApi } from './generated-admin/ProfanityAdminApi.js'
import { ThirdPartyAdminApi } from './generated-admin/ThirdPartyAdminApi.js'
import { AdminApi } from './generated-public/AdminApi.js'
import { BlocksApi } from './generated-public/BlocksApi.js'
import { FriendsApi } from './generated-public/FriendsApi.js'
import { LobbyOperationsApi } from './generated-public/LobbyOperationsApi.js'
import { NotificationApi } from './generated-public/NotificationApi.js'
import { PartyApi } from './generated-public/PartyApi.js'
import { PlayerApi } from './generated-public/PlayerApi.js'
import { PresenceApi } from './generated-public/PresenceApi.js'
import { WebSocketClass } from './generated-websocket/WebSocketClass.js'

console.log(`${name}@${version}`)

const apis = {
  ConfigAdminApi,
  AdminAdminApi,
  PlayerAdminApi,
  ProfanityAdminApi,
  NotificationAdminApi,
  FriendsAdminApi,
  PartyAdminApi,
  ThirdPartyAdminApi,
  LobbyOperationsAdminApi,
  LobbyOperationsApi,
  FriendsApi,
  NotificationApi,
  BlocksApi,
  AdminApi,
  PlayerApi,
  PartyApi,
  PresenceApi,
  WebSocket: WebSocketClass,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Lobby = apis
