/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import { LoadingBarIcon } from '../Icons/LoadingBarIcon'
import styles from './Loading.module.scss'

type LoadingType = 'BAR' | 'SPINNER' | undefined

export interface Props {
  children?: React.ReactNode
  className?: string
  loadingType?: LoadingType
}

export const LoadingSize = {
  tall: styles.tall,
  medium: styles.medium
}

export const LoadingSpinnerClass = {
  overlay: styles.overlay,
  fullScreen: styles.fullScreen,
  transparent: styles.transparent
}

const renderLoadingIcon = (type: LoadingType) => {
  switch (type) {
    case 'BAR':
      return <LoadingBarIcon />
    case 'SPINNER':
      return <div className={styles.spinner} />
    default:
      return <LoadingBarIcon />
  }
}

export const Loading = (props: Props): React.ReactElement => (
  <div className={classNames(styles.loading, props.className)}>
    {renderLoadingIcon(props.loadingType)}
    {props.children && <div className="children">{props.children}</div>}
  </div>
)
