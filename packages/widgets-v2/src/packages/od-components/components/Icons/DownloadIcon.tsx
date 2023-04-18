/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const DownloadIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <mask id="a" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse">
        <path fill="#fff" d="M0 0H48V48H0z" />
      </mask>
      <g fill="#fff" fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
        <path d="M12.147 14.823a9.5 9.5 0 015.489.54 1.5 1.5 0 11-1.149 2.772 6.5 6.5 0 00-6.098 11.41 1.5 1.5 0 11-1.667 2.495 9.5 9.5 0 013.425-17.217zM36.658 16.804A8.495 8.495 0 0035 16.641a1.5 1.5 0 000 3 5.501 5.501 0 013.056 10.073 1.5 1.5 0 001.666 2.494 8.5 8.5 0 00-3.064-15.404z" />
        <path d="M30.39 8.58a11.5 11.5 0 014.889 11.806 1.5 1.5 0 11-2.942-.585 8.5 8.5 0 00-16.446-4.209 1.5 1.5 0 11-2.861-.9A11.5 11.5 0 0130.39 8.58zM24 41.5a1.5 1.5 0 001.5-1.5V22a1.5 1.5 0 00-3 0v18a1.5 1.5 0 001.5 1.5z" />
        <path d="M22.94 41.06a1.5 1.5 0 002.12 0l8-8a1.5 1.5 0 00-2.12-2.12L24 37.878l-6.94-6.94a1.5 1.5 0 00-2.12 2.122l8 8z" />
      </g>
    </svg>
  </i>
)
