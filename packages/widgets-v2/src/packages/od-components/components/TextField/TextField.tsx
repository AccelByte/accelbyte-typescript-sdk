/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import './TextField.scss'

// Dev's note(try.ajitiono): this is only used in Editor
// and a single use in Desktop. Maybe we should move this to the components in the Editor instead
// and make the Desktop one use the `InputGroup` stuff?
export class TextField extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value ?? ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value })
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.props.limit || this.props.limit >= e.target.value?.length) {
      this.setState({ value: e.target.value })
      if (this.props.onChange) this.props.onChange(e)
    }
  }

  render() {
    const { value, icon, type, onChange, className, ...props } = this.props
    return (
      <div className={classNames(`textFieldContainer ${className}`)}>
        <input type={type} value={this.state.value} {...props} onChange={this.onChange} className="textField" />
        {icon}
      </div>
    )
  }
}
