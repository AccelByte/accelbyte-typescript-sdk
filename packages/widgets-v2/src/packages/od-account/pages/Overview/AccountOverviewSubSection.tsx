/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import classNames from 'classnames'
import React from 'react'
import styles from './AccountOverviewPage.module.scss'

export const AccountOverviewSubSection = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={classNames(styles.subSection, className)}>{children}</div>
)

export const AccountOverviewSubSectionBody = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={classNames(styles.subSectionBody, className)}>{children}</div>
)

export const AccountOverviewSubSectionHeader = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={classNames(styles.subSectionHeader, className, OverrideCSS.TITLE_FONT)}>{children}</div>
)
