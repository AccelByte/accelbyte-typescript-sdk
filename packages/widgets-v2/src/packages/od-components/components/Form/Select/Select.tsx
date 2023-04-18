/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputLabel } from '@od-components/components/Form/InputLabel/InputLabel'
import classNames from 'classnames'
import React from 'react'
import { ChevronDown } from 'react-feather'
import ReactSelect, {
  components as ReactSelectComponents,
  DropdownIndicatorProps,
  OptionProps,
  Props as ReactSelectProps
} from 'react-select'
import Styles from './Select.module.scss'

export interface SelectOption {
  label: string
  value: string
}

const CustomDropdownIndicator = (props: DropdownIndicatorProps<any>) => {
  return (
    <ReactSelectComponents.DropdownIndicator {...props}>
      <ChevronDown className="icon" />
    </ReactSelectComponents.DropdownIndicator>
  )
}

export interface CustomOption<SelectOptionType = any> extends OptionProps<SelectOptionType> {
  dataQaProps?: string
}

const CustomOption = ({ dataQaProps, ...props }: CustomOption) => {
  return (
    <div data-qa-props={dataQaProps}>
      <ReactSelectComponents.Option {...props} />
    </div>
  )
}

export interface SelectProps<T> extends ReactSelectProps<T, ReactSelectProps['isMulti'] extends boolean ? true : false> {
  label?: React.ReactNode
  errorMessage?: string | null
  value?: T | null
  defaultValue?: T | null
  dataQa?: string | null
  isFullWidth?: boolean
}

export function Select<T = any>({ label, errorMessage, dataQa, isFullWidth, ...props }: SelectProps<T>) {
  return (
    <FormGroup
      className={classNames(Styles.selectContainer, { [Styles.error]: !!errorMessage, [Styles.fullWidth]: isFullWidth })}
      data-qa-id={dataQa}>
      {label && <InputLabel>{label}</InputLabel>}
      <ReactSelect
        {...props}
        components={{ DropdownIndicator: CustomDropdownIndicator, Option: CustomOption }}
        className={classNames('react-select-container', { [Styles.fullWidth]: isFullWidth })}
        classNamePrefix="react-select"
      />
      <FormGroupError>{errorMessage}</FormGroupError>
    </FormGroup>
  )
}
