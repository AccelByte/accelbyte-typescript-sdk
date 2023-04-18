/*
 *
 *  * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import classNames from 'classnames'
import React, { ReactNode } from 'react'
import Styles from './Card.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: Props) => {
  return <div className={classNames(className, Styles.card, Styles.cardDark)}>{children}</div>
}
