/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './SkeletonCard.module.scss'
import { AccountMainSection, AccountMainSectionHeader, AccountMainSectionBody } from '../../pages/AccountMainSection/AccountMainSection'
import { NavItemPlaceholder } from '../NavItemPlaceholder/NavItemPlaceholder'

export const SkeletonCard = ({ className }: { className?: string }) => (
  <AccountMainSection className={classNames(styles.skeletonCard, className)}>
    <AccountMainSectionHeader>
      <NavItemPlaceholder />
    </AccountMainSectionHeader>
    <AccountMainSectionBody className="skeletonBody" />
  </AccountMainSection>
)
