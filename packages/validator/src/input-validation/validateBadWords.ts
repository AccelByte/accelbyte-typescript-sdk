/*
 * Copyright (c) 2020-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as naughtyWords from 'naughty-words'
import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import enExtra from './constant/badWords/en.json'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateBadWordsErrorType = z.enum([CommonValidationErrorType.enum.empty, CommonValidationErrorType.enum.containsBadWords])
export type ValidateBadWordsErrorType = z.infer<typeof ValidateBadWordsErrorType>

export interface ValidateBadWordsOptions {
  isRequired?: boolean
  matchingMode?: 'exact' | 'contain'
  languageCode?: Array<keyof typeof localizedBadWords> | keyof typeof localizedBadWords | '*'
}

const localizedBadWords = {
  ar: naughtyWords.ar,
  cs: naughtyWords.cs,
  da: naughtyWords.da,
  de: naughtyWords.de,
  en: naughtyWords.en.concat(enExtra),
  eo: naughtyWords.eo,
  es: naughtyWords.es,
  fa: naughtyWords.fa,
  fi: naughtyWords.fi,
  fil: naughtyWords.fil,
  fr: naughtyWords.fr,
  hi: naughtyWords.hi,
  hu: naughtyWords.hu,
  it: naughtyWords.it,
  ja: naughtyWords.ja,
  kab: naughtyWords.kab,
  ko: naughtyWords.ko,
  nl: naughtyWords.nl,
  no: naughtyWords.no,
  pl: naughtyWords.pl,
  pt: naughtyWords.pt,
  ru: naughtyWords.ru,
  sv: naughtyWords.sv,
  th: naughtyWords.th,
  tlh: naughtyWords.tlh,
  tr: naughtyWords.tr,
  zh: naughtyWords.zh
}

/**
 *
 * @param value
 * @param isRequired
 * @param languageCode (string "*") or ValidateBadWordsLanguageCode.keys or ValidateBadWordsLanguageCode.keys[]
 * @param matchingMode (string "exact" | "contain")
 * @default languageCode en
 * @default matchingMode contain
 */
export const validateBadWords = (
  value: string,
  { isRequired = true, languageCode = 'en', matchingMode = 'contain' }: ValidateBadWordsOptions = {}
) => {
  if (isEmpty(value) && isRequired) {
    return ValidateBadWordsErrorType.enum.empty
  }

  if (languageCode === '*') {
    const filteredBadWord = Object.values(localizedBadWords).find(badWords => isBadWord(badWords, value, matchingMode))
    if (!!filteredBadWord && !!filteredBadWord.length) {
      return ValidateBadWordsErrorType.enum.containsBadWords
    }
  } else if (Array.isArray(languageCode)) {
    const filteredBadWord = languageCode.find(code => isBadWord(localizedBadWords[code] || [], value, matchingMode))
    if (filteredBadWord) {
      return ValidateBadWordsErrorType.enum.containsBadWords
    }
  } else {
    if (isBadWord(localizedBadWords[languageCode] || [], value, matchingMode)) {
      return ValidateBadWordsErrorType.enum.containsBadWords
    }
  }
  return null
}

function isBadWord(badWords: string[], word: string, matchingMode: string) {
  const noRepeatedChar = word.replace(/[^\w\s]|(.)(?=\1)/gi, '').toLowerCase()
  const noSpecialChar = word.replace(/[^a-zA-Z0-9 :]/gi, '').toLowerCase()
  const lowerCase = word.toLowerCase()
  const words = [lowerCase, noRepeatedChar, noSpecialChar]
  return words.some(value => doesBadWordsContainWord(badWords, value, matchingMode))
}

function doesBadWordsContainWord(badWords: string[], word: string, matchingMode: string) {
  switch (matchingMode) {
    case 'exact':
      return badWords.includes(word)
    default:
      return badWords.includes(word) || badWords.some((badWord: string) => word.includes(badWord))
  }
}
