/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */
/* eslint-disable no-unused-vars */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.styl' {
  const classes: { [key: string]: string }
  export default classes
}

/* CSS */
declare module '*.css'
declare module '*.scss'
declare module '*.less'
declare module '*.styl'

/* IMAGES */
declare module '*.svg'
declare module '*.bmp'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.ico'
