/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classnames from 'classnames'
import React from 'react'
import Styles from './InputInfoList.module.scss'

interface Props {
  messages: string[]
  className?: string
}

export const InputInfoList = ({ messages, className }: Props) => (
  <ul className={classnames(Styles.helperList, className)}>
    {messages.map((message, index) => (
      <li className="word-break" key={`${message}-${index}`}>
        {message}
      </li>
    ))}
  </ul>
)
