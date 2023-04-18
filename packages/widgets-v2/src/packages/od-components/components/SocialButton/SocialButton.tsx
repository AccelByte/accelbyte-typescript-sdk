/*
 *
 *  * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import classNames from 'classnames'
import React from 'react'
import Styles from './SocialButton.scss'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick?: () => void | null
  isLoading?: boolean
  isFullWidth?: boolean
  dataQa?: string | null
  dataQaProps?: string | null
  key?: string | number | undefined
  className: string
  children?: React.ReactNode
  buttonImage?: string
  isEnableContextMenu?: boolean
}

const defaultProps: Partial<ButtonProps> = {
  type: 'button',
  isLoading: false,
  isFullWidth: true,
  disabled: false,
  isEnableContextMenu: true
}

export const SocialButton = (recievedProps: ButtonProps) => {
  const props: ButtonProps = { ...defaultProps, ...recievedProps }
  // eslint-disable-next-line react/prop-types
  const { children, buttonImage, dataQa, dataQaProps, isFullWidth, className, isLoading, isEnableContextMenu, title, ...buttonProps } =
    props

  return (
    <button
      onContextMenu={e => {
        !isEnableContextMenu && e.preventDefault()
      }}
      {...buttonProps}
      className={classNames('buttonSocial', String(className).toLowerCase())}
      data-qa-id={dataQa}
      data-qa-props={dataQaProps}>
      {buttonImage && <img src={buttonImage} title={title} />}
      {isLoading ? <span className={Styles.loading} /> : children}
    </button>
  )
}
