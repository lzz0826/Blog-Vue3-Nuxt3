<template>
  <div class="m-4 bg-white">
    <!-- <p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p> -->
    <!-- ClientOnly #fallback可以在客戶端載入完成才接手 -->
    <ClientOnly>
      <template #header>
        <!-- <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p> -->
      </template>
      <template #default>
        <p class="px-6 pt-4 text-xl text-cyan-500">
          <!-- 被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot 中 -->
          <!-- NuxtLoadingIndicator  Nuxt3頁面載入進度元件 -->
          <NuxtLoadingIndicator />
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </p>
      </template>
      <template #footer>
        <!-- <p class="px-6 pt-4 text-xl text-blue-500">這段會放置在 footer 插槽</p> -->
      </template>
      <template #fallback>
        <p class="my-6 flex justify-center">[IronManWelcome] 載入中...</p>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>


const route = useRoute()
const title = ref('首頁')
//收尋最佳化
useHead({
  meta: [{ name: 'og:title', content: `${route.meta.title} | Nuxt 3 Blog` }],
  title,
  //會重<Title>標籤取得title
  // Nuxt 提供 <Title>、<Base>、<Script>、<NoScript>、<Style>、<Meta>、<Link>、<Body>、<Html> 和 <Head>，我們可以直接在元件中模板 (Template) 使用這些元件進行設定網頁的屬性及標籤。
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 Blog` : 'Nuxt 3 Blog'
  }
})


//全局語言 localStorage 存文
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const defaultLocaleCode = locale.value
if (process.client) {
  locale.value = localStorage.getItem('i18n-lang') ?? defaultLocaleCode
}
</script>




<style>
/* 頁面的轉場效果 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
