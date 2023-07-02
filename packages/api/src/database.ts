import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

let sqlite: Database;
let db: BetterSQLite3Database;

if (typeof sqlite === 'undefined' || typeof db === 'undefined') {
  sqlite = new Database(process.env.NX_SQLITE_FILE);
  db = drizzle(sqlite);
}

migrate(db, { migrationsFolder: 'drizzle' });

export { db };
