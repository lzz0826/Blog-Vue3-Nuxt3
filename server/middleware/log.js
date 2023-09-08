
const runtimeConfig = useRuntimeConfig()
export default defineEventHandler((event) => {
    console.log('New request(印在終端): ' + event.req.url)

    const { apiSecret } = runtimeConfig
    console.log(`接收到了一個 Server API 請求: ${event.req.url}`)
    console.log(`執行時的環境變數 [apiSecret]: ${apiSecret}`)
    
    
  })