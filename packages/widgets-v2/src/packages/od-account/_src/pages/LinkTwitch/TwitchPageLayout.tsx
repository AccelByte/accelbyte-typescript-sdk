/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LanguageSelector } from '@od-components/components/LanguageSelector/LanguageSelector'
import classNames from 'classnames'
import React from 'react'
import { HeaderLogoContainer } from '../LinkPlatformAccount/LinkPlatformAccountPage'
import styles from './TwitchPageLayout.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
}

export const TwitchFormContainer = ({ children, className }: Props) => (
  <div className={classNames('formWrapper', className)}>{children}</div>
)

export const TwitchPageLayout = (props: Props) => {
  const { children, className } = props
  return (
    <div className={classNames(styles.twitchPageLayout, className)}>
      <LanguageSelector className="languageSelector" />
      <div className="headerLogoContainer">
        <HeaderLogoContainer />
        {children}
      </div>
    </div>
  )
}
