/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { PlayerPortalConfigData, BackgroundOverlayType } from '@accelbyte/sdk-odinconfig'
import { describe, expect, test } from 'vitest'

import { ConfigsUtils } from './ConfigsUtils'
import ppSeedConfigs from 'seed/seed-latest--pp.json'

const ppConfigs = ppSeedConfigs as PlayerPortalConfigData

const SAMPLE_LOGO_VARIANT = {
  footer: 0,
  header: 0
}
const SAMPLE_PAGE_CONFIG = ppConfigs.pageConfig.data
const __INTERNAL_SAMPLE_CONFIG_FIELDS = {
  format: '',
  name: '',
  updatedAt: '',
  version: 0
}

describe('createPlayerPortalConfigs', () => {
  const SAMPLE_FOOTER_DATA = {
    value: {
      links: [
        {
          id: 'test-footer',
          name: 'Legal',
          link: 'https://demo.accelbyte.io/legal'
        }
      ]
    }
  }
  const SAMPLE_DOWNLOAD_LINK_DATA = {
    value: 'https://cloudfront.demo.accelbyte.io/download/AccelByte%20Launcher%20Setup.exe'
  }
  const SAMPLE_METADATA_DATA = {
    description: '',
    image: '',
    title: ''
  }
  const SAMPLE_HOMEPAGE_DATA = {
    isDisabled: false,
    redirectionURL: '',
    siteBrandURL: ''
  }

  test('valid case: undefined input', () => {
    expect(ConfigsUtils.createPlayerPortalConfigs(undefined)).toBe(undefined)
  })

  test('valid case: without metaData', () => {
    expect(
      ConfigsUtils.createPlayerPortalConfigs({
        footer: SAMPLE_FOOTER_DATA,
        launcherDownloadLink: SAMPLE_DOWNLOAD_LINK_DATA,
        logoVariant: SAMPLE_LOGO_VARIANT
      })
    ).toEqual({
      footer: {
        data: SAMPLE_FOOTER_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      launcherDownloadLink: {
        data: SAMPLE_DOWNLOAD_LINK_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      logoVariant: {
        data: SAMPLE_LOGO_VARIANT,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      pageConfig: {
        data: SAMPLE_PAGE_CONFIG,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      homepage: {
        data: SAMPLE_HOMEPAGE_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      metaData: {
        data: SAMPLE_METADATA_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      }
    })
  })

  test('valid case: with metaData', () => {
    expect(
      ConfigsUtils.createPlayerPortalConfigs({
        footer: SAMPLE_FOOTER_DATA,
        launcherDownloadLink: SAMPLE_DOWNLOAD_LINK_DATA,
        logoVariant: SAMPLE_LOGO_VARIANT,
        metaData: {
          title: 'AccelByte Player Portal',
          description: 'AccelByte Player Portal description',
          image: 'https://cdn.demo.accelbyte.io/files/accelbyte/assets/98923a7ba0c34a8f85027cf22b8edc36.jpeg'
        }
      })
    ).toEqual({
      footer: {
        data: SAMPLE_FOOTER_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      launcherDownloadLink: {
        data: SAMPLE_DOWNLOAD_LINK_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      logoVariant: {
        data: SAMPLE_LOGO_VARIANT,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      pageConfig: {
        data: SAMPLE_PAGE_CONFIG,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      homepage: {
        data: SAMPLE_HOMEPAGE_DATA,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      metaData: {
        data: {
          title: 'AccelByte Player Portal',
          description: 'AccelByte Player Portal description',
          image: 'https://cdn.demo.accelbyte.io/files/accelbyte/assets/98923a7ba0c34a8f85027cf22b8edc36.jpeg'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      }
    })
  })
})

describe('createDiscoveryConfigs', () => {
  const SAMPLE_APP_ID = {
    value: 'testgame'
  }
  const SAMPLE_AVATARS_LIST = {
    value: [
      'https://cloudfront.demo.accelbyte.io/app-config/default-avatars/user-avatar-2.svg',
      'https://cloudfront.demo.accelbyte.io/app-config/default-avatars/user-avatar-3.svg'
    ]
  }
  const SAMPLE_EMPTY_TEMPLATE_INFO = {
    name: '',
    data: {
      draft: '',
      published: ''
    },
    format: '',
    updatedAt: '',
    version: 0
  }
  const SAMPLE_BRAND_NAME = {
    value: 'AccelByte'
  }
  const SAMPLE_COMPANY_LOGO = {
    defaultIndex: 0,
    images: [
      {
        name: 'Default logo',
        url: 'https://cloudfront.demo.accelbyte.io/files/accelbyte/od-assets/4a7e6be38d324f2a97645a75a2050d95.png'
      }
    ]
  }
  const SAMPLE_COPYRIGHT = {
    value: 'CopyrightⒸ 2023 AccelByte'
  }
  const SAMPLE_PAGE_TITLE = {
    value: '{pageTitle} - {brandName}'
  }
  const SAMPLE_FEATURE_FLAGS = {
    isAccountOverviewVisible: true,
    isChangePasswordVisible: true,
    isDeleteAccountVisible: true,
    isGetLauncherVisible: true,
    isLinkedAccountsVisible: true,
    isMyProfileVisible: true,
    isLegalEnabled: true,
    isOrderHistoryVisible: true,
    isPaymentMethodsVisible: true,
    isPersonalDataVisible: true,
    isLegalAgreementsVisible: true,
    isPurchasedItemsVisible: true,
    isRedeemCodeVisible: true,
    isStoreVisible: true
  }

  const SAMPLE_SOCIAL_LINKS = {
    value: [
      {
        apps: ['pp'],
        platform: 'twitter',
        url: 'https://twitter.com/AccelByteInc'
      }
    ]
  }

  test('valid case: undefined input', () => {
    expect(ConfigsUtils.createDiscoveryConfigs(undefined)).toBe(undefined)
  })

  test('valid case: full config', () => {
    expect(
      ConfigsUtils.createDiscoveryConfigs({
        appId: SAMPLE_APP_ID,
        avatarsList: SAMPLE_AVATARS_LIST,
        brandName: SAMPLE_BRAND_NAME,
        pageTitle: SAMPLE_PAGE_TITLE,
        companyLogo: SAMPLE_COMPANY_LOGO,
        copyright: SAMPLE_COPYRIGHT,
        experimentalFeatureFlags: {
          isSomethingVisible: true
        },
        globalPageConfig: {
          global: SAMPLE_PAGE_CONFIG.global
        },
        ppFeatureFlags: SAMPLE_FEATURE_FLAGS,
        socialLinks: SAMPLE_SOCIAL_LINKS,
        templateConfig: {
          value: 'single-game'
        }
      })
    ).toEqual({
      ppTemplateInfo: {
        data: {
          draft: 'pp-default',
          published: 'pp-default'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      twitchDropTemplateInfo: {
        data: {
          draft: 'twitchdrop-default',
          published: 'twitchdrop-default'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      launcherTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      loginTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      legalTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      paymentTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      ppFeatureFlags: {
        data: {
          ...SAMPLE_FEATURE_FLAGS,
          isNewsV2Visible: false,
          isNewsVisible: false,
          isNotificationsVisible: false,
          isSubscriptionsVisible: false,
          isSupportVisible: false,
          isTwitchDropEnabled: true,
          isVirtualCurrencyVisible: false
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      launcherFeatureFlags: {
        data: {},
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      loginFeatureFlags: {
        data: {},
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      experimentalFeatureFlags: {
        data: {
          isSomethingVisible: true
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      socialLinks: {
        data: SAMPLE_SOCIAL_LINKS,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      copyright: {
        data: SAMPLE_COPYRIGHT,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      templateConfig: {
        data: {
          value: 'single-game'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      globalPageConfig: {
        data: {
          global: SAMPLE_PAGE_CONFIG.global
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      companyLogo: {
        data: SAMPLE_COMPANY_LOGO,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      appId: {
        data: SAMPLE_APP_ID,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      avatarsList: {
        data: {
          value: SAMPLE_AVATARS_LIST.value.join('\n')
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      favicon: {
        data: {
          value: ''
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      brandName: {
        data: SAMPLE_BRAND_NAME,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      pageTitle: {
        data: SAMPLE_PAGE_TITLE,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      }
    })
  })

  test('valid case: partial config', () => {
    expect(
      ConfigsUtils.createDiscoveryConfigs({
        appId: SAMPLE_APP_ID,
        avatarsList: SAMPLE_AVATARS_LIST,
        brandName: SAMPLE_BRAND_NAME,
        pageTitle: SAMPLE_PAGE_TITLE,
        companyLogo: SAMPLE_COMPANY_LOGO,
        copyright: SAMPLE_COPYRIGHT,
        experimentalFeatureFlags: {},
        globalPageConfig: {
          global: SAMPLE_PAGE_CONFIG.global
        },
        ppFeatureFlags: {},
        socialLinks: SAMPLE_SOCIAL_LINKS,
        templateConfig: {
          value: 'single-game'
        }
      })
    ).toEqual({
      ppTemplateInfo: {
        data: {
          draft: 'pp-default',
          published: 'pp-default'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      twitchDropTemplateInfo: {
        data: {
          draft: 'twitchdrop-default',
          published: 'twitchdrop-default'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      launcherTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      loginTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      legalTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      paymentTemplateInfo: SAMPLE_EMPTY_TEMPLATE_INFO,
      ppFeatureFlags: {
        data: {
          isAccountOverviewVisible: true,
          isChangePasswordVisible: true,
          isDeleteAccountVisible: true,
          isGetLauncherVisible: true,
          isLegalEnabled: true,
          isLinkedAccountsVisible: true,
          isMyProfileVisible: true,
          isNewsVisible: false,
          isNotificationsVisible: false,
          isOrderHistoryVisible: true,
          isPaymentMethodsVisible: true,
          isPersonalDataVisible: true,
          isLegalAgreementsVisible: true,
          isPurchasedItemsVisible: true,
          isRedeemCodeVisible: true,
          isStoreVisible: true,
          isSubscriptionsVisible: false,
          isSupportVisible: false,
          isTwitchDropEnabled: true,
          isVirtualCurrencyVisible: false,
          isNewsV2Visible: false
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      launcherFeatureFlags: {
        data: {},
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      loginFeatureFlags: {
        data: {},
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      experimentalFeatureFlags: {
        data: {},
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      socialLinks: {
        data: SAMPLE_SOCIAL_LINKS,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      copyright: {
        data: SAMPLE_COPYRIGHT,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      templateConfig: {
        data: {
          value: 'single-game'
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      globalPageConfig: {
        data: {
          global: SAMPLE_PAGE_CONFIG.global
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      companyLogo: {
        data: SAMPLE_COMPANY_LOGO,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      appId: {
        data: SAMPLE_APP_ID,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      avatarsList: {
        data: {
          value: SAMPLE_AVATARS_LIST.value.join('\n')
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      favicon: {
        data: {
          value: ''
        },
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      brandName: {
        data: SAMPLE_BRAND_NAME,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      pageTitle: {
        data: SAMPLE_PAGE_TITLE,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      }
    })
  })
})

describe('createTwitchDropConfigs', () => {
  const SAMPLE_GAME_LIST = {
    games: [
      {
        gameId: 'lightfantastic',
        gameName: 'Light Fantastic',
        namespace: 'accelbytetesting',
        clientId: 'clientId'
      },
      {
        gameId: 'abshooter',
        gameName: 'AB Shooter',
        namespace: 'accelbytetesting',
        clientId: 'clientId'
      }
    ]
  }

  const SAMPLE_STREAMER_INFO = {
    isStreamButtonEnabled: true,
    streamButton: {
      label: 'View Streams',
      url: 'www.twitch.tv/abgametwitch'
    }
  }

  const SAMPLE_BACKGROUND_CONFIG = {
    background: 'https://cdn.development.accelbyte.io/files/accelbyte/od-assets/06520eb99cc2468880870dce3e41a853.jpeg',
    backgroundOverlay: {
      isEnabled: true,
      opacity: 100,
      type: BackgroundOverlayType.GRADIENT
    }
  }

  test('valid case: undefined input', () => {
    expect(ConfigsUtils.createPlayerPortalConfigs(undefined)).toBe(undefined)
  })

  test('valid case: full config', () => {
    expect(
      ConfigsUtils.createTwitchDropConfigs({
        logoVariant: SAMPLE_LOGO_VARIANT,
        gameList: SAMPLE_GAME_LIST,
        streamerInfo: SAMPLE_STREAMER_INFO,
        backgroundConfig: SAMPLE_BACKGROUND_CONFIG
      })
    ).toEqual({
      logoVariant: {
        data: SAMPLE_LOGO_VARIANT,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      gameList: {
        data: SAMPLE_GAME_LIST,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      streamerInfo: {
        data: SAMPLE_STREAMER_INFO,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      },
      backgroundConfig: {
        data: SAMPLE_BACKGROUND_CONFIG,
        ...__INTERNAL_SAMPLE_CONFIG_FIELDS
      }
    })
  })
})
