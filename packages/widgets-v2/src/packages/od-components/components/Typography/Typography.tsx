/*
 *
 *  * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import classNames from 'classnames'
import React from 'react'
import Styles from './Typography.module.scss'

const PROP_TO_CLASSNAME = {
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  base: 'text-base',
  sm: 'text-sm',
  '2sm': 'text-2sm',
  xs: 'text-xs'
}

export interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'label'
  children: React.ReactNode
  fontSize?: keyof typeof PROP_TO_CLASSNAME
  isCentered?: boolean
  className?: string
  dataQa?: string | null
}

export function Typography({ tag: Tag, isCentered, fontSize = 'base', className, children, dataQa }: TypographyProps) {
  const isHeading = Tag.startsWith('h')
  const isParagraph = Tag === 'p'
  const isLabel = Tag === 'label'

  return (
    <Tag
      className={classNames(className, PROP_TO_CLASSNAME[fontSize], {
        [Styles.centered]: isCentered,
        [Styles.heading]: isHeading,
        [Styles.label]: isLabel,
        // Add the margins and stuff only if it's a paragraph or it's a heading.
        [Styles.typography]: isParagraph || isHeading
      })}
      data-qa-id={dataQa}>
      {children}
    </Tag>
  )
}
