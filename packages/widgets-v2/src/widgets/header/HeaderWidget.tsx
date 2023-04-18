/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { MenuBarIcon } from '@od-components/components/Icons/MenuBarIcon'
import { LauncherDownloadButton } from '@od-components/components/LauncherDownloadButton/LauncherDownloadButton'
import { t } from '@od-components/i18n/index'
import { AppName, OverrideCSS } from '@od-shared/constants/ShConstants'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import './HeaderWidget.scss'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { LoginWidget, LoginWidgetProps } from '../login/LoginWidget'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { Link, NavLink } from '@od-components/components/WidgetLink'
import { HeaderAlerts } from '@od-components/components/Alert/HeaderAlerts'
import { useSdkOptions } from '~/hooks/useSdk'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

interface HeaderLogoProps {
  logo: string
  isHomepageDisabled: boolean
  siteBrandURL?: string
  redirectionURL?: string
}

const HeaderLogo = ({ logo, isHomepageDisabled, siteBrandURL, redirectionURL }: HeaderLogoProps) => {
  const { state: routesState } = useRoutes()
  const [sdkOptions] = useSdkOptions()

  let logoLink: string = routesState.home.link
  let isExternalLink = false

  if (isHomepageDisabled) {
    if (siteBrandURL) {
      const routerSiteBrandRedirection = UrlUtils.getRouterRedirection(siteBrandURL, sdkOptions.baseURL)
      isExternalLink = !routerSiteBrandRedirection
      logoLink = routerSiteBrandRedirection || siteBrandURL
    }
    if (!siteBrandURL && redirectionURL) {
      const routerHomepageRedirection = UrlUtils.getRouterRedirection(redirectionURL, sdkOptions.baseURL)
      isExternalLink = !routerHomepageRedirection
      logoLink = routerHomepageRedirection || redirectionURL
    }
  }

  if (isExternalLink) {
    return (
      <a className="logo" href={logoLink}>
        <img src={logo} alt="logo" />
      </a>
    )
  }
  return (
    <Link className="logo" to={logoLink}>
      <img src={logo} alt="logo" />
    </Link>
  )
}

interface NavigationProps {
  menus?: { pathname: string; label: React.ReactNode }[]
}

const Navigation = ({ menus }: NavigationProps) => {
  return (
    <nav className="navigationContainer">
      {menus?.map((menu, index) => {
        return (
          <NavLink key={`menuLink-${index}`} className="menuLink" to={menu.pathname}>
            {menu.label}
          </NavLink>
        )
      })}
    </nav>
  )
}

export interface HeaderWidgetProps extends LoginWidgetProps, NavigationProps {
  areLinksHidden?: unknown
}

export const HeaderWidget = (HeaderWidgetProps: HeaderWidgetProps) => {
  const { areLinksHidden, menus, userDropdownMenus } = HeaderWidgetProps
  const {
    state: { playerPortalConfigData }
  } = useAppConfigs()
  const {
    state: { flags }
  } = useDiscoveryConfigs()
  const { companyLogo } = useCompanyLogo(AppName.PP, 'header')

  const dropdownToggleMenuRef = useRef<HTMLButtonElement>(null)
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState<boolean>(false)
  const siteBrandURL = playerPortalConfigData?.homepage.data.siteBrandURL
  const redirectionURL = playerPortalConfigData?.homepage.data.redirectionURL
  const isHomepageDisabled = !!playerPortalConfigData?.homepage.data.isDisabled
  const isGetLauncherVisible = flags?.isGetLauncherVisible

  const toggleMenu = () => {
    setDropdownMenuOpen(!dropdownMenuOpen)
  }

  return (
    <>
      <header className={classNames('headerPP', OverrideCSS.TITLE_FONT, 'headerPreview')}>
        <div className="translucent" />
        <div className="headerContent">
          <div className="logoContainer">
            {companyLogo && (
              <HeaderLogo
                logo={companyLogo}
                isHomepageDisabled={isHomepageDisabled}
                siteBrandURL={siteBrandURL}
                redirectionURL={redirectionURL}
              />
            )}
          </div>
          {!areLinksHidden && (
            <>
              <div className="hamburgerMenu">
                <button ref={dropdownToggleMenuRef} className="menuIconContainer" onClick={toggleMenu}>
                  <MenuBarIcon className="menuIcon" title={t('Header.menuTitle')} />
                </button>
              </div>
              <div className={classNames('dropdownMenu', dropdownMenuOpen ? 'open' : 'closed')}>
                <Navigation menus={menus} />
                <LoginWidget userDropdownMenus={userDropdownMenus} />
                {isGetLauncherVisible && (
                  <div className="getLauncherButtonContainer">
                    <LauncherDownloadButton>
                      <Trans i18nKey="Header.getLauncherButton">Get Launcher</Trans>
                    </LauncherDownloadButton>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <HeaderAlerts className="headerAlerts" />
      </header>
    </>
  )
}
