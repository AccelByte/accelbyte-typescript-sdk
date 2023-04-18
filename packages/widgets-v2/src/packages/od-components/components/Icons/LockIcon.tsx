/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const LockIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.84049 4.94835C7.43342 5.51373 7.29161 6.21095 7.29161 6.66649V8.5415H12.7083V6.66649C12.7083 6.21095 12.5665 5.51373 12.1594 4.94835C11.7753 4.41484 11.1296 3.95816 9.99995 3.95816C8.87031 3.95816 8.22462 4.41484 7.84049 4.94835ZM6.04161 6.66649V8.5415H5.83333C5.02792 8.5415 4.375 9.19442 4.375 9.99983V15.8332C4.375 16.6386 5.02792 17.2915 5.83333 17.2915H14.1667C14.9721 17.2915 15.625 16.6386 15.625 15.8332V9.99983C15.625 9.19442 14.9721 8.5415 14.1667 8.5415H13.9583V6.66649C13.9583 6.01092 13.7668 5.04148 13.1738 4.21797C12.5579 3.36259 11.537 2.70816 9.99995 2.70816C8.46291 2.70816 7.44194 3.36259 6.82607 4.21797C6.23314 5.04148 6.04161 6.01092 6.04161 6.66649ZM5.83333 9.7915C5.71827 9.7915 5.625 9.88477 5.625 9.99983V15.8332C5.625 15.9482 5.71827 16.0415 5.83333 16.0415H14.1667C14.2817 16.0415 14.375 15.9482 14.375 15.8332V9.99983C14.375 9.88477 14.2817 9.7915 14.1667 9.7915H5.83333ZM10.625 11.6665C10.625 11.3213 10.3452 11.0415 10 11.0415C9.65482 11.0415 9.375 11.3213 9.375 11.6665V14.1665C9.375 14.5117 9.65482 14.7915 10 14.7915C10.3452 14.7915 10.625 14.5117 10.625 14.1665V11.6665Z"
          fill="white"
        />
      </g>
    </svg>
  </i>
)