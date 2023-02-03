/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LogoVariantConfig = z.object({
  header: z.number().nullable(),
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
  }),
  hsl: z.object({
    h: z.number(),
    s: z.number(),
    l: z.number(),
    a: z.number()
  }),
  hsv: z.object({
    h: z.number(),
    s: z.number(),
    v: z.number(),
    a: z.number()
  }),
  oldHue: z.number(),
  source: z.string()
})
export type ColorConfig = z.infer<typeof ColorConfig>

export const ColorConfigs = z.object({
  background: ColorConfig,
  card: ColorConfig,
  overlay: ColorConfig,
  primary: ColorConfig,
  secondary: ColorConfig,
  text: ColorConfig
})
export type ColorConfigs = z.infer<typeof ColorConfigs>

export const FontConfigs = z.object({
  body: z.string(),
  bodyCss: z.string(),
  customBodyFontUrl: z.string(),
  title: z.string(),
  titleCss: z.string(),
  customTitleFontUrl: z.string()
})
export type FontConfigs = z.infer<typeof FontConfigs>

export const PageConfig = z.object({
  templatePreview: z.string().optional(),
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
    fonts: z.object({
      title: z.string(),
      titleCss: z.string(),
      customTitleFontUrl: z.string(),
      body: z.string(),
      bodyCss: z.string(),
      customBodyFontUrl: z.string()
    })
  })
})
export type PageConfig = z.infer<typeof PageConfig>
