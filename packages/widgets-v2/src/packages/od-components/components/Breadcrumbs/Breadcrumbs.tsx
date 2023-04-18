/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import withPropsGuard from '../../utils/WithPropsGuard'
import styles from './Breadcrumbs.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
}

const BreadcrumbsSeparator = () => <span className={classNames(styles.breadcrumbsSeparator, 'breadcrumbsSeparator')}>&rsaquo;</span>

export const Breadcrumbs = withPropsGuard<Props>(
  (props: Props) => (
    <div className={classNames(styles.breadcrumbs, 'breadcrumb', props.className)}>
      {(React.Children.map(props.children, children => children) || []).reduce(
        (breadcrumbNodes: React.ReactNode[], node: React.ReactNode, index, source) => {
          breadcrumbNodes.push(node)
          if (index < source.length - 1) {
            breadcrumbNodes.push(<BreadcrumbsSeparator key={`separator-${index}`} />)
          }
          return breadcrumbNodes
        },
        []
      )}
    </div>
  ),
  (prevProps, nextProps) => nextProps.children !== prevProps.children
)
