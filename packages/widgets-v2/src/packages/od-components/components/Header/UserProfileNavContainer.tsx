/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LogoutIcon } from '@od-components/components/Icons/LogoutIcon'
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { NavLink } from 'react-router-dom'
import './UserProfileNavContainer.scss'

export interface UserProfileNavProps {
  onLogout: () => void
  showMenu: boolean
  onClick: () => void
  userDropdownMenus?: { pathname: string; icon?: React.ReactNode; label: React.ReactNode; isWithDivider?: boolean }[]
}

export const UserProfileNavContainer = ({ onLogout, showMenu, onClick, userDropdownMenus }: UserProfileNavProps) => {
  const isMenuHidden = !showMenu
  const {
    state: { flags }
  } = useDiscoveryConfigs()
  const isGetLauncherVisible = flags?.isGetLauncherVisible

  return (
    <nav className={classNames('userProfileNavContainer', isMenuHidden && 'closed', !isGetLauncherVisible && 'right-0')}>
      {userDropdownMenus?.map((menu, index) => {
        return (
          <>
            <NavLink key={`menuLink-${index}`} className="userProfileNavLink" to={menu.pathname} onClick={onClick}>
              {menu.icon && <i className="userProfileNavLinkIcon">{menu.icon}</i>}
              <span>{menu.label}</span>
            </NavLink>
            {menu.isWithDivider && <div className="navigationDivider" />}
          </>
        )
      })}

      <button
        className="userProfileNavLink"
        onClick={() => {
          onLogout()
          onClick()
        }}>
        <LogoutIcon className="userProfileNavLinkIcon" />
        <span>
          <Trans i18nKey="Navigation.links.logout">Logout</Trans>
        </span>
      </button>
    </nav>
  )
}
