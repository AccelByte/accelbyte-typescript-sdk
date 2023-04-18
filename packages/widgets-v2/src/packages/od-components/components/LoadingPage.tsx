/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import { Loading, LoadingSize } from './Loading/Loading'

interface Props {
  className?: string
}

export class LoadingPage extends React.Component<Props> {
  render() {
    return (
      <Loading className={classNames(LoadingSize.tall, this.props.className)}>
        <Trans i18nKey="InitialUserFetchPage.notice"></Trans>
      </Loading>
    )
  }
}
