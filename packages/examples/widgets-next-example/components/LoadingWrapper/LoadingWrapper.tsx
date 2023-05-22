/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import styles from './LoadingWrapper.module.css'

interface Props {
  children: React.ReactNode
  isLoading: boolean
}

export const LoadingWrapper = ({ children, isLoading }: Props) => {
  return (
    <div className={styles.loadingWrapper}>
      {isLoading && <div className={styles.shading} />}
      {isLoading && <div className={styles.loader}>Loading ...</div>}
      {children}
    </div>
  )
}
