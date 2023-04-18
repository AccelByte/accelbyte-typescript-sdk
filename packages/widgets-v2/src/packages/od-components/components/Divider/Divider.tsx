/*
 *
 *  * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import classNames from 'classnames'
import React from 'react'
import Styles from './Divider.module.scss'

interface Props {
  children?: React.ReactNode
}

export const Divider = ({ children }: Props) => {
  return (
    <div className={Styles.dividerContainer}>
      {children && <span className={classNames(Styles.dividerDark, Styles.dividerText)}>{children}</span>}
    </div>
  )
}
