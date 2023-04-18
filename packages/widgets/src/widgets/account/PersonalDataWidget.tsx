/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { UrlUtils } from '@od-shared/utils/UrlUtils'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import PersonalDataPage from '@od-account/pages/PersonalDataPage/PersonalDataPage'

export class PersonalDataWidget extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props)
  }

  componentDidMount(): void {
    const { location, history } = this.props
    const page = Number(UrlUtils.silentSearchParamsBuilder(location.search).get('page'))
    const hasValidPage = !Number.isNaN(page) && page >= 1
    if (!hasValidPage) {
      return history.replace(`${location.pathname}?page=1`)
    }
  }

  render() {
    const page = Number(UrlUtils.silentSearchParamsBuilder(this.props.location.search).get('page'))
    return (
      <div className="personalDataWidget">
        <PersonalDataPage page={page} />
      </div>
    )
  }
}
