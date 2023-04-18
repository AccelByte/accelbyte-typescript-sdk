/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { PlusSignIcon } from '@od-components/components/Icons/PlusSignIcon'
import { Loading } from '@od-components/components/Loading/Loading'
import { Ctx } from '@od-shared/Ctx'
import { Env } from '@od-shared/Env'
import { EcomPath } from '@od-shared/routes/EcomPath'
import { WalletAppManager } from '@od-state/managers/WalletAppManager'
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './WalletBalance.module.scss'

interface WalletBalanceProps {
  className?: string
}

export class WalletBalance extends React.Component<WalletBalanceProps> {
  logic: WalletAppManager

  constructor(props: WalletBalanceProps) {
    super(props)
    this.logic = Ctx.getWalletManager()
    this.state = {}
  }

  componentDidMount() {
    this.logic.subscribe(() => this.setState({}))
  }

  render() {
    const { wallet, isFetching, error } = this.logic.state
    const userId = Ctx.getAppState().getUser()?.userId
    return (
      <div className={classNames(styles.walletBalance, this.props.className)}>
        <div className="label">
          <Trans i18nKey="WalletBalance.label">Balance</Trans>
        </div>
        <div className="balanceSection">
          {isFetching && <Loading className="loading" />}
          {wallet && (
            <React.Fragment>
              <div className="balance">
                {wallet.currencySymbol || wallet.currencyCode} {wallet.balance}
              </div>
              <Link className="plusSign" to={EcomPath.Recharge.makePath()}>
                <PlusSignIcon />
              </Link>
            </React.Fragment>
          )}
          <div className="errorContainer">
            {!!error && (
              <Trans i18nKey="WalletBalance.error.retry">
                <div>We cannot fetch your Wallet. Please try again.</div>
                <a
                  href="#"
                  onClick={event => {
                    event.preventDefault()
                    if (Env.WALLET_VIRTUAL_CURRENCY_CODE) {
                      this.logic.fetchWallet(userId || '', Env.WALLET_VIRTUAL_CURRENCY_CODE)
                    }
                  }}>
                  Retry
                </a>
              </Trans>
            )}
          </div>
        </div>
      </div>
    )
  }
}
