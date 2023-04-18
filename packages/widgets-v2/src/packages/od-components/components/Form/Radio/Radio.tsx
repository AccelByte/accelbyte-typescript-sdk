/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './Radio.module.scss'

interface Props {
  checked?: boolean
  className?: string
  onClick?: () => void
  label: string
}

export const Radio = (props: Props) => (
  <div className={classNames(styles.radio, 'radio', props.className, props.checked && styles.checked)}>
    <button type="button" onClick={props.onClick} className={classNames(styles.radioButton, 'radioButton')} />
    <label>{props.label}</label>
  </div>
)

export const RadioGroup = ({ children }: { children: React.ReactNode }) => (
  <div className={classNames(styles.radioGroup, 'radioGroup')}>{children}</div>
)
