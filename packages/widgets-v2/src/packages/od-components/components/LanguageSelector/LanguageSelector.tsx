/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import { changeLanguage, getAvailableLanguageMap, i18nInstance } from '../../i18n/index'
import { LanguageSelectorIcon } from '../Icons/LanguageSelectorIcon'
import styles from './LanguageSelector.module.scss'

interface Props {
  className?: string
  isDisabled?: boolean
  onChangeLanguage?: (value: string) => void
}

export const LanguageSelectorClass = {
  topRight: styles['top-right']
}

export const LanguageSelector = ({ className, isDisabled, onChangeLanguage }: Props) => {
  const currentLanguage = i18nInstance.language
  const languageMap = getAvailableLanguageMap()

  const handleChangeLanguage = (value: string) => {
    changeLanguage(value)
    if (onChangeLanguage) onChangeLanguage(value)
  }

  return (
    <div className={classNames(styles.languageSelector, 'languageSelector', className)}>
      <LanguageSelectorIcon />
      <select
        disabled={isDisabled}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleChangeLanguage(event.target.value)
        }}
        value={currentLanguage}>
        {Object.keys(languageMap).map(languageCode => (
          <option key={languageCode} value={languageCode}>
            {languageMap[languageCode]}
          </option>
        ))}
      </select>
    </div>
  )
}
