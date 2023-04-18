/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import classNames from 'classnames'
import { Typography } from '@od-components/components/Typography/Typography'
import './TwitchDropLayout.scss'
import { BackgroundOverlay } from '@accelbyte/sdk-odinconfig'

interface LayoutProps {
  logo?: string
  errorAlert?: React.ReactNode
  title?: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  children: React.ReactNode
  backgroundURL?: string
  backgroundOverlay?: BackgroundOverlay
}

export function TwitchDropLayout({
  logo,
  title,
  subtitle,
  children,
  className,
  backgroundURL,
  backgroundOverlay,
  errorAlert
}: LayoutProps) {
  return (
    <div
      className={classNames('twitchDropLayout relative', className, {
        gradient: backgroundOverlay?.isEnabled && backgroundOverlay?.type === 'gradient',
        full: backgroundOverlay?.isEnabled && backgroundOverlay?.type === 'full'
      })}
      style={{ backgroundImage: `url(${backgroundURL})` }}>
      <div className="twitchDropLayout__innerContainer">
        <div className="twitchDropLayout__errorContainer">{errorAlert}</div>
        {logo && (
          <div className={'twitchDropLayout__logo'}>
            <img src={logo} alt="logo" />
          </div>
        )}
        {(title || subtitle) && (
          <div className="twitchDropLayout__titleContainer">
            {title && (
              <Typography tag="h1" className={'twitchDropLayout__title'}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography tag="p" className={'twitchDropLayout__subtitle'}>
                {subtitle}
              </Typography>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
