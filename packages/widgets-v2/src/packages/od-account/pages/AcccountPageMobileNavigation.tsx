/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import styles from '@od-account/pages/AccountPage.module.scss'
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from '~/hooks/routes/useHistory'
import { NavLinkItem, NavLinkSeparator } from './AccountPageNav'

interface Props {
  isLoading: boolean
  listHiddenMenu: Set<string>
  accountPageNav: (NavLinkItem | NavLinkSeparator)[]
}

export const AccountPageMobileNavigation = (props: Props) => {
  const { isLoading, listHiddenMenu, accountPageNav } = props
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const { state: historyState } = useHistory()

  const getCurrentLocationLabel = () => {
    const currentLocation = props.accountPageNav.find(item => {
      return item.type === 'link' && historyState.location.pathname.startsWith(item.to)
    })
    return currentLocation ? (currentLocation as NavLinkItem).label : null
  }

  return (
    <div className="accountNavMobile">
      {/* TODO CW-1459
      {Ctx.hasFeature(FeatureFlags.isVirtualCurrencyVisible) && (
        <section className="walletBalanceContainer">
          <WalletBalance className={'walletBalanceMobile'} />
        </section>
      )}
      */}
      {!isLoading && (
        <div className={'menuToggleContainer'}>
          <button className={'menuToggle btn'} onClick={() => setMenuOpen(prevState => !prevState)}>
            <span>{getCurrentLocationLabel()}</span>
            <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.down)} />
          </button>
        </div>
      )}
      {menuOpen && !isLoading && (
        <div className={'menuContainer'}>
          <div>
            <nav className="navigationMobile">
              {accountPageNav.map((navItem, index) => {
                if (navItem.type === 'separator') {
                  if (navItem.component) {
                    return <navItem.component key={index} />
                  }
                  return <div key={`separator-${index}`} className={classNames(styles.separator)} />
                }

                const { to, label, isVisible } = navItem as NavLinkItem
                if (listHiddenMenu.has(to)) return null

                if (!isVisible) {
                  return null
                }

                return (
                  <NavLink key={`${index}-${to}`} to={to} onClick={() => setMenuOpen(false)}>
                    <span>{label}</span>
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
