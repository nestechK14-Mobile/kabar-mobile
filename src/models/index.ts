import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import migrations from './migration';
import User from './model/User';
import News from './model/News';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
});

const database = new Database({
  adapter,
  modelClasses: [User, News]
});

export { database };
