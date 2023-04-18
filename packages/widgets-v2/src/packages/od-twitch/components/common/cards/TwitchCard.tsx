/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import classnames from 'classnames'
import './TwitchCard.scss'

interface Props {
  children: React.ReactNode
  className?: string
  isMultipleGame?: boolean
}

export const TwitchCard: React.FC<Props> = ({ children, className, isMultipleGame }) => {
  return <div className={classnames('twitchCard', className, isMultipleGame ? 'multipleGame' : '')}>{children}</div>
}
