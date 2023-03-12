import { ComponentCustomProperties } from 'vue';
import * as lodash from 'lodash';
import {ElementPlus} from 'element-plus';
import { InstallOptions } from 'element-plus/lib/utils/config';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElementPlus<InstallOptions>;
    $notify: ElementPlus<InstallOptions>;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $loading: any;
  }
}

declare global { // 全局变量设置
  const _Lo: typeof lodash
}

declare module '*.scss';
declare module '*.js';