import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  const jwtToken = getCookie(event, 'access_token')

  try {
    const { data: userInfo } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret)

    return {
      id: userInfo.id
    }
  } catch (e) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})

// 小提醒，如果是在伺服器端打 API，可以使用 useRequestHeaders 就可以從伺服器端訪問和代理 cookie 到 API。
//   <script setup>
//    const { data: userInfo } = await useFetch('/api/whoami', {
//     headers: useRequestHeaders(['cookie'])
//    })
//   </script>

