/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import * as React from 'react'

export class Changelog extends React.Component<{ changelog: { data: string; version: string } }, any> {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.props.changelog.data }}
        style={{
          padding: '10px',
          background: 'rgba(255,255,255,0.1)'
        }}
      />
    )
  }
}
