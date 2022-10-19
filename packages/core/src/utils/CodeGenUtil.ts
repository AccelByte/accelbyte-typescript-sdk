/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export class CodeGenUtil {
  /**
   * Returns a hash code from a string
   * @param  {String} str The string to hash.
   * @return {Number} A 32bit integer
   * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
   */
  static hashCode(str: string): number {
    let hash = 0
    for (let i = 0, len = str.length; i < len; i++) {
      const chr = str.charCodeAt(i)
      hash = (hash << 5) - hash + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash
  }

  static getFormUrlEncodedData = (data: any): URLSearchParams => {
    const formPayload = new URLSearchParams()
    const formKeys = Object.keys(data) as []
    formKeys.forEach(key => {
      if (typeof data[key] !== 'undefined') formPayload.append(key, data[key])
    })
    return formPayload
  }
}
