/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { LoadingPage } from '../LoadingPage'

interface Props {
  height: string
  url: string
  title: string
  className?: string
  id?: string
}

interface State {
  isLoading: boolean
  height: number
}

const iframeSandbox = ['allow-scripts', 'allow-same-origin', 'allow-forms', 'allow-popups', 'allow-top-navigation'].join(' ')

export class Iframe extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      height: 0
    }
  }

  onIframeLoaded = () => {
    this.setState({
      isLoading: false
    })
  }

  render() {
    const { isLoading } = this.state
    const { url, title, className, id, height } = this.props

    return (
      <>
        {isLoading && <LoadingPage />}
        <iframe
          id={id}
          style={{ border: 0 }}
          className={className}
          onLoad={this.onIframeLoaded}
          title={title}
          sandbox={iframeSandbox}
          src={url}
          width="100%"
          height={isLoading ? 0 : height}
        />
      </>
    )
  }
}
