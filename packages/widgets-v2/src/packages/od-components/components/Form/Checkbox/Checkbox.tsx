/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './Checkbox.module.scss'

interface Props {
  isChecked?: boolean
  className?: string
  isBgSlate?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  isLabelFirst?: boolean
  isDisabled?: boolean
  dataQa?: string | null
}

export const Checkbox = (props: Props): React.ReactElement => {
  const { className, isChecked, isLabelFirst, isDisabled, label, onChange, dataQa, isBgSlate } = props

  return (
    <label
      className={classNames(
        styles.checkbox,
        'checkbox',
        className,
        isChecked && styles.checked,
        isLabelFirst && styles.isLabelFirst,
        isDisabled && styles.disabled,
        isBgSlate && styles.slate // FIX.ME(Anggih), make it into className if that's possible
      )}>
      {label && isLabelFirst && <span>{label}</span>}
      <input
        type="checkbox"
        onChange={onChange}
        className={classNames(styles.checkboxButton, 'checkboxButton mr-2 px-0')}
        disabled={isDisabled}
        data-qa-id={dataQa}
      />
      {label && !isLabelFirst && <span>{label}</span>}
    </label>
  )
}
