/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const ProductKeyIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg className={'inline'} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
        <rect width="14" height="14" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8291 0.170854C14.057 0.39866 14.057 0.768006 13.8291 0.995812L12.629 2.19593C12.6615 2.21732 12.6923 2.2423 12.7208 2.27085L13.7844 3.3344C14.0691 3.61916 14.0691 4.08084 13.7844 4.3656L11.6573 6.49269C11.3725 6.77745 10.9108 6.77745 10.6261 6.49269L9.47917 5.34579L7.35372 7.47124C7.86426 8.15292 8.16667 8.99949 8.16667 9.91669C8.16667 12.1718 6.3385 14 4.08333 14C1.82817 14 0 12.1718 0 9.91669C0 7.66152 1.82817 5.83335 4.08333 5.83335C5.00052 5.83335 5.84709 6.13575 6.52876 6.64629L13.0042 0.170854C13.232 -0.0569515 13.6013 -0.0569515 13.8291 0.170854ZM10.3041 4.52083L11.1417 5.35838L12.65 3.85L11.8959 3.09581C11.8673 3.06726 11.8423 3.03648 11.8209 3.00403L10.3041 4.52083ZM4.08333 7.00002C2.4725 7.00002 1.16667 8.30585 1.16667 9.91669C1.16667 11.5275 2.4725 12.8334 4.08333 12.8334C5.69416 12.8334 7 11.5275 7 9.91669C7 8.30585 5.69416 7.00002 4.08333 7.00002Z"
          fill="white"
        />
      </g>
    </svg>
  </i>
)
