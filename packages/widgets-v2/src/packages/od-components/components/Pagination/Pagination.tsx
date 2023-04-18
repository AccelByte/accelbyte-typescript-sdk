/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React, { Component } from 'react'
import { Trans } from 'react-i18next'
import { ArrowIcon, ArrowIconStyles } from '../Icons/ArrowIcon'
import { Link } from 'react-router-dom'
import styles from './Pagination.module.scss'

interface Props {
  next?: (() => void) | string | false
  prev?: (() => void) | string | false
}

const PaginationLinkWithString = ({ link, children, className }: { link: string; children: React.ReactNode; className?: string }) => (
  <Link className={classNames(className, 'paginationLink')} to={link}>
    {children}
  </Link>
)

const PaginationLinkWithCallback = ({
  callBack,
  children,
  className
}: {
  callBack?: (() => void) | false
  children: React.ReactNode
  className?: string
}) => (
  <a
    href="#"
    className={classNames(className, 'paginationLink', 'link', !callBack ? 'disabled' : '')}
    onClick={event => {
      event.preventDefault()
      if (callBack) callBack()
    }}>
    {children}
  </a>
)

const PaginationLink = ({
  linkOrCallback,
  children,
  className
}: {
  linkOrCallback?: string | (() => void) | false
  children: React.ReactNode
  className?: string
}) => {
  if (linkOrCallback === false) return null
  return (
    <React.Fragment>
      {typeof linkOrCallback === 'string' && (
        <PaginationLinkWithString link={linkOrCallback} className={className}>
          {children}
        </PaginationLinkWithString>
      )}
      {typeof linkOrCallback !== 'string' && (
        <PaginationLinkWithCallback callBack={linkOrCallback} className={className}>
          {children}
        </PaginationLinkWithCallback>
      )}
    </React.Fragment>
  )
}

export class Pagination extends Component<Props> {
  render() {
    return (
      <div className={classNames(styles.pagination, 'pagination')}>
        <PaginationLink linkOrCallback={this.props.prev} className="link-prev">
          <ArrowIcon className={classNames(ArrowIconStyles.left, 'arrowSize')} />
          <Trans i18nKey="Pagination.prev">Previous</Trans>
        </PaginationLink>
        <PaginationLink linkOrCallback={this.props.next} className="link-next">
          <Trans i18nKey="Pagination.next">Next</Trans>
          <ArrowIcon className={classNames(ArrowIconStyles.right, 'arrowSize')} />
        </PaginationLink>
      </div>
    )
  }
}
