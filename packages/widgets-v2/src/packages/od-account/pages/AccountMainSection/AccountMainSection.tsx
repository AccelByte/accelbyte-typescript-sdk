/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import classNames from 'classnames'
import React from 'react'
import styles from './AccountMainSection.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
}

export const AccountMainSection = (props: Props) => {
  const { className, children } = props
  return <main className={classNames(styles.accountMainSection, className)}>{children}</main>
}

export const AccountMainSectionBody = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={classNames(styles.mainBody, className)}>{children}</div>
)

export const AccountMainSectionHeader = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={classNames(styles.mainHeader, className, OverrideCSS.TITLE_FONT)}>{children}</div>
)
