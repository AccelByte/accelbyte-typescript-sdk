/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { ReactNode, useRef, useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
// TODO: consider to use https://popper.js.org/react-popper/v2/
// to letting the library to handle the popper creation
import { createPopper, Placement, Options } from '@popperjs/core'
import { ComponentUtils as CU } from '@od-shared/utils/ComponentUtils'
import './Dropdown.scss'

export interface DropdownItem {
  link?: string
  onClick?: () => void
  label: any
  key?: any
  hide?: boolean
}

export interface DropdownProps {
  dropdownList: DropdownItem[] | null
  icon?: ReactNode
  label: ReactNode
  className?: string
  isDisabled?: boolean
  placement?: Placement
  popperOptions?: Options
}

// ts-prune-ignore-next
export const Dropdown = ({ dropdownList, icon, label, className, isDisabled, placement, popperOptions }: DropdownProps) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState<boolean>(false)
  const buttonDropdownRef = useRef<HTMLButtonElement>(null)
  const popoverDropdownRef = useRef<HTMLUListElement>(null)

  const handleCreatePopper = () => {
    if (!buttonDropdownRef.current || !popoverDropdownRef.current) return

    createPopper(buttonDropdownRef.current, popoverDropdownRef.current, {
      placement,
      ...(popperOptions ?? {})
    })
  }

  const toggleDropdownPopover = (isOpen: boolean) => {
    if (isOpen) {
      handleCreatePopper()
    }

    setDropdownPopoverShow(isOpen)
  }

  const handlerOnClick = (itemOnClick: (() => void) | undefined) => () => {
    if (itemOnClick) itemOnClick()
    closeDropdownPopover()
  }

  const closeDropdownPopover = () => {
    setTimeout(() => toggleDropdownPopover(false), 250)
  }

  return (
    <div className={classNames(className, 'dropdown')}>
      <div className="dropdownContainer">
        <button
          ref={buttonDropdownRef}
          disabled={isDisabled || !dropdownList}
          className={CU.groupClassNames({
            default: 'dropdownLabel',
            disable: `${isDisabled || !dropdownList ? 'opacity:50' : ''}`
          })}
          onClick={() => !isDisabled && toggleDropdownPopover(!dropdownPopoverShow)}
          onBlur={() => !isDisabled && closeDropdownPopover()}>
          {icon && <span className="icon">{icon}</span>}
          <div className="label">{label}</div>
          <div className="arrow">
            <ChevronDown size="1em" />
          </div>
        </button>
        <ul
          ref={popoverDropdownRef}
          className={classNames('dropdownList z-50', {
            hidden: !dropdownPopoverShow
          })}>
          {dropdownList &&
            dropdownList.map((item, index) => {
              if (item.hide) return <></>
              return (
                <li key={`${item.label}-${index}`} className="item">
                  {item.link && <Link to={item.link}>{item.label}</Link>}
                  {!item.link && (
                    <span onClick={handlerOnClick(item.onClick)} className="nonLink">
                      {item.label}
                    </span>
                  )}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}
