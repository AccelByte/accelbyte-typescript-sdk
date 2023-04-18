/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const SuccessFlatIcon = ({ className }: { className?: string }) => {
  return (
    <i className={className}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44 22C44 34.1502 34.1502 44 22 44C9.84984 44 0 34.1502 0 22C0 9.84984 9.84984 0 22 0C34.1502 0 44 9.84984 44 22Z"
          fill="#25AE88"
        />
        <path
          d="M33.4386 13.1992L19.3586 29.0392L10.5586 21.9992"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  )
}
