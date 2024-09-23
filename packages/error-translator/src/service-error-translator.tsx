/*
 * Copyright (c) 2019-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { flatten } from 'flat'
import { ResourceKey } from 'i18next'
import * as React from 'react'
import { I18nextProvider, Trans } from 'react-i18next'
import { AugmentsAdminErrorTranslationMap } from './error-translation-map/augments-admin-error-translation-map'
import { BasicAdminErrorTranslationMap } from './error-translation-map/basic-admin-error-translation-map'
import { BasicErrorTranslationMap } from './error-translation-map/basic-error-translation-map'
import { EcommerceAdminErrorTranslationMap } from './error-translation-map/ecommerce-admin-error-translation-map'
import { EcommerceErrorTranslationMap } from './error-translation-map/ecommerce-error-translation-map'
import { GDPRerrorTranslationMap } from './error-translation-map/gdpr-error-translation-map'
import { IAMAdminErrorTranslationMap } from './error-translation-map/iam-admin-error-translation-map'
import { IAMErrorTranslationMap } from './error-translation-map/iam-error-translation-map'
import { LegalAdminErrorTranslationMap } from './error-translation-map/legal-admin-error-translation-map'
// tslint:disable-next-line:max-line-length
import { LobbyAndMatchmakingAdminErrorTranslationMap } from './error-translation-map/lobby-and-matchmaking-admin-error-translation-map'
// tslint:disable-next-line:max-line-length
import { ReportingModerationAdminErrorTranslationMap } from './error-translation-map/reportingmoderation-admin-error-translation-map'
import { RewardsAdminErrorTranslationMap } from './error-translation-map/rewards-admin-error-translation-map'
import { SeasonPassAdminErrorTranslationMap } from './error-translation-map/seasonpass-admin-error-translation-map'
import { StatisticAdminErrorTranslationMap } from './error-translation-map/statistic-admin-error-translation-map'
import { UgcAdminErrorTranslationMap } from './error-translation-map/ugc-admin-error-translation-map'
import { getLocalStorageLanguage, i18nInstance } from './i18n'

interface ServiceErrorProps {
  errorCode: number
}

export const serviceErrorI18nInstance = i18nInstance

export const addI18nResourceServiceError = (languageCode: string, resource: ResourceKey, deep?: boolean, overwrite?: boolean) => {
  i18nInstance.addResourceBundle(languageCode, 'translation', flatten.unflatten(resource), deep, overwrite)
}

export const changeErrorTranslatorLanguage = (languageCode?: string) => {
  i18nInstance.changeLanguage(languageCode || getLocalStorageLanguage(i18nInstance))
}

// tslint:disable-next-line no-any
const isValidServiceError = (errorCode: number): errorCode is number => {
  return typeof errorCode === 'number'
}

export const ServiceErrorTranslator = (props: ServiceErrorProps): JSX.Element | null => {
  if (isValidServiceError(props.errorCode) && props.errorCode in serviceErrorTranslationMap) {
    return serviceErrorTranslationMap[props.errorCode]
  }
  return null
}

export const Withi18nProvider = ({ children, lang }: { children: React.ReactNode; lang?: string }) => {
  i18nInstance.changeLanguage(lang || getLocalStorageLanguage(i18nInstance))
  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
}

// USED in Odin
export const translateServiceError = (errorCode: number, lang?: string, defaultMessage?: React.ReactNode) => {
  if (isValidServiceError(errorCode) && errorCode in serviceErrorTranslationMap) {
    return <Withi18nProvider lang={lang}>{serviceErrorTranslationMap[errorCode]}</Withi18nProvider>
  }
  if (defaultMessage) {
    return defaultMessage
  }
  return (
    <Withi18nProvider lang={lang}>
      <Trans i18nKey="serviceError.unknown">Failed to complete the request</Trans>
    </Withi18nProvider>
  )
}

// USED in Admin Portal
export const translateServiceErrorForAdmin = (errorCode: number, lang?: string, defaultMessage?: React.ReactNode) => {
  if (isValidServiceError(errorCode) && errorCode in adminServiceErrorTranslationMap) {
    return <Withi18nProvider lang={lang}>{adminServiceErrorTranslationMap[errorCode]}</Withi18nProvider>
  }
  if (defaultMessage) {
    return defaultMessage
  }
  return (
    <Withi18nProvider lang={lang}>
      <Trans i18nKey="serviceError.unknown">Failed to complete the request</Trans>
    </Withi18nProvider>
  )
}

const serviceErrorTranslationMap = Object.freeze({
  ...IAMErrorTranslationMap,
  ...BasicErrorTranslationMap,
  ...EcommerceErrorTranslationMap,
  ...GDPRerrorTranslationMap
})

const adminServiceErrorTranslationMap = Object.freeze({
  ...IAMAdminErrorTranslationMap,
  ...StatisticAdminErrorTranslationMap,
  ...BasicAdminErrorTranslationMap,
  ...EcommerceErrorTranslationMap,
  ...EcommerceAdminErrorTranslationMap,
  ...LegalAdminErrorTranslationMap,
  ...LobbyAndMatchmakingAdminErrorTranslationMap,
  ...ReportingModerationAdminErrorTranslationMap,
  ...RewardsAdminErrorTranslationMap,
  ...UgcAdminErrorTranslationMap,
  ...SeasonPassAdminErrorTranslationMap,
  ...AugmentsAdminErrorTranslationMap
})
