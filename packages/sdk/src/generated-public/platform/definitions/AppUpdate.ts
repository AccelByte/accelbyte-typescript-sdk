/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppLocalization } from './AppLocalization'
import { Requirement } from './Requirement'
import { Slide } from './Slide'

export const AppUpdate = z.object({
  carousel: z.array(Slide).nullish(),
  developer: z.string().nullish(),
  publisher: z.string().nullish(),
  websiteUrl: z.string().nullish(),
  forumUrl: z.string().nullish(),
  platforms: z.array(z.enum(['Windows', 'MacOS', 'Linux', 'IOS', 'Android'])).nullish(),
  platformRequirements: z.record(z.array(Requirement)).nullish(),
  localizations: z.record(AppLocalization).nullish(),
  primaryGenre: z
    .enum([
      'Action',
      'Adventure',
      'Casual',
      'FreeToPlay',
      'Indie',
      'MassivelyMultiplayer',
      'Racing',
      'RPG',
      'Simulation',
      'Sports',
      'Strategy'
    ])
    .nullish(),
  genres: z
    .array(
      z.enum([
        'Action',
        'Adventure',
        'Casual',
        'FreeToPlay',
        'Indie',
        'MassivelyMultiplayer',
        'Racing',
        'RPG',
        'Simulation',
        'Sports',
        'Strategy'
      ])
    )
    .nullish(),
  players: z.array(z.enum(['Single', 'Multi', 'CrossPlatformMulti', 'MMO', 'Coop', 'LocalCoop'])).nullish(),
  releaseDate: z.string().nullish()
})

export type AppUpdate = z.TypeOf<typeof AppUpdate>
