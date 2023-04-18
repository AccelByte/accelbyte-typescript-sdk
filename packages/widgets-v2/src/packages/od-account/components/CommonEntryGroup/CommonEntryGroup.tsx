/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './CommonEntryGroup.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
}

export const CommonEntryGroup = (props: Props) => (
  <div className={classNames(props.className, styles.commonEntryGroup, 'commonEntryGroup')}>{props.children}</div>
)

interface LabelProps extends React.LabelHTMLAttributes<any>, Props {
  children?: React.ReactNode
}

export const CommonEntryGroupLabel = (props: LabelProps) => (
  <label {...props} className={classNames(props.className, styles.commonEntryGroupLabel, 'commonEntryGroupLabel')}>
    {props.children}
  </label>
)

export const CommonEntryGroupInput = (props: Props) => (
  <div className={classNames(props.className, styles.commonEntryGroupInput, 'commonEntryGroupInput')}>{props.children}</div>
)
