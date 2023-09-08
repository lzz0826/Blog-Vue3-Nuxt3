

import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken';

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {


  const body = await readBody(event)
  const oauth2Client = new OAuth2Client()
  oauth2Client.setCredentials({ access_token: body.accessToken })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)

  oauth2Client.revokeCredentials()

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }



  const jwtTokenPayload = {
    id: userInfo.sub,
    nickname: userInfo.name,
    email: userInfo.email
  }

  const maxAge = 60 * 60 * 24 * 7
  const expires = Math.floor(Date.now() / 1000) + maxAge




  jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'foobar'
  }, 'secret');

  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  )

  setCookie(event, 'access_token', jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })

  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,

  }
})



// import { OAuth2Client } from 'google-auth-library'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const oauth2Client = new OAuth2Client()
//   oauth2Client.setCredentials({ access_token: body.accessToken })

//   const userInfo = await oauth2Client
//     .request({
//       url: 'https://www.googleapis.com/oauth2/v3/userinfo'
//     })
//     .then((response) => response.data)
//     .catch(() => null)

//   oauth2Client.revokeCredentials()

//   if (!userInfo) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Invalid token'
//     })
//   }

//   return {
//     id: userInfo.sub,
//     name: userInfo.name,
//     avatar: userInfo.picture,
//     email: userInfo.email,
//     emailVerified: userInfo.email_verified,
//   }
// })

// 驗證 Credential

// import { OAuth2Client } from 'google-auth-library'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const oauth2Client = new OAuth2Client()

//   const ticket = await oauth2Client.verifyIdToken({
//     idToken: body.credential,
//   })

//   const payload = ticket.getPayload()

//   if (!payload) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Invalid token'
//     })
//   }

//   return {
//     id: payload.sub,
//     name: payload.name,
//     avatar: payload.picture,
//     email: payload.email,
//     emailVerified: payload.email_verified
//   }
// })

// 驗證 Auth Code
// import { OAuth2Client } from 'google-auth-library'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const oauth2Client = new OAuth2Client({
//     clientId: '你的 Google Client ID',
//     clientSecret: '你的 Google Client Secret',
//     redirectUri: '你的 Google Redirect Uri'
//   })

//   let { tokens } = await oauth2Client.getToken(body.authCode)
//   client.setCredentials({ access_token: tokens.access_token })

//   const userInfo = await oauth2Client
//     .request({
//       url: 'https://www.googleapis.com/oauth2/v3/userinfo'
//     })
//     .then((response) => response.data)
//     .catch(() => null)

//   oauth2Client.revokeCredentials()

//   if (!userInfo) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Invalid token'
//     })
//   }

//   return {
//     id: userInfo.sub,
//     name: userInfo.name,
//     avatar: userInfo.picture,
//     email: userInfo.email,
//     emailVerified: userInfo.email_verified,
//   }
// })

