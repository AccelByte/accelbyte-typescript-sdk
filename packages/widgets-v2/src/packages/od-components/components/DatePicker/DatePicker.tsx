/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { parseISO } from 'date-fns'
import React from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ArrowIcon, ArrowIconStyles } from '../Icons/ArrowIcon'
import styles from './DatePicker.module.scss'

// TODO: Fix default import error on remix
// Workarround to fix default import on remix because remix transform our widget to cjs
// and return default import UI Library to object instead of function
const NextReactDatePicker = typeof ReactDatePicker === 'object' ? (ReactDatePicker as any).default : ReactDatePicker

export const DatePicker = (props: ReactDatePickerProps) => {
  return (
    <div className={styles.datePicker}>
      <NextReactDatePicker
        dateFormat={props.dateFormat}
        onChange={props.onChange}
        selected={props.value ? parseISO(props.value) : null}
        disabled={props.disabled ? props.disabled : false}
        placeholderText={props.placeholderText}
        maxDate={props.maxDate}
        minDate={props.minDate}
      />
      <ArrowIcon className={ArrowIconStyles.down} />
    </div>
  )
}
