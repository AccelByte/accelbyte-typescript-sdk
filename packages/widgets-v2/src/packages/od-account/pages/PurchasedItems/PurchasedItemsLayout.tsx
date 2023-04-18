/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './PurchasedItemsLayout.module.scss'
import { NavLink } from 'react-router-dom'
import { useRoutes } from '~/hooks/routes/useRoutes'
import {
  AccountMainSection,
  AccountMainSectionHeader,
  AccountMainSectionBody
} from '@od-account/pages/AccountMainSection/AccountMainSection'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

interface Props {
  children: React.ReactNode
  isPreviewMode?: boolean
}

export function PurchasedItemsLayout({ isPreviewMode, children }: Props) {
  const {
    state: { isSingleGame }
  } = useDiscoveryConfigs()

  const { state: routes } = useRoutes()

  return (
    <>
      <AccountMainSection>
        <AccountMainSectionHeader className={styles.purchasedItemsHeader}>
          <Trans i18nKey="AccountPurchasedItems.title">Purchased Items</Trans>
        </AccountMainSectionHeader>
        <AccountMainSectionBody>
          <div className={styles.sidebarContainer}>
            <div className="sidebar">
              <nav className="navigationDesktop">
                <NavLink className={!isPreviewMode ? '' : 'active'} exact to={routes.account.purchasedItems.games.link}>
                  <span>
                    <Trans i18nKey="MyGameList.tabs.games">Games</Trans>
                  </span>
                  <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
                </NavLink>
                {!isSingleGame && (
                  <NavLink exact to={routes.account.purchasedItems.keys.link}>
                    <span>
                      <Trans i18nKey="MyGameList.tabs.keys">Keys</Trans>
                    </span>
                    <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
                  </NavLink>
                )}
                <NavLink exact to={routes.account.purchasedItems.optionboxes.link}>
                  <span>
                    <Trans i18nKey="MyGameList.tabs.optionbox">Optionbox</Trans>
                  </span>
                  <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
                </NavLink>
              </nav>
            </div>
            <div className="purchasedItemsContainer">{children}</div>
          </div>
        </AccountMainSectionBody>
      </AccountMainSection>
    </>
  )
}
