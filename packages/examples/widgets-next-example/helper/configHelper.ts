/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Accelbyte } from '@accelbyte/sdk'
import { BASE_URL, CLIENT_ID, GAME_NAMESPACE, REDIRECT_URL } from '../pages/constants'

export const initializeSDK = () =>
  Accelbyte.SDK({
    options: {
      baseURL: BASE_URL,
      clientId: CLIENT_ID,
      namespace: GAME_NAMESPACE,
      redirectURI: REDIRECT_URL
    }
  })

export const widgetSimplifiedDefaultConfig = {
  appId: {
    value: ''
  },
  avatarsList: {
    value: [
      'https://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-1.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-2.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-3.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-4.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-5.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-6.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-7.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-8.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-9.svg\nhttps://cdn.development.accelbyte.io/app-config/default-avatars/user-avatar-10.svg'
    ]
  },
  brandName: {
    value: 'AccelByte'
  },
  pageTitle: {
    value: '{pageTitle} - {brandName}'
  },
  companyLogo: {
    images: [
      {
        name: 'default',
        url: 'https://cdn.development.accelbyte.io/files/accelbyte/od-assets/d084de15761f4bdfb96f004426e3db05.png'
      }
    ],
    defaultIndex: 0
  },

  copyright: {
    value: 'Copyrightâ’¸ 2022 AccelByte'
  },
  experimentalFeatureFlags: {},
  globalPageConfig: {
    data: {
      global: {
        colors: {
          background: {
            hex: '#000a33',
            rgb: {
              a: 1,
              b: 51,
              g: 10,
              r: 0
            }
          },
          card: {
            hex: '#00104f',
            rgb: {
              a: 1,
              b: 79,
              g: 16,
              r: 0
            }
          },
          overlay: {
            hex: '#000E46',
            rgb: {
              a: 0.6,
              b: 70,
              g: 14,
              r: 0
            }
          },
          primary: {
            hex: '#ff0000',
            rgb: {
              a: 1,
              b: 0,
              g: 0,
              r: 255
            }
          },
          secondary: {
            hex: '#ffffff',
            rgb: {
              a: 1,
              b: 255,
              g: 255,
              r: 255
            }
          },
          text: {
            hex: '#ffffff',
            rgb: {
              a: 1,
              b: 255,
              g: 255,
              r: 255
            }
          }
        },
        fonts: {
          body: 'Rubik',
          customBodyFontUrl: '',
          title: 'Rubik',
          customTitleFontUrl: ''
        }
      }
    }
  },
  ppFeatureFlags: {
    data: {
      isSupportVisible: false,
      isAccountOverviewVisible: true,
      isChangePasswordVisible: true,
      isDeleteAccountVisible: true,
      isGetLauncherVisible: true,
      isLinkedAccountsVisible: true,
      isMyProfileVisible: true,
      isNotificationsVisible: false,
      isOrderHistoryVisible: true,
      isPaymentMethodsVisible: true,
      isPersonalDataVisible: true,
      isLegalAgreementsVisible: true,
      isPurchasedItemsVisible: true,
      isRedeemCodeVisible: true,
      isStoreVisible: true,
      isSubscriptionsVisible: false,
      isVirtualCurrencyVisible: false,
      isTwitchDropEnabled: false,
      isLegalEnabled: true
    }
  },
  socialLinks: {
    value: []
  },
  templateConfig: {
    value: 'multiple-game'
  }
}
