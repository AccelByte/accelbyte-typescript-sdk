/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const OptionboxIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg className={'inline'} width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.867.4 14.2 3.067c.733.333 1.133 1 1.133 1.733v6.334c0 .8-.466 1.466-1.133 1.8L8.867 15.6c-.267.134-.534.2-.867.2-.267 0-.6-.066-.867-.2L1.8 12.934c-.733-.334-1.133-1.067-1.133-1.8V4.8c0-.733.4-1.4 1.066-1.733L7.067.4c.6-.266 1.266-.266 1.8 0ZM8 1.467c-.067 0-.2 0-.267.066L2.8 4 8 6.6 13.2 4 8.267 1.533C8.2 1.467 8.133 1.467 8 1.467ZM2.333 11.8A.795.795 0 0 1 2 11.2V5.067l5.333 2.666v6.534l-5-2.467Zm6.334 2.467L13.6 11.8c.267-.133.4-.333.4-.6V5.067L8.667 7.733v6.534Z"
        fill="#B5B5B5"
      />
      <mask
        id="a"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.867.4 14.2 3.067c.733.333 1.133 1 1.133 1.733v6.334c0 .8-.466 1.466-1.133 1.8L8.867 15.6c-.267.134-.534.2-.867.2-.267 0-.6-.066-.867-.2L1.8 12.934c-.733-.334-1.133-1.067-1.133-1.8V4.8c0-.733.4-1.4 1.066-1.733L7.067.4c.6-.266 1.266-.266 1.8 0ZM8 1.467c-.067 0-.2 0-.267.066L2.8 4 8 6.6 13.2 4 8.267 1.533C8.2 1.467 8.133 1.467 8 1.467ZM2.333 11.8A.795.795 0 0 1 2 11.2V5.067l5.333 2.666v6.534l-5-2.467Zm6.334 2.467L13.6 11.8c.267-.133.4-.333.4-.6V5.067L8.667 7.733v6.534Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0h16v16H0V0Z" fill="#B5B5B5" />
      </g>
    </svg>
  </i>
)
