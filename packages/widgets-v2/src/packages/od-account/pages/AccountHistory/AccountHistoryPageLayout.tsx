/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import {
  AccountMainSection,
  AccountMainSectionBody,
  AccountMainSectionHeader
} from '@od-account/pages/AccountMainSection/AccountMainSection'
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { BackLinkIcon } from '@od-components/components/Icons/BackLinkIcon'
import { AlertType } from '@od-shared/models/Alert'
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import { useAccountHistory } from '~/hooks/event/useAccountHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import './AccountHistoryPage.scss'

const SidebarNav = () => {
  const { state } = useRoutes()

  return (
    <div className="sidebar mb-4 w-full md:mb-0">
      <nav className="navigationDesktop flex flex-col flex-nowrap items-stretch">
        <NavLink to={state.account.accountHistory.displayNameHistory.link}>
          <span>
            <Trans i18nKey="Navigation.editHistory.displayName">Display Name</Trans>
          </span>
          <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
        </NavLink>
        <NavLink to={state.account.accountHistory.emailHistory.link}>
          <span>
            <Trans i18nKey="Navigation.editHistory.emailAddress">Email Address</Trans>
          </span>
          <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
        </NavLink>
        <NavLink to={state.account.accountHistory.passwordHistory.link}>
          <span>
            <Trans i18nKey="Navigation.editHistory.password">Password</Trans>
          </span>
          <ArrowIcon className={classNames('activeArrow', ArrowIconStyles.right)} />
        </NavLink>
      </nav>
    </div>
  )
}

export const AccountHistoryPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { state: accountHistoryState, mutations: accountHistoryMutations } = useAccountHistory()
  const { state: routesState } = useRoutes()

  return (
    <AccountMainSection className="editHistoryPage">
      <AccountMainSectionHeader>
        <Link to={routesState.account.profile.link} className="btnEditHistory">
          <BackLinkIcon className="icon" />
          <Trans i18nKey="Navigation.editHistory.backlink">Edit History</Trans>
        </Link>
      </AccountMainSectionHeader>

      <AccountMainSectionBody>
        {!!accountHistoryState.accountHistoryError && (
          <Alert type={AlertType.danger} className="alert" onDismiss={accountHistoryMutations.resetErrorState}>
            <CommonError error={accountHistoryState.accountHistoryError} />
          </Alert>
        )}

        <div className="sidebarContainer">
          <SidebarNav />
          <section className="historyContent">
            <AccountMainSection className="editHistoryPage">
              <AccountMainSectionBody>{children}</AccountMainSectionBody>
            </AccountMainSection>
          </section>
        </div>
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}
