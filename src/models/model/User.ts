import { TABLE_NAME } from '@/constants';
import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class User extends Model {
  static table = TABLE_NAME.USER;

  // static associations = {
  //   user: { type: '', key: 'user_id' }
  // };

  @field('user_id') user_id;
  @field('user_name') user_name;
}
