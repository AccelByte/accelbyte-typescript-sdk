/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import { mockLauncherDownloadLink } from '@od-shared/mocks/MockVars'
import classNames from 'classnames'
import * as React from 'react'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import './LauncherDownloadButton.scss'

interface Props {
  children?: React.ReactNode
  className?: string
}

export const LauncherDownloadButton = (props: Props) => {
  const {
    state: { playerPortalConfigData }
  } = useAppConfigs()
  const { children, className } = props
  const isInEditorPage = location.pathname.includes('/player-portal')
  const launcherDownloadLink = !isInEditorPage ? playerPortalConfigData?.launcherDownloadLink.data.value : mockLauncherDownloadLink

  return (
    <a
      className={classNames(
        className,
        'btn small btn-primary',
        'launcherDownloadButton',
        !launcherDownloadLink && 'disabled',
        OverrideCSS.TITLE_FONT
      )}
      title={launcherDownloadLink || 'Not available'}
      target="_blank"
      rel="noreferrer"
      href={launcherDownloadLink || ''}
      onClick={event => {
        if (!launcherDownloadLink) event.preventDefault()
      }}>
      {children}
    </a>
  )
}
