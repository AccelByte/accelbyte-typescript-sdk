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
import { NavLinkItem, NavLinkSeparator } from './AccountPageNav'
import { NavItemPlaceholder } from '../components/NavItemPlaceholder/NavItemPlaceholder'

interface Props {
  isLoading: boolean
  listHiddenMenu: Set<string>
  accountPageNav: (NavLinkItem | NavLinkSeparator)[]
}

export class AccountPageDesktopNavigation extends React.Component<Props> {
  render() {
    const { isLoading, listHiddenMenu, accountPageNav } = this.props
    return (
      <>
        {/* TODO CW-1459
        {Ctx.hasFeature(FeatureFlags.isVirtualCurrencyVisible) && (
          <>
            <section className="walletBalanceContainer">
              <WalletBalance />
            </section>
            <div className={styles.separator} />
          </>
        )}
        */}
        <nav className="navigationDesktop">
          {accountPageNav.map((navItem, index) => {
            if (navItem.type === 'separator') {
              if (navItem.component) {
                return <navItem.component key={index} />
              }
              return <div key={`separator-${index}`} className={classNames(styles.separator)} />
            }

            if (isLoading) return <NavItemPlaceholder key={`${index}`} />

            const { to, label } = navItem as NavLinkItem
            if (listHiddenMenu.has(to)) return null

            if (!navItem.isVisible) {
              return null
            }

            return (
              <NavLink key={`${index}-${to}`} to={to}>
                <span>{label}</span>
                <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
              </NavLink>
            )
          })}
        </nav>
      </>
    )
  }
}
