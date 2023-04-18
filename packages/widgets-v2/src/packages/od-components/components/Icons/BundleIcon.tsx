/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const BundleIcon = ({ className, color = 'rgb(var(--od-rgba-text))' }: { className?: string; color?: string }) => (
  <i className={className}>
    <svg className={'inline'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill={color} />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          // tslint:disable-next-line:max-line-length
          d="M13.096 4.80002C13.148 4.80002 13.148 4.85336 13.148 4.85336C13.2 4.96002 13.2 5.01336 13.2 5.06669V12.5334C13.2 13.44 12.524 14.1334 11.64 14.1334H4.36005C3.47605 14.1334 2.80005 13.44 2.80005 12.5334V5.06669V4.85336C2.85205 4.85336 2.85205 4.80002 2.85205 4.80002C2.90405 4.80002 2.90405 4.74669 2.90405 4.74669L4.46405 2.61336C4.56805 2.45336 4.72405 2.40002 4.88005 2.40002H11.12C11.276 2.40002 11.432 2.45336 11.484 2.61336L13.044 4.74669C13.096 4.74669 13.096 4.80002 13.096 4.80002ZM10.8601 3.4667H5.14006L4.36006 4.53337H11.6401L10.8601 3.4667ZM11.64 13.0667H4.36001C4.04801 13.0667 3.84001 12.8534 3.84001 12.5334V5.60002H12.16V12.5334C12.16 12.8534 11.952 13.0667 11.64 13.0667ZM7.99997 9.8667C9.45597 9.8667 10.6 8.69337 10.6 7.20003C10.6 6.88003 10.392 6.6667 10.08 6.6667C9.76797 6.6667 9.55997 6.88003 9.55997 7.20003C9.55997 8.1067 8.88397 8.80003 7.99997 8.80003C7.11597 8.80003 6.43997 8.1067 6.43997 7.20003C6.43997 6.88003 6.23197 6.6667 5.91997 6.6667C5.60797 6.6667 5.39997 6.88003 5.39997 7.20003C5.39997 8.69337 6.54397 9.8667 7.99997 9.8667Z"
          fill={color}
        />
      </g>
    </svg>
  </i>
)
