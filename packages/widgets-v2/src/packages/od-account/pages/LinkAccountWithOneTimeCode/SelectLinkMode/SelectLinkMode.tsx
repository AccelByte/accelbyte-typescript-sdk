/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'
import { Tabs } from '@od-components/components/Tabs/Tabs'
import { UpgradeToFullAccount } from './UpgradeToFullAccount'
import { LinkToExistingAccount } from './LinkToExistingAccount'
import { TabButton } from './TabButton'
import { CommonTitle } from './CommonTitle'

enum SelectTabs {
  'linkToExisting' = 'linkToExisting',
  'upgradeToFull' = 'upgradeToFull'
}

interface Props {
  oneTimeLinkCode: string
  onRestart: () => void
}

interface State {
  areTitleAndTabsHidden: boolean
  selectedTab: string
}

export class SelectLinkMode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      areTitleAndTabsHidden: false,
      selectedTab: SelectTabs.linkToExisting
    }
  }

  showTitleAndTabs = () => {
    this.setState({ areTitleAndTabsHidden: false })
  }

  hideTitleAndTabs = () => {
    this.setState({ areTitleAndTabsHidden: true })
  }

  changeTab = (tab: string) => {
    this.setState({ selectedTab: tab })
  }

  render() {
    const { areTitleAndTabsHidden, selectedTab } = this.state
    const { oneTimeLinkCode, onRestart } = this.props

    return (
      <>
        {!areTitleAndTabsHidden && (
          <>
            <CommonTitle />
            <div className="my-6">
              <Tabs>
                <TabButton
                  isActive={selectedTab === SelectTabs.linkToExisting}
                  onClick={() => this.changeTab(SelectTabs.linkToExisting)}
                  label={<Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.tab.linkToExisting">Link to Existing Account</Trans>}
                />
                <TabButton
                  isActive={selectedTab === SelectTabs.upgradeToFull}
                  onClick={() => this.changeTab(SelectTabs.upgradeToFull)}
                  label={<Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.tab.upgradeToFull">Upgrade to Full Account</Trans>}
                />
              </Tabs>
            </div>
          </>
        )}

        {selectedTab === SelectTabs.upgradeToFull && (
          <UpgradeToFullAccount
            onHideTitle={this.hideTitleAndTabs}
            onShowTitle={this.showTitleAndTabs}
            onRestart={onRestart}
            oneTimeLinkCode={oneTimeLinkCode}
          />
        )}
        {selectedTab === SelectTabs.linkToExisting && (
          <LinkToExistingAccount onHideTitle={this.hideTitleAndTabs} onRestart={onRestart} oneTimeLinkCode={oneTimeLinkCode} />
        )}
      </>
    )
  }
}
