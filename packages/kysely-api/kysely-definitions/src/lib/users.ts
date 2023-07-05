import {
  Generated,
  Insertable,
  Selectable,
  Updateable
} from 'kysely';

export interface UsersTable {
  id: Generated<number>;
  name: string;
  email: string;
  // TODO: Add FK to CitiesTable
  city_id: number | null;
}

export type Users = Selectable<UsersTable>;
export type UsersInsert = Insertable<UsersTable>;
export type UsersUpdate = Updateable<UsersTable>;
