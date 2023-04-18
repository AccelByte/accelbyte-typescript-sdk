/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'
import classNames from 'classnames'
import styles from './LinkAccountWithOneTimeCodePage.module.scss'

interface Props {
  isUpgradeToFull: boolean
  platformName?: string
  publisherName: string
}

export class SuccessMessage extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { isUpgradeToFull, platformName, publisherName } = this.props

    return (
      <div className="text-center">
        <p className={styles.title}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.success.title">Success!</Trans>
        </p>

        <p className={classNames(styles.description, 'mb-4')}>
          {isUpgradeToFull && (
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.success.isUpgrade.desc">
              You have upgraded to a full {{ publisherName }} account.
            </Trans>
          )}
          {!isUpgradeToFull && (
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.success.isLink.desc">
              Your {{ platformName }} account has been linked with your full {{ publisherName }} account.
            </Trans>
          )}
        </p>

        <p className={styles.description}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.success.desc2">
            The screen on your device will refresh shortly. You can close this window.
          </Trans>
        </p>
      </div>
    )
  }
}
