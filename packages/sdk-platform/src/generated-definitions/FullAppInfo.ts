/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppLocalization } from './AppLocalization.js'
import { Requirement } from './Requirement.js'
import { Slide } from './Slide.js'

export const FullAppInfo = z.object({
  carousel: z.array(Slide).nullish(),
  developer: z.string().nullish(),
  forumUrl: z.string().nullish(),
  genres: z
    .array(
      z.enum([
        'Action',
        'Adventure',
        'Casual',
        'FreeToPlay',
        'Indie',
        'MassivelyMultiplayer',
        'RPG',
        'Racing',
        'Simulation',
        'Sports',
        'Strategy'
      ])
    )
    .nullish(),
  itemId: z.string(),
  localizations: z.record(AppLocalization).nullish(),
  namespace: z.string(),
  platformRequirements: z.record(z.array(Requirement)).nullish(),
  platforms: z.array(z.enum(['Android', 'IOS', 'Linux', 'MacOS', 'Windows'])).nullish(),
  players: z.array(z.enum(['Coop', 'CrossPlatformMulti', 'LocalCoop', 'MMO', 'Multi', 'Single'])).nullish(),
  primaryGenre: z
    .enum([
      'Action',
      'Adventure',
      'Casual',
      'FreeToPlay',
      'Indie',
      'MassivelyMultiplayer',
      'RPG',
      'Racing',
      'Simulation',
      'Sports',
      'Strategy'
    ])
    .nullish(),
  publisher: z.string().nullish(),
  releaseDate: z.string().nullish(),
  websiteUrl: z.string().nullish()
})

export interface FullAppInfo extends z.TypeOf<typeof FullAppInfo> {}
