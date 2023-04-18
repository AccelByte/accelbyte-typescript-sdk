/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { Ctx } from '@od-shared/Ctx'
import { AppState } from '@od-shared/store/AppState'
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './SessionExpiredDialog.module.scss'

export class SessionExpiredDialog extends React.Component<{}> {
  private readonly appState: AppState

  constructor(props: {}) {
    super(props)

    this.appState = Ctx.getAppState()
  }

  render() {
    const { isSessionExpired } = this.appState.state
    return (
      <Dialog title={<Trans i18nKey="SessionExpiredDialog.title">Session expired</Trans>} isOpen={isSessionExpired}>
        <DialogBody>
          <Trans i18nKey="SessionExpiredDialog.bodyText">Your session has expired. Please log in again.</Trans>
        </DialogBody>

        <DialogFooter>
          <Button
            className={classNames('btn btn-ghost', styles.btnClose)}
            onClick={() => {
              this.appState.logout()
            }}>
            <Trans i18nKey="SessionExpiredDialog.buttonAction">Close</Trans>
          </Button>
        </DialogFooter>
      </Dialog>
    )
  }
}
