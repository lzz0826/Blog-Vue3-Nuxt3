

import bcrypt from 'bcrypt'

// bcrypt 密码哈希

export default async function hashPassword(value, salt) {

    try {
      const hash = await bcrypt.hash(value, salt);
      return hash;
    } catch (err) {
      console.error('密码哈希失败', err);
      throw err; // 抛出错误以便调用者知道发生了错误
    }
  }
