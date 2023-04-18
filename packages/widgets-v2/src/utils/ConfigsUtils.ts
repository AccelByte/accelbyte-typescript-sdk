/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import ppSeedConfigs from 'seed/seed-latest--pp.json'
import { AppBuilderUtils } from '@od-shared/utils/AppBuilderUtils'
import { FeatureFlagsType } from '@od-shared/FeatureFlags'
import { AppName } from '@od-shared/constants/ShConstants'
import { z } from 'zod'
import {
  BackgroundConfig,
  CompanyLogoConfig,
  DiscoveryConfigData,
  ExtendedConfig,
  GameList,
  GlobalStyleConfig,
  LogoVariantConfig,
  PageConfig,
  PlayerPortalConfigData,
  PlayerPortalFeatureFlagsConfig,
  PlayerPortalFooterConfig,
  SocialLinkConfig,
  StreamerInfo,
  TemplateConfig,
  TwitchDropConfigData
} from '@accelbyte/sdk-odinconfig'

const ppConfigs = ppSeedConfigs as PlayerPortalConfigData

export const SimplifiedPlayerPortalConfigData = z.object({
  /**
   * The launcher download link that will be shown on the top-right in the Player Portal.
   **/
  launcherDownloadLink: z.object({
    value: z.string()
  }),
  /**
   * The general metadata that will be applied to the `<head>` tag. Only use this when you are
   * using SSR (Server Side Rendering).
   */
  metaData: z
    .object({
      description: z.string(),
      image: z.string(),
      title: z.string()
    })
    .nullish(),
  footer: z.object({
    value: PlayerPortalFooterConfig
  }),
  /** The logo variant that will be used in header and footer of the Player Portal. */
  logoVariant: LogoVariantConfig
})
export interface SimplifiedPlayerPortalConfigData extends z.infer<typeof SimplifiedPlayerPortalConfigData> {}

export const SimplifiedDiscoveryConfigData = z.object({
  /**
   * The game ID that is to be shown.
   **/
  appId: z.object({
    value: z.string()
  }),
  /**
   * The avatars list that is going to be used in the profile. Each array element must consist of
   * a URL string.
   **/
  avatarsList: z.object({
    // Dev's note: put this as string here, later we will join with `\n`.
    value: z.array(z.string())
  }),
  /**
   * The brand name for the UI. This will affect mainly the browser tab title.
   **/
  brandName: z.object({
    value: z.string()
  }),
  /**
   * The Page title for the UI. This will affect mainly the browser tab title.
   **/
  pageTitle: z.object({
    value: z.string()
  }),
  /**
   * The list of company logo images that are used in tandem with the `logoVariant` config
   * in other configs.
   **/
  companyLogo: CompanyLogoConfig,
  /**
   * The copyright text that is going to be shown on the UI footer.
   **/
  copyright: z.object({
    value: z.string()
  }),
  /**
   * The experimental feature flags that can be used to test out features that are not released yet.
   **/
  experimentalFeatureFlags: z.record(z.boolean()),
  /**
   * The global page config that is going to be applied to all UIs if the `isLocalStyleEnabled` is not
   * set to `true` in other configs.
   **/
  globalPageConfig: GlobalStyleConfig,
  /**
   * The Player Portal feature flags that can be used to show or hide certain features.
   **/
  ppFeatureFlags: PlayerPortalFeatureFlagsConfig.omit({
    isNotificationsVisible: true,
    isNewsVisible: true,
    isSubscriptionsVisible: true,
    isSupportVisible: true,
    isVirtualCurrencyVisible: true,
    isNewsV2Visible: true
  }).partial(),
  /**
   * The list of social links that are shown in the UI.
   **/
  socialLinks: z.object({
    value: z.array(SocialLinkConfig)
  }),
  /**
   * Specify whether the UI is to be shown for displaying single game or multiple games. Changing this will
   * result in some pages being shown and some other being hidden due to the restrictive nature of the page routes.
   *
   * For example, if the displayed config is single game, then we won't be able to access pages that are only visible
   * in the multiple game and vice versa.
   **/
  templateConfig: z.object({
    value: z.union([z.literal(`${TemplateConfig.SINGLE}`), z.literal(`${TemplateConfig.MULTIPLE}`)])
  })
})
export interface SimplifiedDiscoveryConfigData extends z.infer<typeof SimplifiedDiscoveryConfigData> {}

export const SimplifiedTwitchDropConfigData = z.object({
  /** The logo variant that will be used across  the Twitch Drop pages. */
  logoVariant: z.object({
    header: z.number().nullable()
  }),
  /** List of games that are part of the Twitch Drop event. */
  gameList: GameList,
  /** The configuration for the View Streams button. */
  streamerInfo: StreamerInfo,
  /** The configuration for the background of the Twitch Drop pages. */
  backgroundConfig: BackgroundConfig
})
export interface SimplifiedTwitchDropConfigData extends z.infer<typeof SimplifiedTwitchDropConfigData> {}

export class ConfigsUtils {
  static createDiscoveryConfigs = (configs: SimplifiedDiscoveryConfigData | undefined): DiscoveryConfigData | undefined => {
    if (!configs) return undefined

    return {
      appId: createConfigWithDefaults(configs.appId),
      avatarsList: createConfigWithDefaults({
        value: configs.avatarsList.value.join('\n')
      }),
      brandName: createConfigWithDefaults(configs.brandName),
      pageTitle: createConfigWithDefaults(configs.pageTitle),
      companyLogo: createConfigWithDefaults(configs.companyLogo),
      copyright: createConfigWithDefaults(configs.copyright),
      experimentalFeatureFlags: createConfigWithDefaults(configs.experimentalFeatureFlags),
      favicon: createConfigWithDefaults({
        value: ''
      }),
      globalPageConfig: createConfigWithDefaults(configs.globalPageConfig),
      launcherFeatureFlags: createConfigWithDefaults({}),
      launcherTemplateInfo: createEmptyTemplateInfo(),
      legalTemplateInfo: createEmptyTemplateInfo(),
      loginFeatureFlags: createConfigWithDefaults({}),
      loginTemplateInfo: createEmptyTemplateInfo(),
      paymentTemplateInfo: createEmptyTemplateInfo(),
      ppFeatureFlags: createConfigWithDefaults(PlayerPortalFeatureFlagsConfig.parse(configs.ppFeatureFlags)),
      ppTemplateInfo: createConfigWithDefaults({
        draft: 'pp-default',
        published: 'pp-default'
      }),
      socialLinks: createConfigWithDefaults(configs.socialLinks),
      templateConfig: createConfigWithDefaults(configs.templateConfig),
      twitchDropTemplateInfo: createConfigWithDefaults({
        draft: 'twitchdrop-default',
        published: 'twitchdrop-default'
      })
    }
  }

  static createPlayerPortalConfigs = (configs: SimplifiedPlayerPortalConfigData | undefined): PlayerPortalConfigData | undefined => {
    if (!configs) return undefined

    return {
      footer: createConfigWithDefaults(configs.footer),
      // This is set as default because home page is not part of our Widgets.
      // At least, not yet.
      homepage: createConfigWithDefaults({
        isDisabled: false,
        redirectionURL: '',
        siteBrandURL: ''
      }),
      launcherDownloadLink: createConfigWithDefaults(configs.launcherDownloadLink),
      logoVariant: createConfigWithDefaults(configs.logoVariant),
      metaData: createConfigWithDefaults({
        description: configs.metaData?.description || '',
        image: configs.metaData?.image || '',
        title: configs.metaData?.title || ''
      }),
      pageConfig: createConfigWithDefaults(ppConfigs.pageConfig.data)
    }
  }

  static createTwitchDropConfigs = (configs: SimplifiedTwitchDropConfigData | undefined): TwitchDropConfigData | undefined => {
    if (!configs) return undefined

    return {
      logoVariant: createConfigWithDefaults(configs.logoVariant),
      gameList: createConfigWithDefaults(configs.gameList),
      streamerInfo: createConfigWithDefaults(configs.streamerInfo),
      backgroundConfig: createConfigWithDefaults(configs.backgroundConfig)
    }
  }

  static getAppId = (discoveryConfig: DiscoveryConfigData | null) => {
    return discoveryConfig?.appId.data.value || ''
  }

  static isSingleGame = (templateConfig: string) => {
    return templateConfig === TemplateConfig.SINGLE
  }

  static injectCss = (discoveryConfig: DiscoveryConfigData, pageConfig: ExtendedConfig<PageConfig>) => {
    const isLocalStyleEnabled = pageConfig.data.isLocalStyleEnabled
    const globalPageConfig = discoveryConfig.globalPageConfig

    let css = ''
    if (isLocalStyleEnabled) {
      css = AppBuilderUtils.convertConfigToCss(pageConfig)
    } else {
      if (globalPageConfig) {
        css = AppBuilderUtils.convertConfigToCss(globalPageConfig)
      }
    }

    if (ConfigsUtils.isSingleGame(discoveryConfig.templateConfig.data.value)) {
      AppBuilderUtils.injectCss(css)
    } else {
      // for now if it's multiple template, use default colors
      AppBuilderUtils.injectCss('')
    }
  }

  static getFeatureFlags = (discoveryConfig: DiscoveryConfigData, appName: string) => {
    let featureFlags: FeatureFlagsType | null = null

    switch (appName) {
      case AppName.WIDGET:
        featureFlags = { ...discoveryConfig.ppFeatureFlags.data, ...discoveryConfig.experimentalFeatureFlags.data } as FeatureFlagsType
        break
      case AppName.LAUNCHER:
        featureFlags = {
          ...discoveryConfig.launcherFeatureFlags.data,
          ...discoveryConfig.experimentalFeatureFlags.data
        } as FeatureFlagsType
        break
    }

    return featureFlags
  }
}

// Helper functions.
function createConfigWithDefaults<T>(data: T): ExtendedConfig<T> {
  return {
    data,
    format: '',
    name: '',
    updatedAt: '',
    version: 0
  }
}

function createEmptyTemplateInfo() {
  return createConfigWithDefaults({
    draft: '',
    published: ''
  })
}

// Helper functions.
export function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve(undefined), ms)
  })
}
