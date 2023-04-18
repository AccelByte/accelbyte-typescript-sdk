/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './FormGroup.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
}

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  orientation?: 'vertical' | 'horizontal'
}

export const FormGroupStyles = {
  pseudoMarginBottom: styles.formGroupMarginBottom
}

export const Form = ({ className, children, orientation = 'vertical', ...props }: FormProps) => (
  <form className={classNames(styles[orientation], className)} {...props}>
    {children}
  </form>
)

interface FormGroupProps extends Props {
  hasError?: boolean
}

export const FormGroup = (props: FormGroupProps) => (
  <div className={classNames('formGroup', styles.formGroup, props.className, props.hasError ? 'hasError' : undefined)}>
    {props.children}
  </div>
)

export const FormGroupError = (props: Props) =>
  props.children ? <span className={classNames('formGroupError', styles.formGroupError, props.className)}>{props.children}</span> : null

export const FormGroupInfo = (props: Props) =>
  props.children ? <span className={classNames('formGroupInfo', styles.formGroupInfo, props.className)}>{props.children}</span> : null
