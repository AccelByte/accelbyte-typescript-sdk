/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const ErrorFetchingIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.5" y="10.5" width="59" height="59" rx="3.5" stroke="#8DBAFF" strokeDasharray="4 1" />
      <rect x="16" y="52" width="48" height="12" rx="2" fill="#0B6CFF" />
      <circle cx="20.7999" cy="58.0001" r="2.4" fill="white" />
      <path d="M28 58H59.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="34" width="48" height="12" rx="2" fill="#0B6CFF" />
      <circle cx="20.7999" cy="40.0001" r="2.4" fill="white" />
      <path d="M28 40H59.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="16" width="48" height="12" rx="2" fill="#8DBAFF" />
      <circle cx="10.7999" cy="22.0001" r="2.4" fill="white" />
      <path d="M18 22H49.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="10" r="8" fill="white" />
      <mask id="mask0_4958_65601" maskUnits="userSpaceOnUse" x="60" y="0" width="20" height="20">
        <rect x="60" width="20" height="20" fill="#AC1616" />
      </mask>
      <g mask="url(#mask0_4958_65601)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.9998 18.3332C74.6022 18.3332 78.3332 14.6022 78.3332 9.99984C78.3332 5.39746 74.6022 1.6665 69.9998 1.6665C65.3975 1.6665 61.6665 5.39746 61.6665 9.99984C61.6665 14.6022 65.3975 18.3332 69.9998 18.3332ZM66.2246 6.22456C66.4686 5.98048 66.8644 5.98048 67.1084 6.22456L70 9.11612L72.8916 6.22456C73.1356 5.98048 73.5314 5.98048 73.7754 6.22456C74.0195 6.46864 74.0195 6.86437 73.7754 7.10845L70.8839 10L73.7751 12.8912C74.0192 13.1353 74.0192 13.531 73.7751 13.7751C73.531 14.0192 73.1353 14.0192 72.8912 13.7751L70 10.8839L67.1088 13.7751C66.8647 14.0192 66.469 14.0192 66.2249 13.7751C65.9808 13.531 65.9808 13.1353 66.2249 12.8912L69.1161 10L66.2246 7.10845C65.9805 6.86437 65.9805 6.46864 66.2246 6.22456Z"
          fill="#AC1616"
        />
      </g>
    </svg>
  </i>
)
