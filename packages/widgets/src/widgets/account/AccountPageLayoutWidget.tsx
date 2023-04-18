/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import '@od-account/pages/AccountPage.module.scss'
import { NavLinkItem, NavLinkSeparator } from '@od-account/pages/AccountPageNav'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import AccountPageLayout from '@od-account/components/AccountPageLayout'
export type { NavLinkItem, NavLinkSeparator }

interface Props extends RouteComponentProps {
  children: React.ReactNode
  backgroundImageUrl?: string
  accountPageNav: (NavLinkItem | NavLinkSeparator)[]
}

export class AccountPageLayoutWidget extends React.Component<Props> {
  render() {
    return <AccountPageLayout {...this.props}>{this.props.children}</AccountPageLayout>
  }
}
