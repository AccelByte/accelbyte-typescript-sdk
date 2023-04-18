/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const FacebookIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg
      width={32}
      height={32}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width={48} height={48} fill="url(#patternFacebook)" />
      <defs>
        <pattern id="patternFacebook" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <use xlinkHref="#image0_730_14034" transform="scale(0.00769231)" />
        </pattern>
        <image
          id="image0_730_14034"
          width={130}
          height={130}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABcRAAAXEQHKJvM/AAAJU0lEQVR4nO2dXWhcRRTHZ3eTtNt0u0lbWm+xdCs+qC0kBYsoxWzBl4LiFt/8wBREH/zaKsKCQlNF2BchBfvmR/Kg+FJIFPRJTV76UoUEKpUKbdZa15akzWap2+ZjV2Z7FreZO3fvx9y5M/eeHywbdnaTmzv/PXPmzMw5sUajQRAkHvk7gDRBISBNUAhIExQC0qQrrLfBKFSzhJAMPAYJIX3w8x7mzXymoWWGELJICJkihMyVi6k57ic0JRSzBqNQpZ2cbXsMMG8SSwVE0XyUi6kZ2f+zaLQVglGo0m/5MJHT8Z1oCWOCPsrF1GKH9yuHVkIwClVq2vOEkJxDEy+bSRDEmMLXeA9aCMEoVIfh2z/ENKoNtRRUDKOq+xXKCgHG/WGwACp/++0yTkVRLqamVLw45YQAAsjDI828QX/oTGRENUEoJQQYAkZCYgE6MQ6CUGLIUEIIMAMY1dAH8EoF/IeRoC8kUCHAMEBvwttMY7QoUX8oyOEiMCFA5G8sIsOAXU7BcCE9DhHIWoNRqFIr8DOKgIFaxikYKqUi1SLAUDARQV/AKdR3yMsMSEkTAqh8KqRTQr8YLxdTwzL+kBQhwLRwFEXgChp3yPntN/guBBDBl0wD4oRZurjmpxh8dRbBKUQReGfAbyfSN4tgFKrU0XmZaUC8UAHLIHz/gy8WASwBikA8abAMGdG/WbhFQJ9ACsJ9BqEWAUUgjZbP0CfqDwoTAjgyKAJ5DECIXghChgZQ5lwU4gT7dsVJemOMef18uU6WaoGs25wUsXopSggzCmwgFcqWZIw8s7+r9tjexI1H9yRW926L214XWVkjtb8W69fpz5fm6/G5hXr9Qrm+4/JCPXnlZoNcuVlnPuORo+ViasLLr/AsBKNQHQ3TMvILB7trrxzqWXpoZ3wn0yiAz88ulz749o7oxTY6rRz0ssnF0wEXWEoOhQjeP7Kh8tqhnp7uBEkS0nzoRBr8hazba3btLLatJGrNEw8kyO8nNlfeGOpJgwh0ZQjiN3KFEIZFpE+e2zh/5tVNJJ2MhcXJPeE22ORqaIAhQdvIIXUEf3xr0437++PbmUb9cTVEuLUI2pzgWU+bCLYyjeFgCAJ7jnAsBBiHtN1iFnIRtBh1GnV0JIS2wydaQn2CCIiAgO/mqJ+cWgRtTx/R2cHzB7vD6BPwyDuxCraFoLM1oH7BFy8lK0xDuHFkFZxYBG2twZvZnkqIpohOsG0VbAlBd2tAI4ZMQzSwbRXsWoScrtaALhxpHjH0iq2ppF0hBH5I0y3vPLXhlp5XLow9duIKHYUAUUQt4wa7++NkVzoWpZkCj45CsBNilnLSxg+efDBRk7WSuHS7cXPhVmOJaVjHxWv1zcyL/kOjjRmrZWo7Qsgxr2jCkf1d89Qw+HW1lVqj8tH3d3q+O7+aXKo1+gkh/cyb1CEHC4WmWArBKFS1dRIp+4yEb7OFT6eXKx//cEenezNsJYROPoK21oBy35aYL7uMvj63Mq+ZCCgDVkvUoRUCjR/4AR0O3j1zW1cHlNufXCHA9nRth4X9Bvdf88Tp6WXhO08lwt2nYHW3uB+KMj9dXFXZIewEt09RCA757W+dDQJJ805UoxAc8M9S45o2F8vHtF9NhQDeJWY3WUdtpXGbeVE/HFkE0zcjocC0b1EI0cP0aCIKIYKYOYw8IQg7d48oCdO/PCEwikFCBdO/PCHgjCHcdLYIItOxIMrC9DEjBDOzgYQOpo/NhIBEEBQC0gSFgDSx3KqmAp+9mLzwiBHf5PRSkt2xjYQQoTuUdvfHt599r7fENDjg9NTyjq/OrSh3zkJ5ITy+N7G8tTf2MNMQAF1x0rt3W7zXy1++vKDmMjYODZKh6fVUBIUgEZp/0Ycci0JAIUiklYRTRRghqFq7OAz8UlpTxSdj+pgRAuIff1yvO579yIInhKhlF5HCr3+uqbIDmqnzwBOC8FIxyN0M7orA9C9PCNxTs4g76GnpgNL4m8H0LwpBEterjX9VuRaz4/E8ITBeJeKN6T9WVxW5hdPMKxZCYBSDeIMW7lDkFpr2rakQwHR4WlxB7mXm6poqC02m1t5UCADjWSLuUejMpGm/WgnBVDmIcxQ6M1nhVZFFIUjg6mJ9WZFL4fapZXEvo1CdCzq1Hq+8XufPJciHT29gXvcC/Wa//k3N8WYXnyq7ueFYuZgyrbXRaRFkIujiXSrlI6Cnoc9eWmNe1whuDS6roYFYmRJEO2ataklbCgGKSuI0MhxwU+sRm8vQXHOCaIVlP9oRgqlzgWjFpNWwYEsIMO80jU8j2mA5LNgSAoBWQV9KdrYf2hICzD3RadQTW7U2nOxZ7GheEOWo8AJIXoQwhnsZtcP2l9e2EMDrRKugDxVfhEDuimEEfQVtyHeaMrbj5lyDtoW+IkTJrm/QwrEQ4A9gXEFt/K8WD2hbKDwCTLo5tuhKCBBtPMk0IEFTcVuVz/XZR3AcZ5kGJEiGnTiIQoQAaFsTMoRMwrYBV3gSAgwRx5kGRDYlr19Kz8fiy8UUDVqMMw2ILKhfkHM7JLQQlR8hj/5CYOR5W9SdIEQIoMYcrkVI55TTwBEPYRlT4JhcFsUgjfFyMSUsniM0dQ6YKJxJ+A/dkSz0PgvPoQRTmGNMAyKKWV7JPi/4kkwLxi0Ug3iaIvA6QzDDt6xqKAbh+CYC4nd6PRDDYXQgPTPupwiIjDyLsBKGswn30NmB6zUEu0hJuAmziQwGnRxzTPTsgIe0zKtU0eViitYSOsU0IuuhawcHRAWL7CA9BS8EQY7iUMFlkhbfEhE2dkIguZgh1jCIW97ugX4xjpeLKc8LSG4ILCk3DUmXi6ksTDGjbh1aViCw4wKBZ2eHcTAT0aVs6gscBStgmv9QFkqk6QdHknrHByIyXFALeLJcTGW87CoSiVL1GqiDBMPF4ZAKogKbfjOw51MZlKzy1gpCGYVqFg7UDDFv0ovW8bPRIBxBOyhd7q9NEBnYBTWsWSV7atXGZMYD3KJ83Ufy/6YXKoS8UajmQBDPMm9UgxKcHB8L2gF0ghZCaAecqwmjUO2DNYwcPAeZGHQaklVNyQ4EiUI7IbSAsXailS3MKFQHIUiVhecB5kNiqEBi6yl4zKg67jvBMgVvCBiEGAV97oPnFjwHtNRW02AROr31PGNWGCsMhF0IiE2w7iPSBIWANEEhIIQQQv4D8wEO4mJgh1EAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  </i>
)
