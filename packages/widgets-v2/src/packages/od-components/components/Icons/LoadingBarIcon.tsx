/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './LoadingBarIcon.module.scss'

export const LoadingBarIcon = ({ className }: { className?: string }) => (
  <i className={classNames(className, styles.loadingBarIcon)}>
    <div className={styles.bar} />
    <div className={styles.bar} />
    <div className={styles.bar} />
  </i>
)
