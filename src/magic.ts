import { Magic } from 'magic-sdk'

export const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY || '')

// declare global {
//   interface Window {
//     magic: Magic;
//   }
// }

// window.magic = magic;