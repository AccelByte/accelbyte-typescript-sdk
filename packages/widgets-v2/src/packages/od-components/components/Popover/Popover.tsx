/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import { renderToString } from 'react-dom/server'
import './Popover.scss'

interface Props {
  tooltipRef: React.RefObject<HTMLDivElement>
  popoverPlacement?: string
  className?: string
  popoverEvent?: string
  popoverEventOff?: string
  children?: React.ReactNode
  hideMobile?: boolean
}

export const Popover = ({
  tooltipRef,
  popoverPlacement = 'right',
  className,
  popoverEvent = 'mouseenter',
  popoverEventOff = 'mouseleave',
  children,
  hideMobile = false
}: Props) => {
  if (!children) return null

  return (
    <div
      ref={tooltipRef}
      data-html={true}
      data-tip={React.isValidElement(children) ? renderToString(children) : children}
      data-place={popoverPlacement}
      data-type="none"
      data-class={classNames('popover popover-container', hideMobile && 'hide-mobile', className)}
      data-event={popoverEvent}
      data-event-off={popoverEventOff}
    />
  )
}
