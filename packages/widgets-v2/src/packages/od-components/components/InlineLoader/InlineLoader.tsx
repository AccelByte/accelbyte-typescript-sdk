/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Loader } from 'react-feather'
import classNames from 'classnames'
import './InlineLoader.scss'

export const InlineLoader = ({ loadingText, className }: { loadingText?: string; className?: string }) => {
  return (
    <div className={classNames('inlineLoader', className)}>
      <div className="iconContainer">
        <Loader size="1em" className="icon" />
      </div>

      {loadingText && <div className="loaderText ml-2">{loadingText}</div>}
    </div>
  )
}
