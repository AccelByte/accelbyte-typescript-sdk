/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { ComponentUtils as CU } from '@od-shared/utils/ComponentUtils'
import { ChevronDown, Folder } from 'react-feather'
import './Input.scss'

export class Input extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { className, ...restProps } = this.props

    if (this.props.type === 'directory') return <DirectoryPicker {...this.props} />
    if (this.props.type === 'select') return <Select {...this.props} />
    if (this.props.type === 'textarea') return <TextArea {...this.props} />

    return (
      <input
        className={CU.groupClassNames({
          default: 'input',
          className
        })}
        {...restProps}
      />
    )
  }
}

class TextArea extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: this.props.value ?? ''
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  onChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: ev.target.value })
    if (this.props.onChange) this.props.onChange(ev)
  }

  render() {
    const { className, onChange, value, name, ...restProps } = this.props

    return (
      <textarea
        name={name}
        className={CU.groupClassNames({
          default: 'input',
          className
        })}
        value={this.state.value}
        onChange={this.onChange}
        {...restProps}
      />
    )
  }
}

class Select extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
      selected: this.findSelectedLabel()
    }
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.value !== this.props.value) {
      this.setState({ selected: this.findSelectedLabel() })
    }
  }

  findSelectedLabel = () => {
    return this.props.options?.find((option: any) => option.value === this.props?.value)?.label
  }

  toggleOption = (v?: boolean) => {
    // TODO: properly handle on blur without setTimeout
    setTimeout(() => this.setState({ isOpen: v !== undefined ? v : !this.state.isOpen }), 100)
  }

  handlerOnChange = (option: any) => {
    if (this.props.onChange) {
      this.props.onChange(option.value, this.props.name, this.props.index)
    }
  }

  render() {
    const { onChange, onClick, onBlur, className, readOnly, value, type, options, isIcon, isRow, ...restProps } = this.props
    return (
      <div>
        <div className="selectorInputContainer" onBlur={() => this.toggleOption(false)}>
          <div className="inputContainer">
            {isIcon && (
              <>
                <i className="absolute mr-6 cursor-pointer" onClick={() => this.toggleOption()}>
                  {this.state.selected}
                </i>
                <input
                  readOnly
                  className={CU.groupClassNames({
                    default: 'selectorInput',
                    className
                  })}
                  type="text"
                  onClick={() => this.toggleOption()}
                  {...restProps}
                />
              </>
            )}
            {!isIcon && (
              <input
                readOnly
                className={CU.groupClassNames({
                  default: 'selectorInput',
                  className
                })}
                type="text"
                value={this.state.selected ?? this.props?.placeholder?.label}
                onClick={() => this.toggleOption()}
                {...restProps}
              />
            )}
            <ChevronDown className="chevron" strokeWidth={1} size={'1em'} />
          </div>
        </div>
        <div
          className={CU.groupClassNames({
            default: `optionContainer z-10 ${isRow ? 'flex w-48 flex-row flex-wrap' : ''}`,
            open: this.state.isOpen ? 'open' : 'closed'
          })}>
          {this.props.placeholder && (
            <div
              key={`$placeholder-${this.props.placeholder.label}-${this.props.placeholder.value}`}
              className={CU.groupClassNames({
                default: 'placeholder'
              })}>
              {this.props.placeholder.label}
            </div>
          )}
          {this.props.options?.map((option: any, key: number) => (
            <div
              key={`${key}-${option.label}-${option.value}`}
              className={CU.groupClassNames({
                default: 'option',
                selected: this.props.value === option.value ? 'selected' : ''
              })}
              onClick={event => {
                event.stopPropagation()
                this.handlerOnChange(option)
              }}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

class DirectoryPicker extends React.Component<any, any> {
  componentDidMount() {
    this.props.onDirChangeSubscribe(this.onDirChangeCallback)
  }

  onDirChangeCallback = (dir: any) => {
    if (!dir.filePaths[0]) return
    if (this.props.onChange) this.props.onChange(dir.filePaths[0])
  }

  render() {
    const { onClick, className, readOnly, value, type, name, ...restProps } = this.props
    return (
      <div className="directoryPicker" onClick={this.props.onClick}>
        <input
          readOnly
          name={name}
          className={CU.groupClassNames({
            default: 'directoryPickerInput',
            className
          })}
          type="text"
          value={value}
          {...restProps}
        />
        <Folder className="folder" strokeWidth={1} size={'1em'} />
      </div>
    )
  }
}
