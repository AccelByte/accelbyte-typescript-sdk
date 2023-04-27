/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { BackgroundConfig, PageConfig } from '../models/base-configs.js'
import { Config } from '../generated-public/odin-config/definitions/Config.js'

export const GameListKeys = z.enum(['gameId', 'gameName', 'namespace', 'clientId'])
export type TGameListKeys = z.infer<typeof GameListKeys>

export const GameList = z.object({
  games: z.array(
    z.object({
      [GameListKeys.enum.gameId]: z.string(),
      [GameListKeys.enum.gameName]: z.string(),
      [GameListKeys.enum.namespace]: z.string(),
      [GameListKeys.enum.clientId]: z.string()
    })
  )
})

export type GameList = z.TypeOf<typeof GameList>

export const StreamerInfo = z.object({
  isStreamButtonEnabled: z.boolean(),
  streamButton: z.object({
    label: z.string(),
    url: z.string()
  })
})

export type StreamerInfo = z.TypeOf<typeof StreamerInfo>

export const TwitchDropConfigData = z.object({
  logoVariant: Config.merge(
    z.object({
      data: z.object({
        header: z.number().nullable()
      })
    })
  ),
  gameList: Config.merge(
    z.object({
      data: GameList
    })
  ),
  streamerInfo: Config.merge(
    z.object({
      data: StreamerInfo
    })
  ),
  backgroundConfig: Config.merge(
    z.object({
      data: BackgroundConfig
    })
  ),
  pageConfig: z.optional(
    Config.merge(
      z.object({
        data: PageConfig
      })
    )
  )
})

export type TwitchDropConfigData = z.infer<typeof TwitchDropConfigData>
