<template>
  <div>
    <ClientOnly>
      <div class="mx-6 mb-4 bg-white py-24">
        <div class="flex flex-col items-center">
          <h1 id="wellcome" class="text-4xl font-semibold text-gray-800">
            {{ $t('wellcome')}}
            {{ userProfile.nickname ? userProfile.nickname : $t('loginUser') }}
          </h1>
          <div class="my-4 flex space-x-4">
            <!-- <h1>首頁</h1> -->
            <!-- <NuxtLink to="/login">前往 login</NuxtLink>
            <NuxtLink to="/cookie">前往 cookie</NuxtLink>
            <NuxtLink to="/whoami">前往 whoami</NuxtLink> -->
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>

</template>


<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userProfile = computed(() => userStore.profile)
</script>


<style scoped>
#wellcome{
  color: darkgray;
}
</style>





