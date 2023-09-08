nuxt-app/
├── .nuxt/                  # Nuxt 3 构建生成的临时文件和编译结果
├── .output/                # Nuxt 3 静态输出目录
├── assets/                 # 静态资源文件，如样式、图片等
├── components/             # Vue 组件文件
├── composables/            # Vue Composition API 的可复用逻辑
├── content/                # 存放内容数据，如 Markdown 文件 (@nuxt/content 模块)
├── layouts/                # 页面布局文件
├── middleware/             # 中间件文件，用于在页面渲染前执行逻辑
├── node_modules/           # 项目依赖的 Node.js 模块
├── pages/                  # 页面组件文件
├── plugins/                # Vue 插件文件，用于应用启动前的初始化
├── public/                 # 不需要编译的静态文件，直接拷贝到输出目录
└── server/                 # 服务器端代码目录
    ├── api/                 # API 逻辑
    ├── routes/              # 路由配置
    └── middleware/          # 服务器端中间件
├── .gitignore              # Git 版本控制的忽略文件
├── .nuxtignore             # Nuxt 3 忽略的目录和文件列表
├── app.config.ts           # 应用配置文件
├── app.vue                 # Vue 根组件，应用的入口
├── nuxt.config.ts          # Nuxt 3 配置文件
├── package.json            # 项目依赖和脚本配置文件
└── tsconfig.json           # TypeScript 配置文件，如果使用 TypeScript
├── locales/                * i18n
│   ├── en.json
│   └── zh.json

｜＿stores/                  #pinia

｜＿.env                     #建立環境變數

｜＿app.config.ts 


處理依賴異常
rm -rf node_modules
npm cache clean --force
npm install

查依賴版本
npm show @nuxtjs/i18n version  
查依賴路徑
npm list @nuxtjs/i18n     


建立nuxt專案
npx nuxi init nuxt-app


安裝 Nuxt 3 專案的相關依賴套件
cd nuxt-app
npm install

啟動
npm run dev -- -0
npm run dev -- --https

打包
npm run build
node .output/server/index.mjs
靜態打包
npm run generate


安裝 Vue 類型檢查套件
npm install -D vue-tsc

安裝 Vue vue-gtag-next
npm install vue-gtag-next


安裝 Prettier 套件
npm install -D prettier eslint-config-prettier eslint-plugin-prettier


安裝 ESLint 套件
npm install -D eslint @nuxtjs/eslint-config-typescript eslint-plugin-vue


安裝相關套件 Nuxt Tailwind 模組
npm install -D @nuxtjs/tailwindcss
npx tailwindcss init


安裝Tailwind x Prettier
npm install -D prettier-plugin-tailwindcss


安裝相關套件Tailwind CSS
npm install -D tailwindcss postcss@latest postcss-custom-properties@latest autoprefixer@latest


安裝pinia
npm install -D pinia @pinia/nuxt --force

安裝Pinia 持久化插件 - Pinia Plugin Persistedstate
npm install -D pinia-plugin-persistedstate --force


安裝 vue3-google-login。
npm install -D vue3-google-login

安裝 google-auth-library
npm install -D google-auth-library


安裝 jsonwebtoken
npm install jsonwebtoken

-----   安裝Prisma ------
npm install -D prisma @prisma/client

始化一個 Prisma 的 Schema
npx prisma init

初始化 更新 資料庫
npx prisma db push


啟動一個 Web Bd 服務
npx prisma studio

產生 Prisma Client
npx prisma generate


----

安裝 bcrypt 加密密码的常用库
npm install bcrypt


https://element.eleme.io/#/zh-CN/component/date-picker
安裝element-plus UI
npm install element-plus
npm install @element-plus/icons-vue


安裝 @headlessui/vue
npm install -D @headlessui/vue

安裝 @nuxtjs/i18n@next
npm install @nuxtjs/i18n@8.0.0-rc.4

安裝@nuxt/test-utils-edge vitest
npm install -D @nuxt/test-utils-edge vitest






 nuxt-icon https://icon-sets.iconify.design/material-symbols/avg-time/

如果你有興趣想看看 Nuxt 自動產生出來的路由配置長什麼樣子，可以使用 npm run build 或 npx nuxt build 來建構出 .output 目錄，並打開 .output/server/chunks/app/server.mjs，搜尋 const _routes = 或剛剛建立的檔案名稱 about.vue，就可以找到