// TODO: FIXME
import { Database } from 'packages/kysely-api/kysely-definitions/src';
// import { Database } from 'kysely-definitions';
import SQLite from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';

let sqlite: SQLite;
let db: Kysely<Database>;

if (typeof sqlite === 'undefined' || typeof db === 'undefined') {
  sqlite = new SQLite(process.env.NX_SQLITE_FILE);
  const dialect = new SqliteDialect({ database: sqlite });

  db = new Kysely<Database>({
    dialect,
  });
}

export { db };
