import MySql from 'mysql2'

import { drizzle } from 'drizzle-orm/mysql2'
// import { migrate } from 'drizzle-orm/mysql2/migrator'

const connection = MySql.createConnection(process.env.DATABASE_URL || '')

const db = drizzle(connection)

// migrate(db, { migrationsFolder: 'drizzle' })

export default db
