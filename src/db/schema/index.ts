import {
  mysqlTable,
  varchar,
  serial,
  timestamp,
  index,
  int,
} from 'drizzle-orm/mysql-core'

export const users = mysqlTable(
  'users',
  {
    id: int('id').primaryKey(),
    email: varchar('email', { length: 200 }),
    name: varchar('name', { length: 100 }),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (users) => ({
    emailIndex: index('email_idx').on(users.email),
  })
)
