/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import flatten from 'flat'
import i18next, { i18n, Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import config from './config.json'
import deDE from './translations/de-DE.json'
import enUS from './translations/en-US.json'
import esES from './translations/es-ES.json'
import frFR from './translations/fr-FR.json'
import itIT from './translations/it-IT.json'
import jaJP from './translations/ja-JP.json'
import zhCN from './translations/zh-CN.json'

const LANG_LOCAL_STORAGE_KEY = 'i18nextLng'

function isOnBrowser() {
  try {
    if (typeof window !== 'undefined') {
      return true
    }
    // eslint-disable-next-line
  } catch (error) {
    console.error(error)
  }
  return false
}

const loadedLanguages: { [key: string]: { [key: string]: string } } = {
  'en-US': enUS,
  'fr-FR': frFR,
  'it-IT': itIT,
  'de-DE': deDE,
  'es-ES': esES,
  'ja-JP': jaJP,
  'zh-CN': zhCN
}
const availableLanguageCodes = config.languageCodes
const translationResource = availableLanguageCodes.reduce((resources: Resource, languageCode: string) => {
  // eslint-disable-next-line no-param-reassign
  resources[languageCode] = {
    // Loading unflattened resource
    translation: flatten.unflatten(loadedLanguages[languageCode])
  }
  return resources
}, {})

export function getLocalStorageLanguage(instance?: i18n): string {
  if (!isOnBrowser()) return config.defaultLanguage

  const currentLanguageCode = localStorage.getItem(LANG_LOCAL_STORAGE_KEY)
  if (currentLanguageCode) {
    const hasResource = instance?.hasResourceBundle(currentLanguageCode, 'translation')
    const isAvailable = Object.keys(translationResource).includes(currentLanguageCode)
    if (hasResource || isAvailable) {
      return currentLanguageCode
    }
  }
  return config.defaultLanguage
}

// @ts-ignore
export const i18nInstance = i18next.use(initReactI18next).createInstance(
  {
    lng: getLocalStorageLanguage(),
    fallbackLng: config.fallbackLanguage,
    preload: availableLanguageCodes,
    resources: translationResource,
    initImmediate: false,
    debug: false
  },
  // tslint:disable-next-line no-empty
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
) // Do not remove the callback. It will break the i18n

// tslint:disable-next-line no-any
export function t(key: string, options?: any) {
  return i18nInstance.t(key, options)
}
