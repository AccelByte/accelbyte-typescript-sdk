/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'

import './CircleIconStatus.scss'

export const CircleIconStatus = ({ className }: { className?: string }) => (
  <i className={classNames('circleStatusIcon', className)}>
    <svg className="fill-current" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" />
    </svg>
  </i>
)
