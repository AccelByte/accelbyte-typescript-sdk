/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {
  isExternal?: boolean
  children: ReactNode
  isDisabled?: boolean
}

export const ExtendedLink = ({ children, isExternal = false, to, isDisabled, ...props }: Props) => {
  if (isDisabled) return <div>{children}</div>

  if (isExternal) {
    const href = to.toString()
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}
