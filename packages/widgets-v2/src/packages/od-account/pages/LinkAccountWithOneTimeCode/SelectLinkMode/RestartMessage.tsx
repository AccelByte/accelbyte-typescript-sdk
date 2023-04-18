/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'
import { Button } from '@od-components/components/Button/Button'

interface Props {
  onRestart: () => void
}

export class RestartMessage extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { onRestart } = this.props

    return (
      <Button loadingIndicator="SPINNER" className="btn btn-primary mt-6 w-full py-2 px-0" onClick={onRestart}>
        <Trans i18nKey="LinkAccountWithOneTimeCodePage.selectLinkMode.restart.button">Input Verification Code</Trans>
      </Button>
    )
  }
}
