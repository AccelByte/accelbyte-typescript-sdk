/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

interface Props {
  title?: string
  className?: string
}

export const MenuBarIcon = ({ className, title }: Props) => {
  return (
    <i className={className}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {!!title && <title>{title}</title>}
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </i>
  )
}
