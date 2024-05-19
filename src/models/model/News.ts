import { TABLE_NAME } from '@/constants';
import { Model } from '@nozbe/watermelondb';

export default class News extends Model {
  static table = TABLE_NAME.NEWS;
}
