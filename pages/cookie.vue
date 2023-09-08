<template>
    <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md">
        <div class="flex flex-col items-center">
          <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-gray-700">Cookie</h2>
        </div>
        <div class="mt-2 flex w-full max-w-md flex-col items-center">
          <button
            type="button"
            class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            @click="setNameCookie"
          >
            設置 name
          </button>
          <div class="mt-2 flex">
            <label class="text-lg font-semibold text-emerald-500">name:</label>
            <span class="ml-2 flex text-lg text-slate-700">{{ name }}</span>
          </div>
        </div>
        <div class="mt-2 flex w-full max-w-md flex-col items-center">
          <button
            type="button"
            class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            @click="setCounterCookie"
          >
            設置 counter
          </button>
          <div class="mt-2 flex">
            <label class="text-lg font-semibold text-emerald-500">counter:</label>
            <span class="ml-2 flex text-lg text-slate-700">{{ counter }}</span>
          </div>
        </div>
        <div class="mt-2 flex w-full max-w-md flex-col items-center">
          <button
            type="button"
            class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            @click="sendPostRequest"
          >
            設置 打API
          </button>
          <div class="mt-2 flex">
            <label class="text-lg font-semibold text-emerald-500">counter:</label>
            <span class="ml-2 flex text-lg text-slate-700">{{ counter }}</span>
          


          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>




  const name = useCookie('name')
  const counter = useCookie('counter', { maxAge: 60 })


  
  const setNameCookie = () => {
    name.value = 'Ryan'
  }
  
  const setCounterCookie = () => {
    counter.value = Math.round(Math.random() * 1000)
  }



  const sendPostRequest = async () => {
  try {
    const { data } = await useFetch('/api/coookie', {
      method: 'POST',
      initialCache: false,
      body: {
        accessToken: '123456'
      }
    });
    // 在这里可以处理从服务器返回的数据
    console.log('POST 请求成功', data);
    const dataSplit = data.value.split('_');
    console.log('accountToken', dataSplit[1]);


  } catch (error) {
    // 在这里可以处理请求失败的情况
    console.error('POST 请求失败', error);
  }
 }


  </script>