/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import flatten from 'flat'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { format } from 'date-fns'
import config from './config.json'
import loadedLanguages, { languageMap } from './loadLanguages'
import { SSRHelper } from '@od-shared/utils/SSRHelper'

import { enUS, zhCN } from 'date-fns/locale'

const LANG_LOCAL_STORAGE_KEY = 'i18nextLng'
export const I18N_DATE_LOCALES = { 'en-US': enUS, 'zh-CN': zhCN }

const availableLanguageCodes = config.languageCodes
const translationResource = availableLanguageCodes.reduce((resources: any, languageCode: any) => {
  // eslint-disable-next-line no-param-reassign
  resources[languageCode] = {
    // Loading unflattened resource
    // @ts-ignore
    translation: flatten.unflatten(loadedLanguages[languageCode])
  }
  return resources
}, {})

function getLocalStorageLanguage(): string {
  if (!SSRHelper.isSSR()) {
    // TODO(fursandy): use cookies instead of localStorage for language so it will work on SSR or nonSSR
    const currentLanguageCode = localStorage.getItem(LANG_LOCAL_STORAGE_KEY)
    if (currentLanguageCode && availableLanguageCodes.includes(currentLanguageCode)) {
      return currentLanguageCode
    }
  }
  return config.defaultLanguage
}

function setLocalStorageLanguage(language: string) {
  if (SSRHelper.isSSR()) return
  localStorage.setItem(LANG_LOCAL_STORAGE_KEY, language)
}

export const i18nInstance = i18next.use(initReactI18next).createInstance(
  {
    lng: getLocalStorageLanguage(),
    fallbackLng: config.fallbackLanguage,
    preload: availableLanguageCodes,
    resources: translationResource,
    initImmediate: false,
    returnObjects: false,
    debug: false, // Env.IS_DEV,
    interpolation: {
      format: (value, dateFormat = 'LL') => {
        if (value instanceof Date && (dateFormat === 'LL' || dateFormat === 'LLLL')) {
          return formatDate(value, { format: dateFormat, type: 'dynamic' })
        }
        return value
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
) // Do not remove the callback. It will break the i18n

i18nInstance.on('languageChanged', lang => {
  setLocalStorageLanguage(lang)
})

export function t(key: string, options?: any) {
  return i18nInstance.t(key, options) as unknown as string
}

// ts-prune-ignore-next
export function getCurrentLanguage() {
  return i18nInstance.language
}

export async function changeLanguage(language: string) {
  await new Promise(resolve => {
    i18nInstance.changeLanguage(language, resolve)
  })
}

interface LangMap {
  [languageCode: string]: string
}

// ts-prune-ignore-next
export function getAvailableLanguageMap(): LangMap {
  return Object.keys(languageMap)
    .filter(languageCode => availableLanguageCodes.includes(languageCode))
    .reduce((object, languageCode) => {
      return {
        ...object,
        // @ts-ignore
        [languageCode]: languageMap[languageCode]
      }
    }, {})
}

function formatDate(
  dateLike: Date | string | null | undefined,
  dateFormat:
    | {
        type: 'static'
        format: string
      }
    | {
        type: 'dynamic'
        format: 'LL' | 'LLLL'
      }
) {
  if (!dateLike) return ''

  const currentLanguage = getCurrentLanguage()
  const effectiveDate = dateLike instanceof Date ? dateLike : new Date(dateLike)

  if (dateFormat.type === 'dynamic') {
    return formatWithNativeIntl(effectiveDate, currentLanguage, dateFormat.format)
  }

  return format(effectiveDate, dateFormat.format, { locale: I18N_DATE_LOCALES[currentLanguage] })
}

function formatWithNativeIntl(date: Date, lang: string, momentFormat: 'LL' | 'LLLL'): string {
  if (momentFormat === 'LL') {
    // Date, month, and year only.
    return Intl.DateTimeFormat(lang, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date)
  }

  // Day, date, month, year, and time.
  const parts = Intl.DateTimeFormat(lang, {
    dateStyle: 'full',
    timeStyle: 'short'
  }).formatToParts(date)
  let prevSegment: Intl.DateTimeFormatPartTypes | undefined
  let dateString = ''

  for (const part of parts) {
    // We want to skip the "at" word separator between year and hour.
    if (part.type === 'literal' && prevSegment === 'year') {
      dateString += ' '
      continue
    }

    dateString += part.value
    prevSegment = part.type
  }

  return dateString
}
