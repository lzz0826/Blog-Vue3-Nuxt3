import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

// 在每個 Server API 收到請求，中間件只要有成功驗證並解析 JWT，就會在 event.context.auth 添加使用者資訊，
// 之後在 Server API 的處理函數中，就可以以下列程式碼進行使用。
// export default defineEventHandler(async (event) => {
//     const user = event.context?.auth?.user
//   })

export default defineEventHandler((event) => {
  const jwtToken = getCookie(event, 'access_token')

  if (!jwtToken) {
    return
  }

  let userInfo = null

  try {
    const { data } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret)

    userInfo = data
    if (userInfo?.id) {
      event.context.auth = {
        user: {
          id: userInfo.id
        }
      }
    }
  } catch (e) {
    console.error('Invalid token')
  }
})