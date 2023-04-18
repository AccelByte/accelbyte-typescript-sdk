/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import './Spinner.scss'

export const SpinnerStyle = {
  inline: 'inline',
  blue: 'blue'
}

export const Spinner = (props: { className?: string }) => (
  <div className={classNames(props.className, 'spinner')}>
    <svg height="100%" width="100%">
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth="4"
        strokeDasharray="calc(2 * 22 / 7 * (50% - 2px)/ 6)"
        style={{ strokeDashoffset: 0 }}
        r="calc(50% - 2px)"
        cx="50%"
        cy="50%"
      />
    </svg>
  </div>
)
