/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Popover } from '../../Popover/Popover'
import { InputLabel } from '../InputLabel/InputLabel'
import styles from './InputGroup.module.scss'

export interface InputGroupProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {
  // An alternative way to render label.
  // This is especially useful when we want to generate label with character limits, so that
  // we can take advantage of the `maxLength` and `value` prop.
  label?: React.ReactNode
  value?: string
  beforeElement?: React.ReactNode
  afterElement?: React.ReactNode
  popoverContent?: React.ReactNode
  maxLength?: number
  dataQa?: string | null
}

interface State {
  isFocused: boolean
}

export class InputGroup extends React.Component<InputGroupProps, State> {
  tooltipRef = React.createRef<HTMLDivElement>()
  state: State = {
    isFocused: false
  }

  onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = this.props
    if (onFocus) onFocus(event)

    if (this.tooltipRef.current) {
      ReactTooltip.show(this.tooltipRef.current)
    }

    this.setState({ isFocused: true })
  }

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onBlur } = this.props
    if (onBlur) onBlur(event)

    if (this.tooltipRef.current) {
      ReactTooltip.hide(this.tooltipRef.current)
    }

    this.setState({ isFocused: false })
  }

  render() {
    const {
      className,
      dataQa,
      beforeElement,
      afterElement,
      popoverContent,
      maxLength,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      label,
      ...props
    } = this.props

    return (
      <>
        {label && (
          <InputLabel value={props.value} maxLength={maxLength}>
            {label}
          </InputLabel>
        )}

        <div
          className={classNames(
            className,
            'inputGroup',
            styles.inputGroup,
            this.state.isFocused && styles.focused,
            props.disabled && styles.disabled
          )}>
          {beforeElement || null}
          <input
            {...props}
            data-qa-id={dataQa}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={classNames(props.disabled && styles.isDisabled)}
            maxLength={maxLength}
          />
          {afterElement || null}
          <Popover tooltipRef={this.tooltipRef} hideMobile>
            {popoverContent}
          </Popover>
          <ReactTooltip />
        </div>
      </>
    )
  }
}
