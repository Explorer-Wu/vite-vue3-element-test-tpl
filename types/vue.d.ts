import Vue, { VNode, ComponentCustomProperties } from 'vue'
import * as lodash from 'lodash'

declare module 'vue/types/vue' {
  interface Vue {
    $loading: any
  }
}

declare global {
  // 全局变量设置
  const _Lo: typeof lodash
}

declare module '*.scss'
declare module '*.js'
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
