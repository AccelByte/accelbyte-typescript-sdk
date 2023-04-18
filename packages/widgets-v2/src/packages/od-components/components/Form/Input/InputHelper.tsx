/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import * as React from 'react'
import './InputHelper.scss'

export class InputHelper extends React.Component<{ message: React.ReactNode }> {
  render() {
    return <div className="inputHelper">{this.props.message}</div>
  }
}
