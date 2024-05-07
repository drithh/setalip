import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from 'kysely';

export interface Database {
  auth_user: AuthUserTable;
  user_session: UserSessionTable;
}
export interface AuthUserTable {
  id: Generated<number>;
}

export type AuthUser = Selectable<AuthUserTable>;
export type NewAuthUser = Insertable<AuthUserTable>;
export type AuthUserUpdate = Updateable<AuthUserTable>;

export interface UserSessionTable {
  id: string;
  expires_at: Date;
  user_id: number;
}

export type UserSession = Selectable<UserSessionTable>;
export type NewUserSession = Insertable<UserSessionTable>;
export type UserSessionUpdate = Updateable<UserSessionTable>;
