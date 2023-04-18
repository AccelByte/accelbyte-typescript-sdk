/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './StoreEntry.module.scss'

export interface StoreEntryProps {
  children: JSX.Element
}

export function StoreEntry({ children }: StoreEntryProps) {
  return (
    <div className={classNames('container mx-auto px-2', styles.storeEntry)}>
      <h2 className="storeEntryTitle">
        <Trans i18nKey="StorePageTitle">Store</Trans>
      </h2>

      {children}
    </div>
  )
}
