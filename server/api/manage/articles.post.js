import db from '@/server/db'

export default defineEventHandler(async (event) => {


  // event.context?.auth 使用了可选链操作符 ?.，这表示如果 event.context 存在并且具有 auth 属性，
  // 那么就获取 auth 属性的值，否则返回 undefined。
  const user = event.context?.auth?.user

  if (!user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const body = await readBody(event)

  const authorId = user.id

  const articleRecord = await db.article.createArticle({
    title: body.title,
    content: body.content,
    cover: body.cover,
    tags: body.tags,
    authorId
  })

  if (!articleRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Create article failed. Please try again later.'
    })
  }

  return articleRecord
})