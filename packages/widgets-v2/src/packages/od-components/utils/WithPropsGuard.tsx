/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export type PropsGuardFeatures = Partial<{
  propsGuardRefresh: () => void
}>

export type WithoutPropsGuardFeature<T extends PropsGuardFeatures> = Omit<T, keyof PropsGuardFeatures>

function* Keygen() {
  const max = 10
  let key = 0
  while (true) {
    yield String(key)
    key = (key + 1) % max
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default function <P extends object & PropsGuardFeatures>(
  Component: React.ComponentType<P>,
  guard: (prevProps: WithoutPropsGuardFeature<P>, nextProps: WithoutPropsGuardFeature<P>) => boolean
): React.ComponentType<P> {
  type State = {
    key: string
    oldProps: WithoutPropsGuardFeature<P>
    keygen: IterableIterator<string>
  }

  class WithPropsGuardComponent extends React.Component<WithoutPropsGuardFeature<P>, State> {
    constructor(props: WithoutPropsGuardFeature<P>) {
      super(props)
      this.state = {
        keygen: Keygen(),
        oldProps: props,
        key: '1'
      }
    }

    static getDerivedStateFromProps(nextProps: WithoutPropsGuardFeature<P>, state: State) {
      if (guard(state.oldProps, nextProps)) {
        return {
          key: state.keygen.next().value,
          oldProps: nextProps
        }
      }
      return null
    }

    refresh = () => {
      this.setState({ key: this.state.keygen.next().value })
    }

    render() {
      return (
        <Component key={this.state.key} propsGuardRefresh={this.refresh} {...(this.props as P)}>
          {this.props.children}
        </Component>
      )
    }
  }

  // @ts-ignore
  return WithPropsGuardComponent
}
