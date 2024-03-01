import db from '@/db'

import { users } from '@/db/schema'

const userSelectFields = {
  id: users.id,
  email: users.email,
  name: users.name,
}

type UserSelectFields = keyof typeof userSelectFields

export type User = Pick<typeof users.$inferSelect, UserSelectFields>

export async function getUser() {
  const records = await db.select(userSelectFields).from(users).limit(1)

  return records.length ? records[0] : null
}
