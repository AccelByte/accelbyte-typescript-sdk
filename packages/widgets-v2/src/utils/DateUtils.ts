/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { getCurrentLanguage, I18N_DATE_LOCALES } from '@od-components/i18n'
import { format } from 'date-fns'

export class DateUtils {
  // Refer to https://momentjs.com.
  static formatWithNativeIntl(date: Date, lang: string, momentFormat: 'LL' | 'LLLL'): string {
    if (momentFormat === 'LL') {
      // Date, month, and year only.
      return Intl.DateTimeFormat(lang, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(date)
    }

    // Day, date, month, year, and time.
    const parts = Intl.DateTimeFormat(lang, {
      dateStyle: 'full',
      timeStyle: 'short'
    }).formatToParts(date)
    let prevSegment: Intl.DateTimeFormatPartTypes | undefined
    let dateString = ''

    for (const part of parts) {
      // We want to skip the "at" word separator between year and hour.
      if (part.type === 'literal' && prevSegment === 'year') {
        dateString += ' '
        continue
      }

      dateString += part.value
      prevSegment = part.type
    }

    return dateString
  }

  static formatDate(
    dateLike: Date | string | null | undefined,
    dateFormat:
      | {
          type: 'static'
          format: string
        }
      | {
          type: 'dynamic'
          format: 'LL' | 'LLLL'
        }
  ) {
    if (!dateLike) return ''

    const currentLanguage = getCurrentLanguage()
    const effectiveDate = dateLike instanceof Date ? dateLike : new Date(dateLike)

    if (dateFormat.type === 'dynamic') {
      return DateUtils.formatWithNativeIntl(effectiveDate, currentLanguage, dateFormat.format)
    }

    return format(effectiveDate, dateFormat.format, { locale: I18N_DATE_LOCALES[currentLanguage] })
  }
}
