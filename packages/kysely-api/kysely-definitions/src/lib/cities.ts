import {
  Generated,
  Insertable,
  Selectable,
  Updateable
} from 'kysely';

export interface CitiesTable {
  id: Generated<number>;
  name: string;
}

export type Cities = Selectable<CitiesTable>;
export type CitiesInsert = Insertable<CitiesTable>;
export type CitiesUpdate = Updateable<CitiesTable>;
