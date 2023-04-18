/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const CheckIcon = ({ className, width, height, fill }: { className?: string; width?: number; height?: number; fill?: string }) => (
  <i className={className}>
    <svg
      className={'inline'}
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill={fill || '#04705D'} />
      </mask>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99336 18.3246C14.5946 18.3246 18.3246 14.5946 18.3246 9.99336C18.3246 5.39214 14.5946 1.66211 9.99336 1.66211C5.39214 1.66211 1.66211 5.39214 1.66211 9.99336C1.66211 14.5946 5.39214 18.3246 9.99336 18.3246ZM14.6079 7.52489C14.852 7.28081 14.852 6.88508 14.6079 6.64101C14.3639 6.39693 13.9681 6.39693 13.724 6.64101L8.37275 11.9923L6.31122 9.5381C6.08921 9.27379 5.69497 9.23951 5.43066 9.46152C5.16636 9.68354 5.13207 10.0778 5.35409 10.3421L7.85409 13.3183C7.96676 13.4524 8.13055 13.5331 8.30556 13.5407C8.48057 13.5483 8.65073 13.4821 8.7746 13.3582L14.6079 7.52489Z"
          fill={fill || '#04705D'}
        />
      </g>
    </svg>
  </i>
)
