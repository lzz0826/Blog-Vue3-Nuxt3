export default defineEventHandler(async (event) => {
  // ...

  //取得 body
  const body = await readBody(event)

  let counter = getCookie(event, 'counter')



  setCookie(event, 'access_token', body.accessToken, {
    httpOnly: true,
    // maxAge,
    // expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })


  return counter + '_' + body.accessToken

  // ...
})


// export default defineEventHandler((event) => {
//     let counter = getCookie(event, 'counter')
  
//     counter = parseInt(counter, 10) || 0
//     counter += 1
  
//     setCookie(event, 'counter', counter)
  
//     return { counter }
//   })