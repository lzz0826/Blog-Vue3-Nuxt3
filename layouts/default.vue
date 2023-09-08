<template>
  <div>
    <header class="flex w-full justify-center px-8 xl:px-0">
      <nav class="flex w-full max-w-7xl items-center justify-between py-2">
        <div>
          <a aria-label="TailwindBlog" href="/">
            <div class="flex items-center justify-between">
              <div class="mr-3">
                <Icon class="h-12 w-12" name="logos:nuxt-icon" />
              </div>
              <div class="hidden h-6 text-2xl font-semibold text-gray-700 sm:block">
                Nuxt 3 Blog
              </div>
            </div>
          </a>
        </div>
        <div class="flex items-center text-base leading-5">
          <LanguageEditor/>
          <NuxtLink
              class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
              to="/articles"
            >
            {{ $t('articles')}}
            </NuxtLink>
          <div>
            <ClientOnly>
              <NavigationBarAvatarMenu v-if="userProfile?.id" />
              <NuxtLink
                v-else
                class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
                to="/login"
              >
              {{ $t('login')}}
              </NuxtLink>
            </ClientOnly>
          </div>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userProfile = computed(() => userStore.profile)
</script>

<!-- <template>
  <div class="bg-sky-100 py-2"> -->
<!-- <p class="px-6 py-4 text-2xl text-gray-700">這是預設的布局，全部頁面都會使用到</p> -->
<!-- <NuxtLink class="toIndex" to="/">前往 首頁</NuxtLink>
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template> -->

<!-- <style>

 .toIndex{
  background-color: aliceblue;
  text-align: center; /* 居中对齐 */
  color: red; /* 文字颜色为红色 */
  
 }
</style> -->
