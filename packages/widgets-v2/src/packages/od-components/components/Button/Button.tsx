/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import { InlineLoader } from '../InlineLoader/InlineLoader'
import { Spinner, SpinnerStyle } from '../Spinner/Spinner'
import './Button.scss'

type LoadingIndicator = 'INLINE' | 'SPINNER'

export enum ButtonType {
  // Flat: button with background and border.
  FLAT = 'flat',
  // Outlined: button with border, on hover will add background color.
  OUTLINED = 'outlined',
  // Text: button with nothing, but on hover will add background color.
  TEXT = 'text',
  // Plain: button with nothing, on hover will change the text color.
  PLAIN = 'plain'
}

export enum ButtonFontSize {
  EXTRA_SMALL = 'extraSmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRA_LARGE = 'extraLarge'
}

export enum ButtonStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_WHITE = 'primaryWhite',
  WHITE = 'white',
  DARK = 'dark',
  TEXT = 'text',
  NONE = ''
}

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonType?: ButtonType
  buttonFontSize?: ButtonFontSize
  buttonStyle?: ButtonStyle
  isLoading?: boolean
  loadingIndicator?: LoadingIndicator
  dataQa?: string | null
  isFullWidth?: boolean
  hasOutline?: boolean
}

const getButtonClassNames = (buttonType: ButtonType, buttonStyle: ButtonStyle, buttonSize: ButtonFontSize | undefined) => {
  return `${buttonType} ${buttonSize ?? ''} ${buttonStyle}`
}

const renderLoadingIndicator = (loadingIndicator: LoadingIndicator | undefined) => {
  switch (loadingIndicator) {
    case 'INLINE':
      return <InlineLoader />
    case 'SPINNER':
      return <Spinner className={classNames(SpinnerStyle.inline, 'mr-3')} />
    default:
      return <InlineLoader />
  }
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    isFullWidth,
    hasOutline = true,
    buttonType = ButtonType.FLAT,
    buttonFontSize,
    buttonStyle = ButtonStyle.PRIMARY,
    className,
    isLoading,
    loadingIndicator,
    disabled,
    dataQa,
    ...buttonProps
  } = props

  const isButtonDisabled = disabled || isLoading

  return (
    <button
      className={classNames('button', className, getButtonClassNames(buttonType, buttonStyle, buttonFontSize), {
        hasOutline,
        fullWidth: isFullWidth,
        disabled: isButtonDisabled
      })}
      data-qa-id={dataQa}
      disabled={isButtonDisabled}
      {...buttonProps}>
      {isLoading && renderLoadingIndicator(loadingIndicator)}
      {children}
    </button>
  )
}

export const FlatLoginAppButton = (props: ButtonProps) => {
  return <Button buttonType={ButtonType.FLAT} buttonFontSize={ButtonFontSize.MEDIUM} {...props} />
}

export const TextLoginAppButton = (props: ButtonProps) => {
  return <Button buttonType={ButtonType.TEXT} buttonStyle={ButtonStyle.SECONDARY} buttonFontSize={ButtonFontSize.EXTRA_SMALL} {...props} />
}

export const PlainPrimaryLoginAppButton = (props: ButtonProps) => {
  return <Button buttonType={ButtonType.PLAIN} buttonStyle={ButtonStyle.PRIMARY} buttonFontSize={ButtonFontSize.EXTRA_SMALL} {...props} />
}

export const PlainSecondaryLoginAppButton = (props: ButtonProps) => {
  return <Button buttonType={ButtonType.PLAIN} buttonStyle={ButtonStyle.SECONDARY} buttonFontSize={ButtonFontSize.EXTRA_SMALL} {...props} />
}
