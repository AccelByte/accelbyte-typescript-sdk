/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from '@accelbyte/sdk/generated-public/odin-config/definitions/Config'

// Dev's note: using zod, unfortunately we can't have generics.
// This is a "hack" so that we can have a safe typing for Config.
// Perhaps there's a better way to do it, like using z.lazy?
// ts-prune-ignore-next
export interface ExtendedConfig<T extends Record<string, any>> extends z.TypeOf<typeof Config> {
  data: T
}

export enum BackgroundOverlayType {
  GRADIENT = 'gradient',
  FULL = 'full'
}

export const BackgroundOverlay = z.object({
  isEnabled: z.boolean(),
  type: z.nativeEnum(BackgroundOverlayType),
  /** Number between 0-100. The bigger, the more solid the color will be. */
  opacity: z.number().min(0).max(100)
})
export interface BackgroundOverlay extends z.infer<typeof BackgroundOverlay> {}

export const LogoVariantConfig = z.object({
  /** The index of the image located in the `companyLogo` inside the discovery configs. */
  header: z.number().nullable(),
  /** The index of the image located in the `companyLogo` inside the discovery configs. */
  footer: z.number().nullable()
})
export type LogoVariantConfig = z.TypeOf<typeof LogoVariantConfig>

export const ColorConfig = z.object({
  hex: z.string(),
  rgb: z.object({
    r: z.number(),
    g: z.number(),
    b: z.number(),
    a: z.number()
  })
})
export interface ColorConfig extends z.infer<typeof ColorConfig> {}

export const ColorConfigs = z.object({
  background: ColorConfig,
  card: ColorConfig,
  overlay: ColorConfig,
  primary: ColorConfig,
  secondary: ColorConfig,
  text: ColorConfig
})
export interface ColorConfigs extends z.infer<typeof ColorConfigs> {}

export const FontConfigs = z.object({
  /**
   * The font-family that will be used for the body. Supported default fonts are as the following:
   * 'Exo', 'Rubik', 'Roboto', 'Inter', and 'Poppins'.
   **/
  body: z.string(),
  /** The public URL of the font, if you want to use custom font. */
  customBodyFontUrl: z.string(),
  /**
   * The font-family that will be used for the headings (including buttons). Supported default fonts are as the following:
   * 'Exo', 'Rubik', 'Roboto', 'Inter', and 'Poppins'.
   **/
  title: z.string(),
  /** The public URL of the font, if you want to use custom font. */
  customTitleFontUrl: z.string()
})
export interface FontConfigs extends z.infer<typeof FontConfigs> {}

export const PageConfig = z.object({
  templatePreview: z.string().optional(),
  /** When enabled, then it will use the styles defined in the `global.colors` and `global.fonts`. */
  isLocalStyleEnabled: z.boolean(),
  global: z.object({
    colors: z.object({
      primary: ColorConfig,
      secondary: ColorConfig,
      text: ColorConfig,
      overlay: ColorConfig,
      background: ColorConfig,
      card: ColorConfig
    }),
    fonts: FontConfigs
  })
})

export interface PageConfig extends z.infer<typeof PageConfig> {}

export const BackgroundConfig = z.object({
  background: z.string(),
  backgroundOverlay: BackgroundOverlay
})

export interface BackgroundConfig extends z.TypeOf<typeof BackgroundConfig> {}
