/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import styles from './FlexGrid.module.scss'

interface Props {
  children?: React.ReactNode
  className?: string
  flexFlow?: 'column' | 'row'
  flex?: number
}

export class FlexGrid extends React.Component<Props> {
  static defaultProps = {
    flexFlow: 'row',
    flex: 1
  }

  render() {
    const { children, className, flexFlow, flex } = this.props
    return (
      <div className={`${styles.flexGrid} ${flexFlow} ${className}`} style={{ flex }}>
        {children}
      </div>
    )
  }
}
