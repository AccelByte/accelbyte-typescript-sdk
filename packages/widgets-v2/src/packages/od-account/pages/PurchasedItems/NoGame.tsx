/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Trans } from 'react-i18next'
import React from 'react'
import classNames from 'classnames'
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import styles from './PurchasedGames.module.scss'

export const NoGame = () => (
  <p className={classNames(styles.noGame, OverrideCSS.TITLE_FONT)}>
    <Trans i18nKey={'MyGameList.noGame'}>You don't have any games yet.</Trans>
  </p>
)
