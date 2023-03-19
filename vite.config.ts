import { fileURLToPath, URL } from 'node:url'

import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      dts: 'types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '~/': `${pathSrc}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        modifyVars: {
          'primary-color': '#1890ff',
          'font-size-base': '14px'
        },
        additionalData: `@use "@/assets/styles/element.scss" as *;`
      }
      // less: {
      //   additionalData: `@import "~/styles/variables.less";`,
      //   javascriptEnabled: true,
      // },
    }
  },
  build: {
    outDir: 'dist', //打包文件名称
    assetsDir: 'assets', //打包静态文件的存储地址
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'vxe-table': ['vxe-table'],
          echarts: ['echarts'],
          'vue-i18n': ['vue-i18n'],
          pinia: ['pinia'],
          'xe-utils': ['xe-utils']
        }
        // plugins: [dynamicImportVars()],
      }
    },
    chunkSizeWarningLimit: 1300,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: true
  },
  optimizeDeps: {
    include: [
      'element-plus/lib/locale/lang/zh-cn',
      'element-plus/lib/locale/lang/en',
      'vxe-table/lib/locale/lang/zh-CN',
      'vxe-table/lib/locale/lang/en-US'
    ]
  },

  server: {
    fs: {
      strict: true
    },
    // NOTE: ip和端口
    host: '0.0.0.0',
    port: 3600,
    strictPort: false, //端口严格模式，为true时，当端口被占用，不会继续尝试下一个能用的端口
    https: false, //https
    open: true, //自动打开窗口
    hmr: {
      overlay: true //hot更新
    },
    // NOTE: 本地调试代理
    proxy: {}
  }
})
