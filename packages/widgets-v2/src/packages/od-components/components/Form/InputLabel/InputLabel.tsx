/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import './InputLabel.scss'

interface InputLabelProps {
  maxLength?: number
  children: React.ReactNode
  value?: string
}

// TODO: probably we can deprecate importing `InputLabel` directly.
// Now that I think of it, when we group `InputLabel` and `InputGroup` together,
// we can have optimize more on the ID. For example, in the private field of `InputGroup`
// we have `id: string`. This `id` will be used in `label.htmlFor` and `input.id`.
// That way, each label will be associated with an input.
export function InputLabel({ maxLength, value, children }: InputLabelProps) {
  return (
    <div className="input-label-wrapper">
      {children && <label className="inputLabel">{children}</label>}
      {!!maxLength && (
        <div className="input-counter">
          {value && value.length ? value.length : 0}/{maxLength}
        </div>
      )}
    </div>
  )
}
