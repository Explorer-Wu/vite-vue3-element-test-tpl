declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'jsencrypt' {
  export class JSEncrypt {
    constructor();
    setPublicKey(pk: string): void;
    encrypt(key: string): string;
  }
}

declare module '*.gif' {
  export const gif: any
}