/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderLogo.scss'

// eslint-disable-next-line no-unused-vars
export enum LogoType {
  TEXT,
  IMAGE
}

export interface HeaderLogoProps {
  logoType: LogoType
  logo: string
  logoLink?: string
  className?: string
  style?: React.CSSProperties
}

export const HeaderLogo = ({ logoType, logo, logoLink, className, style }: HeaderLogoProps) => {
  if (logoType === LogoType.IMAGE) {
    return (
      <div className="header-logo headerLogoContainer">
        <img src={logo} loading="lazy" className="headerLogoImg" />
      </div>
    )
  }

  return (
    <div
      className={classNames('header-logo headerLogoContainer title header-logo', className, OverrideCSS.TITLE_FONT, {
        normal: logo?.length <= 12,
        small: logo?.length > 12 && logo?.length <= 19,
        xsmall: logo?.length > 19 && logo?.length <= 25,
        xxsmall: logo?.length > 25
      })}
      style={style}>
      {logoLink && (
        <Link to={logoLink} className="logoLink">
          {logo}
        </Link>
      )}
      {!logoLink && <span className="logoLink">{logo}</span>}
    </div>
  )
}
