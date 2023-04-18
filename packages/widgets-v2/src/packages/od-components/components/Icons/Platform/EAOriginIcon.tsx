/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import * as React from 'react'

export const EAOriginIcon = ({ className }: { className?: string }) => (
  <i className={classNames('inline-block h-8 w-8 rounded-full bg-white', className)}>
    <svg width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30.0005C6.72891 30.0005 0 23.2715 0 15.0005C0 6.72942 6.72891 0.000488281 15 0.000488281C23.2709 0.000488281 30 6.72946 30 15.0005C30 23.2715 23.271 30.0005 15 30.0005ZM17.5388 9.19863H9.06161L7.77538 11.2656H16.2429L17.5388 9.19863ZM19.2713 9.21835L14.0889 17.4702H8.34054L9.66676 15.4014H13.1121L14.4282 13.3337H6.46315L5.14733 15.4014H7.03421L4.41624 19.5318H15.3419L19.3774 13.1678L20.8488 15.4014H19.522L18.2656 17.4702H22.1944L23.5587 19.5318H26.0649L19.2713 9.21835Z"
        fill="#FF4747"
      />
    </svg>
  </i>
)
